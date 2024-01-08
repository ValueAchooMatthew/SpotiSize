"use client";

import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";

import tracksToData from "@/app/_utlis/tracksToData";
import assignHoroscope from "@/app/_utlis/assignHoroscope";
import StarSimulation from "../drawing_stars/StarSimulation";
import { StarLinks, StarNodes } from "@/app/_types/data";
import { horoscopes } from "@/app/_types/data";


export default function Constellation({ accessToken }: { accessToken: string }){

  const [horoscope, setHoroscope] = useState< {horoscope: horoscopes, emoji: string, data: {nodes: StarNodes[], links: StarLinks[]}} | undefined>();

  useEffect(() => {
    const api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    const retrieve = async () => {
      
      const response = await api.getMyTopTracks({ limit: 25, time_range: "short_term" });
      const topTracks = response.body.items;
      return topTracks
    
    };
    retrieve().then((topTracks)=>{
      const trackIDs = topTracks.map((track)=>{
        const trackID = track.id;
        return trackID
      })
      api.getAudioFeaturesForTracks(trackIDs)
        .then((tracksData)=>{
          const totals = tracksToData(tracksData.body);
          setHoroscope(assignHoroscope(totals.danceability, totals.energy, totals.valence, totals.tempo));
        })
    })
      .catch(console.log);
  }, [accessToken]);

  if(horoscope){
    return (
      <>
        <h1 className="text-fontBlue text-center text-4xl mt-24 font-semibold">
          Your Musical Horoscope: {horoscope?.horoscope} {horoscope?.emoji}
        </h1>
        <div className="mt-10 z-50 flex">
  
          <StarSimulation horoscopeData={horoscope.data} />
  
        </div>
  
      </>
  
    )
  }else{
    return(
      <>
      </>


    )

  }


}