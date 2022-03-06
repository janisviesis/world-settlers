import React, { useState } from "react";
import { CENTER_RAD, BORDER_CORNER } from "../../constants";

const style = {
  width: 2 * CENTER_RAD,
  height: 2 * CENTER_RAD,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  position: "absolute",
  cursor: "pointer",
  zIndex: 1,
};

export const Corners = ({ corners, color, taken, setTaken }) => {
  const [data, setData] = useState(corners);

  const updateData = (index, icon) => {
    const updatedData = [...data];

    if (icon === "home") {
      updatedData[index].icon = "city";
    } else {
      setTaken({ ...taken, corners: [...taken.corners, updatedData[index]] });
      updatedData[index].icon = "home";
      updatedData[index].c = color;
    }

    setData(updatedData);
  };

  const checkAllowed = (e) => {
    const x1 = e.pageX;
    const y1 = e.pageY;

    let notAllowed = false;

    taken.corners.forEach(({ x, y }) => {
      if (Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)) <= BORDER_CORNER) notAllowed = true;
    });

    return notAllowed;
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
          onClick={(e) =>
            d.icon === "city" || (d.c ? d.c !== color : false) || (!d.icon && checkAllowed(e))
              ? {}
              : updateData(index, d.icon)
          }
        >
          <i className={`fas fa-${d.icon}`}></i>
        </div>
      ))}
    </>
  );
};
