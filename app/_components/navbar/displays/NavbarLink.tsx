"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Route } from "next";

// Helper to highlight current route, and turn off animations for it
function textColour(route: string, selected: string) {
  return route == selected ? "text-primary underline" : "text-secondary hover:scale-110";
}

export default function NavbarLink({ route, name }: { route: Route, name: string }) {
  const currentRoute = usePathname();
  const tabs = "flex transition sm:ml-5 m-4 hover:text-primary sm:text-3xl xs:text-xl text-lg font-medium ";
  const color = textColour(route, currentRoute);
  const concat = tabs.concat(color);
  return (
    <Link href={route} className={concat}>
      {name}
    </Link>
  )
}