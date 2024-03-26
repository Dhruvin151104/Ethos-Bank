import React,{useState} from "react";
import { useParams } from "react-router-dom";
import rupee from "../assets/rupee-svg.svg";

function Customer() {
  const [showBalance, setshowBalance] = useState(false)
  const { name } = useParams();
  return (
    <div className="h-max px-20 w-full bg-main-theme flex flex-col justify-center gap-10 items-center py-10 font-[Poppins] ">
      <div className="h-[50vh] w-full bg-blue-300 shadow-inner flex justify-evenly items-center rounded-2xl">
        <div className="h-[80%] w-1/2 bg-slate-200 rou flex pl-10 font-semibold text-lg rounded-2xl">
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
        <div className="h-[80%] w-2/5 bg-slate-200 px-2 rounded-2xl font-semibold text-lg flex justify-evenly items-center">
          <div className="w-2/5 h-full  flex justify-center items-center rounded-2xl">
            <img src={rupee} alt="" className=" h-[22vh]" />
          </div>
          <div className="h-full w-3/5  flex flex-col justify-evenly items-center rounded-2xl">
            <p className="text-5xl">Balance</p>
            {showBalance && <button
            className="text-white text-lg w-[40%] py-2 rounded-lg bg-green-600 hover:bg-green-500 duration-300 ease-linear font-semibold"
            >
                Check
            </button>}
            <p className={`text-3xl ${12000<0?"text-red-600":""}`}>₹ 12,000</p>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full bg-blue-300 shadow-inner flex justify-evenly items-center rounded-2xl">
        <div className=" h-full w-[50%] rounded-2xl">

        </div>
        <div className="h-full w-[50%] bg-orange-400 rounded-2xl">
          
        </div>
      </div>
      <div className="h-[80vh] w-full bg-orange-300 overflow-y-auto"></div>
    </div>
  );
}

export default Customer;
