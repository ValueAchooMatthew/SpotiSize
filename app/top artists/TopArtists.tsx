"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CirclePacking } from "../components/drawing circles/CirclePacking";
import { Node } from "../components/drawing circles/data";
import SpotifyWebApi from "spotify-web-api-node";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./styles.css"

export default function TopArtists({accessToken}: {accessToken: string}){
    type Keys  = "img" | "name" | "group" | "page";

    const capitalizeFirstLetter = (phrase:string)=>{
        const words = phrase.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(" ")
    }
    const [data, setData] = useState<Node[]>();
    const [range, setRange] = useState<"short_term" | "medium_term" | "long_term" | undefined>("medium_term");
    const [limit, setLimit] = useState<number>(25);
    const [information, setInformation] = useState<Object | undefined>(undefined);

    useEffect(()=>{
        const retrieve = async () =>{
            const api = new SpotifyWebApi();
            api.setAccessToken(accessToken);
            let topArtists = await api.getMyTopArtists({limit: limit, time_range: range});
            const data: Node[] =
            topArtists.body.items.map((d, i)=>{
              const src = d.images[0].url;
              return {id: d.id, page: topArtists.body.items[i].uri, group: capitalizeFirstLetter(topArtists.body.items[i].genres[0]), value:Math.exp(20*topArtists.body.items.length - .12*i), img: src, name: topArtists.body.items[i].name}
            })
            setData(data);
        }
        retrieve();
    }, [accessToken, limit, range])

    if(data){
        return(
            <div className="flex justify-center">
                <div className="flex bg-gray-200 rounded-[5rem] bg-opacity-40 m-12 p-24 justify-start w-full">
                
                    <div className="flex flex-col p-12 border-4 border-black rounded-[5rem] bg-gradient-to-b from-[#11005e] to-[#080135b7]">
                        <CirclePacking width={650} height={650} data = {data} setInformation={setInformation}></CirclePacking>
                        <span className="text-center text-fontBlue my-4 text-3xl font-semibold">Number of artists: {limit}</span>
                        <div className="mx-12 self-center flex w-[30rem] justify-center">
                            <Slider className=" px-12 w-12"
                            marks={
                                {3: <p>3</p>,
                                 5: <p>5</p>,
                                 10: <p>10</p>,
                                 15: <p>15</p>,
                                 20: <p>20</p>,  
                                 25: <p>25</p>,
                                 30: <p>30</p>,
                                 35: <p>35</p>,
                                }
                            }       
                            reverse={false}
                            vertical={false}
                            onChangeComplete={(event) =>{setLimit(event as number); setInformation(undefined)}}
                            defaultValue={25}
                            max={35}
                            min={3}>
                            </Slider>
                        </div>
                    </div>
                    <div className = "flex flex-col justify-center align-center w-full ">
                        <div className="flex flex-col h-fit p-12 mx-8 w-full border-4 border-black rounded-[5rem] justify-center">
                            <div className="text-center h-fit ">
                                <span className="text-6xl text-fontBlue">
                                    Artist Info
                                </span>
                                <div className="flex mt-4 w-full justify-around">
                                    {information ? (
                                    <>
                                        <div className="justify-self-start flex justify-center overflow-hidden w-48 h-48 rounded-2xl mx-6">
                                            <Link href={{pathname: information.page}}>
                                                <Image className = "w-48 h-48 object-cover overflow-hidden transition-all duration-300" width={1000} height={1000} src={information.img} alt={"spotify page photo"}></Image>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col justify-self-end self-center justify-center">
                                            <span className="text-5xl mb-12">
                                                {information.name}
                                            </span>
                                            <span className="text-2xl">
                                                Genre: {information.group}
                                            </span>
                                            <span className="text-2xl">
                                                Rank in this timeframe: {information.index + 1}/{limit}
                                            </span>
                                        </div>
                                    </>):
                                    <span className="text-black text-2xl text-center">
                                        Click on an artist to see more information    
                                        
                                    </span>}

                                </div>

                            </div>

                        </div>
                        <div className="flex flex-col h-fit p-8 mx-8 w-full border-4 border-black rounded-[5rem] my-12">
                            <div className="text-center h-fit ">
                                <span className="text-6xl text-fontBlue">
                                    Adjust timeframe
                                </span>
                                <div className="flex mt-4 w-full justify-around text-3xl">
                                    <button onClick={()=>{setRange("short_term")}}>
                                        Short Term
                                    </button>
                                    <button onClick={()=>{setRange("medium_term")}}>
                                        Medium Term
                                    </button>
                                    <button onClick={()=>{setRange("long_term")}}>
                                        Long Term
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div> 
        )
    }else{
        return(
            <p className="  text-center font-bold text-fontBlue text-5xl mt-24">Loading...</p>
        )
    }



}
