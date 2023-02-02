import React from 'react'
import { ArrowsUp, BgLineDots, headerImg } from "../assets";


const HeaderImage = () => {
  return (
    <div className="bg-primaryWhite/5 w-full flex items-center justify-center h-80 xtraSm:h-[400px] smTab:h-[480px] smDesk:h-full lrgDesk:h-[calc(100%-44px)] lrgDesk:mb-auto xtraLrgDesk:h-[calc(100%-64px)] relative">
      <ArrowsUp className="absolute -left-2" />
      <BgLineDots className="absolute -bottom-14 -right-24 lrgDesk:-bottom-14 lrgDesk:-right-14" />
      <div className="w-56 h-56 bg-secondaryRed smTab:h-80 smTab:w-80 relative header-circle group hover:w-[234px] hover:h-[234px] hover:smTab:w-[330px] hover:smTab:h-[330px] transition-all">
        <div className="w-full h-96 relative bottom-11 scale-110 group-hover:scale-125 transition-all">
          <img
            className="w-full h-full object-contain"
            src={headerImg}
            alt="header-profile-circle-img"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderImage