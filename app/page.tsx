import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="mt-32 relative w-fit h-fit mx-auto">
        <h3 className=" absolute text-white text-6xl text-center -top-8 -left-12">
          Welcome to
        </h3>
        <h1 className="font-bold text-[7.5rem] text-white text-center">
          Spotisize
        </h1>
      </div>

      <div className="mt-32">
        <h4 className=" text-orange-500 italic text-center text-3xl">
          Discover your musical galaxy
        </h4>
        <Link href={"/"}>
          <div className="relative w-fit mx-auto hover:-translate-y-4 transition-all duration-300">
            <button className="bg-[#9e8afe] px-12 py-8 text-center flex justify-center self-center 
            rounded-full shadow-2xl mx-auto mt-8 z-10">
              <span className="text-4xl text-white font-bold">
                Log in With Spotify
              </span>
            </button>
            <div className="bg-[#6445ff] w-full h-24 rounded-full mx-auto absolute -bottom-3 left-1 -z-10">
          </div>
          </div>
        </Link>
      </div>


    </main>
  );
}
