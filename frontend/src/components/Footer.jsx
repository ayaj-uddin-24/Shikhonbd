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
            <p className="text-lg font-semibold">Shikhonbd</p>
          </div>
          <ul className="flex space-x-4 mt-4 md:mt-0 list-none">
            <li>
              <Link to="/about-us" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-blue-400">
                Terms and Condition
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
