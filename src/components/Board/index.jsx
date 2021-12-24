import React from "react";
import { coords } from "../../utils/calculateCoords";

import { Tiles } from "./Tiles";
import { Centers } from "./Centers";
import { Corners } from "./Corners";
import { Roads } from "./Roads";

const { centers, corners, roads } = coords();

export const Board = () => (
  <>
    <Tiles centers={centers} />
    <Centers centers={centers} />
    <Corners corners={corners} />
    <Roads roads={roads} />
  </>
);
