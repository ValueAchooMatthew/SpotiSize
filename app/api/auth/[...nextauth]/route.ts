import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi from "spotify-web-api-node";
const base_url = "https://accounts.spotify.com/authorize?";

const url_params = new URLSearchParams({
  scope: ["user-top-read"].join(","),
});

const auth_url = base_url + url_params;

async function refreshToken(token: JWT): Promise<JWT> {
  let api = new spotifyApi();
  if (!token.accessToken || !token.refreshToken) {
    return {
      ...token,
      error: "Access Token or Refresh Token were undefined",
    };
  }

  try {
    api.setAccessToken(token.accessToken);
    api.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await api.refreshAccessToken();
    console.log("Refreshed " + refreshedToken.access_token);
    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    return {
      ...token,
      error: error as string,
    };
  }
}

const handler = NextAuth({
  providers: [SpotifyProvider({
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
    authorization: auth_url,
  })],
  secret: process.env.JWT_SECRET as string,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },

    async jwt({ user, account, token }) {
      if (account) {
        // Initital sign on, use newly generated JWT

        let expires_at = undefined;
        if (account.expires_at) {
          expires_at = account.expires_at * 1000;
        }
        console.log("New sign on" + account.access_token);
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: expires_at,
        };
      } else if (
        // Not initial sign
        token.accessTokenExpires && Date.now() < token.accessTokenExpires
      ) {
        console.log("Not new sign on" + token.accessToken);
        return token;
      } else {
        return await refreshToken(token);
      }
    },
  },
});

export { handler as GET, handler as POST };
