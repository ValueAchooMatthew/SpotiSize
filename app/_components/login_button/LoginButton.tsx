"use client"

import { signIn } from "@/auth-client";
// import { authClient } from "@/auth-client";

export default function LoginButton() {

  return (                                 // TODO(MT): add these to the global pallet
        <button onClick={signIn} className="bg-[#9e8afe] md:px-12 md:py-8 px-6 py-4 text-center flex justify-center self-center 
          rounded-full shadow-2xl mx-auto mt-8 z-10" >
            <span className="font-jost md:text-4xl text-2xl text-white font-bold" >
              Log in With Spotify
            </span>
        </button>)
}