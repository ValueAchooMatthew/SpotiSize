import { Suspense } from "react"
import Loading from "./loading"

export const metadata = {
  title: 'Spotify Login Test',
  description: 'Playground to test out using the Spotify API',
}

export default function SongsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        <Suspense fallback={<Loading/>}>
            {children}
        </Suspense>
    </section>)
  }