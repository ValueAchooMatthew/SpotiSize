import Heading from "@/app/_components/heading/Heading";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Globe(){
  const session = await getServerSession(authOptions);
  const accessToken = session?.user.accessToken;
  
  if(accessToken){
    return(
      <>
        <div className="flex justify-center">
          <Heading currentView="Globe" alternateViews={["My Galaxy", "My Horoscope"]} viewURLs={["/profile", "/horoscope"]} accessToken={accessToken} />
        </div>
        <h1 className="text-fontBlue text-center text-6xl mt-32 font-semibold">
            Page in Progress
        </h1>
        
      </>
  
    )

  }


}