import React from "react";
import { motion } from "framer-motion";
import projectsData from "../projects-data/projectsData";
import { ProjectCard } from "../components";
import { BgWavyDottedLine } from "../assets";

const Projects = () => {
  return (
    <motion.main
      className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center text-center gap-20 py-12 smTab:items-start lrgDesk:col-start-4 lrgDesk:col-end-[14] lrgDesk:gap-32"
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
      <h2 className="text-5xl font-extralight smTab:text-7xl">My Projects</h2>
      <div className="w-full grid grid-cols-projectGrid gap-8 justify-center relative">
        <BgWavyDottedLine className="absolute -top-10 -right-48 smDesk:-top-20 smDesk:-right-24" />
        {projectsData.map((item) => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </div>
    </motion.main>
  );
};

export default Projects;
