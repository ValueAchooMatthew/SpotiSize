import type SpotifyApi from "spotify-web-api-node";

export default function tracksToData(trackInfo: SpotifyApi.MultipleAudioFeaturesResponse){

  const totals = {danceability: 0, energy: 0, valence: 0, tempo: 0}

  trackInfo.audio_features.forEach((track)=>{
    // Divide by 25 to get average
    totals.danceability += track.danceability/25
    totals.energy += track.energy/25
    totals.valence += track.valence/25
    totals.tempo += track.tempo/25
  })

  return totals

}