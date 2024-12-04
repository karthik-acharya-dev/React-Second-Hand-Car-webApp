import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaCar, FaImages, FaInfoCircle, FaPhone } from "react-icons/fa";

const FooterButtonSection = () => {
  const buttons = [
    { name: "Home", icon: <FaHome /> },
    { name: "Cars", icon: <FaCar /> },
    { name: "Gallery", icon: <FaImages /> },
    { name: "About Us", icon: <FaInfoCircle /> },
    { name: "Contact Us", icon: <FaPhone /> },
  ];

  return (
    <div
      id="footer_view"
      className="fixed bottom-0 w-full bg-gray-900 shadow-t-md z-50 sm:hidden md:hidden lg:hidden rounded-t-2xl "
    >
      <div className="flex justify-around py-2 ">
        {buttons.map((button) => (
          <Link
            key={button.name}
            to={button.name.toLowerCase().replace(/\s+/g, "-")}
            smooth={true}
            duration={500}
            className="flex flex-col items-center text-gray-100 text-2xl font-bold hover:text-emerald-500 w-10 py-2"
          >
            {button.icon}
            {/* <span>{button.name}</span> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterButtonSection;
