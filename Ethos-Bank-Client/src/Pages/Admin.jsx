import React, { useState, useRef, useEffect } from "react";
import sendMessageIMG from "../assets/send-message.png";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5174");

function Admin() {
  const inputBox = useRef(null);
  const [messages, setMessages] = useState([]);
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
    socket.emit("sendMessage", data);
    setMessages((prevMessages) => [...prevMessages, sentMessage(data)]);
    scrollToBottom();
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, recievedMessage(data)]);
      scrollToBottom();
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const scrollToBottom = () => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  };

  return (
    <div className="h-[100vh] w-[100vw]">
      <div className="h-full w-full px-5 pt-4">
        <div
          ref={messageBoxRef}
          className="h-[85%] w-full rounded-2xl bg-white outline-gray-300 outline outline-1 p-4 flex flex-col overflow-y-auto overflow-x-hidden gap-3"
        >
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div className="h-[15%] w-full flex justify-center items-center relative">
          <input
            ref={inputBox}
            type="text"
            className="shadow-inner font-medium h-[70%] w-full text-xl pl-5 rounded-md remove-arrow placeholder:font-medium placeholder:text-xl outline-gray-300 outline outline-1 pr-20"
            placeholder="Enter your message"
          />
          <div className="h-[70%] w-[10%] absolute right-0 rounded-e-md flex justify-center items-center">
            <img
              src={sendMessageIMG}
              alt=""
              className="h-[50%] cursor-pointer"
              onClick={() => {
                if (inputBox.current?.value !== "")
                  sendMessage(inputBox.current.value);
                inputBox.current.value = "";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
