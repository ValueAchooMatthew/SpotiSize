import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import Link from "next/link";
import TopArtists from "../_components/top_artists/TopArtists";
import DisplayUsername from "../_components/top_artists/displays/DisplayUsername";
import DisplayPFP from "../_components/top_artists/displays/DisplayPFP";

export default async function Profile() {

    const session = await getServerSession(authOptions)
    const accessToken = session?.user.accessToken;
    if(accessToken){
      return (
        <main className="w-full p-8">
          <div className="overflow-hidden absolute top-48 -z-10 -left-24 w-84 h-84">
            <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
          </div>
          <div className="overflow-hidden absolute -top-48 -z-10 right-12 w-70 h-70">
            <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
          </div>
          <Image className="absolute top-24 right-16 w-96 h-80 " width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>
  
          <div className="box-content font-jost flex mt-20 w-fit h-fit bg-gray-300 z-50 bg-opacity-60 rounded-[3rem] px-12 py-8">
            <div>
                <DisplayPFP accessToken={accessToken}></DisplayPFP>
              <h3 className="text-fontBlue text-6xl py-1.5">
                <DisplayUsername accessToken={accessToken}></DisplayUsername>
              </h3>
              <h2 className="= text-fontBlue text-7xl pl-24 font-bold">
                Galaxy
              </h2>
            </div>
              <div className="justify-self-center">
                <Link href={"/"}>
                  <div className="w-fit mx-auto hover:-translate-y-2 transition-all duration-300 will-change-transform">
                  <button className="bg-lightPurple hover:bg-yellow text-white xl:text-2xl text-lg font-bold font-jost py-2 px-4 rounded-full">
                    Log Out
                    </button>
                    <button className="bg-[#6545FF] w-full h-10 rounded-full mx-auto absolute -bottom-1.5 left-1 -z-10"></button>
                  </div>
                </Link>
              </div>


          </div>
          <TopArtists accessToken = {accessToken}></TopArtists>
          

        </main>
      );
    }else{
      return(
        <p>There was an error</p>
      )
    }

    
}
