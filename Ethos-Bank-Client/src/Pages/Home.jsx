import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test3.png";
import test_svg from "../assets/test_svg.svg";
import { Link } from "react-router-dom";

function Home() {
  const element = (props) => {
    return (
      <div
        className="rounded-xl flex justify-evenly items-center shadow-md bg-gray-50 hover:bg-sky-50 duration-100 ease-linear hover:outline outline-2 outline-sky-600"
        style={{ width: props.width, height: props.height }}
      >
        <div className="h-full w-[30%]">
          <img src={props.img} className="h-full" />
        </div>
        <div className="h-full w-[70%] pl-6 pr-2 flex flex-col justify-center items-start gap-3">
          <p className="text-3xl font-semibold">{props.heading}</p>
          <p className="text-md text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            labore.
          </p>
          <a
            href=""
            className="text-md hover:text-sky-500 duration-200 ease-in-out font-semibold cursor-pointer"
          >
            Know More &rarr;
          </a>
        </div>
      </div>
    );
  };

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
            <Link to='/login'>
              <LoginButton x="4rem" y="0.5rem" name="Login" />
            </Link>
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

      <div className=" mt-16">
        <div className=" w-[100%] text-5xl font-normal flex flex-col justify-center gap-1 pl-20">
            <p>The all in one <span className=" text-blue-500 font-medium"> finance platform </span></p>
            <p>you've been looking for...</p>
        </div>
        <div className="h-[100vh]  flex justify-center items-center mt-10 bg-white mx-20">
          <div className="h-[90%] w-full  flex flex-col justify-center items-center">
            <p className="text-4xl font-semibold text-[#154166] mt-10">
              Services
            </p>
            <div className="w-[90%] h-full grid grid-cols-2 grid-rows-2">
              <div className="h-full w-full flex items-center justify-center">
                {element({
                  width: "90%",
                  height: "80%",
                  img: test_svg,
                  heading: "Loans",
                })}
              </div>
              <div className="h-full w-full flex items-center justify-center">
                {element({
                  width: "90%",
                  height: "80%",
                  img: test_svg,
                  heading: "Calculators",
                })}
              </div>
              <div className="h-full w-full col-start-2 row-span-2 row-start-1 flex items-center justify-center">
                <div className="rounded-xl flex justify-evenly items-center shadow-md bg-gray-50 hover:bg-sky-50 duration-100 ease-linear hover:outline outline-2 outline-sky-600 h-[90%] w-4/5 flex-col">
                  <div className="h-[30%] w-full">
                    <img src={test_svg} className="h-full m-auto" />
                  </div>
                  <div className="h-[50%] w-full pl-6 pr-2 flex flex-col justify-start pt-14 items-center gap-8">
                    <p className="text-3xl font-semibold">Payments</p>
                    <p className="text-lg text-gray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit reiciendis minima fugit nulla laborum
                      corporis odit laudantium in voluptate et Lorem ipsum dolor
                      sit, amet consectetur adipisicing elit. Iure, cum!
                    </p>
                  </div>
                  <a
                    href=""
                    className="text-xl hover:text-sky-500 duration-200 ease-in-out font-semibold cursor-pointer"
                  >
                    Know More &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
