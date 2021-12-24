import React from "react";

const style = {
  width: 30,
  height: 55,
  borderRadius: 10,
  border: "solid 3px",
  margin: 3,
  paddingLeft: 3,
};

export const Card = ({ background, count }) => {
  return <div style={{ ...style, background }}>{count}</div>;
};
