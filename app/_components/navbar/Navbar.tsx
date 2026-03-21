// "use client";
import Image from "next/image";
import Link from "next/link";
import NavbarLink from "./displays/NavbarLink";

export default function Navbar() {

  return (
    // consider changing from fixed
    <nav className="flex top-0 z-10 w-full h-16 bg-transparent">
      {/* Replace with Logo and "Spotisize" that we can design */}
      <div className="flex flex-row justify-between items-center h-fit w-full sm:pr-5 pr-1 pl-2 2xl:pr-">
        <Link href="/" className="flex">
          <Image
            src={"/img/saturn.svg"}
            alt="Home"
            width={100}
            height={100}
            priority
          />
        </Link>

        <div>
          <ul className="flex flex-row justify-evenly items-center sm:pr-8 pr-4 font-jost">
            <NavbarLink route="/" name="Home" ></NavbarLink>
            <NavbarLink route="/about" name="About" ></NavbarLink>
            <NavbarLink route="/contact" name="Contact Us" ></NavbarLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
