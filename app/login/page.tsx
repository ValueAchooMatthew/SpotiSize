'use client'
import styles from './page.module.css'
import { useSearchParams } from 'next/navigation'

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
