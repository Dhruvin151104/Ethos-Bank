import React from "react";
import Logo from "./Logo";
import logoIMG from "../assets/favicon.png";
import fb from "../assets/facebookSVG.svg";
import insta from "../assets/instagramSVG.svg";
import twit from "../assets/twitterSVG.svg";
import linkedin from "../assets/linkedinSVG.svg";

function Footer() {
    const usefulLinks = ['Home', 'Support', 'Terms of Service', 'Privacy Policy'];
    const Services = ['Accounts', 'Payments', 'Loans', 'Calculators'];
  const media = (props) => {
    return (
      <div className=" h-8 w-8 cursor-pointer">
        <img src={props.img} className="h-full w-full"></img>
      </div>
    );
  };
  const element = (e) => {
    return (
        <p className=" cursor-pointer hover:text-sky-600 ease-in-out duration-200">
            &gt; {e}
        </p>
    );
  };
  return (
    <div className="  h-[50vh] flex justify-center items-center font-[Poppins] bg-slate-200 mt-10">
      <div className=" h-4/5 w-2/5 flex justify-center items-start flex-col pl-14 gap-8">
        <div className="h-14  flex items-center">
          <Logo img={logoIMG} />
        </div>
        <div className=" text-md font-light flex flex-col gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
            provident quis obcaecati libero est mollitia error nostrum corporis
            necessitatibus delectus!
          </p>
          <div className="flex gap-4">
            {media({ img: fb })}
            {media({ img: fb })}
            {media({ img: fb })}
            {media({ img: fb })}
          </div>
        </div>
      </div>
      <div className=" h-4/5 w-3/5  flex justify-evenly items-center">
            <div className=" h-[90%] w-[25%]  items-start justify-center flex flex-col pl-4 gap-5">
              <div className="h-[30%] w-full flex items-end">
              <p className=" text-2xl font-semibold text-[#154166]">Useful Links</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 font-normal text-lg h-[70%]">
                {usefulLinks.map((e) => element(e))}
              </div>
            </div>
            <div className=" h-[90%] w-[25%]  items-start justify-center flex flex-col pl-4 gap-5 ">
              <div className="h-[30%] w-full flex items-end">
              <p className=" text-2xl font-semibold text-[#154166]">Services</p>
              </div>
              <div className="flex flex-col justify-start items-start gap-1 font-normal text-lg h-[70%]">
                {Services.map((e) => element(e))}
              </div>
            </div>
            <div className=" h-[90%] w-[35%]  items-start justify-center flex flex-col pl-4 gap-5">
              <div className="h-[30%] w-full flex items-end">
              <p className=" text-2xl font-semibold text-[#154166]">Contact Us</p>
              </div>
              <div className=" w-full text-md flex flex-col justify-start gap-5 h-[70%]">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquid.</p>
                  <div className="text-sm">
                    <p><b>Phone: </b> 1234567890</p>
                    <p><b>Email: </b> ethos.fintech@gmail.com</p>
                  </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Footer;
