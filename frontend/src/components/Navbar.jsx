import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [jobMenuVisible, setJobMenuVisible] = useState(false);
  const [jobSubmenuVisible, setJobSubmenuVisible] = useState(false);

  return (
    <nav className="flex items-center justify-between py-2 font-medium px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] shadow">
      {/* Navbar logo */}
      <Link to="/" className="text-2xl font-semibold">
        <img src="/shikhon.png" className="w-20 h-16" alt="Logo" />
      </Link>

      {/* Navbar menu for larger screens */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>হোম</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>

        {/* Job menu with dropdown for larger screens */}
        <li className="flex flex-col items-center relative">
          <button
            onClick={() => setJobMenuVisible(!jobMenuVisible)}
            className="flex items-center gap-2"
          >
            <p>চাকরি</p>
            <IoMdArrowDropdown
              size={20}
              className={`${jobMenuVisible ? "rotate-180" : ""}`}
            />
          </button>
          {jobMenuVisible && (
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-50">
              <NavLink
                to="/সরকারি চাকরি"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                সরকারি চাকরি
              </NavLink>
              <NavLink
                to="/বেসরকারি চাকরি"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                বেসরকারি চাকরি
              </NavLink>
              <NavLink
                to="/ব্যাংক চাকরি"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                ব্যাংক চাকরি
              </NavLink>
            </ul>
          )}
        </li>

        <NavLink to="/শিক্ষাক্রম" className="flex flex-col items-center gap-1">
          <p>শিক্ষাক্রম</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="/বিজ্ঞান" className="flex flex-col items-center gap-1">
          <p>বিজ্ঞান</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink to="/প্রযুক্তি" className="flex flex-col items-center gap-1">
          <p>প্রযুক্তি</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
      </ul>

      {/* Navbar menu icon for smaller screens */}
      <button
        aria-label="Open menu"
        onClick={() => setVisible(true)}
        className="sm:hidden"
      >
        <img src="/menu_icon.png" alt="menu icon" className="w-5" />
      </button>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-slate-100 z-50 transition-transform duration-300 w-64 transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={() => setVisible(false)}
          className="p-3 inline-flex gap-3 items-center"
        >
          <img
            src="/dropdown_icon.png"
            alt="back icon"
            className="h-4 rotate-180"
          />
          <span>Back</span>
        </button>

        {/* Sidebar navigation items */}
        <div className="flex flex-col">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            হোম
          </NavLink>
          {/* Job submenu for mobile */}
          <div className="mt-4">
            <button
              onClick={() => setJobSubmenuVisible(!jobSubmenuVisible)}
              className="flex justify-center gap-3 items-center w-full px-6 py-4 text-gray-700"
            >
              <span>চাকরি</span>
              <IoMdArrowDropdown
                size={20}
                className={`${jobSubmenuVisible ? "rotate-180" : ""}`}
              />
            </button>
            {jobSubmenuVisible && (
              <div className="space-y-2 text-center">
                <NavLink
                  to="/সরকারি চাকরি"
                  onClick={() => setVisible(false)}
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                >
                  সরকারি চাকরি
                </NavLink>
                <NavLink
                  to="/বেসরকারি চাকরি"
                  onClick={() => setVisible(false)}
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                >
                  বেসরকারি চাকরি
                </NavLink>
                <NavLink
                  to="/ব্যাংক চাকরি"
                  onClick={() => setVisible(false)}
                  className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                >
                  ব্যাংক চাকরি
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/শিক্ষাক্রম"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            শিক্ষাক্রম
          </NavLink>
          <NavLink
            to="/বিজ্ঞান"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            বিজ্ঞান
          </NavLink>
          <NavLink
            to="/প্রযুক্তি"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            প্রযুক্তি
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
