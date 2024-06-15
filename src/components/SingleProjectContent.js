import React from 'react'

const SingleProjectContent = ({
  descLong,
  technologiesUsed,
  liveUrl,
  repoUrl,
  projectName,
}) => {
  return (
    <div className="w-full flex-col flex justify-center items-center gap-14 smDesk:py-24 smDesk:items-start">
      <section className="w-full text-center flex flex-col justify-center items-center gap-10 smDesk:items-start smDesk:text-left">
        <h2 className="text-5xl font-extralight smTab:text-7xl break-all xtraSm:break-normal">
          {projectName}
        </h2>
        <p className="leading-relaxed tracking-wider text-base max-w-md">
          {descLong}
        </p>
      </section>
      <section className="w-full flex flex-col justify-center items-center text-center gap-7 smDesk:text-left smDesk:items-start">
        <h3 className="text-3xl font-extralight">Technologies used:</h3>
        <ul className="flex justify-center items-center flex-wrap gap-3 max-w-md smDesk:justify-start">
          {technologiesUsed?.map((tech, i) => {
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
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live Project
        </a>
        {repoUrl === "Repo Private" || (
          <a
            className="secondary-btn main-btn-styles grid place-items-center"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        )}
      </div>
    </div>
  );
};

export default SingleProjectContent