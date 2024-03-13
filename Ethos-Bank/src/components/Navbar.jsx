import React from "react";
import Logo from "../assets/logo.png";
import LoginButton from "./LoginButton";

function Navbar() {

    const textProperties = "hover:border-b-[3px] border-sky-500 py-1 bor duration-150 ease-in-out hover:text-sky-500"
    
    return (
       <>
        <div className="h-14 bg-white flex items-center w-full justify-between px-3 sticky top-0">
        <div className="h-full flex justify-center items-center cursor-pointer w-1/4 gap-1">
            <img src={Logo} alt="" className="h-3/5" />
            <div>
                <p className={`text-3xl font-[Rubik] text-[#154166] font-semibold inline`}>Ethos </p>
                <p className={`text-3xl font-[Rubik] text-[#154166] font-semibold inline`}>Bank</p>
                {/* <p className="text-xs font-serif text-sky-500 font-semibold">Ethical Banking</p> */}
            </div>
        </div>

        <div className="h-full flex justify-center items-center w-2/4">
            <ul className="flex w-max text-[#116CB3] gap-8 font-[Poppins] text-lg font-semibold">
                <li><a className={textProperties} href="">Payments</a></li>
                <li><a className={textProperties} href="">Loans</a></li>
                <li><a className={textProperties} href="">Calculators</a></li>
                <li><a className={textProperties} href="">Offers</a></li>
                <li><a className={textProperties} href="">Support</a></li>
            </ul>
        </div>
        {}
    </div>
       </>
    );
}

export default Navbar;
