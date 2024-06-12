import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, name, descShort, thumbNail }) => {
  //
  return (
    <div className="grid grid-rows-projectCard w-full p-4 relative rounded-xl bg-lightNavy">
      <img
        className="w-full h-52 object-cover object-top rounded-t-[8px]"
        src={require(`../assets/project-assets/thumbs/${thumbNail}`)}
        alt=""
      />
      <div className="w-full text-left mt-4 flex flex-col justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-primaryWhite">{name}</h2>
          <p className="card-text">{descShort}</p>
        </div>
        <Link
          to={`/projects/${id}`}
          className="primary-btn w-full p-3 text-center rounded-lg mt-6"
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
