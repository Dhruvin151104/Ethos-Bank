import React, { useState } from "react";
import loanIMG from "../assets/loan.png";
import LoginButton from "../components/LoginButton";
import Input from "../components/Input";
import loanApplication from "../assets/loanApplication.png";
import test_svg from "../assets/test_svg.svg";
import loanCalc from "../assets/loanCalc.png";
import Circular_Progress from "../components/Circular_Progress";

function Loan() {
  const [loanAmount, setloanAmount] = useState("");
  const [tenure, settenure] = useState("");
  const [rateOfInterest, setrateOfInterest] = useState("");
  const [showLoanApplication, setshowLoanApplication] = useState(false);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");

  const validEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validDetails = () => {
    if (name && email && number && validEmail(email)) return true;
    return false;
  };

  // EMI calculation
  const EMI = () => {
    if (!loanAmount || !tenure || !rateOfInterest)
      return { emi: 0, interest: 0, percent: 0 };
    const temp = (1 + rateOfInterest / 1200) ** (tenure * 12);
    const montlyEmi =
      loanAmount * (rateOfInterest / 1200) * (temp / (temp - 1));
    const total = montlyEmi * tenure * 12;
    const interest = total - loanAmount;
    const percent = (interest / total) * 252;
    return {
      emi: Math.round(montlyEmi),
      interest: Math.round(interest),
      percent: percent.toFixed(2),
    };
  };

  return (
    <div className="w-full min-h-[100vh] px-20 py-10 flex flex-col justify-center items-center gap-20 font-[Poppins]">
      {/* Apply Part */}
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
              <div
                className="flex flex-col w-full"
                onClick={() => {
                  setshowLoanApplication(true);
                }}
              >
                <LoginButton name="Apply Now" y="0.7rem" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Part */}
      <div className="w-full h-[75vh] bg-white shadow-inner rounded-2xl overflow-hidden flex py-10 justify-evenly px-2">
        {/* Image div */}
        <div className="h-full w-[20%] flex justify-center items-center">
          <img src={loanCalc} alt="" className="h-2/5" />
        </div>

        {/* Input+Output */}
        <div className="h-full w-[75%] bg-slate-100 shadow-inner rounded-2xl flex">
          {/* Input div */}
          <div className="h-full w-[60%] p-4">
            <div className="h-full w-full flex flex-col justify-evenly items-start pl-4 gap-1">
              <div className=" h-[10%] font-semibold text-3xl text-[#154166] flex justify-center items-center w-full">
                Monthly EMI Calculator
              </div>
              <div className="h-[80%] flex flex-col justify-center items-start pl-4 gap-9 w-full">
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

          {/* Result div */}
          <div className="h-full w-[45%]  p-4">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="h-[90%] w-[95%] bg-white shadow-inner rounded-2xl overflow-hidden flex flex-col items-center">
                <div className="h-[20%] w-full bg-sky-600 flex justify-center items-center text-3xl font-semibold  text-white">
                  Monthly EMI
                </div>
                <div className="flex justify-start items-center flex-col gap-6 pt-8 w-full">
                  <div className="text-4xl text-sky-600 font-semibold w-full text-center">
                    ₹ {EMI().emi}
                  </div>

                  <div className="text-md font[Poppins] text-black font-semibold w-[95%] h-[26vh] rounded-2xl flex items-center justify-center shadow-inner bg-gray-100">
                    <div className="w-full h-[25vh] flex justify-around items-center">
                      <Circular_Progress
                        height="20vh"
                        width="9vw"
                        value1="0"
                        value2={EMI().percent}
                      />
                      <div className="flex flex-col gap-6">
                        <div className="flex items-start flex-col">
                          <div className="w-full flex gap-2 items-center">
                            <div className=" w-4 h-4 bg-sky-200"></div>
                            <p>Loan Amount</p>
                          </div>
                          <p className=" pl-7">
                            ₹ {loanAmount ? loanAmount : 0}
                          </p>
                        </div>
                        <div className="flex items-start flex-col">
                          <div className="w-full flex gap-2 items-center">
                            <div className=" w-4 h-4 bg-sky-600 "></div>
                            <p>Total Interest</p>
                          </div>
                          <p className=" pl-7">₹ {EMI().interest}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Part */}
      {showLoanApplication && (
        <div className="h-full w-full fixed top-0 bg-gray-700/80 z-10 flex justify-center items-center duration-300 ease-linear">
          <div className="h-[35rem] w-[60rem] bg-slate-100 rounded-2xl shadow-inner relative flex overflow-hidden">
            <div className="h-full w-[30%]  flex justify-center items-center">
              <img src={loanApplication} alt="" />
            </div>
            <div className="h-full w-[70%] ">
              <p className="h-[20%] w-[80%] text-3xl font-semibold flex justify-center items-center text-[#154166]">
                Enter your Details
              </p>
              <div className="w-full h-[60%] flex flex-col pl-4 gap-7">
                <Input
                  type="text"
                  settext={setname}
                  text={name}
                  placeholder="Enter your name"
                  heading="Name"
                />
                <Input
                  type="number"
                  settext={setnumber}
                  text={number}
                  placeholder="Enter your mobile  number"
                  heading="Mobile No."
                />
                <Input
                  type="email"
                  settext={setemail}
                  text={email}
                  placeholder="Enter your email id"
                  heading="Email"
                />
              </div>
              <div className="h-[20%] w-full flex justify-start items-center pl-4 gap-7">
                <button
                  className="py-4 h-1/2 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
                  onClick={() => {
                    setshowLoanApplication(false);
                  }}
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className={`py-4 h-[50%] rounded-lg shadow-inner text-lg font-semibold w-[38%] duration-200 ease-linear bg-gray-200 ${
                    validDetails()
                      ? "text-black hover:text-white hover:bg-blue-600"
                      : "text-slate-500 cursor-not-allowed "
                  }`}
                  disabled={!validDetails()}
                  onClick={() => {
                    console.log({
                      name: name,
                      phoneNumber: number,
                      email: email,
                    });
                    alert("Application Submitted Successfully");
                    setshowLoanApplication(false);
                  }}
                >
                  LOG IN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loan;
