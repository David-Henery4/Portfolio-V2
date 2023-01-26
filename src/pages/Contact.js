import React from "react";
import {BgCircle} from "../assets"
import { ContactForm } from "../components";

const Contact = () => {
  return (
    <div className="w-full col-start-2 col-end-12 lrgDesk:col-start-4 lrgDesk:col-end-[14] flex flex-col justify-center items-center py-12 gap-20 lrgDesk:gap-32 relative">
      <BgCircle className="absolute w-56 -top-36 -right-40 smDesk:w-60 smDesk:"/>
      <h2 className="text-5xl font-extralight smTab:text-7xl text-center tracking-widest">
        Contact Me
      </h2>
      <div className="w-full grid gap-5 max-w-xl">
        <ContactForm />
        <button
          form="contact-form"
          className="primary-btn main-btn-styles justify-self-center"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
