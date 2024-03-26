import React from "react";
import gst from "../assets/gst.png";
import roi from "../assets/roi-calc.png";
import cagr from "../assets/cagr-calc.svg";
import { useState } from "react";
import { useNavigate,Outlet } from "react-router-dom";

function Calculator() {
    const navigate = useNavigate()
  const [index, setindex] = useState(0);
  

  const box = (props) => {
    return (
      <button
        key={props.key}
        className={`h-[90%] w-[30%] bg-white shadow-md rounded-2xl duration-150 ease-linear cursor-pointer ${
          index == props.key
            ? "bg-sky-100 outline-2 outline-sky-300 outline"
            : ""
        }`}
        onClick={()=>{
            navigate(props.cal)
            setindex(props.key)
        }}
      >
        <div className="w-full h-1/2 flex justify-center items-center">
          <img src={props.img} alt="" className="h-3/5" />
        </div>
        <div className="w-full h-1/2  flex justify-center items-center flex-col text-3xl font-semibold text-[#154166]">
          <p>{props.name}</p>
          <p>Calculator</p>
        </div>
      </button>
    );
  };

  return (
    <div className="h-max min-h-[80vh] w-full  flex flex-col justify-center items-center pt-10 gap-10">
      <div className="h-[40vh] w-full px-20">
        <div className="h-full w-full 0 flex justify-evenly items-center gap-3">
          {box({ name: "GST", key: 1,img:gst,cal:"gst"})}
          {box({ name: "ROI", key: 2,img:roi,cal:"roi"})}
          {box({ name: "CAGR", key: 3, img:cagr,cal:"cagr"})}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Calculator;
