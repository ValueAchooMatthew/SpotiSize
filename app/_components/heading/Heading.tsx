import Link from "next/link";

import DisplayUsername from "./displays/DisplayUsername";
import DisplayPFP from "./displays/DisplayPFP";

export default function Heading({accessToken, currentView, alternateViews, viewURLs}: 
{accessToken: string, currentView: string, alternateViews: [string, string], viewURLs: [string, string]}){
  
  return(

    <div className="relative w-fit h-fit self-center z-50">
      <div className="box-content 2xl:min-w-[25rem] sm:min-w-[15rem] min-w-[10rem] 
        font-jost self-center 2xl:self-start mt-20 w-fit h-fit bg-gray-400 0 rounded-t-[3rem] rounded-b-[2rem] 2xl:px-12 px-6 2xl:py-8 py-4 shadow-2xl ">
        <div>
          <div className="flex justify-between">
            <DisplayPFP accessToken={accessToken}></DisplayPFP>
            <Link href={"/"}  className="h-fit">
              <div className="w-fit mx-auto hover:-translate-y-2 transition-all duration-300 will-change-transform">
                <button className="bg-lightPurple hover:bg-yellow text-white xl:text-2xl text-lg font-bold font-jost py-2 px-4 rounded-full ">
                      Log Out
                </button>
                <button className="bg-[#6545FF] w-full h-10 rounded-full mx-auto absolute -bottom-1.5 left-1 -z-10"></button>
              </div>
            </Link>
          </div>
          <h3 className="text-fontBlue 2xl:text-4xl xs:text-4xl text-2xl 2xl:py-1.5 py-0.5">
            <DisplayUsername accessToken={accessToken}></DisplayUsername>
          </h3>
          <h2 className="= text-fontBlue 2xl:text-5xl xs:text-3xl text-lg text-center font-bold">
            {currentView}
          </h2>
        </div>
      </div>
      <div className="absolute w-full 2xl:-bottom-16 xs:-bottom-12 -bottom-10 px-6 -z-10">
        <div className="bg-gray-500 text-fontBlue font-semibold flex justify-between 2xl:px-12 px-6 2xl:pb-12 xs:pb-10 pb-8 pt-24 h-12 rounded-b-[2rem] 2xl:text-2xl xs:text-lg text-xs shadow-2xl">
          <Link className="self-start z-30" href={{pathname: viewURLs[0]}}>
            {alternateViews[0]}
          </Link>
          <Link className="self-start z-30" href ={{pathname: viewURLs[0]}}>
            {alternateViews[1]}
          </Link>
        </div>
      </div>
    </div>
  )

}