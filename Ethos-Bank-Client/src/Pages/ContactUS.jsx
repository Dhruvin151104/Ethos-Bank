import React from 'react'
import Address from "../assets/addressSVG.svg";
import call from "../assets/callSVG.svg";
import clock from "../assets/clockSVG.svg";
import email from "../assets/emailSVG.svg";
import chat from "../assets/chat.svg"
import LoginButton from '../components/LoginButton';

function ContactUS() {

    const element = (props)=>{
        return(
            <div className=' cursor-pointer h-[80%] w-[80%] rounded-2xl flex justify-evenly items-center flex-col shadow-inner bg-slate-100 hover:bg-slate-200 duration-200 ease-linear border-b-sky-500 border-b-4'>
                <div className='h-[20%] w-full pl-5'>
                    <img src={props.img} className='h-full'/>
                </div>
                <div className='h-[50%] w-full pl-6 pr-2 flex flex-col gap-3'>
                    <p className='text-xl font-semibold'>{props.heading}</p>
                    <p className='text-md text-gray-500'>{props.text}</p>
                </div>
            </div>
        )
    }
  return (
    <div className=' font-[Poppins] h-[100vh]'>
        <div className='h-[15%] flex items-center justify-center pt-5'>
        <p className='text-[#154166] text-4xl font-semibold text-center'>Contact Us</p>
        </div>

        <div className='h-[85%] w-full  flex justify-center items-center'>
            <div className='h-full w-1/2  grid grid-cols-2 grid-rows-2 place-items-center'>
                {element({img:Address, heading:"Locate Us", text:"Locate your nearest branch now!"})}
                {element({img:call, heading:"Call Us", text:"Customer Care: 1234567890"})}
                {element({img:clock, heading:"Open Hours", text:"10:00AM - 5:00PM (Monday - Friday)"})}
                {element({img:email, heading:"Email Us", text:"ethos.fintech@gmail.com"})}
            </div>
            <div className='h-[90%] w-1/2 flex justify-center items-center rounded-2xl shadow-inner mx-8 bg-slate-100 border-b-sky-500 border-b-4'>
                <div className='h-full w-[20rem] flex justify-evenly items-center flex-col'>
                    <img src={chat} alt="" className='h-[15rem]'/>
                    <LoginButton name="Chat With Us" x="4rem"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ContactUS
