import React from "react";
import loginIMG from "../assets/sign-in.svg";
import test_svg from "../assets/test_svg.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [index, setindex] = useState(1);
  const [email, setemail] = useState("");
  const [focusIndex, setfocusIndex] = useState(0);
  const [otp, setotp] = useState({});
  const inputOtpRef = useRef({});
  const onSubmit = (data) => console.log(data);

  const nextSlide = () => {
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

  const otpInput = (props) => {
    useEffect(() => {
      if (focusIndex === parseInt(props.name)) {
        setotp({ ...otp, [inputOtpRef.current[props.name].name]: "" });
        inputOtpRef.current[props.name].focus();
      } else {
        inputOtpRef.current[props.name].blur();
      }
    }, [focusIndex]);

    return (
      <input
        ref={(el) => (inputOtpRef.current[props.name] = el)}
        type="number"
        name={props.name}
        value={otp[props.name] || ""}
        className="outline-none h-12 w-12 bg-gray-200 shadow-inner rounded-lg text-center caret-transparent text-2xl font-medium focus:bg-blue-500 remove-arrow"
        onChange={handleChange}
        onClick={(e) => {
          e.target.focus();
          setfocusIndex(parseInt(props.name));
        }}
      ></input>
    );
  };

  const handleChange = (e) => {
    setotp({ ...otp, [e.target.name]: e.target.value });
    setfocusIndex(parseInt(e.target.name) + 1);
  };

  const isValidOtp = () => {
    for (const key in inputOtpRef.current) {
      if (inputOtpRef.current[key].value === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    
    return await new Promise((resolve, reject)=>{
      axios.post('http://localhost:5174/login', {email: email})
      .then(result => {
        console.log(result.data);
        if(result.data === 'ok'){
          resolve(true);
        }else{
          resolve(false);
        }
      })
      .catch(err => {
        console.log(err);
        reject(err);
      })
    })
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-main-theme font-[Poppins] justify-center items-center flex">
      <div className="h-[75%] w-[65%] bg-white rounded-xl shadow-2xl flex overflow-hidden">
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
              Login
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

        {/* Email Part */}
        <div
          id="login"
          className="h-full w-[80%] flex flex-col items-center duration-[600ms] ease-linear"
        >
          <div className="min-h-full w-full flex justify-center items-center">
            <div className="h-full w-[40%] flex items-center justify-center">
              <img className="h-[35%]" src={loginIMG} alt="" />
            </div>
            <div className="h-full w-[70%] flex flex-col justify-center items-center">
              <div className="w-full px-20 text-center mt-10">
                <p className=" text-3xl font-semibold text-[#154166]">Login</p>
                <p className=" text-lg font-medium text-center text-gray-500 mt-2">
                  Enter your Ethos ID email for a login code
                </p>
              </div>

              <div className="h-[40%] w-full flex justify-center flex-col items-center gap-10">
                <input
                  name="email"
                  value={email}
                  type="email"
                  className="w-[80%] h-[25%] rounded-lg pl-3 shadow-inner bg-gray-200 placeholder:text-lg placeholder:font-medium outline-none text-lg font-medium"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
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
                        : "text-slate-500 cursor-not-allowed "
                    }`}
                    disabled={!validEmail()}
                    onClick={() => {
                      handleSubmit().then(success => {
                        if(success){
                          nextSlide();
                        }else{

                        }
                      })
                      console.log(JSON.stringify({ email: email }));
                    }}
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Otp Part */}
          <div className="min-h-full w-full  flex justify-center items-center">
            <div className="h-full w-[40%] flex items-center justify-center">
              <img className="h-[35%]" src={test_svg} alt="" />
            </div>

            <div className="h-full w-[70%] flex flex-col justify-center items-center">
              <div className="w-full px-10 text-center mt-10">
                <p className=" text-3xl font-semibold text-[#154166]">Verification</p>
                <p className=" text-lg font-medium text-center text-gray-500 mt-2">
                  A verification code has been sent to{" "}
                  <span className=" text-teal-400 font-semibold">{email}</span>.
                  Please enter the code to continue.
                </p>
              </div>

              <div className="h-[40%] w-full flex justify-center flex-col items-center gap-10">
                <div className="flex h-[30%] w-full justify-center items-center gap-5">
                  {otpInput({ name: "1" })}
                  {otpInput({ name: "2" })}
                  {otpInput({ name: "3" })}
                  {otpInput({ name: "4" })}
                  {otpInput({ name: "5" })}
                  {otpInput({ name: "6" })}
                </div>

                <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
                  <button
                    className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
                    onClick={prevSlide}
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className={`py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] duration-200 ease-linear bg-gray-200 ${
                      isValidOtp()
                        ? "text-black hover:text-white hover:bg-blue-600"
                        : "text-slate-500 cursor-not-allowed "
                    }`}
                    disabled={!isValidOtp()}
                    onClick={() => {
                      nextSlide();
                      let OTP = Object.values(otp).join("");
                      console.log(JSON.stringify({ otp: OTP }));
                    }}
                  >
                    VERIFY
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Part */}
          <div className="min-h-full w-full flex justify-center items-center">
            <div className="h-full w-[40%] flex items-center justify-center">
              <img className="h-[35%]" src={test_svg} alt="" />
            </div>

            <div className="h-full w-[70%] flex flex-col justify-center items-center">
              <div className="w-full px-20 text-center mt-14">
                <p className=" text-3xl font-semibold text-[#154166]">
                  Confirm
                </p>
                <p className=" text-xl font-medium text-center text-gray-500 mt-4">
                  Please press confirm button to proceed
                </p>
              </div>

              <div className="h-[25%] w-full flex justify-center flex-col items-center gap-10">
                <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
                  <button
                    className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
                    onClick={prevSlide}
                  >
                    BACK
                  </button>
                  <button
                    className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] duration-200 ease-linear bg-gray-200 text-black hover:text-white hover:bg-blue-600"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
