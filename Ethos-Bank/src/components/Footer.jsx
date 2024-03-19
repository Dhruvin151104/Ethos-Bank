import React from "react";
import Logo from "./Logo";
import logoIMG from "../assets/favicon.png";
import fb from "../assets/facebookSVG.svg";
import insta from "../assets/instagramSVG.svg";
import twit from "../assets/twitterSVG.svg";
import linkedin from "../assets/linkedinSVG.svg";

function Footer() {
    const media = (props)=>{
        return (
            <div className=" h-8 w-8 cursor-pointer">
                <img src={props.img} className="h-full w-full"></img>
            </div>
        );
    }
  return (
    <div className="  h-[50vh] flex justify-center items-center font-[Poppins] bg-slate-200 mt-10">
      <div className=" h-4/5 w-2/5 flex justify-center items-start flex-col pl-14 gap-5">
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
            {media({img:fb})}
            {media({img:fb})}
            {media({img:fb})}
            {media({img:fb})}
            
          </div>
        </div>
      </div>
      <div className=" h-1/2 w-3/5 bg-red-400"></div>
    </div>
  );
}

export default Footer;
