import React from "react";

function Input({type,settext}) {
  return (
    <input
      type={type}
      onChange={(e) => {
        settext(e.target.value);
      }}
      className="text-[#154166] shadow-md font-semibold h-14 w-11/12 text-2xl pl-5 font-[Poppins] rounded-md remove-arrow"
      placeholder="₹ 25,000"
      value={text}
    />
  );
}

export default Input;
