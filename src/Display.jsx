import React, { useState } from "react";
import Aside from "./Components/Aside";
import Content from "./Components/Content";
import Modules from "./Components/Modules";
import { Route, Routes, Outlet, useParams } from "react-router-dom";
import Testmodule from "./Components/Testmodule";
import Resource from "./Components/Resource";
import CreatTes from "./Components/CreatTes";
import TestResult from "./Components/TestResult";
import All from "./Components/All";

function Display() {
  return (
    <>
      <div className="w-full flex min-h-[calc(100vh-57px)] pt-2  lg:pt-6 pb-20 lg:pb-0 bg-[#F7F6F4]  ">
        <Aside />


        <Routes>
          <Route path="/" element={<Modules />}></Route>
          <Route path="Batch" element={<Content />}></Route>
          <Route path="Test-module" element={<Testmodule />}>
            <Route index element={<All />}></Route>
            <Route path="create-test" element={<CreatTes />}></Route>
            <Route path="test-result" element={<TestResult />}></Route>
          </Route>
          <Route path="Resources" element={<Resource />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Display;
