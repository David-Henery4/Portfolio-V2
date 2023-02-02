import React from "react";
import { motion } from "framer-motion";
import {
  dummyProfileImgMob,
  dummyProfileImgDesk,
  dummyProfileImgTab,
  BgLineDots,
  BgMultipleWaves,
  aboutImgLrg,
  aboutImgMed,
  aboutImgSml,
} from "../assets";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <motion.main
      className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-14 py-12 smDesk:flex-row-reverse lrgDesk:col-start-4 lrgDesk:col-end-[14] relative"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }}
    >
      <div className="w-full grid place-items-center smDesk:justify-end smDesk:w-1/2">
        <picture className="relative">
          <BgLineDots className="w-36 absolute -top-16 -left-14 smTab:w-56 smTab:-left-20 smTab:-top-14" />
          <source srcSet={aboutImgLrg} media="(min-width: 64em)" />
          <source srcSet={aboutImgMed} media="(min-width: 39.37em)" />
          <img
            className="max-w-md"
            src={aboutImgSml}
            alt="The about me profile"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 smDesk:w-1/2 smDesk:items-start">
        <div className="w-full flex flex-col justify-center items-center text-center gap-10 smDesk:text-left smDesk:items-start">
          <h2 className="text-5xl font-extralight smTab:text-7xl">About Me</h2>
          <p className="max-w-md leading-relaxed tracking-wider text-base smDesk:max-w-lg">
            I am a driven frontend developer with a love for exploring new
            technologies and putting them to use in creating one-of-a-kind
            digital experiences. I place a strong emphasis on creating
            responsive projects and have a sharp eye for detail to ensure a
            seamless user experience. When I'm not coding, I enjoy watching
            football, listening to music, reading, cooking and trying out spicy
            foods.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-10 xtraSm:justify-between xtraSm:flex-row max-w-sm">
          <button className="main-btn-styles primary-btn">Download C.V</button>
          <div className="flex justify-center items-center gap-16 xtraSm:gap-8">
            <a
              href="https://github.com/David-Henery4"
              aria-label="link to github profile"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="text-6xl hover:cursor-pointer hover:text-secondaryRed" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-henery-725458241"
              aria-label="link to linkedIn profile"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="text-6xl hover:cursor-pointer hover:text-secondaryRed" />
            </a>
          </div>
        </div>
      </div>
      <BgMultipleWaves className="absolute -bottom-28 -right-28 smTab:-right-16 smDesk:right-1/2 smDesk:-bottom-20 lrgDesk:-bottom-12" />
    </motion.main>
  );
};

export default About;
