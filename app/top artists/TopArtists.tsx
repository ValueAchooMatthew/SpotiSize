"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CirclePacking } from "../components/drawing circles/CirclePacking";
import capitalizeFirstLetter from "./capitalization/Capitalization";

import {RegularTrack, LocalTrack, Node} from "../components/drawing circles/data";
import SpotifyWebApi from "spotify-web-api-node";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function TopArtists({accessToken}: {accessToken: string}){
    function textColour(name: string, selected?: string) {
        return name == selected ? "text-purple" : "hover:scale-110";
      }
      
    const [data, setData] = useState<Node[]>();
    const [range, setRange] = useState<"short_term" | "medium_term" | "long_term" | undefined>("medium_term");
    const [limit, setLimit] = useState<number>(25);
    const [information, setInformation] = useState<RegularTrack | LocalTrack | undefined>(undefined);
    const [view, setView] = useState<"artist_view" | "track_view">("artist_view");
    useEffect(()=>{
        const retrieve = async () =>{
            const api = new SpotifyWebApi();
            api.setAccessToken(accessToken);
            if(view == "artist_view"){
                const response = await api.getMyTopArtists({limit: limit, time_range: range});
                const topArtists = response.body.items;
                const data: Node[] =
                topArtists.map((d, i)=>{
                  const src = d.images[0].url;
                  return {id: d.id, page: topArtists[i].uri, group: capitalizeFirstLetter(topArtists[i].genres[0]), 
                    value:Math.exp(20*topArtists.length - .12*i), img: src, name: topArtists[i].name, islocal: false}
                })
                setData(data);
            }else{
                const response = await api.getMyTopTracks({limit: limit, time_range: range});
                const topTracks = response.body.items;
                // TODO: Address how to handle local hosted songs
                const data: Node[]  =
                topTracks.map((d, i)=>{
                    if(d.is_local){
                        return (
                            {
                                islocal: true, value: Math.exp(20*topTracks.length - .12*i), name: d.name,
                                img: undefined
                            }
                            
                            )
                    }else{
                        return(
                            {id: d.id, page: topTracks[i].uri,
                                value:Math.exp(20*topTracks.length - .12*i), img: topTracks[i].album.images[0].url, name: topTracks[i].name,
                                artist:topTracks[i].artists[0].name, islocal: false}
                        )
                    }
                })
                setData(data);
            }

        }
        retrieve();
    }, [accessToken, limit, range, view])
    if(data){
        return(
            <div className="flex h-fit">
                <div className="2xl:flex 2xl:flex-row flex-col justify-center bg-gray-200 rounded-[5rem] bg-opacity-40 mx-auto p-12 w-fit my-4 ">
                    <div className="2xl:hidden flex flex-col min-h-fit h-[20rem] p-8 text-center min-w-full w-[40rem] border-4 border-black rounded-[5rem] justify-center mb-8">
                            {view == "artist_view"? 
                            <span className={"text-4xl text-fontBlue text-center font-semibold"}>
                                Artist Info
                            </span>
                            :
                            <span className={"text-4xl text-fontBlue text-center font-semibold"}>
                                Track Info
                            </span>
                            }
                            {information ? (
                            <div className="flex justify-between align-middle">
                                <div className="self-center flex justify-center overflow-hidden w-40 h-40 rounded-2xl mx-6 flex-shrink-0">
                                    {/* Displays spotify icon and reroutes to page if track is local*/}
                                    <Link href={{pathname: information.is_local? "":information.page}}>
                                        <Image className = "w-40 h-40 object-cover overflow-hidden transition-all duration-300 " width={1000} height={1000} src={information.is_local? "/img/Spotify_icon.svg":information.img} alt={"spotify page photo"}></Image>
                                    </Link>
                                </div>
                                <div className="flex flex-col self-center justify-center mt-4 w-full">
                                    <span className="text-3xl mb-4">
                                        {information.name}
                                    </span>
                                    {/* Checking if song/artist is local, if so displays information based on whether it is in track or artist view, 
                                    otherwise, display nothing */}
                                    {information.is_local?
                                        <>
                                        </>                         
                                        :
                                        view == "artist_view"?
                                        (
                                        <span className="text-xl">
                                            Genre: {information.group}
                                        </span>
                                        ):(
                                        <span className="text-xl">
                                            {
                                                information.artist?
                                                <>
                                                Artist: {information.artist}</>:
                                                <>
                                                </>
                                            }
                                        </span>
                                        )
                                    
                                    }
                                    <span className="text-xl">
                                        Rank in this timeframe: {information.index + 1}/{limit}
                                    </span>
                                </div>
                            </div>):
                                <div className="text-black text-3xl mt-12">
                                    Click on an artist to see more information    
                                </div>}

                            </div>
                    <div className="2xl:mb-0 mb-0 flex flex-col justify-center align-middle p-12 border-4 border-black rounded-[5rem] bg-gradient-to-b from-[#11005e] to-[#080135b7]">
                
                        <div className="flex justify-center">
                            <CirclePacking width={650} height={650} data = {data} setInformation={setInformation}></CirclePacking>
                        </div>
                        <span className="text-center text-fontBlue my-4 text-3xl font-semibold">Number of artists: {limit}</span>
                        <div className="mx-12 self-center flex w-[30rem] justify-center">
                            {/* Setting information only to undefined if user is actually changing into a different limit, otherwise 
                            results in unnecessary updates in the DOM */}
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
                            onChangeComplete={(event) =>{if(event as Number != limit){setInformation(undefined)}; setLimit(event as number);}}
                            defaultValue={25}
                            max={35}
                            min={3} />
                        </div>
                    </div>
                    <div className="justify-center w-full 2xl:h-full h-fit 2xl:flex mt-4 2xl:mt-0">
                        <div className = "flex flex-col justify-center align-center 2xl:ml-8">
                            <div className="hidden 2xl:inline-block 2xl:flex-col min-h-fit h-[20rem] p-8 text-center min-w-full w-[40rem] border-4 border-black rounded-[5rem] justify-center">
                            {view == "artist_view"? 
                            <span className={"text-4xl text-fontBlue text-center font-semibold"}>
                                Artist Info
                            </span>
                            :
                            <span className={"text-4xl text-fontBlue text-center font-semibold"}>
                                Track Info
                            </span>
                            }
                            {information ? (
                            <div className="flex mt-4 justify-between align-middle">
                                <div className="self-center flex justify-center overflow-hidden w-40 h-40 rounded-2xl mx-6 flex-shrink-0">
                                    {/* Displays spotify icon and reroutes to page if track is local*/}
                                    <Link href={{pathname: information.is_local? "":information.page}}>
                                        <Image className = "w-40 h-40 object-cover overflow-hidden transition-all duration-300 " width={1000} height={1000} src={information.is_local? "/img/Spotify_icon.svg":information.img} alt={"spotify page photo"}></Image>
                                    </Link>
                                </div>
                                <div className="flex flex-col justify-self-end self-center justify-center  w-full">
                                    <span className="text-3xl mb-4">
                                        {information.name}
                                    </span>
                                    {/* Checking if song/artist is local, if so displays information based on whether it is in track or artist view, 
                                    otherwise, display nothing */}
                                    {information.is_local?
                                        <>
                                        </>                         
                                        :
                                        view == "artist_view"?
                                        (
                                        <span className="text-xl">
                                            Genre: {information.group}
                                        </span>
                                        ):(
                                        <span className="text-xl">
                                            {
                                                information.artist?
                                                <>
                                                Artist: {information.artist}</>:
                                                <>
                                                </>
                                            }
                                        </span>
                                        )
                                    
                                    }
                                    <span className="text-xl">
                                        Rank in this timeframe: {information.index + 1}/{limit}
                                    </span>
                                </div>
                            </div>):
                                <div className="text-black text-3xl mt-16">
                                    Click on an artist to see more information    
                                </div>}

                            </div>
                            <div className="flex flex-col h-fit p-4 w-full border-4 border-black rounded-[5rem] my-8">
                                <div className="text-center h-fit ">
                                    <span className="text-3xl text-fontBlue font-semibold">
                                        Adjust Timeframe
                                    </span>
                                    <div className="flex mt-4 w-full justify-around text-2xl">
                                        {/* Setting information only to undefined if user is actually changing into a different time range, otherwise 
                                        results in unnecessary updates in the DOM */}
                                        <button className={"transition-all duration-300 "+textColour("short_term", range)}
                                        onClick={()=>{if(range != "short_term"){setInformation(undefined);} setRange("short_term");}}>
                                            Short Term
                                        </button>
                                        <button className={"transition-all duration-300 "+textColour("medium_term", range)}
                                        onClick={()=>{if(range != "medium_term"){setInformation(undefined);} setRange("medium_term");}}>
                                            Medium Term
                                        </button>
                                        <button className={"transition-all duration-300 "+textColour("long_term", range)}
                                        onClick={()=>{if(range != "long_term"){setInformation(undefined);} setRange("long_term");}}>
                                            Long Term
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="border-4 border-black rounded-[5rem] p-4">
                                <div className="text-center h-fit">
                                    <span className="text-3xl text-fontBlue font-semibold">
                                        View
                                    </span>
                                    <div className="flex mt-4 w-full justify-around text-2xl">
                                        {/* Setting information only to undefined if user is actually changing into a different view, otherwise 
                                        results in unnecessary updates in the DOM */}
                                        <button className={"transition-all duration-300 "+textColour("artist_view", view)}
                                        onClick={()=>{
                                        if(view != "artist_view"){setInformation(undefined)} 
                                        setView("artist_view")}}>
                                            Artist View
                                        </button>
                                        <button className={"transition-all duration-300 "+textColour("track_view", view)}
                                        onClick={()=>{
                                            if(view != "track_view")
                                            {setInformation(undefined)}setView("track_view")}}>
                                            Track View
                                        </button>
                                    </div>
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
