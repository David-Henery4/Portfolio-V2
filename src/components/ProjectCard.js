import React from "react";
import { Link } from "react-router-dom";
import { urlForImage } from "../sanity/lib/image";

const ProjectCard = ({
  descShort = "",
  projectName = "",
  _id = 101,
  thumbnail = null,
}) => {
  //
  return (
    <div className="grid grid-rows-projectCard w-full p-4 relative rounded-xl bg-lightNavy">
      <img
        className="w-full h-52 object-cover object-top rounded-t-[8px]"
        src={urlForImage(thumbnail)}
        alt="" // need alt
      />
      <div className="w-full text-left mt-4 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-primaryWhite">{projectName}</h2>
          <p className="card-text">{descShort}</p>
        </div>
        <Link
          to={`/projects/${_id}`}
          className="primary-btn w-full p-3 text-center rounded-lg mt-6"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
