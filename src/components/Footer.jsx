import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-1 border-t  shadow md:flex md:items-center md:justify-between md:align-center bg-black  border-black">
      <div className="w-full mx-auto container p-1 md:flex md:items-center md:justify-between">
        <span className="text-lg text-white sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <Link to="/" className="hover:underline">
            Hakan™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-lg text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/policy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/licensing" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
