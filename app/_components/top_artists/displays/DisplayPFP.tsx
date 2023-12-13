import Image from "next/image";
import SpotifyWebApi from "spotify-web-api-node";


export default async function DisplayUsername({accessToken}: {accessToken: string}){
  const api = new SpotifyWebApi();
  api.setAccessToken(accessToken);
  const user = await api.getMe();
  const image = user.body.images;
  if(image){
    return(
      <div className="2xl:w-32 2xl:h-32 xs:w-24 xs:h-24 w-20 h-20">
        <Image className="rounded-full" width={130} height={130} src={image[0].url} alt="User's profile picture"></Image>
      </div>
    );
  }
  return(
    // Fix later
    <p>
                :P
    </p>
  );
    


}
