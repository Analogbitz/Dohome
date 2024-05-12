'use client'
import React, { useState } from "react";

function Navbar() {

    const [isClick, setisClick] = useState(false);
    const toggleNavbar =()=>{
        setisClick(!isClick)
    }

  return (
    <div>
      <nav className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                 <p>Logo</p>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Pricing
                </a>
                <a
                  href="/product"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Product
                </a>
                <a
                  href="/about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-white 
              hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>
                {isClick ? (
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-white hover:bg-white block hover:text-black rounded-lg p-2"
                >
                  Pricing
                </a>
                <a
                  href="/product"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Product
                </a>
                <a
                  href="/about"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </a>
                </div>
            </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
