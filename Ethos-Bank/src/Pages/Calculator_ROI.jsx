import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import Roi from "../assets/roi.png";

function Calculator_ROI() {
  const [Invested, setInvested] = useState("");
  const [Returned, setReturned] = useState("");
  const [Duration, setDuration] = useState("");

  const result = () => {
    const gain = Returned-Invested
    const roi = (gain/Invested)*100;
    const annualRoi = roi/Duration;

    return (
      <div className=" h-4/5 w-1/2 bg-white rounded-2xl shadow-md">
        <div className=" h-1/5 w-full bg-sky-600 rounded-t-2xl flex justify-center items-center text-2xl font-semibold  text-white">
          TOTAL INVESTMENT GAIN
        </div>
        <div className="flex justify-start items-center flex-col gap-8 pt-9">
          <div className="text-4xl text-sky-600 font-semibold w-full text-center">
            ₹{gain.toFixed(2)}
          </div>

          <div className="w-full h-[25vh] flex justify-around items-center">
            <div className="h-4/5 bg-gray-100 w-2/5 rounded-2xl shadow-md flex flex-col justify-center items-center">
              <p className=" text-lg font-bold  text-sky-600">Return On</p>
              <p className=" text-lg font-bold  text-sky-600">Investement</p>
              <p className="text-xl font-semibold  pt-6">{roi.toFixed(2)}%</p>
            </div>
            <div className="h-4/5 bg-gray-100 w-2/5 rounded-2xl shadow-md flex flex-col justify-center items-center">
              <p className=" text-lg font-bold  text-sky-600">Annual</p>
              <p className=" text-lg font-bold  text-sky-600">ROI</p>
              <p className="text-xl font-semibold  pt-6">{annualRoi.toFixed(2)}%</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-main-theme font-[Poppins]">
      <div className=" bg-inherit w-full h-[90vh] gap-4  pt-5">
        <div className=" w-full h-1/5 px-24 flex flex-col gap-4 justify-center">
          <p className=" text-[2.5rem] font-semibold text-[#154166]">
            Return on Investment (ROI) Calculator
          </p>
          <p className=" text-lg font-medium text-gray-500">
            Instantly Calculate Returns on your Investments
          </p>
        </div>
        <div className=" w-full h-4/5 flex justify-center items-center">
          <div className="w-1/2 h-full  flex justify-center flex-col px-24 gap-11">
            <Input
              type="number"
              settext={setInvested}
              text={Invested}
              placeholder="₹ 10,000"
              heading="Total Amount Invested"
            />
            <Input
              type="number"
              settext={setReturned}
              text={Returned}
              placeholder="₹ 15,000"
              heading="Total Amount Returned"
            />
            <Input
              type="number"
              settext={setDuration}
              text={Duration}
              placeholder="2 years"
              heading="Duration of Investment"
            />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center pt-6">
            {(Invested === "" || Returned === "" || Duration === "") && (
              <img src={Roi} className=" h-[80vh]" alt="" />
            )}
            {!(Invested === "" || Returned === "" || Duration === "") &&
              result()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator_ROI;
