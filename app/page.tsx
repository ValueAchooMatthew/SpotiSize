'use client'
import { signIn } from "next-auth/react"
import Image from "next/image";


export default function Home() {


  return (
    <main className="relative h-full pb-40 overflow-hidden">
      <Image className="absolute -bottom-64 -left-64 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      <Image className="absolute -top-64 -right-80" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      {/* <Image className="absolute -top-56 right-0 w-[40rem] h-[40rem]" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image> */}
      <Image className="absolute top-24 right-64 w-80 h-80 z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" ></Image>
      <Image className="absolute bottom-1/2 right-32 w-48 h-48 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute bottom-32 right-64 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute bottom-12 left-64 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute -top-32 right-1/2 w-28 h-32 z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute top-1/4 left-32 w-32 h-28 z-10 flip" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>


      <div className="mt-32 relative w-fit h-fit mx-auto font-jost">
        <h3 className=" absolute text-fontBlue text-6xl text-center top-14 -left-60">
          Welcome to
        </h3>
        <div className="w-fit h-fit relative">
          <h1 className="font-bold text-[7.5rem] text-fontBlue text-center absolute top-[7.1rem] -left-14">
            Sp
          </h1>
          <Image width={1000} height={1000} className="w-96 h-80 inline-block" src={"/img/spaceman.png"} alt="spaceman"></Image>
          <h1 className="font-bold text-[7.5rem] text-fontBlue text-center absolute top-[7.1rem] -right-40">
            tisize
          </h1>
        </div>

      </div>

      <div className="mt-18" 
      onClick={() => signIn("spotify", { callbackUrl: "/profile" })}
      // onClick={(event)=>{console.log(event)}}
      >
        <h4 className=" font-jost text-yellow italic text-center text-3xl">
          Discover your musical galaxy
        </h4>

        <div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300 will-change-transform">
          <button className="bg-[#9e8afe] px-12 py-8 text-center flex justify-center self-center 
          rounded-full shadow-2xl mx-auto mt-8 z-10" >
            <span className="font-jost text-4xl text-white font-bold" >
              Log in With Spotify
            </span>
          </button>
          <div className="bg-[#6445ff] w-full h-24 rounded-full mx-auto absolute -bottom-3 left-1 -z-10">
          </div>
        </div>
      </div>

    </main>
  );
}
