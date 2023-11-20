import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectsData from "../projects-data/projectsData";
import { ProjectCard } from "../components";
import { BgWavyDottedLine } from "../assets";

const Projects = () => {
  const [numOfShown, setNumOfShown] = useState(8);
  const [currentlyShown, setCurrentlyShown] = useState(
    projectsData?.slice(0, 6)
  );
  // eslint-disable-next-line
  const [maxShown, setMaxShown] = useState(projectsData?.length);
  //
  const handleLoadMoreProjects = () => {
    setNumOfShown((preValues) => {
      if (preValues >= maxShown) {
        return maxShown;
      }
      return preValues + 4;
    });
  };
  //
  useEffect(() => {
    setCurrentlyShown(projectsData.slice(0, numOfShown));
  }, [numOfShown]);
  //
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
        delay: 0.25,
      }}
    >
      <h2 className="text-5xl font-extralight smTab:text-7xl">My Projects</h2>
      <div className="w-full grid grid-cols-projectGrid gap-8 justify-center relative">
        <BgWavyDottedLine className="absolute -top-10 -right-48 smDesk:-top-20 smDesk:-right-24" />
        {currentlyShown.map((item) => {
          return <ProjectCard key={item.id} {...item} />;
        })}
      </div>
      {numOfShown >= maxShown ? (
        <p className="mx-auto -mt-10 text-primaryWhite">No more projects</p>
      ) : (
        <button
          className="px-4 py-2 mx-auto -mt-10 rounded-md primary-btn"
          onClick={handleLoadMoreProjects}
        >
          Load More
        </button>
      )}
    </motion.main>
  );
};

export default Projects;
