import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiQuestionMarkFill } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
const Modal = ({ handleOverlay }) => {
  return (
    <div className="w-96  p-8 bg-white z-9 fixed rounded-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-full py-6 flex flex-col justify-center items-center border-2 relative border-[#dadada] rounded-lg  ">
        <div className="circle rounded-full flex items-center justify-center top-[-20%] absolute w-12 h-12 bg-[#33308b]">
          <h2 className="text-white ">N</h2>
        </div>
        <h2 className="text-[#33308B] text-xl font-bold">Akash</h2>
        <p className="text-[#6963638d] text-sm">akash100@gmail.com</p>
        <p className="text-[#6963638d] text-sm">7830958634</p>
      </div>
      <div className="w-full   flex flex-col mt-4 gap-4">
        <div className="flex justify-between cursor-pointer border-[1px] rounded-lg py-2 px-2 border-[#dadada] items-center">
          <div className="flex gap-3 items-center">
            <span>
              <IoChatbubblesOutline size={26} className="text-green-600" />
            </span>
            <h3>Chat Support</h3>
          </div>
          <span>
            <MdOutlineKeyboardArrowRight size={26} />
          </span>
        </div>
        <div className="flex justify-between cursor-pointer   border-[1px] rounded-lg py-2 px-2 border-[#dadada] items-center">
          <div className="flex gap-3 items-center">
            <span>
              <PiQuestionMarkFill size={26} className="text-blue-600" />
            </span>
            <h3>Help Desk</h3>
          </div>
          <span>
            <MdOutlineKeyboardArrowRight size={26} />
          </span>
        </div>
        <div
          onClick={handleOverlay}
          className="flex justify-between cursor-pointer   border-[1px] rounded-lg py-2 px-2 border-[#dadada] items-center"
        >
          <div className="flex gap-3 items-center">
            <span>
              <IoExitOutline size={26} />
            </span>
            <h3>Log Out</h3>
          </div>
          <span>
            <MdOutlineKeyboardArrowRight size={26} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
