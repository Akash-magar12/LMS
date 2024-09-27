import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function All() {
  return (
    <div className="w-[20rem] justify-center  min-[390px]:w-[22rem]  min-[400px]:w-[23rem]  lg:w-[62rem] lg:py-0 py-2 mt-0    lg:mt-6 ml-4 flex-col lg:flex-row flex gap-6 lg:gap-16 h-[30rem] ">
      <div className="left w-full lg:w-[50%] py-8 lg:py-2 bg-white flex flex-col justify-start gap-4 h-full shadow-2xl rounded-md ">
        <h2 className="text-center text-2xl lg:text-2xl text-[#cdcaca] pt-2">
          Frontend Development
        </h2>
        <div className="flex justify-between p-4 border-b-2 border-[#dadada]">
          <h3 className="text-[#33308B] text-md font-semibold">HTML,CSS</h3>
          <MdKeyboardArrowDown />
        </div>
        <div className="flex justify-between p-4 border-b-2 border-[#dadada]">
          <h3 className="text-[#33308B] text-md font-semibold">
            JavaScript,ReactJs
          </h3>
          <MdKeyboardArrowDown />
        </div>
      </div>
      <div className="right w-full lg:w-[50%] h-full py-2 flex bg-white flex-col justify-start gap-4  shadow-2xl rounded-md">
        <h2 className="text-center text-2xl lg:text-2xl text-[#cdcaca] pt-2">
          MERN STACK
        </h2>
        <div className="flex justify-between  p-4 border-b-2 border-[#dadada]">
          <h3 className="text-[#33308B] text-md font-semibold">JavaScript</h3>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
}

export default All;
