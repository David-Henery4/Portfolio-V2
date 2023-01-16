import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "../assets";

const NavigationBar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <Logo className="w-12" />
      <GiHamburgerMenu />
    </nav>
  );
}

export default NavigationBar