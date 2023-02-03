import React, { useState } from "react";
import useValidation from "../hooks/useValidation";
import {Input, MessageInput} from "../components";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate()
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
    e.target.submit()
  };
  //
  const { emailError, messageError, nameError, validate } =
    useValidation(handleFormSubmit);

  //
  return (
    <form
      id="contact-form"
      className="w-full flex flex-col justify-center items-center gap-4"
      action="https://formsubmit.co/bca6b7370464360b540d968dc63b44b4"
      method="POST"
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
      <MessageInput
        formValues={formValues}
        messageError={messageError}
        setFormValues={setFormValues}
      />
      <input
        type="hidden"
        name="_next"
        value="https://www.djhwebdevelopment.com/thankyou"
      />
    </form>
  );
};

export default ContactForm;
