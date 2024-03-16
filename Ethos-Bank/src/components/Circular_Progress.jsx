import React from "react";

function Circular_Progress(props) {

  const value1 = props.value1
  const value2 = (252-props.value2)  
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" -rotate-90"
        viewBox="0 0 100 100"
        style={{fill:"none",height:props.height,width:props.width}}
      >
        <circle className="stroke-sky-200 stroke-[15px]" cx="50" cy="50" r="40" style={{strokeDasharray:252,
            strokeDashoffset: value1}}/>
        <circle className="stroke-sky-600 stroke-[15px]" cx="50" cy="50" r="40" style={{strokeDasharray:252,
            strokeDashoffset: value2}}/>
      </svg>
    </div>
  );
}

export default Circular_Progress;
