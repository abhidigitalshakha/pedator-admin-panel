import React from "react";
import icon from "../assets/images/appLogoMobileView.png"

const PediatorLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Logo or Icon */}
      <div className="relative">
        <div className="w-24 h-24 border-4 border-[#108e88] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          {/* <span className="text-[#108e88] text-2xl font-bold">P</span> */}
          <img src={icon} alt="" className="w-16 h-16" />
        </div>
      </div>
      
      {/* Loading Text */}
      <p className="mt-4 text-lg text-[#108e88] font-semibold animate-pulse">
        Loading Pediator...
      </p>
    </div>
  );
};

export default PediatorLoader;
