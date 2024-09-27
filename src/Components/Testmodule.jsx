import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import TestNav from "./TestNav";
import All from "./All";
import CreatTes from "./CreatTes";
import TestResult from "./TestResult";
import { Outlet } from "react-router-dom";

function Testmodule() {
  return (
    <div className=" w-full md:w-full md:h-[82vh] lg:h-0 lg:w-[85%] md:py-2 md:px-6 lg:py-0 lg:px-0 bg-white  lg:ml-4">
      <TestNav />
      <Outlet />
    </div>
  );
}

export default Testmodule;
