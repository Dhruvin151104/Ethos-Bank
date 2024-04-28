import React, { useEffect, useState, useRef } from "react";
import neft from "../assets/neft.png";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import axios from "axios";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import Success from "../components/Success";

function Payments() {
  const [accNo, setaccNo] = useState("");
  const [IFSC, setIFSC] = useState("");
  const [amount, setamount] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const alertMessage = useRef({ title: "", message: "" });
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const [showSpinner, setshowSpinner] = useState(false);
  const buttonDisable = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userDetails")) {
      navigate("/login");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const value = parseFloat(amount);
    const min = parseFloat(0);

    if (value < min) setamount(min);
  }, [amount]);

  const makeTxn = async () => {
    buttonDisable.current = true;
    setshowSpinner(true);
    await axios
      .post(import.meta.env.VITE_SERVER + "/maketxn", {
        senderAC: userDetails.accNo,
        receiverAC: accNo,
        IFSC: IFSC,
        amount: amount,
      })
      .then((result) => {
        setshowSpinner(false);
        buttonDisable.current = false;
        alertMessage.current = { title: "Success", message: result.data };
        setshowSuccess(() => true);
      })
      .catch((error) => {
        setshowSpinner(false);
        buttonDisable.current = false;
        alertMessage.current = {
          title: "Alert!",
          message: error.response.data,
        };
        setshowAlert(() => true);
      });
  };

  const detailsFilled = () => {
    if (accNo && IFSC && amount) return true;
    return false;
  };

  return (
    <div className="h-[100vh] w-full font-[Poppins] flex items-center justify-center px-20">
      <Success
        message={alertMessage.current.message}
        setshow={setshowSuccess}
        show={showSuccess}
      />
      <Alert
        title={alertMessage.current.title}
        message={alertMessage.current.message}
        setshow={setshowAlert}
        show={showAlert}
      />
      <FcMoneyTransfer className="z-0 text-[400px] absolute -right-[10rem] opacity-30 rotate-[15deg]" />
      <div className="h-4/5 w-[35%]  flex justify-center items-center">
        <img src={neft} alt="" className="w-[75%]" />
      </div>
      <div className="h-4/5 w-[65%]  flex flex-col justify-evenly pl-10 pr-20 z-10">
        <Input
          type="text"
          settext={setaccNo}
          text={accNo}
          placeholder="EB0000XXXXXXX"
          heading="Enter account number"
        />
        <Input
          type="text"
          settext={setIFSC}
          text={IFSC}
          placeholder="EB000 - Put this only"
          heading="Enter IFSC Code"
        />
        <Input
          type="number"
          settext={setamount}
          text={amount}
          placeholder="₹ 25,000"
          heading="Enter Amount"
        />

        <div className="w-[80%] h-[15%]  flex  gap-32 items-center justify-between px-2">
          <button
            className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[40%] bg-gray-200/70 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
            onClick={() => {
              navigate(-1);
            }}
          >
            CANCEL
          </button>

          <button
            className={`py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] duration-200 ease-linear bg-gray-200/70 ${
              detailsFilled() && !buttonDisable.current
                ? "text-black hover:text-white hover:bg-blue-600"
                : "text-slate-500 cursor-not-allowed "
            }`}
            disabled={!detailsFilled() || buttonDisable.current}
            onClick={makeTxn}
          >
            MAKE PAYMENT
          </button>
        </div>
        <div className="w-[80%] flex justify-center">
          {showSpinner && <Spinner />}
        </div>
      </div>
    </div>
  );
}

export default Payments;
