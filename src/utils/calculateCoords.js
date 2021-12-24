import { BASE } from "../assets/maps/Base";
import {
  CANVAS_WIDTH,
  VERT_RAD,
  VERT_DIAG,
  HOR_RAD,
  HOR_DIAG,
  TILE_BORDER,
  SPACE,
  COLORS,
  ROAD_WIDTH,
} from "../constants";

const Point = (x, y) => {
  return { x: x, y: y };
};

const getHexCornerCoord = (center, i) => {
  const x = center.x + VERT_RAD * Math.cos((Math.PI / 180) * (60 * i - 30));
  const y = center.y + VERT_RAD * Math.sin((Math.PI / 180) * (60 * i - 30));

  return Point(x, y);
};

const getRandColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const getRandNumber = () => {
  let number = 7;

  do {
    number = Math.floor(Math.random() * 11) + 2;
  } while (number === 7);

  return number;
};

export const coords = () => {
  const centers = [];
  const corners = [];
  const roads = [];

  const vert_start = CANVAS_WIDTH / 2;

  const hor_start =
    VERT_RAD + (TILE_BORDER + SPACE) / Math.sin((Math.PI / 180) * 60) / 2 + VERT_RAD / 2;

  const rows = BASE;

  for (let i = 0; i < rows.length; i++) {
    const Y =
      hor_start +
      ((i * 3) / 4) * VERT_DIAG +
      i * (TILE_BORDER + SPACE) * Math.sin((Math.PI / 180) * 60);
    const is_centered = rows[i] % 2;

    if (is_centered === 1) {
      centers.push({ x: vert_start, y: Y, c: getRandColor(), n: getRandNumber() });
    }

    const num_sides = Math.floor(rows[i] / 2);

    for (let j = 0; j < num_sides; j++) {
      if (is_centered === 0) {
        centers.push({
          x:
            vert_start -
            j * HOR_DIAG -
            (j + 1) * (TILE_BORDER + SPACE) -
            HOR_RAD +
            (TILE_BORDER + SPACE) / 2,
          y: Y,
          c: getRandColor(),
          n: getRandNumber(),
        });
        centers.push({
          x:
            vert_start +
            j * HOR_DIAG +
            (j + 1) * (TILE_BORDER + SPACE) +
            HOR_RAD -
            (TILE_BORDER + SPACE) / 2,
          y: Y,
          c: getRandColor(),
          n: getRandNumber(),
        });
      } else {
        centers.push({
          x: vert_start + (j + 1) * (HOR_DIAG + TILE_BORDER + SPACE),
          y: Y,
          c: getRandColor(),
          n: getRandNumber(),
        });
        centers.push({
          x: vert_start - (j + 1) * (HOR_DIAG + TILE_BORDER + SPACE),
          y: Y,
          c: getRandColor(),
          n: getRandNumber(),
        });
      }
    }
  }

  centers.forEach((center) => {
    for (let i = 0; i <= 5; i++) {
      const coords = getHexCornerCoord(center, i);
      let cornerCoords = { x: 0, y: 0, deg: 0 };
      let roadCoords = { x: 0, y: 0, deg: 0 };

      switch (i) {
        case 0:
          cornerCoords.x = coords.x + (TILE_BORDER + SPACE) / 2;
          cornerCoords.y = coords.y - ((TILE_BORDER + SPACE) / 2) * Math.tan((Math.PI / 180) * 30);

          roadCoords.x = cornerCoords.x - ROAD_WIDTH / 2;
          roadCoords.y =
            cornerCoords.y + ((TILE_BORDER + SPACE) / 2) * Math.tan((Math.PI / 180) * 30);
          break;
        case 1:
          cornerCoords.x = coords.x + (TILE_BORDER + SPACE) / 2;
          cornerCoords.y = coords.y + ((TILE_BORDER + SPACE) / 2) * Math.tan((Math.PI / 180) * 30);

          roadCoords.x = cornerCoords.x - ROAD_WIDTH / 2 - HOR_RAD / 2 - (TILE_BORDER + SPACE) / 4;
          roadCoords.y =
            cornerCoords.y -
            VERT_RAD / 4 +
            ((TILE_BORDER + SPACE) / 4) * Math.tan((Math.PI / 180) * 30);
          roadCoords.deg = 60;
          break;
        case 2:
          cornerCoords.x = coords.x;
          cornerCoords.y = coords.y + (TILE_BORDER + SPACE) * Math.tan((Math.PI / 180) * 30);

          roadCoords.x = cornerCoords.x - ROAD_WIDTH / 2 - HOR_RAD / 2 - (TILE_BORDER + SPACE) / 4;
          roadCoords.y =
            cornerCoords.y -
            (3 * VERT_RAD) / 4 -
            ((TILE_BORDER + SPACE) / 4) * Math.tan((Math.PI / 180) * 30);
          roadCoords.deg = -60;
          break;
        case 3:
          cornerCoords.x = coords.x - (TILE_BORDER + SPACE) / 2;
          cornerCoords.y = coords.y + ((TILE_BORDER + SPACE) / 2) * Math.tan((Math.PI / 180) * 30);

          roadCoords.x = cornerCoords.x - ROAD_WIDTH / 2;
          roadCoords.y =
            cornerCoords.y -
            ((TILE_BORDER + SPACE) / 2) * Math.tan((Math.PI / 180) * 30) -
            VERT_RAD;
          break;
        case 4:
          cornerCoords.x = coords.x - (TILE_BORDER + SPACE) / 2;
          cornerCoords.y = coords.y - ((TILE_BORDER + SPACE) / 2) * Math.tan((Math.PI / 180) * 30);

          roadCoords.x = cornerCoords.x - ROAD_WIDTH / 2 + HOR_RAD / 2 + (TILE_BORDER + SPACE) / 4;
          roadCoords.y =
            cornerCoords.y -
            (3 * VERT_RAD) / 4 -
            ((TILE_BORDER + SPACE) / 4) * Math.tan((Math.PI / 180) * 30);
          roadCoords.deg = 60;
          break;
        case 5:
          cornerCoords.x = coords.x;
          cornerCoords.y = coords.y - (TILE_BORDER + SPACE) * Math.tan((Math.PI / 180) * 30);

          roadCoords.x = cornerCoords.x - ROAD_WIDTH / 2 + HOR_RAD / 2 + (TILE_BORDER + SPACE) / 4;
          roadCoords.y =
            cornerCoords.y -
            VERT_RAD / 4 +
            ((TILE_BORDER + SPACE) / 4) * Math.tan((Math.PI / 180) * 30);
          roadCoords.deg = -60;
          break;
        default:
          break;
      }

      if (cornerCoords.x)
        corners.push({ x: cornerCoords.x.toFixed(11), y: cornerCoords.y.toFixed(11) });
      if (roadCoords.x)
        roads.push({
          x: roadCoords.x.toFixed(11),
          y: roadCoords.y.toFixed(11),
          deg: roadCoords.deg,
        });
    }
  });

  const uniqueCoorners = [...new Set(corners.map(JSON.stringify))].map(JSON.parse);
  const uniqueRoads = [
    ...new Map(roads.map((road) => [["x", "y"].map((k) => road[k]).join("|"), road])).values(),
  ];

  return {
    centers,
    corners: uniqueCoorners,
    roads: uniqueRoads,
  };
};
