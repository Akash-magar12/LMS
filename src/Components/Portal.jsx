import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import Modalbox from "./Modalbox";

const Portal = ({handleClose}) => {
  return (
    <div>
      {createPortal(<Backdrop handleClose={handleClose} />, document.querySelector(".backdrop"))}
      {createPortal(<Modalbox handleClose={handleClose} />, document.querySelector(".modalbox"))}
    </div>
  );
};

export default Portal;
