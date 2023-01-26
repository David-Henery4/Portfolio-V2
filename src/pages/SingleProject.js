import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../hooks/Context";


const SingleProject = () => {
  const { projectId } = useParams();
  const { getProject, singleProject } = useGlobalContext();
  //
  useEffect(() => {
    getProject(projectId);
  }, []);
  //
  return (
    <div className="col-start-2 col-end-12 flex flex-col items-center justify-center gap-16 smDesk:flex-row smDesk:items-start smDesk:gap-24 lrgDesk:col-start-4 lrgDesk:col-end-[14]">
      <div className="pt-12 w-full flex flex-col items-start justify-center gap-11 smDesk:pt-24 smDesk:gap-0 smDesk:h-full smDesk:justify-center">
        <Link
          to="/projects"
          className="primary-btn w-24 h-7 grid place-items-center rounded-md font-light smDesk:mb-auto"
        >
          Back
        </Link>
        <div className="w-full max-w-md mx-auto mb-auto">
          <picture>
            <source
              srcSet={require(`../assets/project-assets/device-mockups/project-${projectId}/device-mockups-large.png`)}
              media="(min-width: 39.37em)"
            />
            <img
              className="w-full"
              src={require(`../assets/project-assets/device-mockups/project-${projectId}/device-mockups-small.png`)}
              alt="project-device-mockup"
            />
          </picture>
        </div>
      </div>
      {/**/}
      <div className="w-full flex-col flex justify-center items-center gap-14 smDesk:py-24 smDesk:items-start">
        <section className="w-full text-center flex flex-col justify-center items-center gap-10 smDesk:items-start smDesk:text-left">
          <h2 className="text-5xl font-extralight smTab:text-7xl">
            {singleProject.name}
          </h2>
          <p className="leading-relaxed tracking-wider text-base max-w-md">
            {singleProject.descLong}
          </p>
        </section>
        <section className="w-full flex flex-col justify-center items-center text-center gap-7 smDesk:text-left smDesk:items-start">
          <h3 className="text-3xl font-extralight">Technologies used:</h3>
          <ul className="flex justify-center items-center flex-wrap gap-3 max-w-md smDesk:justify-start">
            {singleProject.technologiesUsed?.map((tech, i) => {
              return (
                <li key={i}>
                  <p>{tech}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <div className="flex flex-col justify-center items-center gap-6 smTab:flex-row">
          <a
            className="primary-btn main-btn-styles grid place-items-center"
            href={singleProject.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Project
          </a>
          <a
            className="primary-btn main-btn-styles grid place-items-center"
            href={singleProject.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
