import React, { useState } from "react";
import { useParams } from "react-router-dom";
import rupee from "../assets/wallet.png";
import debitCard from "../assets/debitCard.png";
import viewDetails from "../assets/viewDetaiils.svg";
import changePIN from "../assets/profilePIN.svg";
import payments from "../assets/profilepayments.svg";
import axios from "axios";

function Customer() {
  const [showBalance, setshowBalance] = useState(false);
  const [cardDetails, setcardDetails] = useState({cardNo:"XXXXXXXXXXXXXXXX", expDate:'MM/YY', cvv:'XXX'});
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const getCardDetails = async (e) => {
    return await new Promise((resolve, reject) => {
      axios
        .get("http://localhost:5174/customer/getCardDetails", {
          params: { accNo: userDetails.accNo },
        })
        .then((result) => {
          if (result.status === 200) {
            setcardDetails(cardDetails.cvv == 'XXX' ? result.data : {cardNo:"XXXXXXXXXXXXXXXX", expDate:'MM/YY', cvv:'XXX'});
            console.log(cardDetails);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  const buttons = (props) => {
    return (
      <div className=" flex flex-col h-full justify-center items-center gap-6 w-[30%]">
        <button
          onClick={props.onClick}
          className="text-white text-lg rounded-full bg-sky-600 hover:bg-sky-400 duration-300 ease-linear font-semibold w-[6.5rem] h-[6.5rem] flex items-center justify-center"
        >
          <img src={props.img} alt="" className=" h-1/2" />
        </button>
        <p>{props.txt}</p>
      </div>
    );
  };

  const record = (props) => {
    return (
      <div
        className={`w-full  bg-white gap-1 flex p-1 ${
          props.border == 1 ? "border-b-[1px] border-sky-300" : ""
        }`}
        style={{ height: props.height }}
      >
        {description({
          name: props.first,
          width: "34%",
          bgcolor: props.bgcolor,
        })}
        {description({
          name: props.second,
          width: "17%",
          bgcolor: props.bgcolor,
        })}
        {description({
          name: props.third,
          width: "17%",
          bgcolor: props.bgcolor,
        })}
        {description({
          name: props.fourth,
          width: "17%",
          bgcolor: props.bgcolor,
        })}
        {description({
          name: props.fifth,
          width: "17%",
          bgcolor: props.bgcolor,
        })}
      </div>
    );
  };

  const description = (props) => {
    return (
      <div
        className={`${props.bgcolor} flex justify-start font-medium items-center rounded-sm pl-2`}
        style={{ width: props.width }}
      >
        {props.name}
      </div>
    );
  };

  return (
    <div className="h-max px-20 w-full bg-main-theme flex flex-col justify-center gap-20 items-center py-10 font-[Poppins]">
      {/* Profile */}
      <div className="h-[50vh] w-full bg-white shadow-md flex justify-evenly items-center rounded-2xl">
        <div className="h-[80%] w-1/2 bg-slate-100 flex pl-10 font-semibold text-lg rounded-2xl">
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
            <p>{userDetails.accNo}</p>
            <p>{userDetails.name}</p>
            <p>{userDetails.phoneNo}</p>
            <p>{userDetails.email}</p>
          </div>
        </div>
        <div className="h-[80%] w-2/5 bg-slate-100 px-2 rounded-2xl font-semibold text-lg flex justify-evenly items-center">
          <div className="w-2/5 h-full  flex justify-center items-center rounded-2xl relative">
            <img src={rupee} alt="" className=" h-[22vh]" />
            <p className=" absolute bg-yellow-200"></p>
          </div>
          <div className="h-full w-3/5  flex flex-col justify-center items-center rounded-2xl">
            <p className="text-5xl h-2/5 w-full flex items-center pt-10 justify-center">
              Balance
            </p>
            <div className="w-full h-2/5 flex items-center justify-center">
              {!showBalance && (
                <button
                  className="text-white text-lg w-[40%] py-2 rounded-lg bg-sky-600 hover:bg-sky-400 duration-300 ease-linear font-semibold"
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
                    userDetails.balance < 0 ? "text-red-600" : ""
                  }`}
                  onClick={() => {
                    setshowBalance(false);
                  }}
                >
                  ₹ {userDetails.balance}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="h-[50vh] w-full bg-white shadow-md flex justify-evenly items-center rounded-2xl">
        <div className="h-[80%] w-[93.5%]  flex font-semibold text-lg rounded-2xl gap-10">
          <div className=" font-mono h-full w-[40%] flex rounded-2xl z-10 relative flex-col">
            <img
              src={debitCard}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="bg-transparent text-white w-full flex gap-8 left-[3rem] absolute top-[3.5rem] z-10 rounded-t-lg">
              <p> 
                {userDetails.gender === "Male" ? "MR " : "MS "}
                {userDetails.name.split(" ")[0].toUpperCase()}
              </p>
            </div>
            <div className="bg-transparent text-white text-3xl w-full flex gap-8 left-[16.6rem] absolute top-[3.5rem] z-10 rounded-t-lg font-[Poppins]">
              <p><span className="text-cyan-400">E</span>THOS</p>
            </div>
              <div className="bg-transparent text-white w-full flex left-[3rem] absolute top-[9.5rem] z-10 rounded-t-lg gap-7">
                {cardDetails.cardNo.match(/.{1,4}/g).map((group, index) => {
                  return (
                    <div key={index} className="flex gap-1">
                      {group.split("").map((element, index) => {
                        return <p key={index}>{element}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="bg-transparent text-white w-full flex gap-8 left-[3rem] absolute top-[13rem] z-10 rounded-t-lg">
                <p>EXP:{cardDetails.expDate}</p>
                <p>CVV:{cardDetails.cvv}</p>
              </div>
          </div>
          <div className="h-full w-[60%] flex justify-evenly items-center gap-6 bg-slate-100 rounded-2xl">
            {buttons({
              txt: `${cardDetails.cvv == 'XXX' ? "View Details" : "Hide Details"}`,
              img: viewDetails,
              onClick: getCardDetails,
            })}
            {buttons({ txt: "Change PIN", img: changePIN })}
            {buttons({ txt: "Payments", img: payments })}
          </div>
        </div>
      </div>
      {/* Transaction */}
      <div className="h-[70vh] w-full bg-white shadow-md rounded-2xl mb-4">
        <div className=" h-[15%] w-full rounded-2xl flex justify-center items-center">
          <p className=" font-medium text-3xl">Transaction Details</p>
        </div>
        <div className="w-full  h-[10%] flex justify-center items-center">
          {record({
            height: "100%",
            first: "Payment Details",
            second: "Status",
            third: "Amount",
            fourth: "Order No.",
            fifth: "Order Total",
            bgcolor: "bg-slate-300",
          })}
        </div>
        <div className="w-full  h-[75%] rounded-2xl overflow-y-auto ">
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
          {record({
            height: "15%",
            first: "Received 1000 Rs",
            second: "Successfull",
            third: "1000",
            fourth: "1",
            fifth: "1000",
            border: 1,
          })}
        </div>
      </div>
    </div>
  );
}

export default Customer;
