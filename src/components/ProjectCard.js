import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({id, name, descShort, thumbNail }) => {
  return (
    <div className="group w-full h-80 relative rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover object-top absolute top-0 left-0"
        src={require(`../assets/project-assets/thumbs/${thumbNail}`)}
        alt=""
      />
      <div className="bg-darkShade/50 w-full h-full relative z-10 pt-10">
        <div className="bg-primaryBlack w-5/6 py-3 text-2xl text-center">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="hidden z-10 text-left absolute top-0 left-0 w-full h-full group-hover:block">
        <div className="absolute top-0 left-0 w-full h-full bg-primaryBlack/90"></div>
        <div className="relative z-10 flex-col justify-center items-start gap-5 group-hover:flex h-full w-full group/text p-2">
          <h4 className="text-3xl font-extralight -translate-x-full transition-all group-hover/text:-translate-x-0 ">
            {name}
          </h4>
          <p className="leading-relaxed tracking-wider text-sm -translate-x-full transition-all group-hover/text:-translate-x-0 ">
            {descShort}
          </p>
          <Link to={`/projects/${id}`} className="primary-btn w-36 h-9 rounded-lg -translate-x-full transition-all group-hover/text:-translate-x-0 grid place-items-center">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard