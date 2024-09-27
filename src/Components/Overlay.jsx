import React from "react";
import Modal from "./Modal";

const Overlay = ({ handleOverlay }) => {
  return (
    <div
      onClick={handleOverlay}
      className="w-full h-full cursor-pointer fixed  bg-[#00000050]"
    >
      <div onClick={(e) => e.stopPropagation()}>
        <Modal handleOverlay={handleOverlay}/>
      </div>
    </div>
  );
};

export default Overlay;
// import React from "react";
// import Modal from "./Modal";

// const Overlay = ({ handleOverlay }) => {
//   return (
//     <div className="w-full h-full fixed top-0 left-0 bg-[#00000067] flex items-center justify-center">
//       {/* Background overlay click */}
//       <div
//         className="absolute w-full h-full top-0 left-0 cursor-pointer"
//         onClick={handleOverlay}
//       ></div>

//       {/* Modal component positioned over the overlay */}
//       <Modal />
//     </div>
//   );
// };

// export default Overlay;
