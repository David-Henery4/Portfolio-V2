import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {  logoRed } from "../assets";
import navData from "../navigation-data/navData";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = ({setIsSidebarOpen}) => {
  return (
    <nav className="w-full flex justify-between items-center col-start-1 col-end-13 h-20 px-6 border-b border-b-primaryWhite/30 xtraSm:px-[50px] lrgDesk:col-start-2 lrgDesk:col-end-3 lrgDesk:flex-col lrgDesk:py-11 lrgDesk:max-h-screen lrgDesk:self-start lrgDesk:border border-primaryWhite/30 lrgDesk:px-8 lrgDesk:h-[calc(100vh-44px)] lrgDesk:rounded-md lrgDesk:mt-6 bg-primaryBlack relative z-10">
      <Link to="/">
      <img src={logoRed} alt="logo" className="w-[60px] hover:cursor-pointer" />
      </Link>
      <ul className="hidden smTab:flex text-base font-extralight gap-4 lrgDesk:flex-col smDesk:gap-12">
        {navData.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "pb-1 border-b border-b-secondaryRed" : ""
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="smTab:flex gap-4 hidden">
        <a
          href="https://github.com/David-Henery4"
          aria-label="link to github profile"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="hover:cursor-pointer hover:text-secondaryRed" />
        </a>
        <a
          href="https://www.linkedin.com/in/david-henery-725458241"
          aria-label="link to linkedIn profile"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="hover:cursor-pointer hover:text-secondaryRed" />
        </a>
      </div>
      <GiHamburgerMenu
        className="text-3xl hover:cursor-pointer smTab:hidden"
        onClick={() => setIsSidebarOpen(true)}
      />
    </nav>
  );
};

export default NavigationBar;
