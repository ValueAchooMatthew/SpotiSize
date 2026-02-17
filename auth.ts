import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import Spotify from "next-auth/providers/spotify";

const base_url = "https://accounts.spotify.com/authorize?";

const url_params = new URLSearchParams({
  scope: ["user-top-read", "user-read-recently-played"].join(","),
});

const auth_url = base_url + url_params;

async function refreshToken(jwt: JWT): Promise<JWT> {
  // let api = new spotifyApi();
  if (!jwt.accessToken || !jwt.refreshToken) {
    return {
      ...jwt,
      error: "Access Token or Refresh Token were undefined",
    };
  }
  // refresh token that has been previously stored
  const refreshToken = jwt.refreshToken;
  const url = "https://accounts.spotify.com/api/token";

  try {
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: process.env.AUTH_SPOTIFY_ID as string,
      }),
    };
    const response = await fetch(url, payload);
    // Return err if anything but successful response
    if (response.status != 200) {
      return {
        ...jwt,
        error:
          `Error occured when trying to refresh the token ${(response.status)}`,
      };
    }
    const refreshed_token_data = await response.json();

    return {
      ...jwt,
      accessToken: refreshed_token_data.access_token,
      accessTokenExpires: Date.now() + refreshed_token_data.expires_in * 1000,
      refreshToken: refreshed_token_data.refresh_token ?? jwt.refreshToken,
    };
  } catch (error) {
    return {
      ...jwt,
      error:
        `Error occured when trying to refresh the token ${(error as string)}`,
    };
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Spotify({
    clientSecret: process.env.AUTH_SPOTIFY_SECRET as string,
    clientId: process.env.AUTH_SPOTIFY_ID as string,
    authorization: auth_url,
  })],
  pages: {
    signIn: "/",
  },
  callbacks: {
    session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },

    jwt: async ({ account, token }) => {
      if (account) {
        // Initital sign on, use newly generated JWT

        let expires_at = undefined;
        if (account.expires_at) {
          expires_at = account.expires_at * 1000;
        }

        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: expires_at,
        };
      } else if (
        // Not initial sign
        token.accessTokenExpires &&
        Date.now() < token.accessTokenExpires
      ) {
        return token;
      }
      return refreshToken(token);
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!(auth?.user.accessToken); // Fancy syntax for Some => true, None => false
    },
  },
});
