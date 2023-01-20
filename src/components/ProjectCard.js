import React from 'react'
import { dummyProjectCardImg } from "../assets";

const ProjectCard = () => {
  return (
    <div className="w-full h-80 relative rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover object-top absolute top-0 left-0"
        src={dummyProjectCardImg}
        alt=""
      />
      <div className="bg-darkShade/50 w-full h-full relative z-10 pt-10">
        <div className="bg-primaryBlack w-5/6 py-3 text-2xl text-center">
          <h3>Audiophile</h3>
        </div>
      </div>
      <div className="z-20 w-full h-full bg-primaryBlack/80 text-left absolute top-0 left-0 flex flex-col justify-center items-start gap-5">
        <h4 className="text-3xl font-extralight">Audiophile</h4>
        <p className="leading-relaxed tracking-wider text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vel
          saepe culpa eveniet a officia soluta quod doloribus sequi.
        </p>
        <button className="primary-btn w-36 h-9 rounded-lg">More Info</button>
      </div>
    </div>
  );
}

export default ProjectCard