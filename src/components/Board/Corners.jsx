import React, { useState } from "react";
import { CENTER_RAD } from "../../constants";

const style = {
  width: 2 * CENTER_RAD,
  height: 2 * CENTER_RAD,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2 * CENTER_RAD,
  position: "absolute",
  cursor: "pointer",
  zIndex: 1,
};

export const Corners = ({ corners, color }) => {
  const [data, setData] = useState(corners);

  const updateData = (index) => {
    const updatedData = [...data];
    updatedData[index].c = color;
    setData(updatedData);
  };

  return (
    <>
      {data.map((d, index) => (
        <div
          key={`${d.x}-${d.y}`}
          style={{
            ...style,
            left: d.x - CENTER_RAD,
            top: d.y - CENTER_RAD,
            background: d.c || color,
            opacity: d.c ? "1" : "0",
          }}
          onClick={() => (d.c ? {} : updateData(index))}
        >
          +
        </div>
      ))}
    </>
  );
};
