import { createAuthClient } from "better-auth/react"
import { Route } from "next";
// import { app_base_api_path, app_base_url, app_name } from "./auth"

export const authClient = createAuthClient(
    // {
    //     appName: app_name,
    //     baseURL: app_base_url,
    //     basePath: app_base_api_path,

    // }
)

export async function signIn() : Promise<void> {
    const {data, error} = await authClient.signIn.social({
        provider: "spotify",
        callbackURL: "/profile" as Route
    });
}

export async function signOut() : Promise<void> {
    const {data, error} = await authClient.signOut();
}