import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Button from "./Button";
import { SlNotebook } from "react-icons/sl";
import { SlNote } from "react-icons/sl";
import { GrNotes } from "react-icons/gr";
import Cards from "./Cards";
import Upcoming from "./Upcoming";
import Completed from "./Completed";
import { FaUserGraduate } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiNotebook } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

function Content() {
  let butt = [
    {
      title: "Current",
      icon: GrNotes,
      index: 1,
    },
    {
      title: "Upcoming",
      icon: SlNote,
      index: 2,
    },
    {
      title: "Completed",
      icon: SlNotebook,
      index: 3,
    },
  ];
  let datas = [
    {
      topics: {
        topic: "Frontend/Nitin/23-Sep",
        icon: FaUserGraduate,
        number: 2,
      },
      title: {
        icon2: RiGraduationCapFill,
        num: "MERN STACK",
      },
      Users: {
        name: "nitin bela",
        icon3: FaUser,
      },
      calender: {
        icon: FaRegCalendarAlt,
        date: "2023-09-23 to 2023-12-31",
      },
      time: {
        ti: "10:00 AM - 12.00 PM",
        icon4: PiNotebook,
      },
    },
    {
      topics: {
        topic: "10am/FS/Nitin/4-mar",
        icon: FaUserGraduate,
        number: 11,
      },
      title: {
        icon2: RiGraduationCapFill,
        num: "MERN STACK",
      },
      Users: {
        name: "nitin bela",
        icon3: FaUser,
      },
      calender: {
        icon: FaRegCalendarAlt,
        date: "2024-03-04 to 2024-5-11",
      },
      time: {
        ti: "10:00 AM - 12.00 PM",
        icon4: PiNotebook,
      },
    },
    {
      topics: {
        topic: "4.30pm/FS/Nitin/13-mar",
        icon: FaUserGraduate,
        number: 7,
      },
      title: {
        icon2: RiGraduationCapFill,
        num: "MERN STACK",
      },
      Users: {
        name: "nitin bela",
        icon3: FaUser,
      },
      calender: {
        icon: FaRegCalendarAlt,
        date: "2024-03-13 to 2024-07-13",
      },
      time: {
        ti: "4:30 PM - 6.30 PM",
        icon4: PiNotebook,
      },
    },
    {
      topics: {
        topic: "3pm/DM/15-april",
        icon: FaUserGraduate,
        number: 3,
      },
      title: {
        icon2: RiGraduationCapFill,
        num: "Digital Marketing",
      },
      Users: {
        name: "nitin bela",
        icon3: FaUser,
      },
      calender: {
        icon: FaRegCalendarAlt,
        date: "2024-04-15 to 2024-05-25",
      },
      time: {
        ti: "3.00 PM - 4.30 PM",
        icon4: PiNotebook,
      },
    },
    {
      topics: {
        topic: "4.30/FS/13-May",
        icon: FaUserGraduate,
        number: 13,
      },
      title: {
        icon2: RiGraduationCapFill,
        num: "MERN STACK",
      },
      Users: {
        name: "nitin bela",
        icon3: FaUser,
      },
      calender: {
        icon: FaRegCalendarAlt,
        date: "2024-05-13 to 2024-11-16",
      },
      time: {
        ti: "4:30 PM - 6.30 PM",
        icon4: PiNotebook,
      },
    },
    {
      topics: {
        topic: "12pm/DM/4-June",
        icon: FaUserGraduate,
        number: 3,
      },
      title: {
        icon2: RiGraduationCapFill,
        num: "Digital Marketing",
      },
      Users: {
        name: "nitin bela",
        icon3: FaUser,
      },
      calender: {
        icon: FaRegCalendarAlt,
        date: "2024-06-04 to 2024-08-06",
      },
      time: {
        ti: "12:00 PM - 2.00 PM",
        icon4: PiNotebook,
      },
    },
  ];
  let [component, setComponent] = useState(1);
  function click(val) {
    let comp = val;
    setComponent(comp);
  }
  const [data, setData] = useState(datas);
  const [input, setInput] = useState("");
  let inpLowecase = input.toLowerCase();

  // function Search() {
  //   let carts = datas.filter((val) => {
  //     let keys = Object.keys(val);
  //     for (let i = 0; i < keys.length; i++) {
  //       let keyArr = keys[i];
  //       return String(val[keyArr]).toLowerCase().includes(inpLowecase) === true;
  //     }
  //   });
  //   setData(carts);
  //   console.log(carts);
  // }

  function Search() {
    const carts = datas.filter((val) => {
      return Object.values(val).some((value) =>
        typeof value === "object"
          ? Object.values(value).some((nestedValue) =>
              String(nestedValue).toLowerCase().includes(inpLowecase)
            )
          : String(value).toLowerCase().includes(inpLowecase)
      );
    });
    setData(carts);
    console.log(carts);
  }

  useEffect(() => {
    Search();
  }, [input]);
  return (
    <div className=" lg:w-[85%]  w-full   pl-4 py-5 lg:py-0">
      <div className="flex w-72 py-2 rounded-2xl justify-between px-4 bg-white items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="outline-none text-sm font-light border-none"
          type="text"
          placeholder="Search here..."
        />
        <IoSearch onClick={Search} className="cursor-pointer" />
      </div>
      <div className="btns flex items-center flex-wrap gap-2 lg:gap-0  sm:gap-3">
        <Button Click={click} butt={butt} />
      </div>
      <div>
        {component === 1 && <Cards data={data} />}
        {component === 2 && <Upcoming />}
        {component === 3 && <Completed />}
      </div>
    </div>
  );
}

export default Content;
