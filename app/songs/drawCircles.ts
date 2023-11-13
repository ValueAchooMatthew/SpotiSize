import { scaleOrdinal, ScalePower } from "d3";
import { Node } from "./data";

const COLORS = [
  "#e0ac2b",
  "#e85252",
  "#6689c6",
  "#9a6fb0",
  "#a53253",
  "#69b3a2"
];


export const drawCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  sizeScale: ScalePower<number, number, never>
) => {
  // Color Scale
  const allGroups = [...new Set(nodes.map((d) => d.group))];
  const colorScale = scaleOrdinal<string>().domain(allGroups).range(COLORS);

  context.clearRect(0, 0, width, height);

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }
    context.save();
    context.beginPath();
    // context.moveTo(node.x + 1000000, node.y);
    context.arc(node.x, node.y, sizeScale(node.value), 0, 2 * Math.PI);
    context.clip();
    // context.fillStyle = colorScale(node.group);
    // context.fill();
    const image = new Image();
    image.src = node.img;
    image.width = 30;
    image.height = 30;

    context.drawImage(image, node.x -45, node.y -45, 80, 80 );
    context.restore();

  });
};
