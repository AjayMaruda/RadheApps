import React, { memo } from "react";
import CaseStudy from "./CaseStudy";
import { Link } from "react-router-dom"


const Header = memo(() => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 border-b-2">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = "/"}>
          <img src="/src/assets/Radheapp_Logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium text-lg">
          <li className="relative group cursor-pointer">
            <span className="hover:text-lime-600 transition duration-200">Products</span>
            <div className="absolute left-0 mt-1 w-96 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block overflow-hidden">
              <div className="px-6 py-4 relative flex justify-between gap-x-16 gap-y-5">
                <div>
                  <Link to={"/blockChain"} className="block p-5 rounded-lg hover:bg-gray-100">
                    <h6 className="font-bold text-gray-700">RA Blockchain</h6>
                    <p className="text-xs text-gray-500 relative">Powering Next-Gen Blockchain Innovation</p>
                  </Link>
                  <a href="/studio" className="block p-5 rounded-lg hover:bg-gray-100">
                    <h6 className="font-bold text-gray-700">RA Studio</h6>
                    <p className="text-xs text-gray-500 relative">Crafting Premium Digital Experiences</p>
                  </a>
                  <a href="/apps" className="block p-5 rounded-lg hover:bg-gray-100">
                    <h6 className="font-bold text-gray-700">RA Apps</h6>
                    <p className="text-xs text-gray-500 relative">AI-Powered App Builder Platform</p>
                  </a>
                  <a href="/ai-tech" className="block p-5 rounded-lg hover:bg-gray-100">
                    <h6 className="font-bold text-gray-700">RA AI Tech</h6>
                    <p className="text-xs text-gray-500 relative">Transforming Businesses with Custom AI Solutions</p>
                  </a>
                  <a href="/design" className="block p-5 rounded-lg hover:bg-gray-100">
                    <h6 className="font-bold text-gray-700">RA design</h6>
                    <p className="text-xs text-gray-500 relative">Taking designs from Zero to One</p>
                  </a>
                </div>
                <div>
                 
                  {/* Add more product links here if needed */}
                </div>
              </div>
            </div>
          </li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-lime-500 transition duration-200">Industries</span>
            <div className="absolute left-0 mt-1 w-96 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block overflow-hidden">
            <div className="px-6 py-4 relative flex justify-between gap-x-16 gap-y-5">
              <div>
              <Link to={'/foodChain'} className="block p-5 rounded-lg hover:bg-gray-100">
              <h6  className="font-bold text-gray-700 ">Food Chain</h6>
              </Link>
              <a href="/industries/finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Finance</a>
              <a href="/industries/retail" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Retail</a>
              {/* Add more industries */}
              </div>
            </div>
            </div>
          </li>
          <li className="relative group cursor-pointer">
            <span className="hover:text-lime-500 transition duration-200">Services</span>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md hidden group-hover:block">
              <a href="/services/development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Development</a>
              <a href="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consulting</a>
              <a href="/services/design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Design</a>
          
            </div>
          </li>
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="cursor-pointer hover:text-lime-500 transition duration-200">
            <a href="/CaseStudy">Case Studies</a>
          </li>
        </ul>

        <a href="/contact" className="bg-lime-400 hover:bg-lime-500 hover:shadow-xl transition duration-200 text-black font-semibold px-6 py-3 rounded-full flex items-center space-x-2">
          <span>Get In Touch</span>
          <span className="text-lg">➜</span>
        </a>
      </nav>
    </div>
  );
});

export default Header;  