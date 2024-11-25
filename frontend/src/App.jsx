import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CategoryPosts from "./pages/CategoryPosts";
import Post from "./pages/Post";
export const url = "https://shikhonbd-backend.onrender.com";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPosts />} />
        <Route path="/post/:title" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
