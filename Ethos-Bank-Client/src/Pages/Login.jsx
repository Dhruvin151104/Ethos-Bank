import React from "react";
import Alert from "../components/Alert";
import Success from "../components/Success";
import loginIMG from "../assets/loginIMG.png";
import otpIMG from "../assets/otp.png";
import verifyIMG from "../assets/verify.png";
import Inputsingle from "../components/Inputsingle";
import Button from "../components/Button";
import NewUser from "../components/NewUser";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();
  const [index, setindex] = useState(1);
  const [email, setemail] = useState("");
  const [showAlert, setshowAlert] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const alertMessage = useRef({ title: "", message: "" });
  const [otp, setotp] = useState({});
  const [isVerified, setisVerified] = useState(false);
  const [focusIndex, setfocusIndex] = useState(0);
  const [showNewUser, setshowNewUser] = useState(false);
  const [showHome, setshowHome] = useState(true);
  const inputRef = useRef({});
  const msgSuccess = useRef("");

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

  const isValidOtp = () => {
    for (const key in inputRef.current) {
      if (inputRef.current[key].value === "") {
        return false;
      }
    }
    return true;
  };

  const handleSubmitEmail = async (e) => {
    return await new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5174/login", { email: email })
        .then((result) => {
          if (result.status === 200) {
            localStorage.setItem("token", JSON.stringify(result.data));
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          resolve(false);
        });
    });
  };

  const handleSubmitOtp = async (e) => {
    let OTP = Object.values(otp).join("");
    return await new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5174/login/otp", {
          otp: OTP,
          email: email,
          token: JSON.parse(localStorage.getItem("token")).token,
        })
        .then((result) => {
          if (result.status === 200) {
            setisVerified(true);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          resolve(false);
        });
    });
  };

  const handleConfirmation = async () => {
    return await new Promise((resolve, reject) => {
      axios
        .post("http://localhost:5174/login/details", {
          token: JSON.parse(localStorage.getItem("token")).token,
        })
        .then((result) => {
          if (result.status === 200 && isVerified) {
            localStorage.setItem("userDetails", JSON.stringify(result.data));
            props.setisLoggedIn(true);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-main-theme  font-[Poppins] justify-center items-center flex">
      <Success
        message={msgSuccess.current}
        setshow={setshowSuccess}
        show={showSuccess}
      />
      {showHome && (
        <div className="absolute top-3 right-3 rounded-lg flex gap-5 justify-center items-center overflow-hidden">
          <Link to="/">
            <Button name="Home" y="0.4rem" x="1.8rem" />
          </Link>
          <div onClick={() => setshowNewUser(true)}>
            <Button name="New User" y="0.4rem" x="1.2rem" />
          </div>
        </div>
      )}
      <Alert
        title={alertMessage.current.title}
        message={alertMessage.current.message}
        setshow={setshowAlert}
        show={showAlert}
      />
      <NewUser
        setshow={setshowNewUser}
        show={showNewUser}
        setshowSuccess={setshowSuccess}
        msgSuccess={msgSuccess}
      />
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
          className="h-full w-[80%] flex flex-col items-center duration-[600ms] ease-linear "
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
                      handleSubmitEmail().then((success) => {
                        if (success) {
                          setshowHome(() => false);
                          nextSlide();
                        } else {
                          alertMessage.current = {
                            title: "Alert!",
                            message:
                              "No user exists with the entered email, Enter a valid email or register as new user",
                          };
                          setshowAlert(() => true);
                        }
                      });
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
              <img className="h-[35%]" src={otpIMG} alt="" />
            </div>

            <div className="h-full w-[70%] flex flex-col justify-center items-center">
              <div className="w-full px-10 text-center mt-10">
                <p className=" text-3xl font-semibold text-[#154166]">
                  Verification
                </p>
                <p className=" text-lg font-medium text-center text-gray-500 mt-2">
                  A verification code has been sent to{" "}
                  <span className=" text-teal-400 font-semibold">{email}</span>.
                  Please enter the code to continue.
                </p>
              </div>

              <div className="h-[40%] w-full flex justify-center flex-col items-center gap-10">
                <div className="flex h-[30%] w-full justify-center items-center gap-5">
                  {[...Array(6)].map((_, index) => (
                    <Inputsingle
                      key={index}
                      name={String(index + 1)}
                      parameter={otp}
                      setparameter={setotp}
                      focusIndex={focusIndex}
                      setfocusIndex={setfocusIndex}
                      inputRef={inputRef}
                    />
                  ))}
                </div>

                <div className="flex w-full  h-[20%] items-center justify-evenly px-5">
                  <button
                    className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[38%] bg-gray-200 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
                    onClick={() => {
                      setshowHome(() => true);
                      prevSlide();
                    }}
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
                      handleSubmitOtp().then((success) => {
                        if (success) {
                          nextSlide();
                        } else {
                          alertMessage.current = {
                            title: "Alert!",
                            message: "Invalid OTP",
                          };
                          setshowAlert(() => true);
                        }
                      });
                      let OTP = Object.values(otp).join("");
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
              <img className="h-[35%]" src={verifyIMG} alt="" />
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
                      handleConfirmation().then((success) => {
                        if (success) {
                          navigate(-1);
                        } else {
                          alertMessage.current = {
                            title: "OOPS!",
                            message:
                              "Some error occured . Please try again later.",
                          };
                          setshowAlert(() => true);
                        }
                      });
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
