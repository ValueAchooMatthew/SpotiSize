'use client';
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { drawCircles } from "./drawCircles";
import { Node } from "./data";
import { scaleSqrt, extent } from "d3";

const BUBBLE_MIN_SIZE = 4;
const BUBBLE_MAX_SIZE = 80;

type CirclePackingProps = {
  width: number;
  height: number;
  data: Node[];
};

export const CirclePacking = ({ width, height, data }: CirclePackingProps) => {
    // The force simulation mutates nodes, so create a copy first
    // Node positions are initialized by d3
    const nodes: Node[] = data.map((d) => ({ ...d }));
  
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    const [min, max] = extent(nodes.map((d) => d.value)) as [number, number];
    const sizeScale = scaleSqrt()
      .domain([min, max])
      .range([BUBBLE_MIN_SIZE, BUBBLE_MAX_SIZE]);
  
    useEffect(() => {
      // set dimension of the canvas element
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!context) {
        return;
      }
      // run d3-force to find the position of nodes on the canvas
      const simulation = d3.forceSimulation<Node>(nodes)
  
        // list of forces we apply to get node positions
        .force(
          "collide",
          d3.forceCollide<Node>().radius((node) => sizeScale(node.value) + 1)
        )
        .force("charge", d3.forceManyBody().strength(80))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("charge", d3.forceY(0).strength(0.05))
  
        // at each iteration of the simulation, draw the network diagram with the new node positions
        .on("tick", () => {
          drawCircles(context, width, height, nodes, sizeScale);
        });

        // d3.select(canvas).call<DragEvent>(d3.drag<HTMLCanvasElement>())
        // .call(d3.drag()
        //   .subject(event => {
        //     const [px, py] = d3.pointer(event, canvas);
        //     return d3.least(nodes, ({x, y}) => {
        //       const dist2 = (x - px) ** 2 + (y - py) ** 2;
        //       if (dist2 < 400) return dist2;
        //     });
        //   })
        //   .on("start", dragstarted)
        //   .on("drag", dragged)
        //   .on("end", dragended));

        // function dragstarted(event) {
        //   if (!event.active) simulation.alphaTarget(0.3).restart();
        //   event.subject.fx = event.subject.x;
        //   event.subject.fy = event.subject.y;
        // }
        
        // // Update the subject (dragged node) position during drag.
        // function dragged(event) {
        //   event.subject.fx = event.x;
        //   event.subject.fy = event.y;
        // }
        
        // // Restore the target alpha so the simulation cools after dragging ends.
        // // Unfix the subject position now that it’s no longer being dragged.
        // function dragended(event) {
        //   if (!event.active) simulation.alphaTarget(0);
        //   event.subject.fx = null;
        //   event.subject.fy = null;
        // }

        
    }, [width, height, nodes, sizeScale]);

    
  
    return (
      <div>
        <canvas className="mt-32 ml-96"
          ref={canvasRef}
          style={{
            width,
            height
          }}
          width={width}
          height={height}
        />
      </div>
    );
  };
  

