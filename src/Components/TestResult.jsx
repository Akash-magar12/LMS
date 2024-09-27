import React from "react";
function TestResult() {
  return (
    <div className="lg:w-[82%] w-full   lg:h-0   bg-white">
      <div className="flex flex-col gap-6 lg:pl-4 mt-0 lg:mt-5 w-full ">
        <div className="flex  w-full lg:w-[50%] px-4 lg:px-0 justify-between items-center">
          <h3>Select Course</h3>
          <select
            className="outline-none border-2 text-sm w-[50%] bg-white border-[#dadada] p-2"
            name=""
            id=""
          >
            <option className="text-[10px] lg:text-[14px]" value="">
              Select Course
            </option>
            <option className="text-[10px] lg:text-[14px]" value="">
              HTML
            </option>
            <option className="text-[10px] lg:text-[14px]" value="">
              CSS
            </option>
            <option className="text-[10px] lg:text-[14px]" value="">
              JavaScript
            </option>
            <option className="text-[10px] lg:text-[14px]" value="">
              ReactJs
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TestResult;
