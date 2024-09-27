import React from "react";
import { FaNoteSticky } from "react-icons/fa6";

function Upcoming() {
  return (
    <div className="flex justify-center mt-40 lg:mt-20  flex-col gap-3 items-center  h-full w-full">
      <h3 className="text-[#908d8d]  text-md">No Upcoming Class</h3>
      <FaNoteSticky size={30} />
    </div>
  );
}

export default Upcoming;
