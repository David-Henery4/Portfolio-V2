import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useGlobalContext } from "../hooks/Context";
import { BgWaveStraight, BgWave2 } from "../assets";
import {
  SingleProjectContent,
  SingleProjectMockup,
  LoadingSpinner,
} from "../components";
import { client } from "../sanity/lib/client";

const SingleProject = () => {
  const { projectId } = useParams();
  // const { getProject, singleProject } = useGlobalContext();
  const [currentProject, setCurrentProject] = useState({});
  const [isLoading, setLoading] = useState(false);

  const fetchProjectData = async (currentProjectId) => {
    try {
      setLoading(true);
      const currentProject = await client.fetch(
        `*[_type == 'project' && _id == '${currentProjectId}']`
      );
      setCurrentProject(currentProject[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  //
  useEffect(() => {
    fetchProjectData(projectId);
    // getProject(projectId);
  }, []);
  //
  return (
    <motion.main
      className={`col-start-2 col-end-12 flex flex-col items-center justify-center gap-16 smDesk:flex-row smDesk:gap-24 lrgDesk:col-start-4 lrgDesk:col-end-[14] relative ${isLoading ? "smDesk:items-center" : "smDesk:items-start"}`}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }}
    >
      <BgWave2 className="absolute -bottom-16 -left-7 rotate-[55deg] smTab:-bottom-4 smDesk:bottom-4 smDesk:left-10" />
      <BgWaveStraight className="absolute -top-20 -right-44 xtraSm:-top-16 lrgDesk:-top-28 lrgDesk:-right-20" />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SingleProjectMockup
            projectId={projectId}
            mockupSm={currentProject?.deviceMockupSml}
            mockupLg={currentProject?.deviceMockupLg}
          />
          {/**/}
          <SingleProjectContent {...currentProject} />
        </>
      )}
    </motion.main>
  );
};

export default SingleProject;
