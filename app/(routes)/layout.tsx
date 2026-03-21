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

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-linear-to-b from-background-primary to-background-secondary min-h-screen h-fit min-w-fit w-full"} >
        <div className="flex flex-col grow">
          <Navbar></Navbar>
          <Image className="overflow-hidden absolute -left-64 -z-10" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
          <Image className="overflow-hidden absolute -top-64 -right-80 -z-10" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
          <Image className="absolute hidden md:inline-block top-20 2xl:right-64 lg:right-32 right-12 lg:w-72 lg:h-72 w-56 h-56 -z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" ></Image>
          {children}

        </div>
      </body>
    </html>
  );
}
