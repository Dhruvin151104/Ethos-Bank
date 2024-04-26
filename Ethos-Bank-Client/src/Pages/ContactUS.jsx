import React, { useState, useRef, useEffect } from "react";
import Address from "../assets/addressSVG.svg";
import call from "../assets/callSVG.svg";
import clock from "../assets/clockSVG.svg";
import email from "../assets/emailSVG.svg";
import sendMessageIMG from "../assets/send-message.png";
import io from "socket.io-client";
import chat from "../assets/chat.svg";
import Button from "../components/Button";
const socket = io.connect(import.meta.env.SERVER);

function ContactUS() {
  const inputBox = useRef();
  const [messages, setMessages] = useState([]);
  const [startChat, setstartChat] = useState(false);
  const messageBoxRef = useRef(null);

  const recievedMessage = (data) => {
    return (
      <div className="min-h-[18%] w-full flex justify-start items-center">
        <div className="h-full w-1/2 bg-gray-200 rounded-lg p-3 text-sm">
          {data}
        </div>
      </div>
    );
  };

  const sentMessage = (data) => {
    return (
      <div className="min-h-[18%] w-full flex justify-end items-center">
        <div className="h-full w-1/2 bg-sky-400/70 rounded-lg p-3 text-sm">
          {data}
        </div>
      </div>
    );
  };

  const sendMessage = (data) => {
    // socket.emit("sendMessage", data);
    setMessages((prevMessages) => [...prevMessages, sentMessage(data)]);
    scrollToBottom();
  };

  // useEffect(() => {
  //   socket.on("receiveMessage", (data) => {
  //     setMessages((prevMessages) => [...prevMessages, recievedMessage(data)]);
  //     scrollToBottom();
  //   });
  // }, [socket]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  const element = (props) => {
    return (
      <div className=" cursor-pointer h-[80%] w-[80%] rounded-2xl flex justify-evenly items-center flex-col shadow-inner bg-slate-100 hover:bg-slate-200 duration-200 ease-linear border-b-sky-500 border-b-4">
        <div className="h-[20%] w-full pl-5">
          <img src={props.img} className="h-full" />
        </div>
        <div className="h-[50%] w-full pl-6 pr-2 flex flex-col gap-3">
          <p className="text-xl font-semibold">{props.heading}</p>
          <p className="text-md text-gray-500">{props.text}</p>
        </div>
      </div>
    );
  };

  return (
    <div className=" font-[Poppins] h-[100vh]">
      <div className="h-[15%] flex items-center justify-center pt-5">
        <p className="text-[#154166] text-4xl font-semibold text-center">
          Contact Us
        </p>
      </div>

      <div className="h-[85%] w-full  flex justify-center items-center">
        <div className="h-full w-1/2  grid grid-cols-2 grid-rows-2 place-items-center">
          {element({
            img: Address,
            heading: "Locate Us",
            text: "Locate your nearest branch now!",
          })}
          {element({
            img: call,
            heading: "Call Us",
            text: "Customer Care: 1234567890",
          })}
          {element({
            img: clock,
            heading: "Open Hours",
            text: "10:00AM - 5:00PM (Monday - Friday)",
          })}
          {element({
            img: email,
            heading: "Email Us",
            text: "ethos.fintech@gmail.com",
          })}
        </div>


        {/* Chat Part */}
        <div className="h-[90%] w-1/2 flex justify-center items-center rounded-2xl shadow-inner mx-8 bg-slate-100 border-b-sky-500 border-b-4 overflow-hidden">
          {!startChat && (
            <div className="h-full w-[20rem] flex justify-evenly items-center flex-col">
              <img src={chat} alt="" className="h-[15rem]" />
              <div
                onClick={() => {
                  setstartChat(true);
                }}
              >
                <Button name="Chat With Us" x="4rem" />
              </div>
            </div>
          )}



          {startChat && (
            <div className="h-full w-full px-5 pt-4">
              <div
                ref={messageBoxRef}
                className="h-[85%] w-full rounded-2xl bg-white outline-gray-300 outline outline-1 p-4 flex flex-col overflow-y-auto overflow-x-hidden gap-3"
              >
                <div className="w-full h-[20%] flex justify-center items-center">
                  <div className="w-[80%] h-[90%] bg-gray-200 rounded-xl flex justify-center items-center px-8 text-center">
                    <p>Chats are disabled for now you can set chat feature on by cloning this <a href="/" target="_blank" className="text-sky-600 font-semibold">github repository</a></p>
                  </div>
                </div>
                {messages.map((message, index) => (
                  <div key={index}>{message}</div>
                ))}
              </div>
              <div className="h-[15%] w-full flex justify-center items-center relative">
                <input
                  ref={inputBox}
                  type="text"
                  className="shadow-inner font-medium h-[70%] w-full text-lg pl-5 rounded-md remove-arrow placeholder:font-medium placeholder:text-lg outline-gray-300 outline outline-1 pr-20"
                  placeholder="Enter your message. Type END to end the conversation"
                />
                <div className="h-[70%] w-[10%] absolute right-0 rounded-e-md flex justify-center items-center">
                  <img
                    src={sendMessageIMG}
                    alt=""
                    className="h-[60%] cursor-pointer"
                    onClick={() => {
                      if (inputBox.current.value === "END") {
                        setMessages([])
                        setstartChat(false);
                      } else {
                        if (inputBox.current?.value !== "")
                          sendMessage(inputBox.current.value);
                        inputBox.current.value = "";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
