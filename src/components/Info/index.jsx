import React from "react";
import { Card } from "./Card";
import { Player } from "./Player";
import { CANVAS_HEIGHT, COLORS } from "../../constants";

const remaining = {
  green: 3,
  orange: 4,
  limegreen: 5,
  yellow: 3,
  gray: 2,
};

const PLAYERS = [
  {
    name: "Player A",
    color: "red",
    resources: {
      wood: 2,
      clay: 1,
      wool: 2,
      wheat: 0,
      rock: 1,
    },
  },
  {
    name: "Player B",
    color: "brown",
    resources: {
      wood: 1,
      clay: 1,
      wool: 1,
      wheat: 1,
      rock: 1,
    },
  },
  {
    name: "Player C",
    color: "purple",
    resources: {
      wood: 1,
      clay: 2,
      wool: 3,
      wheat: 4,
      rock: 5,
    },
  },
];

export const Info = () => {
  return (
    <div style={{ width: 200, height: CANVAS_HEIGHT, background: "silver" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {COLORS.map((color) => (
          <Card key={color} background={color} count={remaining[color]} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {PLAYERS.map((player) => (
          <Player key={player.name} player={player} />
        ))}
      </div>
    </div>
  );
};
