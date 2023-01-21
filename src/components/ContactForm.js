import React, { useState } from "react";
import useValidation from "../hooks/useValidation";

const ContactForm = () => {
  const [formValues,setFormValues] = useState({
    name: "",
    re: "",
    email: "",
    message: "",
  })
  //
  const {emailError,messageError,nameError, validate} = useValidation();
  //
  const handleValidation = (e) => {
    e.preventDefault()
    validate(formValues, e)
  }
  //
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log("data submitted", formValues)
    // console.log(name,re,email, message)
    // if (name === "david"){
    //   e.target.submit()
    // }
  };
  //
  return (
    <form
      id="contact-form"
      className="w-full flex flex-col justify-center items-center gap-4"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <div className="w-full relative pt-4">
        <input
          className="w-full bg-darkShade px-2 py-3 peer"
          name="name"
          id="name"
          type="text"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        <label
          className={`absolute peer-focus:-top-3 peer-focus:scale-75 transition-all left-2 ${
            formValues.name.trim() ? "-top-3 scale-75" : "top-7"
          }`}
          htmlFor="name"
        >
          Name
        </label>
        {nameError.isError && <p>{nameError.msg}</p>}
      </div>
      <div className="w-full relative pt-4">
        <input
          className="w-full bg-darkShade px-2 py-3 peer"
          name="re"
          id="re"
          type="text"
          value={formValues.re}
          onChange={(e) => setFormValues({ ...formValues, re: e.target.value })}
        />
        <label
          className={`absolute peer-focus:-top-3 peer-focus:scale-75 transition-all left-2 ${
            formValues.re.trim() ? "-top-3 scale-75" : "top-7"
          }`}
          htmlFor="re"
        >
          RE
        </label>
      </div>
      <div className="w-full relative pt-4">
        <input
          className="w-full bg-darkShade px-2 py-3 peer"
          name="email"
          id="email"
          type="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        <label
          className={`absolute peer-focus:-top-3 peer-focus:scale-75 transition-all left-2 ${
            formValues.email.trim() ? "-top-3 scale-75" : "top-7"
          }`}
          htmlFor="email"
        >
          Email
        </label>
        {emailError.isError && <p>{emailError.msg}</p>}
      </div>
      <div className="w-full relative pt-4">
        <textarea
          className="w-full bg-darkShade resize-none min-h-[384px] px-2 py-3 peer"
          name="message"
          id="message"
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
        ></textarea>
        <label
          className={`absolute peer-focus:-top-3 peer-focus:scale-75 transition-all left-2 ${
            formValues.message.trim() ? "-top-3 scale-75" : "top-7"
          }`}
          htmlFor="message"
        >
          Message
        </label>
        {messageError.isError && <p>{messageError.msg}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
