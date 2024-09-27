import React from "react";
import Navbar from "./Components/Navbar";
import Display from "./Display";
import Foot from "./Components/Foot";
import { BrowserRouter } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className="w-full h-screen">
        <Navbar />
        <Display />
        <Foot />
      </div>
    </BrowserRouter>
  );
}

export default App;
