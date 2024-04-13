import React from "react";
import Logo from "./Logo";
import logoIMG from "../assets/favicon.png";
import profileM from "../assets/profileNavbarMan.png";
import profileF from "../assets/profileNavbarWoman.png";
import LoginButton from "./LoginButton";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Navbar(props) {
  const navigate = useNavigate();

  const FlyoutLink = ({ children, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
    const show = open && FlyoutContent;
    return (
      <div
        className="relative h-full"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link to="/customer" className=" relative h-full ">
          {children}
        </Link>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ x: "-50%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-12 -translate-x-1/2 left-1/2 "
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const FlyoutContent = () => {
    return (
      <div className=" h-[8vh] w-[10vw] bg-transparent flex justify-center items-center">
        <button
          className="text-white text-md rounded-xl bg-red-600 hover:bg-red-400 duration-300 ease-linear font-semibold px-4 py-1 flex items-center justify-center"
          onClick={e => {
            e.stopPropagation();
            logOut();
          }
        }
        >
          Log Out
        </button>
      </div>
    );
  };

  function logOut() {
    localStorage.removeItem("userDetails");
    props.setisLoggedIn(false);
    navigate('/');
  }

  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
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
          {!props.isLoggedIn && (
            <Link to="/login">
              <LoginButton x="1.5rem" y="0.4rem" name="Login" />
            </Link>
          )}
          {props.isLoggedIn && (
            <FlyoutLink FlyoutContent={FlyoutContent}>
              <img
                src={userDetails.gender === "Male" ? profileM : profileF}
                alt=""
                className="h-[90%] cursor-pointer"
              />
            </FlyoutLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
