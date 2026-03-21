import Image from "next/image";
import LoginButton from "../_components/login_button/LoginButton";


export default function Home() {

  return (
    <main className="relative min-h-screen h-full pb-40 overflow-hidden">
      
      

      <div className="mt-32 relative w-fit h-fit mx-auto font-jost">
        <h3 className="absolute text-secondary md:text-6xl medsmal:text-4xl sm:text-2xl text-xl text-center medsmal:top-10 md:top-14 top-16 md:-left-60 medsmal:-left-28 xs:-left-20 -left-16">
          Welcome to
        </h3>
        <div className="w-fit h-fit relative">
          <h1 className="font-bold md:text-[7.5rem] medsmal:text-[5.5rem] text-[3.5rem] text-secondary text-center absolute md:top-[7.1rem] top-[5.0rem] md:-left-14 medsmal:-left-[3.2rem] xs:-left-[1.8rem] -left-[1.2rem] z-10">
            Sp
          </h1>
          <Image width={1000} height={1000} className="md:w-96 md:h-80 medsmal:w-64 medsmal:h-56 w-56 h-48" src={"/img/spaceman.png"} alt="spaceman"></Image>
          <h1 className="font-bold md:text-[7.5rem] medsmal:text-[5.5rem] text-[3.5rem] text-secondary text-center absolute md:top-[7.1rem] top-[5.0rem] md:-right-40 medsmal:-right-32 xs:-right-20 -right-16 z-10">
            tisize
          </h1>
        </div>

      </div>

     
        <h4 className=" font-jost text-accent italic text-center md:text-3xl text-2xl">
          Discover your musical galaxy
        </h4>

        <div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300 will-change-transform">
          <LoginButton/>    
                             
          <div className="bg-button-secondary w-full md:h-24 h-16 rounded-full mx-auto absolute md:-bottom-3 -bottom-2 left-1 -z-10">
          </div>
        </div>

    </main>
  );
}
