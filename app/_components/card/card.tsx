import Image from "next/image"
import Link from "next/link"
import { UrlObject } from "url"
import { PagesRouteModuleOptions } from "next/dist/server/future/route-modules/pages/module.compiled";

export default function Card({url, name, link}: {url:string, name:string, link:string}){

    return (
    <Link className = "z-50 mx-8" href={{pathname: link}}>

      <div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-0.5 rounded-b-md mx-auto shadow-xl hover:-translate-y-4 hover:z-50 transition-all duration-200 hover:cursor-pointer">
        <div className="relative flex items-center justify-center overflow-hidden w-24 h-24 rounded-t-2xl mx-6 mt-4">
          <Image className = "w-32 h-32 object-cover overflow-hidden hover:scale-125 transition-all duration-300" src={url} width={100} height={100} alt="" />
        </div>

        <div className='text-center py-4'>
          <span className="font-bold text-2xl">
            {name}
          </span>
        </div>

      </div>
    
  </Link>)

  

}