"use client"

import { signOut } from "@/auth-client"

export default function LogoutButton() {
  return (                                                                                                                                                          
    <div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300 will-change-transform">
        <button onClick={signOut}  className="bg-bad-secondary md:px-12 md:py-8 px-6 py-4 text-center flex justify-center self-center rounded-full shadow-2xl mx-auto mt-8 z-10" >
            <span className="font-jost md:text-4xl text-2xl text-white font-bold" >
                Log Out
            </span>
        </button>
        <div className="bg-button-bad-primary w-full md:h-24 h-16 rounded-full mx-auto absolute md:-bottom-3 -bottom-2 left-1 -z-10">
    </div>
</div>)
}