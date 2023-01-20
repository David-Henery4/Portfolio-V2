import React from 'react'
import { dummyProfileImgMob, dummyProfileImgDesk, dummyProfileImgTab } from '../assets'
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <main className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-14 pt-12 smDesk:flex-row-reverse lrgDesk:col-start-4 lrgDesk:col-end-[14]">
      <div className="w-full grid place-items-center smDesk:justify-end smDesk:w-1/2">
        <picture>
          <source srcSet={dummyProfileImgDesk} media="(min-width: 64em)" />
          <source srcSet={dummyProfileImgTab} media="(min-width: 39.37em)" />
          <img
            className="max-w-md"
            src={dummyProfileImgMob}
            alt="The about me profile"
          />
        </picture>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 smDesk:w-1/2 smDesk:items-start">
        <div className="w-full flex flex-col justify-center items-center text-center gap-10 smDesk:text-left smDesk:items-start">
          <h2 className="text-5xl font-extralight smTab:text-7xl">About Me</h2>
          <p className="max-w-md leading-relaxed tracking-wider text-base smDesk:max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Elementum netus enim sit in
            suspendisse commodo molestie condimentum magna. Amet pretium nunc
            vitae at varius ut. Felis turpis neque mi pulvinar lectus diam dui
            curabitur eu. Ultrices consectetur sed sapien id consectetur.
            Dignissim at fermentum curabitur ut non sed non nisl. Sollicitudin
            ut sit mi.
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-10 xtraSm:justify-between xtraSm:flex-row max-w-sm">
          <button className="main-btn-styles primary-btn">Download C.V</button>
          <div className="flex justify-center items-center gap-16 xtraSm:gap-8">
            <BsGithub className="text-6xl" />
            <BsLinkedin className="text-6xl" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About