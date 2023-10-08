'use client'
import {getProviders, signIn} from "next-auth/react"
import styles from './page.module.css'

export default async function Login() {
  const providers = await getProviders();

  return (
    <main>
      <button className="text-4xl text-white text-center mt-48" onClick={() => signIn(providers?.spotify.id, {callbackUrl: "/songs"})}>Log in</button>
    </main>
  )
}
