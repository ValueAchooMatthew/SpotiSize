"use client"

import { signIn } from "@/auth-client";

export default function LoginButton() {

  return (                               
        <button onClick={signIn} className="bg-button-primary md:px-12 md:py-8 px-6 py-4 text-center flex justify-center self-center 
          rounded-full shadow-2xl mx-auto mt-8 z-10" >
            <span className="font-jost md:text-4xl text-2xl text-white font-bold" >
              Log in With Spotify
            </span>
        </button>)
}


<div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300 will-change-transform">
          <LoginButton/>    
                             
          <div className="bg-button-secondary w-full md:h-24 h-16 rounded-full mx-auto absolute md:-bottom-3 -bottom-2 left-1 -z-10">
          </div>
        </div>