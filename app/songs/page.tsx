import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import { Node } from "./data";
import { CirclePacking } from "./CirclePacking";

const width: number = 650;
const height: number = 650;

export default async function Songs() {

  const session = await getServerSession(authOptions)
  let accessToken = session?.user.accessToken;
  if (accessToken) {
    let api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    let top_artists = await api.getMyTopArtists({limit: 25, time_range: "medium_term"});
    const data: Node[] =
    
      top_artists.body.items.map((d, i)=>{
        
        const src = d.images[0].url
        

        return {id: d.id, group: "Balls", value:Math.exp(8*top_artists.body.items.length - .12*i), img: src}
      })

    
    console.log("data is:", data.length)

    return (
      <CirclePacking data={data} width={width} height={height}></CirclePacking>
    )

  } else {
    return (<p>
      Brick
    </p>)
  }
}