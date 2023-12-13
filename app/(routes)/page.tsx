"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";


export default function Home() {


  return (
    <main className="relative min-h-screen h-full pb-40 overflow-hidden">
      <Image className="absolute -left-64 -z-10" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      <Image className="absolute -top-64 -right-80 -z-10" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      {/* <Image className="absolute -top-56 right-0 w-[40rem] h-[40rem]" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image> */}
      <Image className="absolute hidden md:inline-block top-20 2xl:right-64 lg:right-32 right-12 lg:w-72 lg:h-72 w-56 h-56 -z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" ></Image>
      <Image className="absolute hidden 2xl:inline-block bottom-1/2 right-32 w-48 h-48 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute hidden md:inline-block bottom-32 right-64 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute hidden md:inline-block bottom-12 left-64 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute hidden md:inline-block -top-32 right-1/2 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute hidden md:inline-block top-1/4 md:left-24 w-32 h-28 flip -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>


      <div className="mt-32 relative w-fit h-fit mx-auto font-jost">
        <h3 className="absolute text-fontBlue md:text-6xl medsmal:text-4xl sm:text-2xl text-xl text-center medsmal:top-10 md:top-14 top-16 md:-left-60 medsmal:-left-28 xs:-left-20 -left-16">
          Welcome to
        </h3>
        <div className="w-fit h-fit relative">
          <h1 className="font-bold md:text-[7.5rem] medsmal:text-[5.5rem] text-[3.5rem] text-fontBlue text-center absolute md:top-[7.1rem] top-[5.0rem] md:-left-14 medsmal:-left-[3.2rem] xs:-left-[1.8rem] -left-[1.2rem] z-10">
            Sp
          </h1>
          <Image width={1000} height={1000} className="md:w-96 md:h-80 medsmal:w-64 medsmal:h-56 w-56 h-48" src={"/img/spaceman.png"} alt="spaceman"></Image>
          <h1 className="font-bold md:text-[7.5rem] medsmal:text-[5.5rem] text-[3.5rem] text-fontBlue text-center absolute md:top-[7.1rem] top-[5.0rem] md:-right-40 medsmal:-right-32 xs:-right-20 -right-16 z-10">
            tisize
          </h1>
        </div>

      </div>

      <div className="mt-18"
        onClick={() => signIn("spotify", { callbackUrl: "/profile" })}
      >
        <h4 className=" font-jost text-yellow italic text-center md:text-3xl text-2xl">
          Discover your musical galaxy
        </h4>

        <div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300 will-change-transform">
          <button className="bg-[#9e8afe] md:px-12 md:py-8 px-6 py-4 text-center flex justify-center self-center 
          rounded-full shadow-2xl mx-auto mt-8 z-10" >
            <span className="font-jost md:text-4xl text-2xl text-white font-bold" >
              Log in With Spotify
            </span>
          </button>
          <div className="bg-[#6445ff] w-full md:h-24 h-16 rounded-full mx-auto absolute md:-bottom-3 -bottom-2 left-1 -z-10">
          </div>
        </div>
      </div>

    </main>
  );
}
