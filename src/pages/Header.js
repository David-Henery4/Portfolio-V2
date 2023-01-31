import React from "react";
import { motion } from "framer-motion";
import { HeaderContent, HeaderImage } from "../components";
import {
  BgWave2,
  BgWaveLong,
} from "../assets";

const Header = () => {
  return (
    <motion.header
      className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-16 smDesk:flex-row-reverse lrgDesk:col-start-4 lrgDesk:col-end-[14] relative"
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }}
    >
      <BgWave2 className="absolute top-0 -left-7 lrgDesk:left-1/3 lrgDesk:top-8" />
      <BgWaveLong className="absolute -bottom-28 -left-7 xtraSm:-left-16 lrgDesk:-bottom-14 lrgDesk:-left-0" />
      <HeaderImage/>
      {/**/}
      <HeaderContent/>
    </motion.header>
  );
};

export default Header;
