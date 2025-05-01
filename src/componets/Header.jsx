import React, { memo } from "react";
import { Link } from "react-router-dom";

const ProductLink = ({ to, title, description }) => (
  <Link to={to} className="block p-4 rounded-lg hover:bg-gray-100">
    <h6 className="font-bold text-gray-700">{title}</h6>
    <p className="text-xs text-gray-500">{description}</p>
  </Link>
);

const Header = memo(() => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 border-b-2">
        {/* Logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => window.location.href = "/"}
        >
          <img src="/src/assets/Radheapp_Logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium text-lg">
          {/* Products Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-lime-600 transition duration-200">Products</span>
            <div className="absolute left-0 mt-1 w-96 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block overflow-hidden">
              <div className="px-6 py-4 relative flex justify-between gap-x-16 gap-y-5">
                <div>
                  <ProductLink 
                    to="/blockChain" 
                    title="RA Blockchain" 
                    description="Powering Next-Gen Blockchain Innovation" 
                  />
                  <ProductLink 
                    to="/studio" 
                    title="RA Studio" 
                    description="Crafting Premium Digital Experiences" 
                  />
                  <ProductLink 
                    to="/apps" 
                    title="RA Apps" 
                    description="AI-Powered App Builder Platform" 
                  />
                  <ProductLink 
                    to="/ai-tech" 
                    title="RA AI Tech" 
                    description="Transforming Businesses with Custom AI Solutions" 
                  />
                  <ProductLink 
                    to="/design" 
                    title="RA design" 
                    description="Taking designs from Zero to One" 
                  />
                </div>
              </div>
            </div>
          </li>

          {/* Industries Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-lime-500 transition duration-200">Industries</span>
            <div className="absolute left-0 mt-1 w-96 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block overflow-hidden">
              <div className="px-6 py-4 relative flex justify-between gap-x-16 gap-y-5">
                <div>
                  <Link to="/foodChain" className="block p-5 rounded-lg hover:bg-gray-100">
                    <h6 className="font-bold text-gray-700">Food Chain</h6>
                  </Link>
                  <a href="/industries/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finance</a>
                  <a href="/industries/retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Retail</a>
                </div>
              </div>
            </div>
          </li>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer">
            <span className="hover:text-lime-500 transition duration-200">Services</span>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block">
              <a href="/services/development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Development</a>
              <a href="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consulting</a>
              <a href="/services/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design</a>
            </div>
          </li>

          {/* Regular Links */}
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/CaseStudy">Case Studies</a>
          </li>
        </ul>

        {/* CTA Button */}
        <a 
          href="/contact" 
          className="bg-lime-400 hover:bg-lime-500 hover:shadow-xl transition duration-200 text-black font-semibold px-6 py-3 rounded-full flex items-center space-x-2"
        >
          <span>Get In Touch</span>
          <span className="text-lg">➜</span>
        </a>
      </nav>
    </div>
  );
});

export default Header;