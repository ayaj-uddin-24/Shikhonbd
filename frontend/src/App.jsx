import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CategoryPosts from "./pages/CategoryPosts";
import Post from "./pages/Post";
export const url = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPosts />} />
        <Route path="/post/:title" element={<Post />} />
      </Routes>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white w-10 h-10 text-2xl rounded-full shadow-lg hover:bg-blue-700 transition-opacity duration-300"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
      <Footer />
    </div>
  );
};

export default App;
