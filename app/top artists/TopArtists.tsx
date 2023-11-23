"use client";
import { useEffect, useState } from "react";
import { CirclePacking } from "../components/drawing circles/CirclePacking";
import { Node } from "../components/drawing circles/data";
import SpotifyWebApi from "spotify-web-api-node";


export default function TopArtists({accessToken}: {accessToken: string}){
    const [data, setData] = useState<Node[]>();
    const [range, setRange] = useState<"short_term" | "medium_term" | "long_term" | undefined>("medium_term");
    const [limit, setLimit] = useState<number>(30)

    useEffect(()=>{
        const retrieve = async () =>{
            const api = new SpotifyWebApi();
            api.setAccessToken(accessToken);
            let topArtists = await api.getMyTopArtists({limit: limit, time_range: range});
            const data: Node[] =
            topArtists.body.items.map((d, i)=>{
              const src = d.images[0].url
              return {id: d.id, group: "Balls", value:Math.exp(8*topArtists.body.items.length - .12*i), img: src}
            })
            setData(data);
        }
        retrieve();
    }, [accessToken, limit, range])

    if(data){
        return(
            <>
                <CirclePacking width={650} height={650} data = {data}></CirclePacking>
                <div className="flex-col z-50">
                    <h1 className="text-4xl text-white font-bold text-center">
                        Choose your timeframe
                    </h1>
                    <div className="text-white text-3xl flex justify-center z-50">
                        <button className="px-8" onClick={()=>{setRange("short_term")}}>
                            Short term
                        </button>
                        <button className="px-8" onClick={()=>{setRange("medium_term")}}>
                            Medium term
                        </button>
                        <button className="px-8" onClick={()=>{setRange("long_term")}}>
                            Long term
                        </button>
                    </div>

                </div>

            </>


            
        )
    }else{
        return(
            <p className="  text-center font-bold ">Loading...</p>
        )
    }



}
