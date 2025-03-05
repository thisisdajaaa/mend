import React from "react";
import Dashboard from "./Dashboard";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col md:flex-row">
      <div className="md:w-1/2 space-y-6 pr-0 md:pr-10 mb-10 md:mb-0">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Proactively <span className="block md:inline">manage</span>
          <span className="block">application risk</span>
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          Mend.io equips your dev and security teams with tools to build a
          mature AppSec program, reducing risk and boosting security.
        </p>
        <div className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="bg-blue-900 text-white px-6 py-3 rounded text-center font-medium"
          >
            Book a live demo
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center text-blue-900 font-medium"
          >
            Take a tour
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="md:w-1/2">
        <Dashboard />
      </div>
    </div>
  );
};

export default Hero;
