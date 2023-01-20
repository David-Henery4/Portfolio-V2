import React from 'react'
import { CssIcon, HtmlIcon, JavascriptIcon, UnderLine } from "../assets";

const SkillsBox = () => {
  return (
    <div className="px-12 py-5 flex flex-col justify-center items-center gap-4">
      <CssIcon />
      <div className="w-32 h-[2px] bg-primaryWhite/20"></div>
      <h4 className="text-3xl">CSS</h4>
    </div>
  );
}

export default SkillsBox