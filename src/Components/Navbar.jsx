import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { IoNotificationsOutline } from "react-icons/io5";
import Styles from "../nav.module.css";
import Overlay from "./Overlay";

function Navbar() {
  const [logout, setLogout] = useState(false);
  function handleLog() {
    setLogout(true);
  }

  function handleOverlay() {
    setLogout(false);
  }
  return (
    <>
      {logout && <Overlay handleOverlay={handleOverlay} />}
      <nav className="flex shadow-2xl  px-4 w-full justify-between items-center md:px-[120px] py-1">
        <div className="navLeft">
          <img className=" w-24 md:w-[6.7rem]" src={Logo} alt="" />
        </div>
        <div className="navRight flex cursor-pointer items-center gap-6">
          <div className={`${Styles.bef} relative`}>
            <p className="bg-red-500 text-white rounded-sm px-[2px] py-[1px] top-[-20%]  left-[-100%] text-[9px] absolute ">
              NEW
            </p>

            <IoNotificationsOutline className={`${Styles.noti}`} size={25} />
          </div>
          <div className="flex items-center cursor-pointer gap-2">
            <span
              onClick={handleLog}
              className="bg-[#101855] flex items-center justify-center rounded-full text-xl font-semibold  text-white w-10  h-10  "
            >
              A
            </span>
            <div className="hidden sm:flex items-center">
              <h3 className="text-md  font-[500] tracking-wider mr-2">
                Hi, Akash
              </h3>
              <svg
                onClick={handleLog}
                className="mt-1"
                width="13"
                height="18"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 1L9 8.5L1.5 1"
                  stroke="#3E3E3E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
