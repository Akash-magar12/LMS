import React, { useState } from "react";
import { Link } from "react-router-dom";

function TestNav() {
  let [color, setColor] = useState(0);
  const links = [
    { path: "/Test-module", label: "All Tests" },
    { path: "create-test", label: "Create Test" },
    { path: "test-result", label: "Test Result" },
  ];

  let handleClick = (val) => {
    setColor(val);
  };
  return (
    <div className=" flex gap-3 pl-4 mb-10 pt-4 lg:pt-6">
      {links.map((val, ind) => {
        return (
          <Link to={val.path}>
            <button
              onClick={() => handleClick(ind)}
              key={ind}
              className={`border-2 ${
                color === ind ? "actives2" : ""
              } hover:bg-[#33308B] text-sm transition-all  lg:text-md hover:text-white rounded-md border-[#33308B] text-[#33308B] px-3 py-1`}
            >
              {val.label}
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default TestNav;
