import { StarLinks, StarNodes } from "@/app/_types/data";

export default function drawStars(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  nodes: StarNodes[],
  links: StarLinks[]){
  context.clearRect(0, 0, width, height);
  context.strokeStyle = "white"
  context.lineWidth = 5;

  links.forEach((link)=>{
    context.save();
    context.beginPath();
    const source = link.source as unknown as StarNodes;
    const target = link.target as unknown as StarNodes;
    if(!source.x || !source.y || !target.x || !target.y){
      return;
    }
    context.moveTo(source.x, source.y);
    context.lineTo(target.x, target.y);
    context.stroke();
  })

  nodes.forEach((node)=>{
    context.save();
    context.beginPath();
    if(!node.x || !node.y){
      return;
    }
    context.arc(
      node.x,
      node.y,
      node.size,
      0,
      2 * Math.PI
    );

    context.stroke();
    context.fillStyle = "green";
    context.fill();
    
  })

}