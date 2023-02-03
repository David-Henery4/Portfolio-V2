import React from 'react'
import { Link } from 'react-router-dom';
import { UnderLine } from '../assets';

const HeaderContent = () => {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center gap-20 smDesk:items-start">
      <h1 className="text-2xl font-extralight inline-flex flex-col justify-center items-center gap-4 smDesk:items-start">
        Hi, I'm David Henery
        <span className="text-5xl tracking-wider leading-[58px] font-normal smTab:text-7xl smDesk:text-left">
          {" "}
          Frontend Developer
        </span>
        <span className="text-3xl">
          {" "}
          I bring designs to
          <span className="block text-4xl italic text-secondaryRed mt-4 relative xtraSm:inline">
            {" "}
            LIFE
            <UnderLine className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-36" />
          </span>
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center gap-7 xtraSm:flex-row">
        <Link to="/projects" className="main-btn-styles primary-btn grid place-items-center">
          Projects
        </Link>
        <Link
          to="/contact"
          className="main-btn-styles secondary-btn grid place-items-center"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default HeaderContent