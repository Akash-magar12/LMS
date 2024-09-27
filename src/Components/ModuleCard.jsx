import React from "react";

function ModuleCard({ course, Icon, duration, topic, fees, handleBack }) {
  return (
    <>
      <div className="w-[22rem]   lg:w-[24rem] py-5 flex flex-col overflow-hidden  gap-3 lg:mr-4 shadow-md rounded-md border-b-[5px] border-[#33308B] bg-white">
        <div className="flex  py-2 justify-between px-4 items-center">
          <h3 className="text-[#33308B]  font-semibold">{course}</h3>
          <span className="cursor-pointer" onClick={handleBack}>
            <Icon />
          </span>
        </div>
        <div className="flex items-center gap-3 px-4  justify-center">
          <div className="bg-white h-20 w-40 shadow-2xl flex gap-2 flex-col justify-center items-center border-b-[5px] border-green-700 rounded-md">
            <h3 className="text-sm">Duration</h3>
            <p className="text-sm">{`${duration}days`}</p>
          </div>
          <div className="bg-white h-20 w-40 shadow-2xl flex  gap-2 flex-col justify-center items-center border-b-[5px] border-green-700 rounded-md">
            <h3 className="text-sm">Total Topic</h3>
            <p className="text-sm">{`${topic}Days`}</p>
          </div>
          <div className="bg-white h-20 w-40 shadow-2xl flex  gap-2 flex-col justify-center items-center border-b-[5px] border-green-700 rounded-md">
            <h3 className="text-sm">Fees</h3>
            <p className="text-sm">{`₹${fees}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModuleCard;
