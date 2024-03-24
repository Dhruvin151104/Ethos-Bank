import React from "react";
import test_svg from "../assets/test_svg.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [index, setindex] = useState(1);
  const [email, setemail] = useState("");
  const onSubmit = (data) => console.log(data);

  const nextSlide = () => {
    console.log(validEmail());
    const parent = document.getElementById("login");
    const slider = document.getElementById("slider");
    parent.style.transform = `translateY(-${100 * index}%)`;
    slider.style.transform = `translateY(${30.2 * index}vh)`;
    setindex(index + 1);
  };

  const prevSlide = () => {
    setindex(index - 1);
    const parent = document.getElementById("login");
    const slider = document.getElementById("slider");
    parent.style.transform = `translateY(-${100 * (index - 2)}%)`;
    slider.style.transform = `translateY(${30.2 * (index - 2)}vh)`;
  };

  const validEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  return (
    <div className="h-[100vh] w-[100vw] bg-main-theme font-[Poppins] justify-center items-center flex">
      <div className="h-[75%] w-[60%] bg-white rounded-xl shadow-2xl flex overflow-hidden">
        {/* Scroll Part */}
        <div className="h-full w-[20%] bg-gradient-to-r from-sky-500 to-blue-900 flex items-center justify-center gap-4">
          <div className="h-[90%] w-[12%] bg-white/30 rounded-3xl flex justify-center py-[2.5vh]">
            <div
              id="slider"
              className=" h-[0.8rem] w-[0.8rem] rounded-full bg-white duration-[600ms] ease-linear"
            ></div>
          </div>
          <div className="h-[90%] flex flex-col items-start justify-between py-[1.5vh]">
            <p
              className={`text-lg font-semibold text-white ${
                index !== 1 ? "text-opacity-30" : ""
              } duration-[600ms] ease-linear`}
            >
              Log In
            </p>
            <p
              className={`text-lg font-semibold text-white ${
                index !== 2 ? "text-opacity-30" : ""
              } duration-[600ms] ease-linear`}
            >
              Verify
            </p>
            <p
              className={`text-lg font-semibold text-white ${
                index !== 3 ? "text-opacity-30" : ""
              } duration-[600ms] ease-linear`}
            >
              Confirm
            </p>
          </div>
        </div>

        {/* Form Part */}
        <div
          id="login"
          className="h-full w-[80%] flex flex-col items-center duration-[600ms] ease-linear"
        >
          <div className="min-h-full w-full flex justify-center items-center">
            <div className="h-full w-[40%] flex items-center justify-center">
              <img className="h-[35%]" src={test_svg} alt="" />
            </div>
            <div className="h-full w-[70%] flex flex-col justify-center items-center">
              <div className="w-full px-20 text-center mt-10">
                <p className=" text-3xl font-semibold text-[#154166]">LogIn</p>
                <p className=" text-lg font-medium text-center text-gray-500 mt-2">
                  Enter your Ethos ID email for a login code
                </p>
              </div>

              <form
                action=""
                className="h-[40%] w-full flex justify-center flex-col items-center gap-10"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  value={email}
                  {...register("email")}
                  type="email"
                  className="w-[80%] h-[25%] rounded-lg pl-3 shadow-inner bg-gray-200 placeholder:text-lg placeholder:font-medium outline-none text-lg font-medium"
                  placeholder="Enter email"
                  onChange={(e) => {setemail(e.target.value)}}
                />

                <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
                  <button
                    className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    className={`py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] duration-200 ease-linear bg-gray-200 ${
                      validEmail()
                        ? "text-black hover:text-white hover:bg-blue-600"
                        : "text-gray-500 cursor-not-allowed "
                    }`}
                    disabled={!validEmail()}
                    onClick={nextSlide}
                  >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="min-h-full w-full bg-pink-600">
            <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
              
            </div>
          </div>
          <div className="min-h-full w-full bg-purple-600">
            <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
