import React from "react";
import test_svg from "../assets/test_svg.svg";
function Login() {
  const nextSlide = (e) => {
    const parent = e.target.parentNode.parentNode.parentNode.parentNode;
    parent.style.transform = "translateY(-100%)";
  };
  return (
    <div className="h-[100vh] w-[100vw] bg-main-theme font-[Poppins] justify-center items-center flex">
      <div className="h-[75%] w-[60%] bg-white rounded-xl shadow-2xl flex overflow-hidden">

        {/* Scroll Part */}
        <div className="h-full w-[20%] bg-gradient-to-r from-sky-500 to-blue-900 flex items-center justify-center gap-4">
            <div className="h-[90%] w-[12%] bg-white rounded-3xl flex justify-center pt-[11%]">
                <div className=" h-4 w-4 rounded-full bg-black"></div>
            </div>
            <div className="h-[85%] flex flex-col items-start justify-between">
                <p className="text-lg font-semibold">Log In</p>
                <p className="text-lg font-semibold">Verify</p>
                <p className="text-lg font-semibold">Confirm</p>
            </div>
        </div>

        {/* Form Part */}
        <div className="h-full w-[80%] flex flex-col items-center duration-[600ms] ease-linear">
          <div className="min-h-full w-full flex justify-center items-center">
            <div className="h-full w-[40%] flex items-center justify-center">
              <img className="h-[35%]" src={test_svg} alt="" />
            </div>
            <div className="h-full w-[70%] flex flex-col justify-center items-center">
              <div className="w-full px-20 text-center mb-14 mt-10">
                <p className=" text-3xl font-semibold text-[#154166]">LogIn</p>
                <p className=" text-lg font-medium text-center text-gray-500 mt-2">
                  Enter your Ethos ID email for a login code
                </p>
              </div>
              <input
                type="email"
                className="w-[80%] h-[12%] rounded-lg pl-3 shadow-inner bg-gray-200 placeholder:text-lg placeholder:font-medium outline-none text-lg font-medium"
                placeholder="Enter email"
              />

              <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
                <button className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-gray-200 duration-200 ease-linear">
                  CANCEL
                </button>
                <button
                  className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-gray-200 duration-200 ease-linear"
                  onClick={nextSlide}
                >
                  LOG IN
                </button>
              </div>
            </div>
          </div>
          <div className="min-h-full w-full bg-pink-600"></div>
          <div className="min-h-full w-full bg-purple-600"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
