import React, { useState } from "react";
import useValidation from "../hooks/useValidation";
import { Input, MessageInput } from "../components";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    re: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState({
    isSubmitted: false,
    isError: false,
    msg: "",
  });
  const [pending, setPending] = useState({
    isPending: false,
    msg: "Sending....",
  });
  //
  const handleValidation = (e) => {
    e.preventDefault();
    validate(formValues, e);
  };
  //
  const handleFormSubmit = async (values, e) => {
    // e.target.submit();
    setResult({
      msg: "",
      isSubmitted: false,
      isError: false,
    });
    setPending((oldValues) => {
      return {
        ...oldValues,
        isPending: true,
      };
    });
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.REACT_APP_FORM_ACCESS_KEY);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      e.target.reset();
      setResult({
        msg: "Form Submitted Successfully. I'll reply as soon as I can, thank you.",
        isSubmitted: true,
        isError: false,
      });
      setPending((oldValues) => {
        return {
          ...oldValues,
          isPending: false,
        };
      });
    } else {
      setResult({
        msg: "There has been an error, please try again",
        isSubmitted: false,
        isError: true,
      });
      setPending((oldValues) => {
        return {
          ...oldValues,
          isPending: false,
        };
      });
      console.log("Error", data);
    }
  };
  //
  const { emailError, messageError, nameError, validate } =
    useValidation(handleFormSubmit);

  //
  return (
    <form
      id="contact-form"
      className="w-full flex flex-col justify-center items-center gap-4"
      // action="https://formsubmit.co/bca6b7370464360b540d968dc63b44b4"
      // method="POST"
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
        name="access_key"
        value={process.env.REACT_APP_FORM_ACCESS_KEY}
      />
      {result?.isSubmitted ? (
        <p className="px-3 text-center text-primaryGreen">{result?.msg}</p>
      ) : pending?.isPending ? (
        <p className="px-3 text-center">{pending?.msg}</p>
      ) : (
        <>
          {result?.isError && (
            <p className="px-3 text-center text-secondaryRed">{result?.msg}</p>
          )}
          <button
            form="contact-form"
            className="primary-btn main-btn-styles justify-self-center"
          >
            Submit
          </button>
        </>
      )}
      {/* <input
        type="hidden"
        name="_next"
        value="https://www.djhwebdevelopment.com/thankyou"
      /> */}
    </form>
  );
};

export default ContactForm;
