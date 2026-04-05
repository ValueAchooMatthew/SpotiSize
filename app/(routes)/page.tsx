import Image from "next/image";
import LoginButton from "../_components/login_button/LoginButton";
import spacemanimg from "@/public/img/spaceman.png";

export default function Home() {

  return (
    <main className="flex flex-col">
      
      <Image className="absolute md:inline-block top-20 2xl:right-64 lg:right-32 right-12 lg:w-72 lg:h-72 w-56 h-56 -z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" />
      
      <div className="mt-32 relative w-fit h-fit mx-auto">
        <h3 className="absolute text-secondary md:text-6xl medsmal:text-4xl sm:text-2xl text-xl text-center medsmal:top-10 md:top-14 top-16 md:-left-60 medsmal:-left-28 xs:-left-20 -left-16">
          Welcome to
        </h3>
        <div className="w-fit h-fit relative">
          <h1 className="font-bold md:text-[7.5rem] medsmal:text-[5.5rem] text-[3.5rem] text-secondary text-center absolute md:top-[7.1rem] top-[5.0rem] md:-left-14 medsmal:-left-[3.2rem] xs:-left-[1.8rem] -left-[1.2rem] z-10">
            Sp
          </h1>
          <Image className="md:w-96 md:h-80 medsmal:w-64 medsmal:h-56 w-56 h-48" src={spacemanimg} alt="spaceman"></Image>
          <h1 className="font-bold md:text-[7.5rem] medsmal:text-[5.5rem] text-[3.5rem] text-secondary text-center absolute md:top-[7.1rem] top-[5.0rem] md:-right-40 medsmal:-right-32 xs:-right-20 -right-16 z-10">
            tisize
          </h1>
        </div>
      </div>

     
        <h4 className="text-accent italic text-center md:text-3xl text-2xl">
          Discover your musical galaxy
        </h4>

        <div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300 will-change-transform">
          <LoginButton/>    
        </div>

    </main>
  );
}
