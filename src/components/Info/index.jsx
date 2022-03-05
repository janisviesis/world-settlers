import React from "react";
import { Card } from "./Card";
import { Player } from "./Player";
import { CANVAS_HEIGHT, COLORS, PLAYERS, remaining } from "../../constants";

export const Info = ({ activePlayer }) => {
  return (
    <div style={{ width: 200, height: CANVAS_HEIGHT, background: "silver" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {COLORS.map((color) => (
          <Card key={color} background={color} count={remaining[color]} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {PLAYERS.map((player, index) => (
          <Player key={player.name} player={player} active={activePlayer === index} />
        ))}
      </div>
    </div>
  );
};
