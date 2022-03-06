import React, { useState } from "react";
import { coords } from "../../utils/calculateCoords";

import { Tiles } from "./Tiles";
import { Centers } from "./Centers";
import { Corners } from "./Corners";
import { Roads } from "./Roads";

const { centers, corners, roads } = coords();

export const Board = ({ activePlayer }) => {
  const { color } = activePlayer;

  const [taken, setTaken] = useState({ corners: [], roads: [] });

  return (
    <>
      <Tiles centers={centers} />
      <Centers centers={centers} />
      <Corners corners={corners} color={color} taken={taken} setTaken={setTaken} />
      <Roads roads={roads} color={color} taken={taken} setTaken={setTaken} />
    </>
  );
};
