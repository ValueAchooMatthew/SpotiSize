"use client";

import * as d3 from "d3";
import { StarNodes, StarLinks } from "@/app/_types/data";
import drawStars from "./drawStars";
import { useEffect, useRef } from "react";
import { tryGetCoordsFromEvent } from "@/app/_utlis/eventParsers";

export default function StarSimulation({horoscopeData}: {horoscopeData: {nodes: StarNodes[], links: StarLinks[]}}){
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const width = 1200;
  const height = 600;

  useEffect(()=>{
    const links: StarLinks[] = horoscopeData.links;
    const nodes: StarNodes[] = horoscopeData.nodes;
    
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if(!context){
      return;
    }
    
    const simulation = d3.forceSimulation<StarNodes>(nodes)
      .force("link", d3.forceLink<StarNodes, StarLinks>(links).id((d) => d.id).strength(.05))
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("return", returnForce)
      .on("tick", ()=>{
        drawStars(context, width, height, nodes, links,)
      });


    const drag = d3.drag<HTMLCanvasElement, StarNodes>().subject((event) => {
      const coords = tryGetCoordsFromEvent(event);
      let least: StarNodes | undefined = undefined;
      // console.log(coords)
      if (coords) {
        least = d3.least(nodes, (node) => {
          if (node.x && node.y) {
            const distance = Math.sqrt((coords.x - (node.x)) ** 2 + (coords.y - (node.y)) ** 2);
            return distance;
          }
          return 1;
        });
      }
      const fallback: d3.SubjectPosition = { x: 0, y: 0 };
      return least ?? fallback;
    }).on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
    
    d3.select<HTMLCanvasElement, StarNodes>(context.canvas)
      .call(drag);
    
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
      console.log(event.x, event.y)
    }
    
    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;

    }

    function returnForce(){
      for (let i = 0, n = nodes.length, node; i < n; ++i) {
        node = nodes[i];
        if(!node.vx || !node.vy || !node.x || !node.y){
          return;
        }
        node.vx = (node.default.x - node.x) *.03;
        node.vy = (node.default.y - node.y) *.03;
      }

    }
  })

  
  return(
    <canvas className="z-50 xs:rounded-[5rem] rounded-[3rem] justify-self-center"
      ref={canvasRef}
      style={{
        width,
        height
      }}
      width={width}
      height={height}
    />
  )
}