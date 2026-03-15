import {Pattern as P, isMatching, match} from "ts-pattern"
import { DEFAULT_SPOTIFY_BASE_URL } from "../api.ts";
import { get_err_details, SpotifyErrorPattern, type SpotifyError } from "../err.ts";
// Pretty much everything comes from official doc page
// https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks

// Constants impleid by docs
const MAX_ITEM_LIMIT = 50;
const MIN_ITEM_LIMIT = 0;


// Concrete types since these are significantly smaller definitions
export type TimeRange = "long_term" | "medium_term" | "short_term"
export type ItemsVariant = "artist" | "track"

export type SpotifyImage = {
    url: string,
    height: number,
    width: number
}

// Parial interfaces for only the data relevant to Spotisize
// we can add more if needed, but using the full concrete type defs is too long
export interface SpotifyItemWithType {
    readonly type: ItemsVariant
}

export interface SpotifyArtist extends SpotifyItemWithType {
    external_urls: {
        spotify: string
    },
    images?: [SpotifyImage], // May not exist when part of SpotifyTrack artists member
    name: string,
    type: "artist",
    uri: string
}

export interface SpotifyTrack extends SpotifyItemWithType {
    album: {
        images: [SpotifyImage]
        name: string,
    },
    artists: [SpotifyArtist],
    name: string,
    type: "track",
    uri: string,
}

export interface TopItemsResponse<Item extends SpotifyArtist | SpotifyTrack> {
    total: number,
    items: [Item]
}

// Helper Patterns for matching
const artist_response_pattern = {
    total: P.number,
    items: P.array<SpotifyArtist>()
} as const;



// Helpers to comply with SpotifyAPI limits
const verify_limit_within_range = (limit: number) =>
        isMatching(P.number.int().between(MIN_ITEM_LIMIT, MAX_ITEM_LIMIT), limit);
const verify_offset_positive = (offset: number) =>
        isMatching(P.number.int().finite().positive(), offset);

export async function get_top_artists_page(token: string, time_range: TimeRange, limit: number, offset: number): Promise<TopItemsResponse<SpotifyArtist>> {
    // Early fail if provided with bad params
    if (!verify_limit_within_range(limit) && !verify_offset_positive(offset)) {
        return Promise.reject(`Limit: ${limit} must be within [${MIN_ITEM_LIMIT}, ${MAX_ITEM_LIMIT}] and Offset: ${offset} must be a finite positive integer `)
    }
    const endpoint_url = new URL("/me/top/artists", DEFAULT_SPOTIFY_BASE_URL);
    const params = {
        time_range: time_range.toString(),
        limit: limit.toString(),
        offset: offset.toString(),
    }

    endpoint_url.search = new URLSearchParams(params).toString();
    
    // fetch -> json -> pattern match into an ok/err 
    return fetch(endpoint_url)
            .then((res) => res.json())
            .then((json) => match(json)
                                .with(artist_response_pattern, (ok_resp: TopItemsResponse<SpotifyArtist>) => Promise.resolve(ok_resp))
                                .with(SpotifyErrorPattern, (err_resp: SpotifyError) => Promise.reject(get_err_details(err_resp)))
                                .otherwise(() => Promise.reject("Received entierly unexpected response, this is a bug")));
}

export async function get_top_tracks_page(token: string, time_range: TimeRange, limit: number, offset: number): Promise<TopItemsResponse<SpotifyTrack>> {
    // Early fail if provided with bad params
    if (!verify_limit_within_range(limit) && !verify_offset_positive(offset)) {
        return Promise.reject(`Limit: ${limit} must be within [${MIN_ITEM_LIMIT}, ${MAX_ITEM_LIMIT}] and Offset: ${offset} must be a finite positive integer `)
    }
    const endpoint_url = new URL("/me/top/tracks", DEFAULT_SPOTIFY_BASE_URL);
    const params = {
        time_range: time_range.toString(),
        limit: limit.toString(),
        offset: offset.toString(),
    }

    endpoint_url.search = new URLSearchParams(params).toString();
    
    // fetch -> json -> pattern match into an ok/err 
    return fetch(endpoint_url)
            .then((res) => res.json())
            .then((json) => match(json)
                                .with(artist_response_pattern, (ok_resp: TopItemsResponse<SpotifyTrack>) => Promise.resolve(ok_resp))
                                .with(SpotifyErrorPattern, (err_resp: SpotifyError) => Promise.reject(get_err_details(err_resp)))
                                .otherwise(() => Promise.reject("Received entierly unexpected response, this is a bug")));
}
