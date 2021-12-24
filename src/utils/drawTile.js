import { VERT_RAD, TILE_BORDER } from "../constants";

const Point = (x, y) => {
  return { x: x, y: y };
};

const getHexCornerCoord = (center, i) => {
  const x = center.x + VERT_RAD * Math.cos((Math.PI / 180) * (60 * i - 30));
  const y = center.y + VERT_RAD * Math.sin((Math.PI / 180) * (60 * i - 30));

  return Point(x, y);
};

export const drawTile = (center, canvas) => {
  const ctx = canvas.getContext("2d");

  ctx.lineWidth = TILE_BORDER;
  ctx.fillStyle = center.c;
  ctx.beginPath();

  for (let i = 0; i <= 6; i++) {
    const coords = getHexCornerCoord(center, i);

    if (i === 0) {
      ctx.moveTo(coords.x, coords.y);
    } else if (i === 6) {
      ctx.closePath();
    } else {
      ctx.lineTo(coords.x, coords.y);
    }
  }

  ctx.stroke();
  ctx.fill();
};
