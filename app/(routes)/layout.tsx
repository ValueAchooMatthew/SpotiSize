import Navbar from "../_components/navbar/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Image from "next/image";
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
      <body className={inter.className + " bg-linear-to-b from-background-primary to-background-secondary"} >
        <div className="flex flex-col grow">
        <Image className="overflow-hidden absolute -left-64 -z-10" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"/>
        <Image className="overflow-hidden absolute -top-64 -right-80 -z-10" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"/>
        <Image className="absolute hidden md:inline-block top-20 2xl:right-64 lg:right-32 right-12 lg:w-72 lg:h-72 w-56 h-56 -z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" />
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
