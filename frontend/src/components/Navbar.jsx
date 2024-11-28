import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    job: false,
    curriculum: false,
    mobileJob: false,
    mobileCurriculum: false,
  });

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      job: false,
      curriculum: false,
      mobileJob: false,
      mobileCurriculum: false,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="flex items-center justify-between py-2 px-5 sm:px-[5vw] lg:px-[9vw] shadow font-medium">
      {/* Logo */}
      <Link to="/" className="text-2xl font-semibold">
        <img src="/shikhon.png" className="w-20 h-16" alt="Logo" />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }`
          }
        >
          হোম
        </NavLink>

        {/* Job dropdown menu */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("job")}
            className="flex items-center gap-2"
          >
            <p>চাকরি</p>
            <IoMdArrowDropdown
              size={20}
              className={`${dropdowns.job ? "rotate-180" : ""}`}
            />
          </button>
          {dropdowns.job && (
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-50">
              {[
                { to: "/সরকারি চাকরি", text: "সরকারি চাকরি" },
                { to: "/বেসরকারি চাকরি", text: "বেসরকারি চাকরি" },
                { to: "/ব্যাংক চাকরি", text: "ব্যাংক চাকরি" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {item.text}
                </NavLink>
              ))}
            </ul>
          )}
        </li>

        {/* Curriculum dropdown menu */}
        <li className="relative">
          <button
            onClick={() => toggleDropdown("curriculum")}
            className="flex items-center gap-2"
          >
            <p>শিক্ষাক্রম</p>
            <IoMdArrowDropdown
              size={20}
              className={`${dropdowns.curriculum ? "rotate-180" : ""}`}
            />
          </button>
          {dropdowns.curriculum && (
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-50">
              {[
                { to: "/Job Solution", text: "Job Solution" },
                { to: "/Academic Solution", text: "Academic Solution" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  {item.text}
                </NavLink>
              ))}
            </ul>
          )}
        </li>

        <NavLink
          to="/বিজ্ঞান"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }`
          }
        >
          বিজ্ঞান
        </NavLink>
        <NavLink
          to="/প্রযুক্তি"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }`
          }
        >
          প্রযুক্তি
        </NavLink>
      </ul>

      {/* Mobile menu button */}
      <button onClick={() => setVisible(!visible)} className="sm:hidden">
        <img src="/menu_icon.png" alt="Menu Icon" className="w-5" />
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-slate-100 z-50 transition-transform transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setVisible(false)}
          className="p-3 flex items-center gap-3"
        >
          <img
            src="/dropdown_icon.png"
            alt="Close"
            className="h-4 rotate-180"
          />
          <span>Back</span>
        </button>
        <div className="flex flex-col">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="border p-6"
          >
            হোম
          </NavLink>

          {/* Mobile Job Submenu */}
          <div className="text-left">
            <button
              onClick={() => toggleDropdown("mobileJob")}
              className="flex justify-between items-center px-6 py-4 bg-gray-100"
            >
              <span>চাকরি</span>
              <IoMdArrowDropdown
                size={20}
                className={`${dropdowns.mobileJob ? "rotate-180" : ""}`}
              />
            </button>
            {dropdowns.mobileJob && (
              <div className="bg-white border-t mx-2 rounded-md">
                {[
                  { to: "/সরকারি চাকরি", text: "সরকারি চাকরি" },
                  { to: "/বেসরকারি চাকরি", text: "বেসরকারি চাকরি" },
                  { to: "/ব্যাংক চাকরি", text: "ব্যাংক চাকরি" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setVisible(false)}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Curriculum Submenu */}
          <div className="text-left">
            <button
              onClick={() => toggleDropdown("mobileCurriculum")}
              className="flex justify-between items-center px-6 py-4 bg-gray-100"
            >
              <span>শিক্ষাক্রম</span>
              <IoMdArrowDropdown
                size={20}
                className={`${dropdowns.mobileCurriculum ? "rotate-180" : ""}`}
              />
            </button>
            {dropdowns.mobileCurriculum && (
              <div className="bg-white border-t mx-2 rounded-md">
                {[
                  { to: "/Job Solution", text: "Job Solution" },
                  { to: "/Academic Solution", text: "Academic Solution" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setVisible(false)}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {item.text}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/বিজ্ঞান"
            onClick={() => setVisible(false)}
            className="border p-6"
          >
            বিজ্ঞান
          </NavLink>
          <NavLink
            to="/প্রযুক্তি"
            onClick={() => setVisible(false)}
            className="border p-6"
          >
            প্রযুক্তি
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
