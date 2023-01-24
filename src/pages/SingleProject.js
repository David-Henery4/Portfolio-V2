import React from "react";
import { Link, useParams } from "react-router-dom";
// import { audiophileMockupsMd } from "../assets";
import { audiophileMockups, audiophileMockupsMd } from "../assets";
// import {mockup} from "../assets/project-assets/device-mockups/project-1/"

const SingleProject = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <div className="col-start-2 col-end-12 flex flex-col items-center justify-center gap-16 smDesk:flex-row smDesk:items-start smDesk:gap-24 lrgDesk:col-start-4 lrgDesk:col-end-[14]">
      <div className="pt-12 w-full flex flex-col items-start justify-center gap-11 smDesk:pt-24 smDesk:gap-0 smDesk:h-full smDesk:justify-center">
        <Link to="/projects" className="primary-btn w-24 h-7 grid place-items-center rounded-md font-light smDesk:mb-auto">
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
            Audiophile
          </h2>
          <p className="leading-relaxed tracking-wider text-base max-w-md">
            Lorem ipsum dolor sit amet consectetur. In leo dignissim a bibendum
            sit eu tortor. Velit vestibulum laoreet hac vel ultrices nam ornare.
            Enim habitant mattis lorem interdum est orci. Est interdum pharetra
            ac sit egestas dolor. Enim eget mollis posuere porta ac. Varius amet
            orci amet porta eget..
          </p>
        </section>
        <section className="w-full flex flex-col justify-center items-center text-center gap-7 smDesk:text-left smDesk:items-start">
          <h3 className="text-3xl font-extralight">Technologies used:</h3>
          <ul className="flex justify-center items-center flex-wrap gap-3 max-w-md smDesk:justify-start">
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>React-Router-6</p>
            </li>
            <li>
              <p>Redux-Toolkit</p>
            </li>
            <li>
              <p>Javascript</p>
            </li>
            <li>
              <p>React</p>
            </li>
            <li>
              <p>CSS/SCSS</p>
            </li>
          </ul>
        </section>
        <div className="flex flex-col justify-center items-center gap-6 smTab:flex-row">
          <a
            className="primary-btn main-btn-styles grid place-items-center"
            href="#"
          >
            Live Project
          </a>
          <a
            className="primary-btn main-btn-styles grid place-items-center"
            href="#"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
