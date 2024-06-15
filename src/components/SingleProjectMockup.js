import React from 'react'
import { Link } from 'react-router-dom';
import { BgLineDots } from '../assets';
import { urlForImage } from '../sanity/lib/image';

const SingleProjectMockup = ({ mockupSm = null, mockupLg= null }) => {
  return (
    <div className="pt-12 w-full flex flex-col items-start justify-center gap-11 smDesk:pt-24 smDesk:gap-0 smDesk:h-full smDesk:justify-center">
      <Link
        to="/projects"
        className="primary-btn w-24 h-7 grid place-items-center rounded-md font-light smDesk:mb-40"
      >
        Back
      </Link>
      {mockupLg || mockupSm ? (
        <div className="w-full max-w-md mx-auto mb-auto">
          <picture className="relative">
            <BgLineDots className="w-36 absolute -top-8 -left-0 smTab:w-56 smTab:-left-4 smTab:-top-4" />
            <source
              srcSet={urlForImage(mockupLg)}
              media="(min-width: 39.37em)"
            />
            <img
              className="w-full relative z-10"
              src={urlForImage(mockupSm)}
              alt="project-device-mockup"
            />
          </picture>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProjectMockup