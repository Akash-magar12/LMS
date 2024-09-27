import React from "react";
import { IoDocumentText } from "react-icons/io5";

function Resource() {
  return (
    <div className="bg-white w-full lg:w-[85%] lg:ml-4">
      <div className="pl-4 w-full  pt-6   lg:w-[100%] max-h-[40vh]">
        <div className="flex justify-between h-full pr-10  items-center">
          <h1 className="text-2xl text-[#908d8d]   lg:text-left text-center ">
            All Resources
          </h1>
          <button className="text-[#33308B] text-sm px-2  lg:text-md border-2 rounded-md border-[#33308b] lg:px-4 py-1">
            Add Resources
          </button>
        </div>

        <div className="flex justify-center lg:mt-20  mt-40  flex-col gap-3 items-center  h-full w-full">
          <h3 className="text-[#908d8d]  text-lg">No Resources Available</h3>
          <IoDocumentText size={30} />
        </div>
      </div>
    </div>
  );
}

export default Resource;
