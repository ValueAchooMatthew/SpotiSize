import { NextResponse, type NextRequest } from 'next/server'
import type SpotifyApi from "spotify-web-api-node";

// TODO: https://github.com/omermecitoglu/next-openapi-route-handler/issues/21#issuecomment-3241053381
 async function GET(_req: NextRequest, ctx: RouteContext<"/api/artists/[timeframe]/[count]">)  {
  // Presave params
  const { timeframe, count } = await ctx.params; 

  // const session = await auth();

  return NextResponse.json<unknown>({})
}



// export const GET = auth((_req, ctx)))