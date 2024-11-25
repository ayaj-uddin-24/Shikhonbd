import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPass,
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

// Login a user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password!" });
    }

    res.status(200).json({ success: true, message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
