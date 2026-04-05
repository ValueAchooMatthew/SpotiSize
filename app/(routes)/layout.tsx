import Navbar from "../_components/navbar/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";
import noisesvg from "@/public/img/Noise.svg";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotisize",
  description: "Playground to test out using the Spotify API",
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen bg-linear-to-b from-background-primary to-background-secondary"} >
          <Image className="fixed -left-64 -z-10" src={noisesvg} loading="eager" alt=""/> 
          <Image className="fixed -top-64 -right-80 -z-10" src={noisesvg} loading="eager" alt=""/>
          <Navbar/>
          {children}

      </body>
    </html>
  );
}
