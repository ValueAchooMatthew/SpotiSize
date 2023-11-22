import * as d3 from "d3";

export interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  value: number;
  img: string;
  imageElement?: HTMLImageElement;
}