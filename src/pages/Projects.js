import React from 'react'
import { ProjectCard } from '../components';

const Projects = () => {
  return (
    <main className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center text-center gap-20 pt-12 smTab:items-start lrgDesk:col-start-4 lrgDesk:col-end-[14] lrgDesk:gap-32">
      <h2 className="text-5xl font-extralight smTab:text-7xl">My Projects</h2>
      <div className="w-full grid grid-cols-projectGrid gap-8 justify-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}

export default Projects