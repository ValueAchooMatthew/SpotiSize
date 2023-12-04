"use client";
import { useEffect, useState } from "react";
import { CirclePacking } from "../components/drawing circles/CirclePacking";
import { Node } from "../components/drawing circles/data";
import SpotifyWebApi from "spotify-web-api-node";
import "./styles.css"

export default function TopArtists({accessToken}: {accessToken: string}){
    const [data, setData] = useState<Node[]>();
    const [range, setRange] = useState<"short_term" | "medium_term" | "long_term" | undefined>("medium_term");
    const [limit, setLimit] = useState<number>(35);

    useEffect(()=>{
        const retrieve = async () =>{
            const api = new SpotifyWebApi();
            api.setAccessToken(accessToken);
            let topArtists = await api.getMyTopArtists({limit: limit, time_range: range});
            const data: Node[] =
            topArtists.body.items.map((d, i)=>{
              const src = d.images[0].url
              return {id: d.id, group: topArtists.body.items[0].genres[0], value:Math.exp(20*topArtists.body.items.length - .12*i), img: src}
            })
            setData(data);
        }
        retrieve();
    }, [accessToken, limit, range])

    if(data){
        return(
            <>
                <div className="flex pt-12 justify-center">
                    

                    <div className="justify-self-end">
                        <CirclePacking width={650} height={650} data = {data}></CirclePacking>
                    </div>
                    <div className="py-4 z-50 self-center justify-end">
                       <input type="range" className="custom-range h-[32rem] hover:cursor-pointer" min={3} max={35}
                       step={1}
                       aria-orientation="vertical"
                       list="tickMarks"
                       onMouseUp={(event)=>{setLimit(parseInt((event.target as HTMLInputElement).value))}}
                       />
                    </div>
                    <datalist id="tickMarks">
                        <option value={3} />
                        <option value={5} />
                        <option value={10} />
                        <option value={15} />
                        <option value={20} />
                        <option value={25} />
                        <option value={30} />
                        <option value={35} />
                    </datalist>
                <div className="flex-col z-50 pt-6">
                    <div className="bg-[#9e8afe] px-6 py-4 text-center flex justify-center self-center 
                        rounded-full shadow-2xl mx-auto z-10 w-fit h-fit my-4">
                        <h1 className="text-4xl text-white font-bold text-center">
                            Choose your timeframe
                        </h1>
                    </div>

                    <div className="text-white text-3xl flex justify-center z-50">
                        <button className="pr-8" onClick={()=>{setRange("short_term")}}>
                            Short term
                        </button>
                        <button className="px-8" onClick={()=>{setRange("medium_term")}}>
                            Medium term
                        </button>
                        <button className="pl-8" onClick={()=>{setRange("long_term")}}>
                            Long term
                        </button>
                    </div>
                </div>

                </div>

                
            </>


            
        )
    }else{
        return(
            <p className="  text-center font-bold text-fontBlue text-5xl mt-24">Loading...</p>
        )
    }



}
