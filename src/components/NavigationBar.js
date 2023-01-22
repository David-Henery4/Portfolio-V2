import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Logo } from "../assets";
import navData from "../navigation-data/navData";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="w-full flex justify-between items-center col-start-1 col-end-13 h-20 px-6 border-b border-b-primaryWhite/30 xtraSm:px-[50px] lrgDesk:col-start-2 lrgDesk:col-end-3 lrgDesk:flex-col lrgDesk:py-11 lrgDesk:max-h-screen lrgDesk:self-start lrgDesk:border border-primaryWhite/30 lrgDesk:px-8 lrgDesk:h-[calc(100vh-44px)] lrgDesk:rounded-md lrgDesk:mt-6">
      <Logo className="w-[60px] hover:cursor-pointer" />
      <ul className="hidden smTab:flex text-base font-extralight gap-4 lrgDesk:flex-col smDesk:gap-12">
        {navData.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={item.path} className={({isActive}) => isActive? "pb-1 border-b border-b-secondaryRed": "" }>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <div className="smTab:flex gap-4 hidden">
        <BsLinkedin className="hover:cursor-pointer" />
        <BsGithub className="hover:cursor-pointer" />
      </div>
      <GiHamburgerMenu className="text-3xl hover:cursor-pointer smTab:hidden" />
    </nav>
  );
};

export default NavigationBar;
