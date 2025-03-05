import React, { useState } from "react";
import navbarLogo from "../assets/images/appLogoMobileView.png";
import AnimatedHeading from "./AnimatedHeading";
import profile from "../assets/images/user-pen.png";
import logoutButton from "../assets/images/power.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="bg-[#dff7f5] w-full p-4 rounded-lg flex flex-row justify-between shadow-lg">
      <AnimatedHeading texts={["Welcome"]} />
      {/* Profile Icon and Dropdown */}
      <div className="relative">
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          className="cursor-pointer"
        >
          <img src={navbarLogo} alt="logo" className="w-[50px] " />
        </div>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div
            className="absolute right-0 w-40 bg-white rounded-lg shadow-lg"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <div className="p-4 flex-col flex gap-4">
              <div className="flex justify-between items-center">
                <span className="rounded-full bg-[#dff7f5] w-fit p-2 flex justify-center items-center">
                  <img src={profile} alt="" className="w-4" />
                </span>
                <span>Profile</span>
              </div>
              <div onClick={handleLogout} className="flex justify-between items-center cursor-pointer">
                <span className="rounded-full bg-[#ffa2a2] w-fit p-2 flex justify-center items-center">
                  <img src={logoutButton} alt="" className="w-4" />
                </span>
                <span>Logout</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
