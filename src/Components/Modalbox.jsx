import React from "react";

const Modalbox = ({ handleClose = { handleClose } }) => {
  return (
    <div className="w-[45rem] rounded-md fixed top-[55%]  left-[57%] -translate-x-1/2 -translate-y-1/2 bg-white">
      <div className="w-full  ">
        <div className="shadow-sm  px-4 py-3">
          <h3 className="text-sm">BSPLModule_2</h3>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="pl-1 text-sm">Module Name</h3>
          <div className="w-full flex items-center rounded-md bg-[#F1F5FF] h-10">
            <p className="pl-2 text-sm">Core pyhton</p>
          </div>
          <h3 className="pl-1 text-sm">Days</h3>
          <div className="w-full flex items-center rounded-md bg-[#F1F5FF] h-10">
            <p className="pl-2 text-sm">45</p>
          </div>
          <h3 className="pl-1 text-sm">Fee</h3>
          <div className="w-full flex items-center rounded-md bg-[#F1F5FF] h-10">
            <p className="pl-2 text-sm">11800</p>
          </div>
        </div>
        <h3 className="pl-4 text-sm">Topic</h3>

        <div className="flex flex-col p-4 gap-4">
          <div className="w-full flex items-center bg-[#F1F5FF] h-10">
            <p className="pl-2 text-sm">Introduction to Python</p>
          </div>
          <div className="w-full flex items-center bg-[#F1F5FF] h-10">
            <p className="pl-2 text-sm">Syntax</p>
          </div>
          <div className="w-full flex items-center bg-[#F1F5FF] h-10">
            <p className="pl-2 text-sm">Control Flow Statement</p>
          </div>
        </div>
        <div className="px-4 py-3 flex gap-16 justify-center">
          <button
            onClick={handleClose}
            className="bg-transparent border-2 border-[#dadada] text-sm text-black w-[40%] py-2 rounded-md"
          >
            Cancel
          </button>
          <button className="bg-[#101855] text-white w-[40%] py-2 text-sm rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
