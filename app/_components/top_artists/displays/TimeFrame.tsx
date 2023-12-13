"use client";
import { Dispatch, SetStateAction } from "react";
import textColouring from "../text_colouring/TextColouring";
import { LocalTrack, RegularTrack } from "@/app/_types/data";

export default function Timeframe({ range, setRange, setInformation }:
    {
        range: "short_term" | "medium_term" | "long_term" | undefined,
        setRange: Dispatch<SetStateAction<"short_term" | "medium_term" | "long_term">>,
        setInformation: Dispatch<SetStateAction<LocalTrack | RegularTrack | undefined>>;
    }) {

    return (
        <div className="text-center h-fit ">
            <span className="md:text-3xl text-2xl text-fontBlue font-semibold">
                Adjust Timeframe
            </span>
            <div className="flex flex-col 2xl:flex-row md:mt-4 mt-2 w-full justify-around md:text-2xl text-base">
                {/* Setting information only to undefined if user is actually changing into a different time range, otherwise 
                results in unnecessary updates in the DOM */}
                <button className={"transition-all duration-300 md:py-0.5 " + textColouring("short_term", range)}
                    onClick={() => { if (range != "short_term") { setInformation(undefined); } setRange("short_term"); }}>
                    Short Term
                </button>
                <button className={"transition-all duration-300 md:py-0.5 " + textColouring("medium_term", range)}
                    onClick={() => { if (range != "medium_term") { setInformation(undefined); } setRange("medium_term"); }}>
                    Medium Term
                </button>
                <button className={"transition-all duration-300 md:py-0.5 " + textColouring("long_term", range)}
                    onClick={() => { if (range != "long_term") { setInformation(undefined); } setRange("long_term"); }}>
                    Long Term
                </button>
            </div>
        </div>
    )

}