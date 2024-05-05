import { ScalePower } from "d3";
import { Node } from "@/app/_types/data";


export const drawCircles = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: Node[],
  sizeScale: ScalePower<number, number, never>,
  bubble_size: number,
) => {
  context.clearRect(0, 0, width, height);
  const imageFallback = new Image();
  imageFallback.src = "/img/Spotify_icon.svg";

  // Draw the nodes
  nodes.forEach((node) => {
    if (!node.x || !node.y) {
      return;
    }
    if (node.img) {
      const bubbleDiameter = sizeScale(node.value) + 2*bubble_size;
      const x = node.x - bubbleDiameter / 2;
      const y = node.y - bubbleDiameter / 2;
  
      context.save();
      context.beginPath();
      context.arc(
        node.x,
        node.y,
        sizeScale(node.value) / 2 + bubble_size,
        0,
        2 * Math.PI
      );
      context.closePath();
      context.clip();
  
      // Calculate the scaling factors for the image
      const scaleWidth = bubbleDiameter / node.img.width;
      const scaleHeight = bubbleDiameter / node.img.height;
      console.log(scaleWidth, scaleHeight);
      const scale = Math.max(scaleWidth, scaleHeight);
  
      // Calculate the new width and height of the image after scaling
      const newWidth = node.img.width * scale;
      const newHeight = node.img.height * scale;
  
      // Calculate the position to center the scaled image within the bubble
      const offsetX = (bubbleDiameter - newWidth) / 2 + x;
      const offsetY = (bubbleDiameter - newHeight) / 2 + y;
  
      context.drawImage(
        node.img,
        0,
        0,
        node.img.width,
        node.img.height,
        offsetX,
        offsetY,
        newWidth,
        newHeight
      );
  
      context.restore();
    }
  
  });
};
