import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import projectsData from "../projects-data/projectsData";
import { ProjectCard, LoadingSpinner } from "../components";
import { BgWavyDottedLine } from "../assets";
import { client } from "../sanity/lib/client";

const Projects = () => {
  const [numOfShown, setNumOfShown] = useState(8);
  const [projectsList, setProjectsList] = useState([]);
  const [currentlyShown, setCurrentlyShown] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [isError, setIsError] = useState({
    isError: false,
    msg: "Error loading projects, please try again later.",
  });

  const fetchProjectsList = async () => {
    try {
      setIsError((prevVals) => {
        return {
          ...prevVals,
          isError: false,
        };
      });
      setIsLoading(true)
      const list = await client.fetch("*[_type == 'project']");
      setProjectsList(list);
      setCurrentlyShown(list?.slice(0, 8));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError((prevVals) => {
        return {
          ...prevVals,
          isError: true,
        };
      });
    }
  };

  const handleLoadMoreProjects = () => {
    setNumOfShown((preValues) => {
      if (preValues >= projectsList?.length) {
        return projectsList?.length;
      }
      return preValues + 4;
    });
  };
  //
  useEffect(() => {
    fetchProjectsList();
  }, []);

  useEffect(() => {
    // maybe use "useMemo"
    // change projectsData to projectsList
    setCurrentlyShown(projectsList.slice(0, numOfShown));
  }, [numOfShown]);
  //
  //
  return (
    <motion.main
      className="w-full col-start-2 col-end-12 flex flex-col justify-start items-center text-center gap-20 py-12 smTab:items-start lrgDesk:col-start-4 lrgDesk:col-end-[14] lrgDesk:gap-32"
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
      {isError?.isError ? (
        <div className="w-full text-center my-auto">
          <p>{isError?.msg}</p>
        </div>
      ) : isLoading ? (
        <div className="m-auto">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className="w-full grid grid-cols-projectGrid gap-8 justify-center relative">
            <BgWavyDottedLine className="absolute -top-10 -right-48 smDesk:-top-20 smDesk:-right-24" />
            {currentlyShown.map((item) => {
              // item._id
              return <ProjectCard key={item._id} {...item} />;
            })}
          </div>
          {numOfShown >= projectsList?.length ? (
            <p className="mx-auto -mt-10 text-primaryWhite">No more projects</p>
          ) : (
            <button
              className="px-4 py-2 mx-auto -mt-10 rounded-md primary-btn"
              onClick={handleLoadMoreProjects}
            >
              Load More
            </button>
          )}
        </>
      )}
    </motion.main>
  );
};

export default Projects;
