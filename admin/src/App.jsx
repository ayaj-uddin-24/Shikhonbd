import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
export const url = "http://localhost:8000";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";
import { BlogContext } from "./contexts/BlogContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ManagePosts from "./pages/ManagePosts";
import ManageUsers from "./pages/ManageUsers";
import AddPost from "./pages/AddPost";
import UpdatePost from "./pages/UpdatePost";
import AddUser from "./pages/AddUser";

const App = () => {
  const { user } = useContext(BlogContext);
  return (
    <div>
      {user ? <Navbar /> : <></>}
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route
          path="/manage-posts"
          element={user ? <ManagePosts /> : <Navigate to="/" />}
        />
        <Route
          path="/manage-users"
          element={user ? <ManageUsers /> : <Navigate to="/" />}
        />
        <Route
          path="/add-post"
          element={user ? <AddPost /> : <Navigate to="/" />}
        />
        <Route
          path="/add-user"
          element={user ? <AddUser /> : <Navigate to="/" />}
        />
        <Route
          path="/update-post/:id"
          element={user ? <UpdatePost /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
