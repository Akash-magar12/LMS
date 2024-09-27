import React from "react";
import Card from "./Card";

function Cards({ data }) {
  return (
    <div className="mt-5 flex flex-wrap justify-start gap-5  ">
      <Card data={data} />
    </div>
  );
}

export default Cards;
