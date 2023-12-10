import Link from "next/link"
import Image from "next/image"
import { LocalTrack, RegularTrack } from "@/app/_types/data"

export default function ArtistInfo({view, information, limit}: {view: "artist_view" | "track_view", information: RegularTrack | LocalTrack | undefined, limit: number} ){

    return(
        <>

            {view == "artist_view"? 
                <span className={"text-4xl text-fontBlue text-center font-semibold"}>
                    Artist Info
                </span>
                :
                <span className={"text-4xl text-fontBlue text-center font-semibold"}>
                    Track Info
                </span>
            }
            {information == undefined? 
                <span className="text-black text-3xl mt-12">
                    Click on an artist to see more information    
                </span>
                :
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
                        {!information.is_local?

                            (view == "artist_view"?
                                (<span>
                                    Genre: {information.group}
                                </span>)
                                :
                                (<span>
                                    Artist: {information.artist}
                                </span>)
                            )
                            :
                            <>
                            </>
                        }
                        <span className="text-xl">
                            Rank in this timeframe: {information.index + 1}/{limit}
                        </span>
                    </div>

                </div>
            }
        </>

    )



}