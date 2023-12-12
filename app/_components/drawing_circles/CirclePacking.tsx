'use client';
import * as d3 from "d3";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { drawCircles } from "./drawCircles";
import { Node, RegularTrack, LocalTrack } from "@/app/_types/data";

import { scaleSqrt, extent } from "d3";
import { SubjectPosition } from "d3";

const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 80;

type CirclePackingProps = {
  width: number;
  height: number;
  data: Node[];
  setInformation: Dispatch<SetStateAction<RegularTrack | LocalTrack | undefined>>,
  bubbleSize: number;
};

export const CirclePacking = ({ width, height, data, setInformation, bubbleSize}: CirclePackingProps) => {
  // The force simulation mutates nodes, so create a copy first
  // Node positions are initialized by d3

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const nodes: Node[] = data.map((d) => {const picture = new Image(); 
      if(d.img){
        picture.src = d.img; 
      }
      return {imageElement: picture, ...d }});
      
    const [min, max] = extent(nodes.map((d) => d.value)) as [number, number];
    const sizeScale = scaleSqrt()
      .domain([min, max])
      .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);

    // set dimension of the canvas element
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) {
      return;
    }
    // run d3-force to find the position of nodes on the canvas
    //TODO: .alpha
    const simulation = d3.forceSimulation<Node>(nodes)
      // .alphaDecay(.01)
      

      // list of forces we apply to get node positions
      .force(
        "collide",
        d3.forceCollide<Node>().radius((node) => sizeScale(node.value)/2 +bubbleSize)
      )
        .force("charge", d3.forceManyBody().strength(.002))
        .force("center", d3.forceCenter(width / 2, height / 2))
        // .force("charge", d3.forceY(0).strength(0.05))
        // .force("charge", d3.forceX(0).strength(0.01))
        .force("x", d3.forceX(width/2).strength(.03))
        .force("y", d3.forceY(height/2).strength(.03)) 

      // at each iteration of the simulation, draw the network diagram with the new node positions
      .on("tick", () => {
        drawCircles(context, width, height, nodes, sizeScale, bubbleSize);
      });


    const drag = d3.drag<HTMLCanvasElement, Node>().subject((event, d: Node) => {
      const [px, py] = d3.pointer(event, context.canvas);
      const least = d3.least(nodes, (node) => {
        
        if (node.x != undefined && node.y != undefined) {
          return Math.sqrt((px - (node.x))**2 + (py - (node.y))**2);
        }
        return 1;
      });
      const fallback: SubjectPosition = { x: 0, y: 0 };
      if (least) { return least } else { return fallback };
    }).on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
    

    d3.select<HTMLCanvasElement, Node>(context.canvas)
      .call(drag)
    function dragstarted(event: { active: any; subject: { fx: any; x: any; fy: any; y: any; name: string; group: string; img:string; index:number; page:string; artist:string, islocal:boolean}; }) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
      setInformation({
        is_local: event.subject.islocal, 
        name:event.subject.name,
        group:event.subject.group,
        img:event.subject.img,
        index:event.subject.index,
        page:event.subject.page,
        artist:event.subject.artist
      })
    }
    
    //TODO: Fix any because maxim says 

    // Update the subject (dragged node) position during drag.
    function dragged(event: { subject: { fx: any; fy: any; }; x: any; y: any; }) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    // Restore the target alpha so the simulation cools after dragging ends.
    // Unfix the subject position now that it’s no longer being dragged.
    function dragended(event: { active: any; subject: { fx: null; fy: null; }; }) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }


  }, [width, height, data, setInformation, bubbleSize]);

  return (
      <canvas className="z-50 rounded-full border-4 border-black" 
        ref={canvasRef}
        style={{
          width,
          height
        }}
        width={width}
        height={height}
      />
  );
};

