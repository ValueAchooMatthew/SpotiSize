import { useEffect, useState } from "react";

type SpotifyError = {error: SpotifyApi.ErrorObject}

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
    let authToken = "something"; // Assume we have lol

    
    let artistsResponse = await getArtists(authToken)
    let error = artistsResponse as SpotifyError;
    let success = artistsResponse as SpotifyApi.UsersTopArtistsResponse
    if (error) {
        return(<p>
            Error: {error.error.message} <br />
            Status: {error.error.status}
        </p>)
    } else {
    return(<ul>
        {success?.items.map((artist) => {
            return <li key={artist.id}> Name: {artist.name} </li>
        })}
    </ul>)}
    
}