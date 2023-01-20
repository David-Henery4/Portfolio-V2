import React from 'react'
import { CssIcon, HtmlIcon, JavascriptIcon, UnderLine } from '../assets'
import { SkillsBox } from '../components';

const Skills = () => {
  return (
    <div className="w-full col-start-2 col-end-12">
      <h2 className="text-5xl font-extralight smTab:text-7xl">
        Skills
        <span>
          <UnderLine className="w-48" />
        </span>
      </h2>
      <div className="w-full grid gap-11 grid-cols-skillsGrid">
        <SkillsBox/>
        <SkillsBox/>
        <SkillsBox/>
        <SkillsBox/>
      </div>
    </div>
  );
}

export default Skills