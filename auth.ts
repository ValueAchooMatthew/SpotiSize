import { betterAuth, OAuth2Tokens } from "better-auth";
import { Route } from "next";

export const app_name =  "Spotisize"
export const app_base_url = process.env.BETTER_AUTH_URL as string;
export const app_secret = process.env.BETTER_AUTH_SECRET as string;
export const app_base_api_path = "/api/auth/" as Route; // Take advantage of Next.JS compile time route checking


type AuthUrlGenerationData = {
          state: string;
          codeVerifier: string;
          // scopes?: string[] | undefined;
          redirectURI: string;
          // display?: string | undefined;
          // loginHint?: string | undefined; // MT: Prolly won't need these but gonna leave em there for now
        }

export const auth = betterAuth({

  trustedOrigins: ["https://*.spotify.com", "https://spotify.com", "https://127.0.0.1:3000"],
  
  socialProviders: { 
    spotify: { 
      clientId: process.env.AUTH_SPOTIFY_ID!, 
      clientSecret: process.env.AUTH_SPOTIFY_SECRET!,
      scope: ["user-top-read", "user-read-recently-played"],
      overrideUserInfoOnSignIn: true, // Just use spotify's user data, we cant link multiple accounts anyway
      async refreshAccessToken(refreshToken): Promise<OAuth2Tokens> {
        const url = "https://accounts.spotify.com/api/token";
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
        if (response.status == 200) {
          const refreshed_token_data = await response.json();  
          return refreshed_token_data;
        } else {
          return Promise.reject("Refresh token reponse was not 200")
        }
      },
      async createAuthorizationURL({state, codeVerifier, redirectURI}: AuthUrlGenerationData): Promise<URL> {
        const params = {
          response_type: 'code',
          client_id: this.clientId,
          state,
          scope: this.scope.join.apply(' '),
          code_challenge_method: 'S256',
          code_challenge: codeVerifier,
          redirect_uri: redirectURI,
        };
        const authUrl = new URL("https://accounts.spotify.com/authorize");
        authUrl.search = new URLSearchParams(params).toString();
        return authUrl;
      },
    },
    telemetry: {
      enabled: false, // I don't like telemetry - MT
    },
  }
});