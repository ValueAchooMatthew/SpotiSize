import * as d3 from "d3";
import { scaleOrdinal, ScalePower } from "d3";
import { Node } from "./data";

export const drawCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  sizeScale: ScalePower<number, number, never>,
) => {
  // Color Scale
  const allGroups = [...new Set(nodes.map((d) => d.group))];
  // const colorScale = scaleOrdinal<string>().domain(allGroups).range(COLORS);

  context.clearRect(0, 0, width, height);
  const nevin = new Image();
  nevin.src = "https://lh3.googleusercontent.com/lXipIN8aMbHw8jVNMmaqGuUlT8lsfktsC8M6c130drR2t8K0r6xfq88EVHoKMSyQQbmoqAar4RKqQNI=w544-h544-p-l90-rj"

  // Draw the nodes
  nodes.forEach((node, i) => {
    if (!node.x || !node.y) {
      return;
    }
    context.save();
    context.beginPath();
    // context.moveTo(node.x + 1000000, node.y); 
    context.arc(node.x, node.y, sizeScale(node.value)/2+30, 0, 2 * Math.PI);
    // context.fillStyle = "#00ff00"
    // context.fill()
    context.clip();
    // context.fillStyle = colorScale(node.group);
    // context.fill();
    // const image = new Image();
    // image.src = node.img;

    context.drawImage(node.imageElement ??nevin, node.x-sizeScale(node.value)/2-30, node.y-sizeScale(node.value)/2-30, sizeScale(node.value)+60, sizeScale(node.value)+60);

    context.restore();

  });
};
