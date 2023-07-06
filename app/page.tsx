import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <p>Hello</p>
      <Link href="/login">To login page</Link>
    </main>
  )
}
