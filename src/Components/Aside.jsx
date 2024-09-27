import React from "react";
import { GiLunarModule } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import AsideCom from "./AsideCom";
function Aside() {
  let arr = [
    {
      title: "Module",
      icon: GiLunarModule,
      url: "/",
      count: 1,
    },
    {
      title: "Batch",
      icon: GrNotes,
      url: "Batch",
      count: 2,
    },
    {
      title: "Test Module",
      icon: FaNoteSticky,
      url: "Test-module",
      count: 3,
    },
    {
      title: "Resources",
      icon: IoBookSharp,
      url: "Resources",
      count: 4,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] ml-4 hidden w-[15%] lg:flex justify-start flex-col border-r-[6px] border-[#DBDBDB] gap-2 p-4 ">
      <Link to="/"></Link>

      <AsideCom details={arr} />
    </div>
  );
}

export default Aside;
