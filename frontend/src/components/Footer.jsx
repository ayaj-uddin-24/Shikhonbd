import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <img src="/shikhon.png" className="w-12" alt="" />
            <h2 className="text-lg font-semibold">Shikhonbd</h2>
          </div>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/শিক্ষাক্রম" className="hover:text-blue-400">
                Education
              </Link>
            </li>
            <li>
              <Link to="/বিজ্ঞান" href="#" className="hover:text-blue-400">
                Science
              </Link>
            </li>
            <li>
              <Link to="/প্রযুক্তি" href="#" className="hover:text-blue-400">
                Technology
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-4"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Shikhonbd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
