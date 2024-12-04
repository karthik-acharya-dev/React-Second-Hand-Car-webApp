import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 lg:px-14">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © 2024 Happy Cars Kundapura. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
