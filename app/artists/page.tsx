import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import Planet from "../components/Planet";

type SpotifyError = { error: SpotifyApi.ErrorObject };

async function getArtists(accessToken: String) {
  const response = await fetch("https://api.spotify.com/v1/me/top/artists", {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });

  const data: SpotifyApi.UsersTopArtistsResponse | SpotifyError =
    await response.json();
  // await new Promise(r => setTimeout(r, 2000)) //Simulate throttle to test loading animation
  return data;
}

export default async function Songs() {
  const session = await getServerSession(authOptions);
  let accessToken = session?.user.accessToken;
  if (accessToken) {
    let api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    let top_tracks = await api.getMyTopArtists();

    return (
      <div className="block rounded-lg bg-slate-900 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-900- mx-60">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-400 dark:text-neutral-50">
          Songs
        </div>
        <div className="p-20 flex flex-wrap justify-evenly">
          {top_tracks.body.items.map((artist) => {
            return (
              <Planet artistInfo={artist} name={artist.name} key={artist.id} />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <p>Brick</p>;
  }
}
