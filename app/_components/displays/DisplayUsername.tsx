/* eslint-disable react/no-unescaped-entities */
import SpotifyWebApi from "spotify-web-api-node";


export default async function DisplayUsername({accessToken}: {accessToken: string}){
    const api = new SpotifyWebApi();
    api.setAccessToken(accessToken);
    const user = await api.getMe();
    
    return(
        
        <p>
            {user.body.display_name}'s
        </p>

    )

}
