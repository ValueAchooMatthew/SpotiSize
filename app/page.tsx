import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mt-3">
        <p>Hello World</p>
        <Link href="/login">To login page</Link>
      </div>
    </main>
  );
}
