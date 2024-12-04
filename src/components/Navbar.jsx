import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 ">
      <div className="max-w-7xl mx-auto px-3 lg:px-12 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-blue-600">
          <p className="uppercase font-bold tracking-wide bg-gradient-to-r from-emerald-600 to-sky-600 text-center bg-clip-text text-transparent">
            Happy Cars Kundapura
          </p>
        </h1>
        <ul className="hidden lg:flex space-x-6">
          {["Home", "Cars", "Gallery", "About Us", "Contact Us"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase().replace(/\s+/g, "-")}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-800 font-bold hover:text-blue-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button className="lg:hidden text-gray-800" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-300 shadow-md p-4 absolute top-16 left-0 w-full">
          <ul className="flex flex-col space-y-4">
            {[
              "Home",
              "Cars",
              "Gallery",
              "About Us",
              "Contact Us",
              "Login",
              "Sign Up",
              "Enquire",
            ].map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase().replace(/\s+/g, "-")}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-800 font-bold hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
