import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <img src="/shikhon.png" className="w-12" alt="Shikhonbd Logo" />
            <p className="text-lg font-semibold">ShikhonBD</p>
          </div>
          <ul
            className="flex space-x-4 mt-4 md:mt-0 list-none"
            aria-label="Footer navigation"
          >
            <li>
              <Link
                to="/about-us"
                className="hover:text-blue-400"
                aria-label="About Us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="hover:text-blue-400"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-blue-400"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:text-blue-400"
                aria-label="Terms and Conditions"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-4" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ShikhonBD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
