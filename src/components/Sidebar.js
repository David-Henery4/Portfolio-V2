import React from "react";
import { Logo, logoRed } from "../assets";
import { NavLink } from "react-router-dom";
import navData from "../navigation-data/navData";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = ({setIsSidebarOpen, isSidebarOpen}) => {
  const [isLargeScreen,setIsLargeScreen] = useState(false)
  //
  const handleCloseSidebar = () => (
    setIsSidebarOpen(false)
  )
  const closeSideOnBiggerScreens = (matches) => {
    setIsLargeScreen(matches)
  }
  //
  useEffect(() => {
    if (isLargeScreen){
      setIsSidebarOpen(false)
    }
  },[isLargeScreen])
  //
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 630px)")
    setIsLargeScreen(mediaQuery.matches)
    mediaQuery.addEventListener("change", closeSideOnBiggerScreens)
    return () => {
      return mediaQuery.removeEventListener("change",closeSideOnBiggerScreens)
    }
  }, [])
  //
  return (
    <div
      className={`fixed top-0 left-0 h-full w-full z-50 bg-darkShade transition-all ${
        isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="w-full flex justify-between items-center px-5 py-3 border-b border-b-primaryWhite/30">
        <img
          src={logoRed}
          alt="sidebar-logo"
          className="w-[60px] hover:cursor-pointer"
        />
        <IoClose
          className="text-4xl hover:cursor-pointer"
          onClick={handleCloseSidebar}
        />
      </div>
      <div className="w-full pt-12 px-5">
        <ul className="flex flex-col justify-center items-start gap-7">
          {navData.map((item) => {
            return (
              <li key={item.id} className="text-3xl">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "pb-1 border-b border-b-secondaryRed" : ""
                  }
                  onClick={handleCloseSidebar}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
