import React from "react";

export const Player = ({ player }) => {
  const { wood, clay, wool, wheat, rock } = player.resources;
  return (
    <div>
      <div style={{ background: "cadetBlue", margin: 5 }}>{player.name}</div>
      <ul>
        <li>Wood: {wood}</li>
        <li>Clay: {clay}</li>
        <li>Wool: {wool}</li>
        <li>Wheat: {wheat}</li>
        <li>Rock: {rock}</li>
      </ul>
    </div>
  );
};
