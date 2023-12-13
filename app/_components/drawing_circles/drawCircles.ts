import { scaleOrdinal, ScalePower } from "d3";
import { Node } from "@/app/_types/data";

const imageFallback = new Image();
imageFallback.src = "/img/Spotify_icon.svg";

export const drawCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  sizeScale: ScalePower<number, number, never>,
  bubble_size: number,
) => {
  // Color Scale
  const allGroups = [...new Set(nodes.map((d) => d.group))];
  // const colorScale = scaleOrdinal<string>().domain(allGroups).range(COLORS);

  context.clearRect(0, 0, width, height);

  // Draw the nodes
  nodes.forEach((node, i) => {
    if (!node.x || !node.y) {
      return;
    }

    context.save();
    context.beginPath();
    // context.moveTo(node.x + 1000000, node.y);
    context.arc(
      node.x,
      node.y,
      sizeScale(node.value) / 2 + bubble_size,
      0,
      2 * Math.PI,
    );
    // context.fillStyle = "#00ff00"
    // context.fill()
    context.clip();
    // context.fillStyle = colorScale(node.group);
    // context.fill();
    // const image = new Image();
    // image.src = node.img;
    context.drawImage(
      node.img ?? imageFallback,
      node.x - sizeScale(node.value) / 2 - bubble_size,
      node.y - sizeScale(node.value) / 2 - bubble_size,
      sizeScale(node.value) + 2 * bubble_size,
      sizeScale(node.value) + 2 * bubble_size,
    );

    context.restore();
  });
};
