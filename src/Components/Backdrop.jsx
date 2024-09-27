import React from "react";

const Backdrop = ({ handleClose }) => {
  return (
    <div
      onClick={handleClose}
      className="w-[85%] cursor-pointer h-full right-0 top-[11%] fixed bg-[#00000050]"
    ></div>
  );
};

export default Backdrop;
