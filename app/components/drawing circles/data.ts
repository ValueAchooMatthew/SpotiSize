import * as d3 from "d3";

export interface Node extends d3.SimulationNodeDatum {
  id: string;
  group?: string;
  page: string;
  value: number;
  img: string;
  name:string;
  imageElement?: HTMLImageElement;
  artist?: string;
}

export default interface Info{
  name: string,
  group?: string,
  img: string,
  index: number,
  page: string,
  artist?: string;
};