import Image from "next/image";

export default function About() {
  return (
    <div>
        <div className="overflow-hidden absolute hidden sm:inline-block top-72 -z-10 w-[40rem] h-[40rem]">
        <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      </div>
      <div className="overflow-hidden absolute -top-48 -z-10 right-12 w-[50rem] h-[50rem]">
        <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      </div>
      <Image className="absolute hidden md:inline-block bottom-32 left-16 w-80 h-80 z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" ></Image>
      <Image className="absolute hidden 2xl:inline-block bottom-1/2 right-32 w-48 h-48 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute bottom-32 right-64 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute hidden xs:inline-block bottom-12 left-64 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      <Image className="absolute hidden xs:inline-block -top-32 right-1/2 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
      {/* <Image className="absolute md:inline-block hiddentop-1/4 md:left-24 w-32 h-28 flip -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image> */}
      <Image className="absolute bottom-48 right-16 w-96 h-80 rotate-180 hidden md:inline-block" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>
      <h1 className="text-center sm:text-7xl text-6xl font-bold text-fontBlue mt-20 mb-12 font-jost">
        About
      </h1>     
       <p className="text-center md:text-4xl xs:text-3xl text-2xl text-fontBlue md:w-[45rem] medsmal:w-[30rem] w-[20rem] mx-auto">
        Welcome to Spotisize, an interactive website for visualizing your top artists and songs on spotify! If you enjoy this website, be sure to share it with your friends.
         </p>
    </div>
  );
}
