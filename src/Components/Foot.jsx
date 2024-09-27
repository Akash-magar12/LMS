import React from "react";
import { GiLunarModule } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";

import { FaNoteSticky } from "react-icons/fa6";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <div className="w-full h-18 p-4 md:px-6 lg:hidden flex justify-start items-center gap-10 md:gap-12 shadow-2xl fixed bottom-0 bg-white">
      <Link to="/">
        <GiLunarModule className="md:text-[2.3rem] text-[2rem]" />
      </Link>
      <Link to="Batch">
        <GrNotes className="md:text-[2.3rem] text-[2rem]" />
      </Link>
      <Link to="Test-module">
        <FaNoteSticky className="md:text-[2.3rem] text-[2rem]" />
      </Link>
      <Link to="Resources">
        <IoBookSharp className="md:text-[2.3rem] text-[2rem]" />
      </Link>
    </div>
  );
}

export default Foot;
