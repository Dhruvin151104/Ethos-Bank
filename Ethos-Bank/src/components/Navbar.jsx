import React from "react";
import Logo from "../assets/favicon.png";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

function Navbar() {
  const textProperties =
    "hover:border-b-[3px] border-sky-500 py-1 bor duration-150 ease-in-out hover:text-sky-500";

  return (
    <>
      <div className="h-14 bg-[#F4F8FF] flex items-center w-full justify-between px-3 sticky top-0">
        <div className="h-full flex justify-center items-center cursor-pointer w-1/4 gap-1">
          <img src={Logo} alt="" className="h-3/5" />
          <div>
            <p
              className={`text-3xl font-[Rubik] text-[#154166] font-semibold inline`}
            >
              Ethos{" "}
            </p>
            <p
              className={`text-3xl font-[Rubik] text-[#154166] font-semibold inline`}
            >
              Bank
            </p>
            {/* <p className="text-xs font-serif text-sky-500 font-semibold">Ethical Banking</p> */}
          </div>
        </div>

        <div className="h-full flex justify-center items-center w-2/4">
          <ul className="flex w-max text-gray-500 gap-8 font-[Poppins] text-md font-semibold">
            <li>
              <Link className={textProperties} to="/calculator">
                Payments
              </Link>
            </li>
            <li>
              <a className={textProperties} href="">
                Loans
              </a>
            </li>
            <li>
              <a className={textProperties} href="">
                Calculators
              </a>
            </li>
            <li>
              <a className={textProperties} href="">
                Offers
              </a>
            </li>
            <li>
              <a className={textProperties} href="">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div className="h-full flex items-center justify-center w-1/4">
          <LoginButton x="1rem" y="0.3rem" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
