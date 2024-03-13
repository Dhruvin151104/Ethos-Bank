import React from "react";

function LoginButton(props) {
  return (
    <button className="text-white font-[Poppins] text-lg py-2 ${len} rounded-lg bg-[#116CB3] hover:bg-sky-500 duration-300 ease-linear font-semibold" style={{paddingLeft:props.length,paddingRight:props.length}}>
        Login
      </button>
  );
}

export default LoginButton;
