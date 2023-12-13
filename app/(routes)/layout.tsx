import Navbar from "../_components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";

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
      <body className={inter.className + " bg-gradient-to-b from-[#11005e] to-slate-950 min-h-screen h-fit min-w-fit w-full"} >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
