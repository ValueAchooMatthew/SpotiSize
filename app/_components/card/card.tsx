import Image from "next/image";
import Link from "next/link";

export default function Card({ url, name, link }: { url: string, name: string, link: string }) {

  return (
    <Link className="z-50 md:mx-8 sm:mx-4 mx-2" href={{ pathname: link }} target="_">

      <div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-0.5 rounded-b-md mx-auto shadow-xl hover:-translate-y-4 hover:z-50 transition-all duration-200 hover:cursor-pointer">
        <div className="relative flex items-center justify-center overflow-hidden md:w-24 md:h-24 w-20 h-20 rounded-t-2xl xs:mx-6 mx-3 mt-4">
          <Image className="md:w-24 w-20 md:h-24 h-20 object-cover overflow-hidden hover:scale-125 transition-all duration-300" src={url} width={100} height={100} alt="" />
        </div>

        <div className='text-center py-4'>
          <span className="font-bold xs:text-2xl text-lg">
            {name}
          </span>
        </div>

      </div>

    </Link>);



}