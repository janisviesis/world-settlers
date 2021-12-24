import { BASE } from "../assets/maps/Base";

export const VERT_RAD = 50;
export const VERT_DIAG = 2 * VERT_RAD;

export const HOR_RAD = VERT_RAD * Math.sin((Math.PI / 180) * 60);
export const HOR_DIAG = 2 * HOR_RAD;

export const TILE_BORDER = 10;
export const SPACE = 0;

export const CENTER_BORDER = 3;
export const CENTER_RAD = VERT_RAD / 5 + (TILE_BORDER + SPACE) / 6;

export const ROAD_LENGTH = VERT_RAD;
export const ROAD_WIDTH = VERT_RAD / 5;

export const CANVAS_WIDTH = Math.max(...BASE) * (HOR_DIAG + TILE_BORDER + SPACE) + VERT_RAD;

export const CANVAS_HEIGHT =
  BASE.length *
    ((VERT_DIAG * 3) / 4 + (((TILE_BORDER + SPACE) / Math.sin((Math.PI / 180) * 60)) * 3) / 4) +
  VERT_DIAG / 4 +
  (TILE_BORDER + SPACE) / Math.sin((Math.PI / 180) * 60) / 4 +
  VERT_RAD;

export const COLORS = ["green", "orange", "limegreen", "yellow", "gray"];
