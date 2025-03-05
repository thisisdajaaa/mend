import React, { useState } from "react";

const NavItem = ({ title, hasDropdown }) => {
  return (
    <div className="relative group px-3 py-2">
      <button className="flex items-center text-gray-700 font-medium">
        {title}
        {hasDropdown && (
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-2 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-blue-900 font-bold text-2xl flex items-center">
            <img
              src="https://www.mend.io/wp-content/uploads/2024/07/Mend-io-logo-color-32px-2.svg"
              className="w-full h-auto"
            />
          </div>

          <div className="ml-10 space-x-1 hidden md:flex">
            <NavItem title="Platform" hasDropdown={true} />
            <NavItem title="Solutions" hasDropdown={true} />
            <div className="px-3 py-2">
              <a href="#" className="text-gray-700 font-medium">
                Pricing
              </a>
            </div>
            <NavItem title="Company" hasDropdown={true} />
            <NavItem title="Resources" hasDropdown={true} />
          </div>
        </div>

        <div className="hidden md:block">
          <button className="bg-blue-900 text-white px-4 py-2 rounded font-medium">
            Schedule a Demo
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 px-2 pt-2 pb-4 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700"
          >
            Platform
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700"
          >
            Solutions
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700"
          >
            Company
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-gray-700"
          >
            Resources
          </a>
          <button className="mt-2 w-full bg-blue-900 text-white px-4 py-2 rounded font-medium">
            Schedule a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
