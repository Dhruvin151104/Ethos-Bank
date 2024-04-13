import React,{useEffect,useState} from 'react'
import neft from "../assets/neft.png"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";

function Payments() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])
  const [accNo, setaccNo] = useState("")
  const [IFSC, setIFSC] = useState("")
  const [amount, setamount] = useState("")
  const navigate = useNavigate();

  return (
    <div className='h-[100vh] w-full font-[Poppins] flex items-center justify-center px-20 relative'>
      <FcMoneyTransfer className="z-0 text-[400px] absolute -right-[10rem] opacity-30 rotate-[15deg]"/>
      <div className='h-4/5 w-[35%]  flex justify-center items-center'>
        <img src={neft} alt="" className="w-[75%]"/>
      </div>
      <div className='h-4/5 w-[65%]  flex flex-col justify-evenly pl-10 pr-20 z-10'>
      <Input
        type="text"
        settext={setaccNo}
        text={accNo}
        placeholder="₹ 25,000"
        heading="Enter account number"
      />
      <Input
        type="text"
        settext={setIFSC}
        text={IFSC}
        placeholder="₹ 25,000"
        heading="Enter IFSC Code"
      />
      <Input
        type="number"
        settext={setamount}
        text={amount}
        placeholder="₹ 25,000"
        heading="Enter Amount"
      />

      <div className='w-[80%] h-[15%]  flex  gap-32 items-center justify-between px-2'>
        <button className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[40%] bg-gray-200/70 hover:bg-blue-600 hover:text-white duration-200 ease-linear" onClick={()=>{
          navigate(-1)
        }}>CANCEL</button>

        <button className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[40%] bg-gray-200/70 hover:bg-blue-600 hover:text-white duration-200 ease-linear" onClick={()=>{
          alert("kaam karne")
        }}>MAKE PAYMENT</button>
      </div>
      </div>
    </div>
  )
}

export default Payments
