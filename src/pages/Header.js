import React from 'react'
import { Link } from 'react-router-dom';
import { UnderLine } from '../assets';

const Header = () => {
  return (
    <header className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-16 smDesk:flex-row-reverse lrgDesk:col-start-4 lrgDesk:col-end-[14]">
      <div className="bg-primaryWhite/5 w-full flex items-center justify-center h-80 xtraSm:h-[400px] smTab:h-[480px] smDesk:h-full lrgDesk:h-[calc(100%-44px)] lrgDesk:mb-auto xtraLrgDesk:h-[calc(100%-64px)]">
        <div className="w-56 h-56 rounded-full bg-secondaryRed smTab:h-80 smTab:w-80"></div>
      </div>
      {/**/}
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
          <button className="main-btn-styles primary-btn">Download C.V</button>
          <Link to={"/projects"} className="main-btn-styles secondary-btn grid place-items-center">
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header