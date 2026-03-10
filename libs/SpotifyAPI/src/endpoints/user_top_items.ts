
export type TimeFrame = "long_term" | "medium_term" | "short_term"
export type ItemsVariant = "artists" | "tracks"

export type SpotifyImage = {
    url: string,
    height: number,
    width: number
}

export interface SpotifyArtist {
    external_urls: {
        spotify: string
    },
    images?: [SpotifyImage], // May not exist when part of SpotifyTrack artists member
    name: string,
    uri: string
}

export interface SpotifyTrack {
    album: {
        images: [SpotifyImage]
        name: string,
    },
    artists: [SpotifyArtist],
    name: string,
    uri: string,
}

export interface TopItemsResponse<Item extends SpotifyArtist | SpotifyTrack> {
    total: number,
    items: [Item]
}


async function get_top_items<Item extends SpotifyArtist | SpotifyTrack>(token: string, items_variant: ItemsVariant, time_frame: TimeFrame, limit: number, offset: number): Promise<TopItemsResponse<Item>> {
    //TODO generic fetch, then specialize per item type with helper functions, maybe add "pagination" to allow for arbitrary amounts of top items requested
    return Promise.reject("todo: unimplemented")
}