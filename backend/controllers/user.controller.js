import User from "../models/user.model.js";

// Add a new user
export const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists!" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();

    res.status(201).json({ success: true, message: "User added", newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove a user
export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userCount = await User.countDocuments();

    if (userCount <= 1) {
      return res.status(400).json({
        success: false,
        message: "At least one user must remain in the system.",
      });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    res
      .status(200)
      .json({ success: true, message: "User removed successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get all users
export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (
      email === process.env.ADMIN_MAIL &&
      password === process.env.ADMIN_PASS
    ) {
      return res
        .status(201)
        .json({
          success: true,
          message: "User Login Successful",
          user: {
            email: process.env.ADMIN_MAIL,
            password: process.env.ADMIN_PASS,
          },
        });
    } else if (email === user.email && password === user.password) {
      return res
        .status(201)
        .json({ success: true, message: "User Login Successful", user });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Credintials" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
