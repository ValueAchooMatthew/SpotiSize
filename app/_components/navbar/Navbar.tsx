// "use client";
import Image from "next/image";
import Link from "next/link";
import NavbarLink from "./displays/NavbarLink";

export default function Navbar() {

  return (
    <nav className="top-0 z-10 w-full h-16 bg-transparent">
        <ul className="flex flex-row items-center sm:pr-8 pr-4 font-jost">
          <li  className="flex" >
            <Link href="/">
              <Image
                src={"/img/saturn.svg"}
                alt="Home"
                width={100}
                height={100}
                priority
              />
            </Link>
          </li>
          <div className="flex flex-row grow justify-end">
          <li  className="flex" ><NavbarLink route="/" name="Home" ></NavbarLink></li>
          <li  className="flex" ><NavbarLink route="/about" name="About" ></NavbarLink></li>
          <li  className="flex" ><NavbarLink route="/contact" name="Contact Us" ></NavbarLink></li>
          </div>
        </ul>
    </nav>
  );
}
