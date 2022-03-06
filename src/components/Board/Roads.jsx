import React, { useState } from "react";
import { ROAD_LENGTH, ROAD_WIDTH, BORDER_ROAD } from "../../constants";

export const Roads = ({ roads, color, taken, setTaken }) => {
  const [data, setData] = useState(roads);

  const updateData = (index) => {
    const updatedData = [...data];
    updatedData[index].c = color;
    setData(updatedData);
    setTaken({ ...taken, roads: [...taken.roads, updatedData[index]] });
  };

  const checkForBuilding = (index) => {
    const { coords } = roads[index];

    let notAllowed = true;

    taken.roads.concat(taken.corners).forEach(({ x, y, c }) => {
      if (c !== color) return;
      coords.forEach((coord) => {
        if (Math.sqrt((coord.x - x) * (coord.x - x) + (coord.y - y) * (coord.y - y)) <= BORDER_ROAD)
          notAllowed = false;
      });
    });

    return notAllowed;
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
            cursor: "pointer",
          }}
          onClick={() => (r.c || checkForBuilding(index) ? {} : updateData(index))}
        ></div>
      ))}
    </>
  );
};
