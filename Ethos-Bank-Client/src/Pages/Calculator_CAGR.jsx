import React from "react";
import { useState } from "react";
import Input from "../components/Input";
import Cagr from "../assets/cagr.png";
import Circular_Progress from "../components/Circular_Progress";

function Calculator_CAGR() {
  const [Invested, setInvested] = useState("");
  const [Matured, setMatured] = useState("");
  const [Duration, setDuration] = useState("");

  const result = () => {
    const cagr = (Matured / Invested) ** (1 / Duration) - 1;
    const gains = Math.floor(cagr < 1 ? 252 * cagr : 252 - 252 / (cagr + 1));

    return (
      <div className=" h-4/5 w-1/2 bg-white rounded-2xl shadow-md">
        <div className=" h-1/5 w-full bg-sky-600 rounded-t-2xl flex justify-center items-center text-4xl font-semibold  text-white">
          CAGR
        </div>
        <div className="flex justify-start items-center flex-col gap-6 pt-9">
          <div className="text-4xl text-sky-600 font-semibold w-full text-center">
            {(cagr * 100).toFixed(2)}%
          </div>

          <div className="text-md font[Poppins] text-black font-semibold w-[90%] h-[26vh] rounded-2xl flex items-center justify-center shadow-md bg-gray-100">
            {cagr>0 && <div className="w-full h-[25vh] flex justify-around items-center">
              <Circular_Progress
                height="30vh"
                width="11vw"
                value1="0"
                value2={gains}
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <div className=" w-5 h-5 bg-sky-200"></div>Invested
                </div>
                <div className="flex gap-2 items-center">
                  <div className=" w-5 h-5 bg-sky-600"></div>Gains
                </div>
              </div>
            </div>}
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
            CAGR Calculator (Compound Annual Growth Rate)
          </p>
          <p className=" text-lg font-medium text-gray-500">
            Accurately Measure Compounded Growth Using Razorpay CAGR Calculator
          </p>
        </div>
        <div className=" w-full h-4/5 flex justify-center items-center">
          <div className="w-1/2 h-full  flex justify-center flex-col px-24 gap-11">
            <Input
              type="number"
              settext={setInvested}
              text={Invested}
              placeholder="₹ 10,000"
              heading="Enter Total Investment"
            />
            <Input
              type="number"
              settext={setMatured}
              text={Matured}
              placeholder="₹ 70,000"
              heading="Total Maturity Value"
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
            {(Invested === "" || Matured === "" || Duration === "") && (
              <img src={Cagr} className=" h-[50vh]" alt="" />
            )}
            {!(Invested === "" || Matured === "" || Duration === "") &&
              result()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator_CAGR;
