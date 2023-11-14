import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import { Node } from "./data";
import { CirclePacking } from "./CirclePacking";



export default async function Songs({width = 900, height = 900 }) {

  const session = await getServerSession(authOptions)
  let accessToken = session?.user.accessToken;
  if (accessToken) {
    let api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    let top_artists = await api.getMyTopArtists({limit: 30, time_range: "long_term"});
    const data: Node[] =
    
      top_artists.body.items.map((d, i)=>{
        
        const src = d.images[0].url
        

        return {id: d.id, group: "Balls", value:8, img: src}
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