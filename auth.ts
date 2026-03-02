import { betterAuth, OAuth2Tokens, OAuth2UserInfo } from "better-auth";
import { Route } from "next";
import {version} from './package.json';

// import NextAuth from "next-auth";
// import { JWT } from "next-auth/jwt";
// import Spotify from "next-auth/providers/spotify";

// const base_url = "https://accounts.spotify.com/authorize?";

// const url_params = new URLSearchParams({
//   scope: ["user-top-read", "user-read-recently-played"].join(","),
// });

// const auth_url = base_url + url_params;

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

type UserInfo = { // Stupid type they give, so I just replace anys with unknowns
    user: {
      id: string;
      name?: string;
      email?: string | null;
      image?: string;
      emailVerified: boolean;
      [key: string]: unknown;
    };
    data: unknown;
  } | null;

export const auth = betterAuth({
  // appName: app_name,
  // baseURL: app_base_url,
  // basePath: app_base_api_path, 
  // secret: app_secret,
  trustedOrigins: ["https://*.spotify.com", "https://spotify.com", "https://localhost:3000", "http://localhost:3000"],
  
  // // Configure options affecting a users login session each time they log in 
  // session: {
  //     modelName: "spotify_login_sessions",
      
  //     // If the user is in the same browser session, they would be able
  //     // to sign in without reauthenticating for the day. 
  //     // TODO (MT): Figure out if I even need this: https://www.better-auth.com/docs/concepts/session-management#stateless-session-management
  //     // expiresIn: 24 * 60 * 60, // Session lasts 1 day
  //     // updateAge: 60 * 60, // Update each hour (TODO: double check with spotify docs)
      
  //     // 
  //     cookieCache: {
  //         enabled: true,
  //         maxAge:  7 * 24 * 60 * 60, // 7 days cache duration
  //         strategy: "jwe", // Not using "jwt" cus it is apparently not ecrypted 
  //         refreshCache: true, 
  //         version: version, // Just use pkg version
  //     },
  // },

  // // OAuth credentials from spotify stored as the account
  // account: {
  //     modelName: "spotify_accounts",
  //     storeStateStrategy: "cookie",
  //     updateAccountOnSignIn: true,
  //     encryptOAuthTokens: true, 
  //     storeAccountCookie: true, 
  // },
  // emailAndPassword: { 
  //   enabled: false, 
  // }, 
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
      
      // async getUserInfo(token: OAuth2Tokens): Promise<UserInfo> {
      //   return Promise.reject("TODO (MT): Not Implemented");
      // },
    },
    telemetry: {
      enabled: false, // I don't like telemetry - MT
    },
  }
});

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [Spotify({
//     clientSecret: process.env.AUTH_SPOTIFY_SECRET as string,
//     clientId: process.env.AUTH_SPOTIFY_ID as string,
//     authorization: auth_url,
//   })],
//   pages: {
//     signIn: "/",
//   },
//   callbacks: {
//     session({ session, token }) {
//       session.user.accessToken = token.accessToken;
//       session.user.refreshToken = token.refreshToken;
//       session.user.username = token.username;

//       return session;
//     },

//     jwt: async ({ account, token }) => {
//       if (account) {
//         // Initital sign on, use newly generated JWT

//         let expires_at = undefined;
//         if (account.expires_at) {
//           expires_at = account.expires_at * 1000;
//         }

//         return {
//           ...token,
//           accessToken: account.access_token,
//           refreshToken: account.refresh_token,
//           username: account.providerAccountId,
//           accessTokenExpires: expires_at,
//         };
//       } else if (
//         // Not initial sign
//         token.accessTokenExpires &&
//         Date.now() < token.accessTokenExpires
//       ) {
//         return token;
//       }
//       return refreshToken(token);
//     },
//     authorized: async ({ auth }) => {
//       // Logged in users are authenticated, otherwise redirect to login page
//       return !!(auth?.user.accessToken); // Fancy syntax for Some => true, None => false
//     },
//   },
// });
