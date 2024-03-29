import React, { useState } from "react";
import loanIMG from "../assets/loan.png";
import LoginButton from "../components/LoginButton";
import Input from "../components/Input";
import test_svg from "../assets/test_svg.svg";
import loanCalc from "../assets/loanCalc.png";
import Circular_Progress from "../components/Circular_Progress";

function Loan() {
  const [loanAmount, setloanAmount] = useState();
  const [tenure, settenure] = useState();
  const [rateOfInterest, setrateOfInterest] = useState();

  return (
    <div className="w-full min-h-[100vh] px-20 py-10 flex flex-col justify-center items-center gap-20 font-[Poppins]">
      <div className=" w-full h-[90vh] flex">
        <div className="h-full w-3/5 flex justify-center pl-2">
          <img src={loanIMG} alt="" className="h-[105vh] object-cover" />
        </div>
        <div className="h-full w-2/5  flex justify-start items-center pl-7 pt-10">
          <div className=" h-3/5 w-full flex bg-transparent justify-center items-start flex-col gap-10">
            <div className="text-black text-4xl font-medium">
              <p className="mb-2 ">Lorem, ipsum dolor.</p>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className=" text-black text-2xl font-light mb-5">
                Lorem ipsum dolor sit amet.
              </p>
              <LoginButton name="Apply Now" y="0.7rem" />
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Part */}
      <div className="w-full h-[70vh] bg-white shadow-inner rounded-2xl overflow-hidden flex">
        <div className="h-full w-[25%] flex justify-center items-center">
          <img src={loanCalc} alt="" className="h-2/5" />
        </div>
        <div className="h-full w-[45%]  p-4">
          <div className="h-full w-full rounded-2xl shadow-inner flex flex-col justify-center items-start pl-4 bg-slate-100 gap-1">
            <div className=" h-[10%] font-semibold text-3xl text-[#154166] flex justify-center items-center w-full">Monthly EMI Calculator</div>
            <div className="h-[90%] flex flex-col justify-center items-start pl-4 gap-10 w-full">
          <Input
              type="number"
              settext={setloanAmount}
              text={loanAmount}
              placeholder="₹ 10,000"
              heading="Loan Amout"
            />
          <Input
              type="number"
              settext={settenure}
              text={tenure}
              placeholder="1 years"
              heading="Tenure (Years)"
            />
          <Input
              type="number"
              settext={setrateOfInterest}
              text={rateOfInterest}
              placeholder="0.5%"
              heading="Interest Rate (% P.A.)"
            />
            </div>
          </div>
        </div>
        <div className="h-full w-[30%] bg-red-600">
            <Circular_Progress
                height="30vh"
                width="11vw"
                value1="0"
                value2="200"
              />
        </div>
      </div>
    </div>
  );
}

export default Loan;
