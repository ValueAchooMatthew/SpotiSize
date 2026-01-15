import { auth } from "@/auth"
import NextAuth from "next-auth";
import { NextAuthRequest } from "next-auth/lib"
import { NextRequest, NextResponse } from "next/server";
import type SpotifyApi from "spotify-web-api-node";

// TODO: https://github.com/omermecitoglu/next-openapi-route-handler/issues/21#issuecomment-3241053381
 async function GET(_req: NextRequest, ctx: RouteContext<"/api/artists/[timeframe]/[count]">)  {
  // Presave params
  const { timeframe, count } = await ctx.params; 

  const session = await auth();

  return NextResponse.json<SpotifyApi.UsersTopArtistsResponse>()
}



// export const GET = auth((_req, ctx)))