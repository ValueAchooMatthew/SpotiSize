'use client';
import { signIn } from "next-auth/react"

export default function Login() {


  return (
    <main>
      <button className="text-4xl text-white text-center mt-48" onClick={() => signIn("spotify", { callbackUrl: "/profile" })}>Log in</button>
    </main>
  )
}
