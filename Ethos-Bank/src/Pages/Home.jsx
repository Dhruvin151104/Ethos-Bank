import React from "react";
import LoginButton from "../components/LoginButton";

function Home() {
  return (
    <>
      <div className=" h-[70vh] w-full bg-slate-500 flex justify-center items-center">
        <div className=" h-3/4 w-2/4 bg-black flex justify-center items-start flex-col gap-10 pl-8 pr-10">
          <div>
            <p className=" text-white text-4xl  font-[Poppins] mb-2 font-medium bg-inherit">
              Lorem ipsum dolor sit.
            </p>
            <p className=" text-white text-4xl font-medium font-[Poppins]">
              Lorem ipsum dolor sit.
            </p>
          </div>
          <div className=" bg-inherit">
            <p className=" text-white text-2xl font-[Poppins] font-light mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, rerum.
            </p>
            <LoginButton x="4rem" y="0.5rem" />
          </div>
        </div>
        <div className=" h-full w-2/4 bg-red-700"></div>
      </div>
    </>
  );
}

export default Home;
