import React from "react";

function SelectionButtons(props) {
  return (
    <div
      className="w-24 h-16 text-2xl font-medium shadow-md cursor-pointer flex justify-center items-center font-[Poppins]"
    >
      <button
        className={`w-full h-full bg-white rounded-md ${
          props.select
            ? "text-sky-600 font-semibold border-sky-600 border-[3px]"
            : ""
        }`}
        onClick={() => {
          props.setindex(props.index);
        }}
      >
        {props.val}%
      </button>
    </div>
  );
}

export default SelectionButtons;
