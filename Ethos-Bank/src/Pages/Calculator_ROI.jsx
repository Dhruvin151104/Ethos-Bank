import React from 'react'
import { useState } from "react";
import Gst from "../assets/gst_logo.svg";

function Calculator_ROI() {
    const [text, settext] = useState("");
    const result = () => {
      const percent = index - 1 == -1 ? 0 : 0;
      const value = parseInt(text);
      const gst_value = value * (percent / 100);
      const total_value = value + gst_value;
      return (
        <div className=" h-4/5 w-1/2 bg-white rounded-2xl shadow-md">
          <div className=" h-1/5 w-full bg-sky-600 rounded-t-2xl flex justify-center items-center text-3xl font-semibold font-[Poppins] text-white">
            Total Selling Price
          </div>
          <div className="flex justify-center items-center flex-col gap-8 pt-9">
            <div className="text-4xl text-sky-600 font-semibold w-full text-center">
              ₹{total_value.toFixed(2)}
            </div>
  
            <div className="text-md font[Poppins] text-black font-semibold w-[90%] h-[10rem] rounded-2xl flex flex-col items-center justify-start pt-4 shadow-md bg-gray-100">
              <div className="w-[90%] flex justify-between items-center px-5">
                <span>SGST {percent / 2}%</span>
                <span>₹{(gst_value / 2).toFixed(2)}</span>
              </div>
              <div className="w-[90%] flex justify-between items-center px-5 pt-4">
                <span>CGST {percent / 2}%</span>
                <span>₹{(gst_value / 2).toFixed(2)}</span>
              </div>
              <div className="w-[90%] flex justify-between items-center px-5 mt-8 pt-2 border-t-2 border-black">
                <span>Total GST</span>
                <span>₹{gst_value.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <div className="bg-[#F4F8FF]">
        <div className=" bg-inherit w-full h-[90vh] gap-4 font-[Poppins] pt-5">
          <div className=" w-full h-1/5 px-24 flex flex-col gap-4 justify-center">
            <p className="font-[Poppins] text-[2.5rem] font-semibold text-[#154166]">
              Return on Investment (ROI) Calculator 
            </p>
            <p className="font-[Poppins] text-lg font-medium text-gray-500">
              Instantly Calculate Returns on your Investments
            </p>
          </div>
          <div className=" w-full h-4/5 flex justify-center items-center">
            <div className="w-1/2 h-full  flex justify-center flex-col px-24">
              <div className=" mt-15 flex flex-col gap-3">
                <p className="text-2xl text-[#154166] font-semibold">
                  Total Amount Invested
                </p>
                <input
                  type="number"
                  onChange={(e) => {
                    settext(e.target.value);
                  }}
                  className="text-[#154166] shadow-md font-semibold h-14 w-11/12 text-2xl pl-5 font-[Poppins] rounded-md remove-arrow"
                  placeholder="₹ 10,000"
                  value={text}
                />
              </div>
              <div className=" mt-10 flex flex-col gap-3">
                <p className="text-2xl text-[#154166] font-semibold">
                  Total Amount Returned
                </p>
                
                <input
                  type="number"
                  onChange={(e) => {
                    settext(e.target.value);
                  }}
                  className="text-[#154166] shadow-md font-semibold h-14 w-11/12 text-2xl pl-5 font-[Poppins] rounded-md remove-arrow"
                  placeholder="₹ 15,000"
                  value={text}
                />
              </div>
              <div className=" mt-10 flex flex-col gap-3">
                <p className="text-2xl text-[#154166] font-semibold">
                  Duration of Investment
                </p>
                <input
                  type="number"
                  onChange={(e) => {
                    settext(e.target.value);
                  }}
                  className="text-[#154166] shadow-md font-semibold h-14 w-11/12 text-2xl pl-5 font-[Poppins] rounded-md remove-arrow"
                  placeholder="2 years"
                  value={text}
                />
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center pt-6">
              {text === "" && <img src={Gst} className=" h-[80vh]" alt="" />}
              {text !== "" && result()}
            </div>
          </div>
        </div>
      </div>
      );
}

export default Calculator_ROI
