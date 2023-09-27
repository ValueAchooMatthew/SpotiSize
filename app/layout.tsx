import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotisize",
  description: "Playground to test out using the Spotify API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-[#0E0149] to-slate-900 h-fit overflow-hidden"} >
        <Navbar></Navbar>
        {children}
      </body>
    </html> 
  );
}
