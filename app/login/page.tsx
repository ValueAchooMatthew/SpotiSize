'use client'
import styles from './page.module.css'
import { useSearchParams } from 'next/navigation'

function gen_random_string(len: number): string {
  let string = ''
  let char_pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let idx = 0; idx < len; idx++) {
      let random_char = char_pool.charAt(Math.floor(Math.random() * char_pool.length))
      string += random_char
  }
  return string
}

async function generateCodeChallenge(codeVerifier: string): Promise<String> {

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return digest.toString()
}

export default function Login() {
  const searchParams = useSearchParams()

  const code = searchParams.get('code')
  const state = searchParams.get('state')
  if (code && state) {
    return (
      <main>
        <p>Wow!</p>
        <p>Code: {code}</p>
        <p>State: {state}</p>
      </main>
    )
  }
  return (
    <main>
      <button>Log in</button>
    </main>
  )
}
