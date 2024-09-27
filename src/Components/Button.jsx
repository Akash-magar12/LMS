import React, { useState } from "react";

function Button(props) {
  const { butt, Click } = props;
  const [color, setColor] = useState(1);
  let handleCLI = (val) => {
    setColor(val);
  };

  return (
    <>
      {butt.map((val, idx) => (
        <div
          onClick={() => {
            Click(val.index);
            handleCLI(val.index);
          }}
          key={idx}
          className={`flex ${color===val.index ? "actives2": ""} items-center cursor-pointer hovers transition-all hover:bg-[#33308B] hover:text-white  text-[#33308B]   border-2 w-fit px-2 lg:px-3 border-[#33308B] gap-1 lg:gap-2 py-[5.5px]  rounded-md mt-4 ml-1`}
        >
          <val.icon className={`"text-[#33308B] ${color===val.index ? "actives2": ""} hov"`} />
          <button className="text-sm  font-normal">{val.title}</button>
        </div>
      ))}
    </>
  );
}

export default Button;
