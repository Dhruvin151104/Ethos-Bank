import React from "react";
import Logo from "./Logo";
import logoIMG from "../assets/favicon.png";
import profileM from "../assets/profileNavbarMan.png"
import profileF from "../assets/profileNavbarWoman.png"
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

function Navbar(props) {
  const textProperties =
    "hover:border-b-[3px] border-sky-500 py-1 duration-150 ease-in-out hover:text-sky-500";

  return (
    <div className="pl-14 bg-main-theme pt-3">
      <div className="h-14 flex items-center w-full justify-between px-3 sticky top-0">
        <div className="w-[25%] h-full">
          <Link to="/">
            <Logo img={logoIMG} />
          </Link>
        </div>

        <div className="h-full flex justify-center items-center w-2/4">
          <ul className="flex w-max text-gray-500 gap-8 font-[Poppins] text-lg font-semibold">
            <li>
              <Link className={textProperties} to="/payments">
                Payments
              </Link>
            </li>
            <li>
              <Link className={textProperties} to="/loan">
                Loans
              </Link>
            </li>
            <li>
              <Link className={textProperties} to="/calculator">
                Calculators
              </Link>
            </li>
            <li>
              <Link className={textProperties} to="/contactus">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full flex items-center justify-center w-1/4">
          {!props.isLoggedIn &&  <Link to='/login'>
            <LoginButton x="1.5rem" y="0.4rem" name="Login" />
          </Link>}
          {props.isLoggedIn && <img src={localStorage.getItem("userDetail").gender===""} alt="" className="h-[90%] cursor-pointer"/>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
