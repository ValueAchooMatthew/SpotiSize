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


// TODO (MT): mae this only go through if already no signed in
export async function signIn() : Promise<void> {
    await authClient.signIn.social({
        provider: "spotify",
        callbackURL: "/profile" as Route
    });
}

export async function signOut() : Promise<void> {
    await authClient.signOut();
}