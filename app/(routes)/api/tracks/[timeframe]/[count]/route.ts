import { TimeFrame } from "@/app/_types/data"
import { auth } from "@/auth";
import {get_top_tracks_page} from "@/libs/SpotifyAPI/src/lib";
import { headers } from "next/headers";
import { notFound } from "next/navigation"
import { NextRequest } from "next/server"

// Functions to ensure passed params from frontend are well-formed to send to the API 

// must be on of the available time frames 
function assertValidTimeframe(timeFrameStr: string): TimeFrame {
    if (!(timeFrameStr === "short_term" || timeFrameStr === "medium_term" ||  timeFrameStr === "long_term")) 
        notFound()
    else 
        return timeFrameStr
}

// count must be a positive non-zero integer
function assertValidCount(countStr: string): number {
    try {
        const count = Number.parseInt(countStr);
        if (!(count > 0)) notFound()
        return count;
    } catch {  
        notFound();
    }
}


export async function GET(_req: NextRequest, ctx: RouteContext<"/api/tracks/[timeframe]/[count]">) {
    const { timeframe, count } = await ctx.params;
    // Avoid sending API req to Spotify if malformed params
    const countValid = assertValidCount(count);
    const timeframeValid = assertValidTimeframe(timeframe);
    
    const {accessToken, } = await auth.api.getAccessToken({
          body: {
            providerId: "spotify",
          },
          headers: await headers() 
    });
    const epic = await get_top_tracks_page(accessToken, timeframeValid, countValid, 0);

    return Response.json(epic)
}

export async function get_top_tracks_pageGET(_req: NextRequest, ctx: RouteContext<"/api/tracks/[timeframe]/[count]">) {}