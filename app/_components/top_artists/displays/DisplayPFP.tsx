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
        {
          image[0].url? 
            <Image className="rounded-full" width={130} height={130} src={image[0].url} alt="User's profile picture"></Image>
            :
            <svg data-encore-id="icon" role="img" aria-hidden="true" data-testid="user" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 iYxpxA"><path d="M10.165 11.101a2.5 2.5 0 0 1-.67 3.766L5.5 17.173A2.998 2.998 0 0 0 4 19.771v.232h16.001v-.232a3 3 0 0 0-1.5-2.598l-3.995-2.306a2.5 2.5 0 0 1-.67-3.766l.521-.626.002-.002c.8-.955 1.303-1.987 1.375-3.19.041-.706-.088-1.433-.187-1.727a3.717 3.717 0 0 0-.768-1.334 3.767 3.767 0 0 0-5.557 0c-.34.37-.593.82-.768 1.334-.1.294-.228 1.021-.187 1.727.072 1.203.575 2.235 1.375 3.19l.002.002.521.626zm5.727.657-.52.624a.5.5 0 0 0 .134.753l3.995 2.306a5 5 0 0 1 2.5 4.33v2.232H2V19.77a5 5 0 0 1 2.5-4.33l3.995-2.306a.5.5 0 0 0 .134-.753l-.518-.622-.002-.002c-1-1.192-1.735-2.62-1.838-4.356-.056-.947.101-1.935.29-2.49A5.713 5.713 0 0 1 7.748 2.87a5.768 5.768 0 0 1 8.505 0 5.713 5.713 0 0 1 1.187 2.043c.189.554.346 1.542.29 2.489-.103 1.736-.838 3.163-1.837 4.355m-.001.001z"></path></svg>
        }
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
