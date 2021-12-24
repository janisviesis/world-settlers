import React, { useRef, useEffect } from "react";
import { drawTile } from "../../utils/drawTile";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "../../constants";

export const Tiles = ({ centers }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    centers.forEach((center) => drawTile(center, canvas));
  }, [centers]);

  return (
    <div>
      <canvas ref={canvasRef} style={{ background: "blue" }}></canvas>
    </div>
  );
};
