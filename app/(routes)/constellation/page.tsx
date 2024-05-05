import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

import Heading from "@/app/_components/heading/Heading";

export default async function Constellation(){
  const session = await getServerSession(authOptions);
  const accessToken = session?.user.accessToken;
  if(accessToken){
    return (
      <main className="w-full md:p-8 flex flex-col">
        
        <div className="overflow-hidden absolute top-48 -z-20 -left-24 w-84 h-84">
          <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        </div>
        <div className="overflow-hidden absolute -top-48 -z-20 right-12 w-70 h-70">
          <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        </div>
        <Image className="absolute top-24 right-16 w-96 h-80 hidden xl:inline-block" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>
        <Heading currentView="Constellation" alternateViews={["My Galaxy", "My Globe"]} viewURLs={["/profile", "/"]} accessToken={accessToken}/>

        <div>
          
        </div>

      </main>
    )
  }else{
    return (
      <div>
        Balls
      </div>

    )

  }
}