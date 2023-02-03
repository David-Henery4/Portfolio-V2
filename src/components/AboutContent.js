import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const AboutContent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 smDesk:w-1/2 smDesk:items-start">
      <div className="w-full flex flex-col justify-center items-center text-center gap-10 smDesk:text-left smDesk:items-start">
        <h2 className="text-5xl font-extralight smTab:text-7xl">About Me</h2>
        <p className="max-w-md leading-relaxed tracking-wider text-base smDesk:max-w-lg">
          I am a driven frontend developer with a love for exploring new
          technologies and putting them to use in creating one-of-a-kind digital
          experiences. I place a strong emphasis on creating responsive projects
          and have a sharp eye for detail to ensure a seamless user experience.
          When I'm not coding, I enjoy watching football, listening to music,
          reading, cooking and trying out spicy foods.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-10 xtraSm:justify-between xtraSm:flex-row max-w-sm">
        <Link to="/projects" className="main-btn-styles primary-btn grid place-items-center">
          Projects
        </Link>
        <div className="flex justify-center items-center gap-16 xtraSm:gap-8">
          <a
            href="https://github.com/David-Henery4"
            aria-label="link to github profile"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-6xl hover:cursor-pointer hover:text-secondaryRed" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-henery-725458241"
            aria-label="link to linkedIn profile"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-6xl hover:cursor-pointer hover:text-secondaryRed" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
