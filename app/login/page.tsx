'use client'
import {getProviders, signIn} from "next-auth/react"
import styles from './page.module.css'

export default async function Login() {
  const providers = await getProviders();

  return (
    <main>
      <button onClick={() => signIn(providers?.spotify.id, {callbackUrl: "/songs"})}>Log in</button>
    </main>
  )
}
