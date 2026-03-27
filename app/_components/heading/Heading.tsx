import Link from "next/link";

import DisplayUsername from "../../_components/top_artists/displays/DisplayUsername";
import DisplayPFP from "../../_components/top_artists/displays/DisplayPFP";
import { Route } from "next";

export default function Heading({ currentView, alternateViews, viewURLs }:
  { currentView: string, alternateViews: [string, string], viewURLs: [Route, Route] }) {

  return (
    <div className="relative w-fit h-fit self-center z-50">
      <div className="box-content 2xl:min-w-[25rem] sm:min-w-[15rem] min-w-[10rem] 
        font-jost self-center 2xl:self-start mt-20 w-fit h-fit bg-gray-400 0 rounded-t-[3rem] rounded-b-[2rem] 2xl:px-12 px-6 2xl:py-8 py-4 shadow-2xl ">
        <div>
          <div className="flex justify-between">
            <DisplayPFP></DisplayPFP>
          </div>
          <h3 className="text-fontBlue 2xl:text-4xl xs:text-4xl text-2xl 2xl:py-1.5 py-0.5">
            <DisplayUsername/>
          </h3>
          <h2 className="= text-fontBlue 2xl:text-5xl xs:text-3xl text-lg text-center font-bold">
            {currentView}
          </h2>
        </div>
      </div>
      <div className="absolute w-full 2xl:-bottom-16 xs:-bottom-12 -bottom-10 px-6 -z-10">
        <div className="bg-gray-500 text-fontBlue font-semibold flex justify-between 2xl:px-12 px-6 2xl:pb-12 xs:pb-10 pb-8 pt-24 h-12 rounded-b-[2rem] 2xl:text-2xl xs:text-lg text-xs shadow-2xl">
          <Link className="self-start z-30" href={viewURLs[0]}>
            {alternateViews[0]}
          </Link>
          <Link className="self-start z-30" href={viewURLs[1]}>
            {alternateViews[1]}
          </Link>
        </div>
      </div>
    </div>
  )

}