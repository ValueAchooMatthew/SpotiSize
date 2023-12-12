import Link from "next/link"
import Image from "next/image"
import { LocalTrack, RegularTrack } from "@/app/_types/data"

export default function ArtistInfo({view, information, limit}: {view: "artist_view" | "track_view", information: RegularTrack | LocalTrack | undefined, limit: number} ){

    return(
        <>

            {view == "artist_view"? 
                <span className={"md:text-4xl text-3xl text-fontBlue text-center font-semibold"}>
                    Artist Info
                </span>
                :
                <span className={"md:text-4xl text-3xl text-fontBlue text-center font-semibold"}>
                    Track Info
                </span>
            }
            {information? 
                <div className="flex justify-between align-middle md:mt-8 mt-4 ">
                    <div className="self-center flex justify-center overflow-hidden md:w-40 md:h-40 w-24 h-24 rounded-2xl mx-6 flex-shrink-0">
                    {/* Displays spotify icon and reroutes to page if track is local*/}
                    <Link href={{pathname: information.is_local? "":information.page}}>
                        <Image className = "md:w-40 md:h-40 w-24 h-24 object-cover overflow-hidden transition-all duration-300 " width={1000} height={1000} src={information.is_local? "/img/Spotify_icon.svg":information.img} alt={"spotify page photo"}></Image>
                    </Link>
                    </div>
                    <div className="flex flex-col self-center justify-center w-full">
                        <span className="md:text-3xl text-xl md:mb-4">
                            {information.name}
                        </span>
                        {/* Checking if song/artist is local, if so displays information based on whether it is in track or artist view, 
                        otherwise, display nothing */}
                        {!information.is_local?

                            (view == "artist_view"?
                                (<span className=" md:text-base text-xs">
                                    Genre: {information.group}
                                </span>)
                                :
                                (<span className="text-xs">
                                    Artist: {information.artist}
                                </span>)
                            )
                            :
                            <>
                            </>
                        }
                        <span className="2xl:text-xl text-base w-full h-fit">
                            Rank in this timeframe: {information.index + 1}/{limit}
                        </span>
                    </div>
                </div>
                :
                <span className="text-black md:text-3xl text-lg md:mt-12 mt-6">
                    Click on an artist to see more information    
                </span>
            }
        </>

    )



}