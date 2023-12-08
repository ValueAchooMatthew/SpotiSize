import * as d3 from "d3";

export interface Node extends d3.SimulationNodeDatum {
  id: string;
  group: string;
  value: number;
  img: string;
  imageElement?: HTMLImageElement;
}

export default interface Info{
  
  name: string,
  group: string,
  img: string,
  index: number,
  page: string
};