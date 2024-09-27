import React, { useState } from "react";
import Modulecard from "./ModuleCard";
import Backdrop from "./Backdrop";
import Portal from "./Portal";

function Modulecards({ data }) {
  const [backdrop, setBackdrop] = useState(false);

  function handleBack() {
    setBackdrop(true);
  }

  function handleClose() {
    setBackdrop(false);
  }

  return (
    <div className="mt-3 flex items-center gap-5 flex-wrap">
      {backdrop && <Portal handleClose={handleClose}  />}
      {data && data.length > 0 ? (
        data.map((val, ind) => (
          <Modulecard
            key={ind}
            course={val.course}
            Icon={val.icon}
            duration={val.duration}
            topic={val.total}
            fees={val.fees}
            handleBack={handleBack}
          />
        ))
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
}

export default Modulecards;
