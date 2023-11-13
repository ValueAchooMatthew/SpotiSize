import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SpotifyWebApi from "spotify-web-api-node";
import Image from "next/image";
import Link from "next/link";


export default async function Profile() {
  const session = await getServerSession(authOptions)
  const accessToken = session?.user.accessToken;
  if (accessToken) {
    const api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    const top_tracks = await api.getMyTopArtists();
    const user = await api.getMe();
    return (
      <main>
        <Image className="absolute -bottom-64 -left-64 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        <Image className="absolute -top-64 -right-80 z-0 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
        {/* <Image className="absolute bottom-1/2 right-32 w-48 h-48 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute bottom-20 right-96 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute -top-32 right-1/2 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute top-1/4 left-32 w-32 h-28 z-10 flip" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image> */}
        <Image className=" absolute top-24 right-16 w-96 h-80 " width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>

        <div className="box-content Relative h-32 w-32 font-jost">
          <Image className="absolute top-32 left-16" width={800} height={100} src={"/img/box.svg"} alt="box"></Image>
          <Image className="absolute top-40 left-24 w-36 h-36 rounded-full" width={800} height={800} src={"/img/profile.png"} alt="Rounded avatar"></Image>
          <h3 className="absolute top-80 left-24 h-16 w-fit text-fontBlue text-4xl">
            {user.body.display_name}
          </h3>
          <h2 className="absolute top-[374px] left-24 h-16 w-16 text-fontBlue text-7xl font-bold">
              Galaxy
          </h2>
          <Link href={"/login"}>
            <div className="absolute top-[155px] left-[700px] w-fit mx-auto hover:-translate-y-2 transition-all duration-300 will-change-transform">
            <button className="bg-lightPurple hover:bg-yellow text-white text-2xl font-bold font-jost py-2 px-4 rounded-full">
              Log Out
              </button>
              <button className="bg-[#6545FF] w-full h-10 rounded-full mx-auto absolute -bottom-1.5 left-1 -z-10"></button>
            </div>
          </Link>
        </div>
      </main>
    );
  }else{
    return (
    <p>
      Brick
    </p>)
  }
}
