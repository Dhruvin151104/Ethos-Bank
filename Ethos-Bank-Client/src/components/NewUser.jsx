import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./Input";
import logo from "../assets/favicon.png";
import Alert from "../components/Alert";
import Spinner from "./Spinner";

import axios from "axios";

function NewUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const gender = useRef(null);
  const message = useRef({ title: "", message: "" });
  const [showAlert, setshowAlert] = useState(false);
  const [showSpinner, setshowSpinner] = useState(false);
  const buttonDisable = useRef(false);

  const createUser = async (e) => {
    return await new Promise((resolve, reject) => {
      buttonDisable.current = true;
      setshowSpinner(true);
      axios
        .post(import.meta.env.VITE_SERVER + "/admin/createUser", {
          name: name,
          email: email,
          gender: gender.current.value,
        })
        .then((result) => {
          buttonDisable.current = false;
          setshowSpinner(false);
          if (result.status === 200) {
            props.msgSuccess.current = (
              <div>
                User created successfully.
                <br />
                Login again with the same email.
              </div>
            );
            props.setshow(false);
            props.setshowSuccess(() => true);
            resolve(true);
          } else {
            message.current = {
              title: "Alert!",
              message: result.data,
            };
            setshowAlert(() => true);
            resolve(false);
          }
        })
        .catch((error) => {
          buttonDisable.current = false;
          setshowSpinner(false);
          message.current = {
            title: "Alert!",
            message: error.response.data,
          };
          setshowAlert(() => true);
          resolve(false);
        });
    });
  };

  const validEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <AnimatePresence>
      {props.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-black/30 backdrop-blur p-8 z-50 font-[Poppins] h-[100vh] w-[100vw] flex justify-center items-center absolute top-0"
        >
          <Alert
            title={message.current.title}
            message={message.current.message}
            setshow={setshowAlert}
            show={showAlert}
          />
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" text-white p-6 rounded-lg bg-gray-100 shadow-inner cursor-default overflow-hidden h-[70vh] w-[60vw] flex"
          >
            <div className="w-[30%] h-full flex justify-center items-center">
              <img src={logo} alt="" className="w-[70%]" />
            </div>
            <div className="h-full w-[70%] flex flex-col">
              {/* Input Part */}
              <div className="w-full h-[80%] flex">
                <div className="w-full h-full flex flex-col justify-evenly items-center">
                  <Input
                    type="text"
                    settext={setName}
                    text={name}
                    placeholder="Enter your name"
                    heading="Name"
                  />
                  <Input
                    type="text"
                    settext={setEmail}
                    text={email}
                    placeholder="Enter a valid email"
                    heading="Email"
                  />
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-2xl text-[#154166] font-semibold">
                      Gender
                    </p>
                    <select
                      ref={gender}
                      className="rounded-lg h-[7vh] w-[80%] text-black text-lg pl-5 font-semibold focus:outline-sky-500 bg-white shadow-inner cursor-pointer"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Button Part */}
              <div className="flex gap-10 justify-start items-center w-full h-[20%] text-black">
                <button
                  className="py-4 rounded-lg shadow-inner text-lg font-semibold w-[40%] bg-gray-200 hover:bg-blue-600 hover:text-white duration-200 ease-linear"
                  onClick={() => {
                    props.setshow(false);
                  }}
                >
                  CANCEL
                </button>
                <button
                  className={`py-4 rounded-lg shadow-inner text-lg font-semibold w-[40%] duration-200 ease-linear bg-gray-200 ${
                    validEmail() && name !== "" && !buttonDisable.current
                      ? "text-black hover:text-white hover:bg-blue-600"
                      : "text-slate-500 cursor-not-allowed "
                  }`}
                  disabled={
                    !validEmail() || name === "" || buttonDisable.current
                  }
                  onClick={createUser}
                >
                  ADD
                </button>
              </div>
              <div className="w-full flex justify-center">
                {showSpinner && <Spinner />}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NewUser;
