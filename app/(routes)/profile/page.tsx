import Image from "next/image";

import TopArtists from "../../_components/top_artists/TopArtists";
import Heading from "@/app/_components/heading/Heading";
import { auth } from "@/auth";
import { Route } from "next";
import { headers } from "next/headers";

export default async function Profile() {
    // MT: This can technically crash if use navigates straight to this page befoe login
    //     BetterAuth suggests against middleware, but honestly that seems like the best option
    const {accessToken, } = await auth.api.getAccessToken({
      body: {
        providerId: "spotify",
      },
      headers: await headers() 
    });
    return (
      <main className="w-full md:p-8 flex flex-col">
        
        <Image className="absolute top-24 right-16 w-96 h-80 hidden xl:inline-block" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>

        <Heading currentView="Galaxy" alternateViews={["My Constellation", "My Globe"]} viewURLs={["/constellation" as Route, "/" as Route]} />

        <TopArtists accessToken={accessToken}/> 
        <div>
        </div>

      </main>
    );
}
