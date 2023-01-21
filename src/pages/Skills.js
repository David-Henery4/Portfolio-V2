import React from 'react'
import { CssIcon, HtmlIcon, JavascriptIcon, UnderLine } from '../assets'
import { SkillsBox } from '../components';

const Skills = () => {
  return (
    <div className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center py-12 gap-20 lrgDesk:col-start-4 lrgDesk:col-end-[14] lrgDesk:gap-32">
      <h2 className="text-5xl font-extralight smTab:text-7xl relative text-center">
        Skills
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <UnderLine className="w-48" />
        </span>
      </h2>
      <div className="w-full grid gap-11 grid-cols-skillsGrid">
        <SkillsBox />
        <SkillsBox />
        <SkillsBox />
        <SkillsBox />
        <SkillsBox />
        <SkillsBox />
        <SkillsBox />
        <SkillsBox />
      </div>
    </div>
  );
}

export default Skills