import React, { useState } from "react";
import useValidation from "../hooks/useValidation";
import {Input, MessageInput} from "../components";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    re: "",
    email: "",
    message: "",
  });
  //
  const handleValidation = (e) => {
    e.preventDefault();
    validate(formValues, e);
  };
  //
  const handleFormSubmit = (values, e) => {
    // console.log("data submitted", values);
  };
  //
  const { emailError, messageError, nameError, validate } =
    useValidation(handleFormSubmit);
  //
  return (
    <form
      id="contact-form"
      className="w-full flex flex-col justify-center items-center gap-4"
      onSubmit={(e) => handleValidation(e)}
    >
      <Input
        inputValue={formValues.name}
        errorValues={nameError}
        setFormValues={setFormValues}
        inputName="name"
      />
      <Input
        inputValue={formValues.re}
        setFormValues={setFormValues}
        inputName="re"
      />
      <Input
        inputValue={formValues.email}
        errorValues={emailError}
        setFormValues={setFormValues}
        inputName="email"
      />
      <MessageInput formValues={formValues} messageError={messageError} setFormValues={setFormValues}/>
    </form>
  );
};

export default ContactForm;
