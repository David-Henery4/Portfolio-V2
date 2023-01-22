import React, { useEffect, useState } from "react";

const useValidation = (callbackSubmit) => {
  const [finalValues, setFinalValues] = useState({
    name: "",
    re: "",
    email: "",
    message: "",
  });
  const [submitEventValue, setSubmitEventValue] = useState(null);
  const [nameError, setNameError] = useState({
    id: 1,
    isError: false,
    msg: "",
  });
  const [emailError, setEmailError] = useState({
    id: 2,
    isError: false,
    msg: "",
  });
  const [messageError, setMessageError] = useState({
    id: 3,
    isError: false,
    msg: "",
  });
  //
  const validateName = (initialName) => {
    const trimmedName = initialName.trim();
    if (trimmedName.length <= 0) {
      setNameError({
        id: 1,
        isError: true,
        msg: "Can't be empty",
      });
    }
    if (trimmedName.length >= 1) {
      setNameError({
        ...nameError,
        isError: false,
        msg: "",
      });
      setFinalValues((oldValues) => {
        return { ...oldValues, name: trimmedName };
      });
    }
  };
  const validateEmail = (initialEmail) => {
    const trimmedEmail = initialEmail.trim();
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(trimmedEmail)
    ) {
      setEmailError({
        ...emailError,
        isError: true,
        msg: "Please enter valid email"
      })
    } else{
      setEmailError({
        ...emailError,
        isError: false,
        msg: "",
      });
      setFinalValues((oldValues) => {
        return { ...oldValues, email: trimmedEmail };
      });
    }
  };
  const validateMessage = (initialMessage) => {
    const trimmedMessage = initialMessage.trim();
    if (trimmedMessage.length <= 0) {
      setMessageError({
        ...messageError,
        isError: true,
        msg: "Can't be empty",
      });
    }
    if (trimmedMessage.length >= 1) {
      setMessageError({
        ...messageError,
        isError: false,
        msg: "",
      });
      setFinalValues((oldValues) => {
        return { ...oldValues, message: trimmedMessage };
      });
    }
  };
  //
  const validate = (initialFormValues, eventValue) => {
    const { name, email, message, re } = initialFormValues;
    validateName(name);
    validateEmail(email);
    validateMessage(message);
    setSubmitEventValue(eventValue);
    setFinalValues((oldValues) => {return {...oldValues, re: re}});
  };
  //
  const finalConfirmation = () => {
    const errors = [emailError, nameError, messageError];
    const isError = errors.some(error => error.isError)
    const isValues = Object.values(finalValues).some(
      (value) => value.length > 0
    );
    //
    if (isValues && !isError){
      callbackSubmit(finalValues, submitEventValue);
    }
  };

  useEffect(() => {
    finalConfirmation()
  }, [nameError, emailError, messageError]);

  return {
    validate,
    nameError,
    emailError,
    messageError,
  };
};

export default useValidation;
