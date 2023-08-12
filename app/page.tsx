"use client";
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react";

import styles from "./page.module.css";

export default async function Home() {
  const providers = await getProviders();

  return (
    <main>
      <div className="mt-3">
        <p>Hello World</p>
        <button
          onClick={() =>
            signIn(providers?.spotify.id, { callbackUrl: "/artists" })
          }
        >
          Log in
        </button>
      </div>
    </main>
  );
}
