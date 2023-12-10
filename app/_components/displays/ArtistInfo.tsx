import Link from "next/link"
import Image from "next/image"

export default function ArtistInfo({view, information, limit}: {view: "artist_view" | "track_view", information: } ){

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
        {information ? (
        <div className="flex mt-4 justify-between align-middle">
            <div className="self-center flex justify-center overflow-hidden w-40 h-40 rounded-2xl mx-6 flex-shrink-0">
                <Link href={{pathname: information.page}}>
                    <Image className = "w-40 h-40 object-cover overflow-hidden transition-all duration-300 " width={1000} height={1000} src={information.img} alt={"spotify page photo"}></Image>
                </Link>
            </div>
            <div className="flex flex-col justify-self-end self-center justify-center mt-4 w-full">
                <span className="text-3xl mb-4">
                    {information.name}
                </span>
                {view == "artist_view"?
                    (
                    <span className="text-xl">
                        Genre: {information.group}
                    </span>
                    ):(
                    <span className="text-xl">
                        Artist: {information.artist}
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
        </>


    )



}