import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      accessToken?: string;
      refreshToken?: string;
      username?: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /**
     * Token used to access the spotify API.
     * Expires every hour
     */
    accessToken?: string;
    /**
     * Token used to refresh the access token
     */
    refreshToken?: string;
    /**
     * The username of the user
     */
    username?: string;
    /**
     * The number of milliseconds after midnight, January 1,
     * 1970 Universal Coordinated Time (UTC) that marks the
     * token as expired. Use with `Date.now()` to compare
     */
    accessTokenExpires?: number;
    error?: string;
  }
}
