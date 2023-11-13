import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import { Node } from "./data";
import { CirclePacking } from "./CirclePacking";


type SpotifyError = { error: SpotifyApi.ErrorObject }

async function getArtists(accessToken: String) {

  const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  });

  const data: SpotifyApi.UsersTopArtistsResponse | SpotifyError = await response.json();
  // await new Promise(r => setTimeout(r, 2000)) //Simulate throttle to test loading animation
  return data
}

export default async function Songs({width = 700, height = 400 }) {

  const session = await getServerSession(authOptions)
  let accessToken = session?.user.accessToken;
  if (accessToken) {
    let api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    let top_tracks = await api.getMyTopArtists();
    const data: Node[] =
    
      top_tracks.body.items.map((d, i)=>{
        
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