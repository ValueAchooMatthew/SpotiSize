'use client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Node } from "../songs/data";
import { CirclePacking } from "../songs/CirclePacking";

// import Slider from "../components/Slider";

const width: number = 650;
const height: number = 650;

export default function Profile() {
  const [range, setRange]= useState<"medium_term" | "long_term" | "short_term" | undefined>("medium_term");
  const [api, setApi] = useState<SpotifyWebApi | undefined>(undefined)
  const [user, setUser] = useState<SpotifyApi.CurrentUsersProfileResponse | undefined>(undefined);
  const [data, setData] = useState<Node[] | undefined>()

  useEffect(()=>{
     const balls = async ()=>{
      const session = await getServerSession(authOptions)
      const accessToken = session?.user.accessToken;
      if(accessToken){
        const api = new SpotifyWebApi();
        api.setAccessToken(accessToken);
        setApi(api);
        let top_artists = await api.getMyTopArtists({limit: 25, time_range: range});
        const data: Node[] =
    
        top_artists.body.items.map((d, i)=>{
          const src = d.images[0].url
          return {id: d.id, group: "Balls", value:Math.exp(8*top_artists.body.items.length - .12*i), img: src}
        })
        setData(data);
      }
    }
    balls();
    }, [range])

  useEffect(()=>{
      if(api){
        api.getMe().then((user)=>{
          setUser(user.body);
        }).catch(
          console.log
        )
      }
    
  }, [api])

    return (
      <main>
        <Image className="absolute -bottom-64 -left-64 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        <Image className="absolute -top-64 -right-80 z-0 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        {/* <Image className="absolute bottom-1/2 right-32 w-48 h-48 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute bottom-20 right-96 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute -top-32 right-1/2 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute top-1/4 left-32 w-32 h-28 z-10 flip" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image> */}
        <Image className=" absolute top-24 right-16 w-96 h-80 " width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>

        <div className="box-content h-16 w-16 font-jost">
          <Image className="absolute top-32 left-16" width={800} height={100} src={"/img/box.svg"} alt="box"></Image>
          <Image className="absolute top-40 left-24 w-36 h-36 rounded-full" width={800} height={800} src={"/img/profile.png"} alt="Rounded avatar"></Image>
          <h3 className="absolute top-80 left-24 h-16 w-fit text-fontBlue text-4xl">
            {user?.display_name ?? "error"}
          </h3>
          <h2 className="absolute top-[374px] left-24 h-16 w-16 text-fontBlue text-7xl font-bold">
              Galaxy
          </h2>
          <Link href={"/login"}>
            <div className="absolute top-[155px] left-[700px] w-fit mx-auto hover:-translate-y-2 transition-all duration-300 will-change-transform">
            <button className="bg-lightPurple hover:bg-yellow text-white text-2xl font-bold font-jost py-2 px-4 rounded-full">
              Log Out
              </button>
              <button className="bg-[#6545FF] w-full h-10 rounded-full mx-auto absolute -bottom-1.5 left-1 -z-10"></button>
            </div>
          </Link>
        </div>
        <div className="z-50">
          <div className="z-50">
            {data? <CirclePacking data={data} width={width} height={height}></CirclePacking>:<p>Whoops! Looks like we ran into an error!</p>}
          </div>
          <div>
            {/* <Slider></Slider> */}
          </div>
        </div>
        <div className="flex-col">
          <h2 className="text-center">
            Select Time Range
          </h2>

          <div className="flex justify-center">
            <button onClick={()=>{setRange("short_term")}}>
              Short term
            </button>
            <button onClick={()=>{setRange("medium_term")}}>
              Medium term
            </button>
            <button onClick={()=>{setRange("long_term")}}>
              Long term
            </button>
          </div>
        </div>
      </main>
    );
}
