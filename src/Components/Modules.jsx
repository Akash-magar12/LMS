import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Modulecards from "./Modulecards";
import { ImPencil2 } from "react-icons/im";

function Modules() {
  let details = [
    {
      course: "Core Python",
      icon: ImPencil2,
      duration: 45,
      total: 29,
      fees: 11800,
    },
    {
      course: "CCNA Networking",
      icon: ImPencil2,
      duration: 45,
      total: 15,
      fees: 25000,
    },
    {
      course: "Cyber Security",
      icon: ImPencil2,
      duration: 60,
      total: 11,
      fees: 60000,
    },
    {
      course: "Tableau",
      icon: ImPencil2,
      duration: 45,
      total: 16,
      fees: 14160,
    },
    {
      course: "PowerBI",
      icon: ImPencil2,
      duration: 30,
      total: 11,
      fees: 14160,
    },
    {
      course: "Python for Data analysis",
      icon: ImPencil2,
      duration: 60,
      total: 23,
      fees: 30000,
    },
    {
      course: "HTML",
      icon: ImPencil2,
      duration: 5,
      total: 8,
      fees: 5000,
    },
    {
      course: "CSS",
      icon: ImPencil2,
      duration: 7,
      total: 25,
      fees: 7000,
    },
    {
      course: "Machine Learning",
      icon: ImPencil2,
      duration: 45,
      total: 12,
      fees: 11770,
    },
  ];
  const [input, setInput] = useState("");
  let [data, setData] = useState(details);

  function Search() {
    let main_val = input.toLowerCase();
    const filteredData = details.filter((val) =>
      val.course.toLowerCase().includes(main_val)
    );
    setData(filteredData);
  }
  useEffect(() => {
    Search();
  }, [input]);
  // let main_val = input.toLowerCase();
  // function Search() {
  //   let carts = details.filter((val) => {
  //     let keys = Object.keys(val);
  //     for (let i = 0; i < keys.length; i++) {
  //       let keyArr = keys[i];
  //       if (
  //         String(val[keyArr]).toLowerCase().includes(main_val) === true
  //       ) {
  //         return val;
  //       }
  //     }
  //   });
  //   setData(carts);
  //   console.log(carts);
    
  // }
  // useEffect(() => {
  //   Search();
  // }, [input]);
  return (
    <div className=" lg:w-[85%]  w-full   pl-4 py-5 lg:py-0">
      <div className="flex w-72 py-2 rounded-2xl gap-3 px-4 bg-white items-center">
        <IoSearch onClick={Search} className="cursor-pointer" />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none text-sm font-light border-none"
          type="text"
          placeholder="Search Module here..."
        />
      </div>
      <Modulecards data={data} />
    </div>
  );
}

export default Modules;
