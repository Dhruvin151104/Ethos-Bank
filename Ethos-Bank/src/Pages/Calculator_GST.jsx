import React from "react";

function button(val) {
  return (
    <>
      <div className=" w-16 h-12 bg-slate-200 shadow-md cursor-pointer flex justify-center items-center rounded-md font-[Poppins] hover:text-cyan-500">
        <button type="button" className=" h-full w-full" onClick={(e) => {}}>
          {val}%
        </button>
      </div>
    </>
  );
}

function Calculator_GST() {
  return (
    <>
      <div className="flex justify-center items-center bg-slate-300 w-full h-[60vh] gap-4 font-[Poppins]">
        <div className="font-[Poppins] text-semibold text-lg bg-red-500">
          GST Calculator: Online GST Calculator
          <p className="">Calculate GST anytime</p>
          <div className="main-panel font-[Poppins] flex">
            <div className="left-panel font-[Poppins]">
              <div className="gst-rates-panel font-[Poppins]">
                <h3>Select Rates</h3>
              </div>
              <div className="gst-rates-block flex gap-5">
                {button(3)}
                {button(5)}
                {button(12)}
                {button(18)}
                {button(28)}
              </div>
              <div className="amt">
                <h3>Cost of Goods & Services</h3>
                <label htmlFor="GSTamt"></label>
                <input id="GSTamt" type="text" inputMode="numeric-only" placeholder="Enter Amount Here" />
              </div>
            </div>
            <div className="right-panel bg-green-400"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator_GST;
