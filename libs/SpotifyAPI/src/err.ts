import {Pattern as P, match, isMatching} from "ts-pattern"
import 'ts-pattern/types';
// Definitions mostly from official docs: https://developer.spotify.com/documentation/web-api/concepts/api-calls#response-status-codes

// Use ts-pattern to easily destructure and infer the type of error on the fly
// Then infer and export concrete type

// Encountered only when you try to fetch or ref the token, hence auth error
export const OAuthErrorPattern = {
    error: P.string,
    error_description: P.string
} as const; // Not necesssary but helps with type inference
export type OAuthError = P.infer<typeof OAuthErrorPattern>;

// This is the error seen pretty much everywhere else when interacting with the API
export const ResponseErrorPattern = {
    error: {
        status: P.number,
        message: P.string
    }
} as const; // Not necesssary but helps with type inference
export type ResponseError = P.infer<typeof ResponseErrorPattern>;

// Generic error type and pattern
export const SpotifyErrorPattern = P.union(OAuthErrorPattern, ResponseErrorPattern);
export type SpotifyError = P.infer<typeof SpotifyErrorPattern>

// Helpers

// Quickly extract detailed error description
export const get_err_details = (err: SpotifyError) =>
    match(err)
        .returnType<string>()
        .with(OAuthErrorPattern, (err: OAuthError) => { return err.error_description }) 
        .with(ResponseErrorPattern, (err: ResponseError) => { return err.error.message })
        .exhaustive() 

// Peek at underlying type of error
export const is_auth_err = (err: SpotifyError) => isMatching(OAuthErrorPattern, err)
export const is_response_err = (err: SpotifyError) => isMatching(ResponseErrorPattern, err)
