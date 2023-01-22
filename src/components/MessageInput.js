import React from 'react'

const MessageInput = ({formValues,messageError, setFormValues}) => {
  return (
    <div className="w-full relative pt-4">
      <textarea
        className={`w-full bg-darkShade resize-none min-h-[384px] px-2 py-3 peer  ${
          messageError.isError && "outline-none outline-1 outline-[#c22828]"
        }`}
        name="message"
        id="message"
        value={formValues.message}
        aria-invalid={messageError.isError}
        aria-describedby="message-error"
        onChange={(e) =>
          setFormValues({ ...formValues, message: e.target.value })
        }
      ></textarea>
      <label
        className={`absolute peer-focus:text-[#10bfe1] peer-focus:-top-3 peer-focus:scale-75 transition-all left-2 ${
          formValues.message.trim() ? "-top-3 scale-75 text-[#10bfe1]" : "top-7"
        }`}
        htmlFor="message"
      >
        Message
      </label>
      {messageError.isError && (
        <p id="message-error" className="text-xs pl-2 pt-2 text-[#c22828]">
          {messageError.msg}
        </p>
      )}
    </div>
  );
}

export default MessageInput