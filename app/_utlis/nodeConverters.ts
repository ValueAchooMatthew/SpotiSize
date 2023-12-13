import { Node } from "../_types/data";
import { toTitleCase } from "./caseConverters";
import type SpotifyApi from "spotify-web-api-node";

/**
 * Converts spotify top artist list to a list of Nodes compatible with d3 simulation
 * @param artists list of artists fetched from Spotify API
 * @returns list of Node
 */
export function artistsToNodes(
  artists: SpotifyApi.ArtistObjectFull[],
): Node[] {
  return artists.map((artistObject, idx) => {
    const image = new Image();

    const src = artistObject.images[0].url;
    image.src = src;

    // We want to account for the fact that Spotify API can
    // randomly return empty arr while also accounting for
    // the fact Spotify doesn't title case
    let genreName = "";
    if (artists[idx].genres[0]) {
      genreName = toTitleCase(artists[idx].genres[0]);
    } else {
      genreName = "No Listed Genre";
    }

    return {
      id: artistObject.id,
      page: artists[idx].uri,
      group: genreName,
      value: Math.exp(20 * artists.length - .12 * idx),
      img: image,
      name: artists[idx].name,
      islocal: false,
    };
  });
}

/**
 * Converts spotify top track list to a list of Nodes compatible with d3 simulation
 * @param tracks list of tracks fetched from Spotify API
 * @returns list of Node
 */
export function tracksToNodes(
  tracks: SpotifyApi.TrackObjectFull[],
): Node[] {
  return tracks.map((trackObject, idx) => {
    if (trackObject.is_local) {
      return {
        islocal: true,
        value: Math.exp(20 * tracks.length - .12 * idx),
        name: trackObject.name,
        img: undefined,
      };
    }
    const image = new Image();

    const src = tracks[idx].album.images[0].url;
    image.src = src;

    return {
      id: trackObject.id,
      page: tracks[idx].uri,
      value: Math.exp(20 * tracks.length - .12 * idx),
      img: image,
      name: tracks[idx].name,
      artist: tracks[idx].artists[0].name,
      islocal: false,
    };
  });
}
