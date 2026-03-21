"use client"
import { signOut } from "@/auth-client";
import Link from "next/link";

export default function LogoutButton() {
  return (                                                                                                                                                          
        <Link href="/" onNavigate={signOut} className="bg-lightPurple hover:bg-yellow text-white xl:text-2xl text-lg font-bold font-jost py-2 px-4 rounded-full bg-button-secondary w-full h-10 rounded-full mx-auto">
            Log Out
        </Link>)
}