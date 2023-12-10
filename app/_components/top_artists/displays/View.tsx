"use client";
import { LocalTrack, RegularTrack } from "@/app/_types/data";
import textColouring from "../text_colouring/TextColouring";
import { Dispatch, SetStateAction } from "react";


export default function View({view, setView, setInformation}:
    {
        view: "artist_view" | "track_view",
        setView: Dispatch<SetStateAction<"artist_view" | "track_view">>
        setInformation: Dispatch<SetStateAction< LocalTrack | RegularTrack | undefined >>
    }){

    return(
        <div className="text-center h-fit">
            <span className="text-3xl text-fontBlue font-semibold">
                View
            </span>
            <div className="flex mt-4 w-full justify-around text-2xl">
                {/* Setting information only to undefined if user is actually changing into a different view, otherwise 
                results in unnecessary updates in the DOM */}
                <button className={"transition-all duration-300 "+textColouring("artist_view", view)}
                onClick={()=>{
                if(view != "artist_view"){setInformation(undefined)} 
                setView("artist_view")}}>
                    Artist View
                </button>
                <button className={"transition-all duration-300 "+textColouring("track_view", view)}
                onClick={()=>{
                    if(view != "track_view")
                    {setInformation(undefined)}setView("track_view")}}>
                    Track View
                </button>
            </div>
        </div>
    )

}