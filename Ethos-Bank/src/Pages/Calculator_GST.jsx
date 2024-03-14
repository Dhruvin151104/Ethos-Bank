import React from "react";

function button(val) {
  return (
    <>
      <div className=" w-16 h-12 bg-slate-600 cursor-pointer flex justify-center items-center rounded-md font-[Poppins]">
        <button type="button" className=" h-full w-full" onClick={(e)=>{
          
        }}>{val}%</button>
      </div>
    </>
  );
}

function Calculator_GST() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-300 w-full h-[60vh] gap-4">
        <div className="font-monospace text-semibold text-lg">
          GST Calculator: Online GST Calculator
          <p className="">Calculate GST anytime</p>
          <form id="gst-calc-form">
          <div className="form-column">
            <div className="gst-rates-panel">
              <h3>Select Rates</h3>
            </div>
            <div className="gst-rates-block flex gap-3">
              {button(3)}
              {button(5)}
              {button(12)}
              {button(18)}
              {button(28)}
            </div>
          </div>
        </form>
        </div>
      </div>
    </>
  );
}

export default Calculator_GST;
