"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const route = usePathname();
  const tabs = "transition sm:ml-10 m-4 hover:text-purple sm:text-3xl xs:text-xl text-lg font-medium";

  return (
    // consider changing from fixed
    <nav className="absolute top-0 z-10 w-full h-16 bg-transparent">
      {/* Replace with Logo and "Spotisize" that we can design */}
      <div className="flex justify-between items-center h-full w-full sm:pr-5 pr-1 pl-2 2xl:pr-8">
        <Link href="/">
          <Image
            src={"/img/saturn.svg"}
            alt="Home"
            width={100}
            height={100}
            className="cursor-pointer sm:w-24 w-16 sm:mt-12 mt-4"
            priority
          />
        </Link>

        <div>
          <ul className="flex sm:pr-8 pr-4 font-jost">
            <Link href="/">
              <li className={`${tabs} ${textColour(route, "/")}`}>Home</li>
            </Link>
            <Link href="/about">
              <li className={`${tabs} ${textColour(route, "/about")}`}>
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className={`${tabs} ${textColour(route, "/contact")}`}>
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function textColour(route: string, selected: string) {
  return route == selected ? "text-purple" : "text-fontBlue hover:scale-110";
}
