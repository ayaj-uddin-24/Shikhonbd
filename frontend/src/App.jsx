import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CategoryPosts from "./pages/CategoryPosts";
import Post from "./pages/Post";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JobPage from "./pages/JobPage";
import EducationPage from "./pages/EducationPage";
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
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:category" element={<CategoryPosts />} />
        <Route path="/post/:title" element={<Post />} />
        <Route path="/চাকরির খবর" element={<JobPage />} />
        <Route path="/শিক্ষাক্রম" element={<EducationPage />} />
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
