import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const base_url = "https://accounts.spotify.com/authorize";

const url_params = new URLSearchParams({
  scope: ["user-top-read"].join(","),
});

const auth_url = base_url + url_params;

const handler = NextAuth({
  providers: [SpotifyProvider({
    clientId: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_ID as string,
    authorization: auth_url,
  })],
  secret: process.env.JWT_SECRET as string,
  pages: {
    signIn: "/login",
  },
  callbacks: {},
});

export { handler as GET, handler as POST };
