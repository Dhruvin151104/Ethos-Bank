import React from "react";
import Logo from "./Logo";
import logoIMG from "../assets/favicon.png";
import fb from "../assets/facebook.svg";
import insta from "../assets/instagram.svg";
import twit from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
import globe from "../assets/earth.svg"

function Footer() {
  const usefulLinks = ["Home", "Support", "Terms of Service", "Privacy Policy"];
  const Services = ["Accounts", "Payments", "Loans", "Calculators"];
  const media = (props) => {
    return (
      <div key={props.key} className=" h-7 w-7 cursor-pointer">
        <img src={props.img} className="h-full w-full object-fill"></img>
      </div>
    );
  };
  const element = (props) => {
    return (
      <p key={props.key} className=" cursor-pointer hover:text-sky-600 ease-in-out duration-200">
        &gt; {props.text}
      </p>
    );
  };
  return (
    <div className="  h-[50vh] flex justify-center items-center font-[Poppins] bg-slate-200 relative overflow-hidden">
      
      <div className=" h-4/5 w-2/5 flex justify-center items-start flex-col pl-14 gap-8">
        <div className="h-14  flex items-center">
          <Link className="h-full" to="/">
            <Logo img={logoIMG} />
          </Link>
        </div>
        <div className=" text-md font-light flex flex-col gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            provident quis obcaecati libero est mollitia error nostrum corporis
            necessitatibus delectus!
          </p>
          <div className="flex gap-4">
            {media({ img: fb,key:"1"})}
            {media({ img: insta,key:"2" })}
            {media({ img: twit,key:"3" })}
            {media({ img: linkedin ,key:"4"})}
            {media({ img: github ,key:"5"})}
          </div>
        </div>
      </div>
      <div className=" h-4/5 w-3/5  flex justify-evenly items-center">
        <div className=" h-[90%] w-[25%]  items-start justify-center flex flex-col pl-4 gap-5">
          <div className="h-[30%] w-full flex items-end">
            <p className=" text-2xl font-semibold text-[#154166]">
              Useful Links
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-1 font-normal text-lg h-[70%]">
            {usefulLinks.map((e,index) => element({text:e,key:index}))}
          </div>
        </div>
        <div className=" h-[90%] w-[25%]  items-start justify-center flex flex-col pl-4 gap-5 relative z-10">
          <div className="h-[30%] w-full flex items-end">
            <p className=" text-2xl font-semibold text-[#154166]">Services</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-1 font-normal text-lg h-[70%]">
            {Services.map((e,index) => element({text:e,key:index}))}
          </div>
        </div>
        <div className=" h-[90%] w-[35%]  items-start justify-center flex flex-col pl-4 gap-5 relative z-10">
          <div className="h-[30%] w-full flex items-end">
            <p className=" text-2xl font-semibold text-[#154166]">Contact Us</p>
          </div>
          <div className=" w-full text-md flex flex-col justify-start gap-5 h-[70%]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              aliquid.
            </p>
            <div className="text-sm">
              <p>
                <b>Phone: </b> 1234567890
              </p>
              <p>
                <b>Email: </b> ethos.fintech@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={globe} alt="" className="absolute right-2 top-4 h-[70vh] z-0 opacity-20" />
    </div>
  );
}

export default Footer;
