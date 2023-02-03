import React from 'react'
import {
  BgLineDots,
  aboutImgLrg,
  aboutImgMed,
  aboutImgSml,
} from "../assets";

const AboutImage = () => {
  return (
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
  );
}

export default AboutImage