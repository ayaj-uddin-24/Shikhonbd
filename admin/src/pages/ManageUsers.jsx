import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../contexts/BlogContext";
import { url } from "../App";
import { toast } from "react-toastify";
import axios from "axios";

const ManageUsers = () => {
  const { users } = useContext(BlogContext);

  const removeUser = async (id) => {
    try {
      const { data } = await axios.delete(`${url}/api/user/remove-user/${id}`);

      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-5">
      <Link
        to="/add-user"
        className="bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Add User
      </Link>

      <p className="text-3xl font-semibold text-center py-10">Manage Users</p>

      {users ? (
        <table className="w-full border-collapse border text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((user) => {
                  return (
                    <tr className="border" key={user._id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => {
                            if (confirm("Do you want to remove the user?")) {
                              removeUser(user._id);
                            }
                          }}
                          className="bg-red-800 px-2 py-1 text-white font-semibold rounded-md text-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      ) : (
        "No Users Available"
      )}
    </div>
  );
};

export default ManageUsers;
