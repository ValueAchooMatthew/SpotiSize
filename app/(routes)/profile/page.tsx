import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

import Galaxy from "../../_components/galaxy/Galaxy";
import SpotifyWebApi from "spotify-web-api-node";
import Heading from "@/app/_components/heading/Heading";

export default async function Profile() {

  const session = await getServerSession(authOptions);
  const accessToken = session?.user.accessToken;
  const api = new SpotifyWebApi();


  if(accessToken){
    api.setAccessToken(accessToken);

    return (
      <main className="w-full md:p-8 flex flex-col">
        <div className="overflow-hidden absolute top-48 -z-20 -left-24 w-84 h-84">
          <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        </div>
        <div className="overflow-hidden absolute -top-48 -z-20 right-12 w-70 h-70">
          <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        </div>
        <Image className="absolute top-24 right-16 w-96 h-80 hidden xl:inline-block" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>

        <Heading currentView="Galaxy" alternateViews={["My Constellation", "My Globe"]} viewURLs={["/horoscope", "/globe"]} accessToken={accessToken}/>

        <Galaxy accessToken = {accessToken} />
        
          
      </main>
    );
  }
  return(
    <p>There was an error</p>
  );
    
}
