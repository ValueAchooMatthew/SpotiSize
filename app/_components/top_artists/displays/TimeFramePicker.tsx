"use client";
import { Dispatch, SetStateAction } from "react";
import { LocalTrack, RegularTrack, TimeFrame } from "@/app/_types/data";

export default function TimeFramePicker({ timeFrame, setTimeFrame, setInformation }:
{
  timeFrame: TimeFrame,
  setTimeFrame: Dispatch<SetStateAction<TimeFrame>>,
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
        {/* Setting id to selected range for better tailwind selector integration */}
        <button data-timeFrame={timeFrame} className="transition-all duration-300 md:py-0.5 hover:scale-110 data-[timeFrame='short\_term']:text-purple"
          onClick={() => { if (timeFrame != "short_term") { setInformation(undefined); } setTimeFrame("short_term"); }}>
                    Short Term
        </button>
        <button data-timeFrame={timeFrame} className="transition-all duration-300 md:py-0.5 hover:scale-110 data-[timeFrame='medium\_term']:text-purple"
          onClick={() => { if (timeFrame != "medium_term") { setInformation(undefined); } setTimeFrame("medium_term"); }}>
                    Medium Term
        </button>
        <button data-timeFrame={timeFrame} className="transition-all duration-300 md:py-0.5 hover:scale-110 data-[timeFrame='long\_term']:text-purple"
          onClick={() => { if (timeFrame != "long_term") { setInformation(undefined); } setTimeFrame("long_term"); }}>
                    Long Term
        </button>
      </div>
    </div>
  );

}