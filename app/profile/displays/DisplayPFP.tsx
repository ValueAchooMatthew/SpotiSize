import Image from "next/image";
import SpotifyWebApi from "spotify-web-api-node";


export default async function DisplayUsername({accessToken}: {accessToken: string}){
    const api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    const user = await api.getMe();
    const image = user.body.images;
    if(image){
        return(

            <Image className="rounded-full" width={130} height={130} src={image[0].url} alt="User's profile picture"></Image>
        )
    }else{
        return(
            // Fix later
            <p>
                :P
            </p>
        )
    }


}
