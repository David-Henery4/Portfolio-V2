import React from 'react'
import { motion } from 'framer-motion';
import skillsData from '../skills-data/skillsData';
import { UnderLine , Bg2Waves} from '../assets'
import { SkillsBox } from '../components';

const Skills = () => {
  return (
    <motion.main
      className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center py-12 gap-20 lrgDesk:col-start-4 lrgDesk:col-end-[14] lrgDesk:gap-32 relative"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: .25,
      }}
    >
      <Bg2Waves className="absolute -top-7 -left-20" />
      <h2 className="text-5xl font-extralight smTab:text-7xl relative text-center">
        Skills
        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <UnderLine className="w-48" />
        </span>
      </h2>
      <div className="w-full grid gap-6 grid-cols-skillsGrid text-center">
        {skillsData.map((item) => {
          return <SkillsBox key={item.id} {...item} />;
        })}
      </div>
    </motion.main>
  );
}

export default Skills