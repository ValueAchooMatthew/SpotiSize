import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import Image from "next/image";


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

export default async function Songs() {

  const session = await getServerSession(authOptions)
  let accessToken = session?.user.accessToken;
  if (accessToken) {
    let api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    let top_tracks = await api.getMyTopArtists();

    return (<ul>
      {top_tracks.body.items.map((artist) => {
        return (<>
        <li key={artist.id}> Name: {artist.name} </li>
        <Image width={300} height={300} src={artist.images[0].url} alt="artist image"></Image>
        </>)
      })}
    </ul>)

  } else {
    return (<p>
      Brick
    </p>)
  }
}