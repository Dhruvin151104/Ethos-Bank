import React from "react";
import home from "../assets/home.png";
import calc_svg from "../assets/calcSVG.svg";
import payment_svg from "../assets/paymentSVG.svg";
import loan_svg from "../assets/loanSVG.svg";
import News from "../components/News";

function Home() {
  const element = (props) => {
    return (
      <div
        style={{
          width: props.width,
          height: props.height,
          "--bg-color": props.bgcolor,
          "--outline-color": props.color,
        }}
        className={`rounded-xl flex justify-evenly items-center shadow-md bg-gray-50 hover:bg-[var(--bg-color)] duration-200 ease-in-out hover:outline outline-2 hover:outline-[var(--outline-color)]`}
      >
        <div className="h-full w-[30%]">
          <img src={props.img} className="h-full" />
        </div>
        <div className="h-full w-[70%] pl-6 pr-2  flex flex-col justify-center items-start gap-3">
          <p className="text-3xl font-semibold">{props.heading}</p>
          <p className="text-md text-gray-500">
            {props.text}
          </p>
          <a
            style={{
              "--bg-color": props.bgcolor,
              "--outline-color": props.color,
            }}
            href=""
            className="text-md hover:text-[var(--outline-color)] duration-200 ease-in-out font-semibold cursor-pointer"
          >
            Know More &rarr;
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="font-[Poppins] bg-main-theme">
      <div className=" h-[90vh] w-full flex justify-center items-center px-20">
        <div className=" h-3/5 w-[45%] flex bg-transparent justify-center items-start flex-col gap-10">
          <div className="text-black text-4xl font-medium">
            <p className="mb-2 "><span className=" font-semibold text-blue-600">Supercharge</span> your Banking</p>
            <p>with <span className="">Ethos</span>.</p>
          </div>
          <div>
            <p className=" text-black text-2xl font-light mb-5">
              Our services got you covered.
            </p>
          </div>
        </div>
        <div className=" h-[90%] w-[47vw] flex justify-center items-center">
          <img src={home} alt="" className="h-full w-full" />
        </div>
      </div>

      <div className=" mt-16">
        <div className=" w-[100%] text-5xl font-normal flex flex-col justify-center gap-1 pl-20">
          <p>
            The all in one{" "}
            <span className=" text-blue-500 font-medium">
              {" "}
              finance platform{" "}
            </span>
          </p>
          <p>you've been looking for...</p>
        </div>
        <div className="h-[100vh]  flex justify-center items-center mt-10 bg-white mx-20">
          <div className="h-[90%] w-full flex flex-col justify-center items-center gap-4">
            <p className="text-4xl font-semibold text-[#154166] mt-3">
              Services
            </p>
            <div className="w-[90%] h-full grid grid-cols-2 grid-rows-2">
              <div className="h-full w-full flex items-center justify-center">
                {element({
                  width: "90%",
                  height: "80%",
                  img: loan_svg,
                  heading: "Loans",
                  color: "#4D4DFF",
                  bgcolor: "#EAEAFD",
                  text:"Unlock your dreams with flexible loans tailored just for you.",
                })}
              </div>
              <div className="h-full w-full flex items-center justify-center">
                {element({
                  width: "90%",
                  height: "80%",
                  img: calc_svg,
                  heading: "Calculators",
                  color: "#84cc16",
                  bgcolor: "#F7FEE7",
                  text:"Empower your finances with our calculators: GST, CAGR, ROI, and more.",
                })}
              </div>
              <div className="h-full w-full col-start-2 row-span-2 row-start-1 flex items-center justify-center">
                <div className="rounded-xl flex justify-evenly items-center shadow-md bg-gray-50 hover:bg-teal-50 duration-100 ease-linear hover:outline outline-2 outline-teal-500 h-[90%] w-4/5 flex-col">
                  <div className="h-[40%] w-full">
                    <img src={payment_svg} className="h-full m-auto" />
                  </div>
                  <div className="h-[50%] w-full pl-6 pr-2 flex flex-col justify-start pt-12 items-center gap-8">
                    <p className="text-3xl font-semibold ">Payments</p>
                    <p className="text-lg text-gray-500">
                    Simplify transactions with our secure payment gateway. Fast, reliable, and hassle-free banking experience awaits.
                    </p>
                  </div>
                  <a
                    href=""
                    className="text-xl hover:text-teal-500 duration-200 ease-in-out font-semibold cursor-pointer"
                  >
                    Know More &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Part */}
      <div className="w-full h-[80vh] mt-20 px-20">
        <div className=" h-full w-full flex flex-col justify-center items-center gap-10 bg-white">
          <p className="text-4xl font-semibold text-[#154166]">Hot News</p>
          <News />
        </div>
      </div>
    </div>
  );
}

export default Home;
