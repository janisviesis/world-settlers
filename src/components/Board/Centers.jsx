import React from "react";
import { CENTER_BORDER, CENTER_RAD } from "../../constants";

const robber = false;

const style = {
  width: 2 * CENTER_RAD,
  height: 2 * CENTER_RAD,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: `${CENTER_BORDER}px solid black`,
  fontFamily: "fantasy",
  background: "white",
  position: "absolute",
  cursor: robber ? "pointer" : "default",
  zIndex: 1,
};

const getNumberStyle = (num) => {
  let color = "black";
  let fontSize = 14;
  let fontWeight = 400;

  switch (num) {
    case 3:
    case 11:
      fontSize = 15;
      fontWeight = 450;
      break;
    case 4:
    case 10:
      fontSize = 16;
      fontWeight = 500;
      break;
    case 5:
    case 9:
      fontSize = 17;
      fontWeight = 550;
      break;
    case 6:
    case 8:
      color = "red";
      fontSize = 18;
      fontWeight = 600;
      break;
    default:
      break;
  }

  return {
    color,
    fontSize,
    fontWeight,
  };
};

export const Centers = ({ centers }) => (
  <>
    {centers.map((center) => {
      const { color, fontSize, fontWeight } = getNumberStyle(center.n);
      return (
        <div
          key={`${center.x}-${center.y}`}
          style={{
            ...style,
            left: center.x - CENTER_RAD - CENTER_BORDER,
            top: center.y - CENTER_RAD - CENTER_BORDER,
            fontSize,
            fontWeight,
            color,
          }}
        >
          {center.n}
        </div>
      );
    })}
  </>
);
