import React, { useState } from "react";
import { Link } from "react-router-dom";

function AsideCom(props) {
  const { details } = props;
  const [color, setColor] = useState(1);
  const handleClick = (val) => {
    setColor(val);
  };

  return (
    <>
      {details.map((val, ind) => (
        <Link key={ind} to={val.url}>
          <span
            key={ind}
            onClick={() => handleClick(val.count)}
            className={`flex cursor-pointer ${
              color === val.count ? "actives" : ""
            } transition-all rounded-md p-4 hover:text-white gap-4 items-center hover:bg-[#012951]`}
          >
            <span className="flex items-center">
              <val.icon className="h-[1.5rem] w-[1.5rem]" />
            </span>
            <h2>{val.title}</h2>
          </span>
        </Link>
      ))}
    </>
  );
}

export default AsideCom;
