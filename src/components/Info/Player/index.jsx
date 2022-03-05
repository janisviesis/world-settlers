import React from "react";

export const Player = ({ player, active }) => {
  const { wood, clay, wool, wheat, rock } = player.resources;
  return (
    <div>
      <div style={{ background: player.color, margin: 5, opacity: active ? 1 : 0.5 }}>
        {player.name}
      </div>
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
