import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiNotebook } from "react-icons/pi";
import { FaUser } from "react-icons/fa";

export default function Completed() {
  let info = [
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
  return (
    <div className="mt-5 flex lg:pb-10 flex-wrap justify-start gap-5  ">
      {info.map((val, idx) => (
        <div
          key={idx}
          className="lg:w-96 w-[22.4rem]   h-44 shadow-xl min-h-60 lg:mr-3  flex flex-col gap-[10px] items-start  border-t-8 border-[#33308B] bg-white p-4 rounded-xl"
        >
          <div className="flex justify-between   w-full items-center">
            <p className="text-[#33308B]">{val.topics.topic}</p>
            <div className="flex items-center gap-2">
              <val.topics.icon size={12} />
              <span className="text-[14px]">{val.topics.number}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <val.title.icon2 />
            <p className="text-sm">{val.title.num}</p>
          </div>
          <div className="flex items-center gap-3">
            <val.Users.icon3 />

            <p className="text-sm">nitin bela</p>
          </div>
          <div className="flex items-center gap-3">
            <val.calender.icon />
            <p className="text-sm">{val.calender.date}</p>
          </div>
          <div className="flex items-center gap-3 border-b-[3px] w-full pb-4 border-dashed">
            <val.time.icon4 />
            <p className="text-sm">{val.time.ti}</p>
          </div>
          <button className="bg-[#33308B] text-white text-sm px-4 py-[6px] rounded-md">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
