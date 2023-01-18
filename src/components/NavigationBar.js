import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Logo } from "../assets";

const NavigationBar = () => {
  return (
    <nav className="w-full flex justify-between items-center col-start-1 col-end-13 h-20 px-6 border-b border-b-primaryWhite/30 xtraSm:px-9 lrgDesk:col-start-1 lrgDesk:col-end-2 lrgDesk:flex-col lrgDesk:h-full lrgDesk:border-b-0 lrgDesk:border-r lrgDesk:border-r-primaryWhite/30 lrgDesk:py-11">
      <Logo className="w-[60px] hover:cursor-pointer" />
      <ul className="hidden smTab:flex text-base font-extralight gap-4 lrgDesk:flex-col">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="smTab:flex gap-4 hidden">
        <BsLinkedin />
        <BsGithub />
      </div>
      <GiHamburgerMenu className="text-3xl hover:cursor-pointer smTab:hidden" />
    </nav>
  );
};

export default NavigationBar;
