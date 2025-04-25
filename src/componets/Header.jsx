import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 border-b-2">
      <div className="flex items-center space-x-2">
        <img src="./src/assets/Radheapp_Logo.svg" alt="Logo" className="h-10 w-100%" />
      </div>

      <ul className="hidden md:flex space-x-12 text-black font-medium text-xl">
        <li className="hover:text-green-500 cursor-pointer">Products</li>
        <li className="hover:text-green-500 cursor-pointer">Industries</li>
        <li className="hover:text-green-500 cursor-pointer">Services</li>
        <li className="hover:text-green-500 cursor-pointer">Portfolio</li>
        <li className="hover:text-green-500 cursor-pointer">Resources</li>
        <li className="hover:text-green-500 cursor-pointer">Live Demos</li>
      </ul>

      <button className="bg-lime-400 hover:bg-lime-500 transition-colors duration-200 text-black font-semibold px-4 py-2 rounded-full flex items-center space-x-2">
        <span>Get In Touch</span>
        <span className="text-lg">➜</span>
      </button>
    </nav>
    </div>
  );
};

export default Header;
