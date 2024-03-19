import React from "react";

function LoginButton(props) {
  return (
    <button
      className="text-white text-lg py-2 ${len} rounded-lg bg-[#116CB3] hover:bg-sky-500 duration-300 ease-linear font-semibold"
      style={{
        paddingLeft: props.x,
        paddingRight: props.x,
        paddingTop: props.y,
        paddingBottom: props.y,
      }}
    >
      {props.name}
    </button>
  );
}

export default LoginButton;
