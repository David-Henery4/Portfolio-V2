import React from 'react'
import { CssIcon, HtmlIcon, JavascriptIcon, UnderLine } from "../assets";

const SkillsBox = ({skill, svg}) => {
  return (
    <div className="p-5 h-52 flex flex-col justify-start items-center gap-4">
      {svg}
      <div className="w-32 h-[1%] bg-primaryWhite/20"></div>
      <h4 className="text-xl h-[24.5%]">{skill}</h4>
    </div>
  );
}

export default SkillsBox