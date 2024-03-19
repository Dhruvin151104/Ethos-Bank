import React from "react";
import LoginButton from "../components/LoginButton";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test3.png"
import test_svg from "../assets/test_svg.svg"

function Home() {
  const card = (props)=>{
    return(
      <div style={{width:props.width,height:props.height}} className="rounded-2xl shadow-xl bg-white flex flex-col justify-center items-center gap-4 hover:bg-slate-100 duration-200 ease-linear border-b-sky-500 border-b-4">
        <div className="w-full mt-4" style={{height:props.imgHeight}}>
          <img src={props.src} alt="" className="h-full m-auto"/>
        </div>
        <div className=" h-2/5 flex items-center justify-center flex-col gap-3">
          <p className="text-3xl font-medium">Heading</p>
          <p className="text-md px-4 overflow-hidden text-center font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, voluptates.</p>
        </div>
        {props.link && <a href="" className="text-lg hover:text-sky-500 duration-200 ease-in-out font-semibold">Know More &rarr;</a>}
      </div>
    )
  }

  return (
    <div className="font-[Poppins] bg-main-theme">
      <div className=" h-[90vh] w-full flex justify-center items-center relative">
        <div className=" h-3/5 w-2/5 flex bg-transparent justify-center items-start flex-col gap-10 pl-8 absolute left-28">
          <div className="text-white text-4xl font-medium">
            <p className="mb-2">Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div>
            <p className=" text-white text-2xl font-light mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, rerum.
            </p>
            <LoginButton x="4rem" y="0.5rem" />
          </div>
        </div>
        <div
          className=" h-[90%] w-[90%] bg-red-700"
          style={{
            backgroundImage: `url(${test1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="h-[60vh]  flex justify-center items-center mt-32">
        <div className="h-[95%] w-full  flex flex-col justify-center items-center">
          <p className="text-4xl font-semibold text-[#154166]">Services</p>
          <div className="w-full h-full flex justify-around items-center flex-wrap">
          {card({height:"93%",width:"26%",src:test_svg,link:true,imgHeight:"25%",heading:"",description:""})}
          {card({height:"93%",width:"26%",src:test_svg,link:true,imgHeight:"25%",heading:"",description:""})}
          {card({height:"93%",width:"26%",src:test_svg,link:true,imgHeight:"25%",heading:"",description:""})}
          </div>
        </div>
      </div>

      <div className="h-[60vh]  flex justify-center items-center mt-40">
        <div className="h-[95%] w-full  flex flex-col justify-center items-center gap-5">
          <p className="text-4xl font-semibold text-[#154166]">Values</p>
          <div className="w-full h-full flex justify-around items-center flex-wrap">
          {card({height:"93%",width:"26%",src:test2,link:false,imgHeight:"60%",heading:"",description:""})}
          {card({height:"93%",width:"26%",src:test2,link:false,imgHeight:"60%",heading:"",description:""})}
          {card({height:"93%",width:"26%",src:test2,link:false,imgHeight:"60%",heading:"",description:""})}
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
