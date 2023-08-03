import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="mt-3">
        <p>Hello World</p>
        <Link href="/login">To login page</Link>
      </div>
    </main>
  );
}
