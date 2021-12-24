import React, { useState } from "react";
import { ROAD_LENGTH, ROAD_WIDTH } from "../../constants";

export const Roads = ({ roads }) => {
  const [data, setData] = useState(roads);

  const updateData = (index) => {
    const updatedData = [...data];
    updatedData[index].c = "purple";
    setData(updatedData);
  };

  return (
    <>
      {data.map((r, index) => (
        <div
          key={`${r.x}-${r.y}`}
          style={{
            width: ROAD_WIDTH,
            height: ROAD_LENGTH,
            position: "absolute",
            left: Number(r.x),
            top: Number(r.y),
            background: r.c || "none",
            transform: `rotate(${r.deg}deg)`,
          }}
          onClick={() => updateData(index)}
        ></div>
      ))}
    </>
  );
};
