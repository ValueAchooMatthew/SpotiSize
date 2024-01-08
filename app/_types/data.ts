import type { SimulationLinkDatum, SimulationNodeDatum } from "d3";

/* SIMULATION TYPES */

/**
 * In-between interface for Spotify data to be used in simulation
 */
export interface Node extends SimulationNodeDatum {
  islocal?: boolean;
  id?: string;
  group?: string;
  page?: string;
  value: number;
  img?: HTMLImageElement;
  name: string;
  artist?: string;
}

export interface StarNodes extends SimulationNodeDatum{
  id: string;
  default: {x: number, y: number}
  size: number
  
}

export interface StarLinks extends SimulationLinkDatum<StarNodes>{
  source: string;
  target: string;
}

/* SPOTIFY CONVENIENCE TYPES */

export interface RegularTrack {
  is_local: false;
  name: string;
  group?: string;
  img: HTMLImageElement;
  index: number;
  page: string;
  artist?: string;
}

export interface LocalTrack {
  is_local: true;
  name: string;
  index: number;
}

export type TimeFrame = "short_term" | "medium_term" | "long_term";

export type TopItemsVariant = "artist_view" | "track_view";

export type horoscopes = "Aquarius" | "Pisces" | "Aries" | "Taurus" | "Gemini" | "Cancer" | "Leo" | "Virgo" | "Libra" | "Scorpio" | "Sagitarius" | "Capricorn";
