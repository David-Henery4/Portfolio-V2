import React from 'react'

const Input = ({inputValue,errorValues = false,setFormValues, inputName}) => {
  return (
    <div className="w-full relative pt-4">
      <input
        className={`w-full bg-darkShade px-2 py-3 peer ${
          errorValues.isError && "outline-none outline-1 outline-[#c22828]"
        }`}
        name={inputName}
        id={inputName}
        type="text"
        value={inputValue}
        aria-invalid={errorValues.isError}
        aria-describedby={errorValues ? `${inputName}-error` : null}
        onChange={(e) =>
          setFormValues((oldValues) => {
            return { ...oldValues, [inputName]: e.target.value };
          })
        }
      />
      <label
        className={`absolute peer-focus:text-[#10bfe1] peer-focus:-top-3 peer-focus:scale-75 transition-all left-2 capitalize ${
          inputValue.trim() ? "-top-3 scale-75 text-[#10bfe1]" : "top-7"
        }`}
        htmlFor={inputName}
      >
        {inputName}
      </label>
      {errorValues.isError && (
        <p
          id={`${inputName}-error`}
          className="text-xs pl-2 pt-2 text-[#c22828]"
        >
          {errorValues.msg}
        </p>
      )}
    </div>
  );
}

export default Input