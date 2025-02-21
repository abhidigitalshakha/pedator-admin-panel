import React from "react";
import AppLogo from "../assets/images/AppLogo.png";
import MobileAppLogo from "../assets/images/appLogoMobileView.png";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import DashboardPage from "../pages/protectedPage/DashboardPage";
import LearnersPage from "../pages/protectedPage/LearnersPage";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex ">
      {/* left side  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] border-r border-dashed border-gray-400 p-2">
        <div className=" flex justify-center items-center lg:justify-start bg-[#dff7f5] p-3 rounded-lg">
          <img src={AppLogo} alt="App-Logo"  className="lg:block hidden w-full"/>
          <img src={MobileAppLogo} alt="App-Logo"  className="block lg:hidden w-full"/>
        </div>
        <Menu />
      </div>

      {/* right side  */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] p-2 flex flex-col gap-8 bg-gray-100">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
