import React, { useState } from "react";
import { useParams } from "react-router-dom";
import rupee from "../assets/rupee-svg.svg";
import debitCard from "../assets/debitCard.png";

function Customer() {
  const [showBalance, setshowBalance] = useState(false);
  const { name } = useParams();

  const buttons = (props) => {
    return (
      <div className=" flex flex-col h-full justify-center items-center gap-9 w-[30%]">
        <button className="text-white text-lg h-[7rem] w-[7rem] rounded-full bg-green-600 hover:bg-green-500 duration-300 ease-linear font-semibold">
          img
        </button>
        <p>{props.txt}</p>
      </div>
    );
  };

  const record = (props) => {
    return (
      <div className={`w-full ${props.height} bg-slate-400 gap-1 flex p-1`}>
          {description({name:props.first, width:"34%", bgcolor:"bg-slate-200"})}
          {description({name:props.second, width:"17%", bgcolor:"bg-slate-200"})}
          {description({name:props.third, width:"17%", bgcolor:"bg-slate-200"})}
          {description({name:props.fourth, width:"17%", bgcolor:"bg-slate-200"})}
          {description({name:props.fifth, width:"17%", bgcolor:"bg-slate-200"})}
        </div>
    )
  }

  const description = (props) => {
    return (
      <div className={`h-full ${props.bgcolor} flex justify-start font-medium items-center rounded-sm pl-2`} style={{width:props.width}}>{props.name}</div>
    )
  }

  return (
    <div className="h-max px-20 w-full bg-main-theme flex flex-col justify-center gap-10 items-center py-10 font-[Poppins] ">
      <div className="h-[50vh] w-full bg-white shadow-xl flex justify-evenly items-center rounded-2xl">
        <div className="h-[80%] w-1/2 bg-slate-100 rou flex pl-10 font-semibold text-lg rounded-2xl">
          <div className="w-1/5 flex flex-col justify-evenly">
            <p>Acc. No. </p>
            <p>Name</p>
            <p>Phone No.</p>
            <p>Email</p>
          </div>
          <div className="  flex flex-col justify-evenly">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="flex flex-col justify-evenly items-start pl-5 w-[70%] font-light ">
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="h-[80%] w-2/5 bg-slate-100 px-2 rounded-2xl font-semibold text-lg flex justify-evenly items-center">
          <div className="w-2/5 h-full  flex justify-center items-center rounded-2xl relative">
            <img src={rupee} alt="" className=" h-[22vh]" />
            <p className=" absolute bg-yellow-200"></p>
          </div>
          <div className="h-full w-3/5  flex flex-col justify-evenly items-center rounded-2xl">
            <p className="text-5xl h-3/5 w-full flex items-center justify-center">
              Balance
            </p>
            <div className="h-2/5 w-full flex items-center justify-center">
              {!showBalance && (
                <button
                  className="text-white text-lg w-[40%] py-2 rounded-lg bg-green-600 hover:bg-green-500 duration-300 ease-linear font-semibold"
                  onClick={() => {
                    setshowBalance(true);
                  }}
                >
                  Check
                </button>
              )}
              {showBalance && (
                <p
                  className={`text-3xl cursor-pointer ${
                    12000 < 0 ? "text-red-600" : ""
                  }`}
                  onClick={() => {
                    setshowBalance(false);
                  }}
                >
                  ₹ 12,000
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full  shadow-xl flex justify-evenly items-center rounded-2xl">
        <div className="h-[80%] w-[93.5%] bg-white rou flex font-semibold text-lg rounded-2xl gap-10">
          <div className="h-full w-[40%] flex bg-green-100 rounded-2xl">
            <img
              src={debitCard}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full w-[60%] flex justify-evenly items-center gap-6 bg-red-100 rounded-2xl">
            {buttons({txt:"View Details"})}
            {buttons({txt:"Change PIN"})}
            {buttons({txt:"Payments"})}
          </div>
        </div>
      </div>
      <div className="h-[80vh] w-full bg-orange-300 overflow-y-auto">
        <div className="h-[15%] w-full bg-blue-200 flex justify-center items-center">
          <p className=" font-semibold text-2xl">Transaction Details</p>
        </div>
        <div className="flex flex-col gap-2">
        <div className="w-full h-full bg-slate-400 gap-1 flex flex-col p-1 ">
          {record({height:"10%", first:"Payment Details", second:"Status", third:"Amount", fourth:"Order No.", fifth:"Order Total"})}
        </div>
        <div className="bg-red-200 h-full w-full flex flex-col justify-start items-center gap-1">
          {record({height:"20%", first:"Payment Details", second:"Status", third:"Amount", fourth:"Order No.", fifth:"Order Total"})}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
