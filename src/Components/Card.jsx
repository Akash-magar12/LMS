import React from "react";

function Card({ data }) {
  return (
    <>
      {data.length > 0 ? (
        data.map((val, idx) => (
          <div
            key={idx}
            className="lg:w-96 w-[22.4rem]   h-44 shadow-xl min-h-60 lg:mr-3  flex flex-col gap-[10px] items-start  border-t-8 border-[#33308B] bg-white p-4 rounded-xl"
          >
            <div className="flex justify-between   w-full items-center">
              <p className="text-[#33308B]">{val.topics.topic}</p>
              <div className="flex items-center gap-2">
                <val.topics.icon size={12} />
                <span className="text-[14px]">{val.topics.number}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <val.title.icon2 />
              <p className="text-sm">{val.title.num}</p>
            </div>
            <div className="flex items-center gap-3">
              <val.Users.icon3 />

              <p className="text-sm">nitin bela</p>
            </div>
            <div className="flex items-center gap-3">
              <val.calender.icon />
              <p className="text-sm">{val.calender.date}</p>
            </div>
            <div className="flex items-center gap-3 border-b-[3px] w-full pb-4 border-dashed">
              <val.time.icon4 />
              <p className="text-sm">{val.time.ti}</p>
            </div>
            <button className="bg-[#33308B] text-white text-sm px-4 py-[6px] rounded-md">
              View Details
            </button>
          </div>
        ))
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
}

export default Card;
