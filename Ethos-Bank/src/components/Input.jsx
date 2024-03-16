import React from "react";

function Input(props) {
  return (
    <>
      <p className="text-2xl text-[#154166] font-semibold">
        {props.heading}
      </p>
      <input
        type={props.type}
        onChange={(e) => {
          props.settext(e.target.value);
        }}
        className="text-[#154166] shadow-md font-semibold h-14 w-11/12 text-2xl pl-5 font-[Poppins] rounded-md remove-arrow focus:outline-sky-600 outline-8"
        placeholder={props.placeholder}
        value={props.text}
      />
    </>
  );
}

export default Input;
