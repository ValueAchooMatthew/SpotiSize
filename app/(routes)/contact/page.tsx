import Image from "next/image";
import Card from "../../_components/card/card";
export default function Contact() {
  return (

    <div className="overflow-hidden">
      <div className="overflow-hidden absolute hidden sm:inline-block top-72 -z-10 w-[40rem] h-[40rem]">
        <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      </div>
      <div className="overflow-hidden absolute -top-48 -z-10 right-12 w-[50rem] h-[50rem]">
        <Image className="w-full h-full" width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      </div>
      <Image className="absolute hidden semilarge:inline-block bottom-24 w-96 h-80 rotate-180" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>
      {/* Maybe insert more background images */}
      <div className="flex justify-center">
          <h1 className="text-center sm:text-7xl text-6xl font-bold text-fontBlue my-20 font-jost">
            Contact Us
          </h1>
      </div>

      <div className="flex justify-center">
        <Card url="https://avatars.githubusercontent.com/u/78985742?v=4" name="Matthew" link={"https://www.linkedin.com/in/matthewtfarah/"}></Card>
        <Card url="https://avatars.githubusercontent.com/u/39472802?v=4" name="Maxim" link={"https://github.com/Maxty99"}></Card>
      </div>

      <div className="flex justify-center md:my-12 sm:my-6 my-4">
        <Card url="https://avatars.githubusercontent.com/u/61240608?v=4" name="Colin" link={"https://github.com/colinchambachan"}></Card>
        <div className="rounded-full bg-[#FC9601] md:h-36 md:w-36 h-24 w-24 z-10 md:mx-12 sm:mx-6 mx-4 self-center"></div>   
        <Card url="https://avatars.githubusercontent.com/u/122488890?v=4" name="Cristal" link={"https://github.com/cristallu84"}></Card>
  
      </div>
      <div className="flex justify-center">

          <Card url="https://avatars.githubusercontent.com/u/64499892?v=4" name="Nevin" link={"https://github.com/nevinds"}></Card>
          <Card url="https://avatars.githubusercontent.com/u/86172867?v=4" name="Aaryan" link={"https://github.com/patel-aaryan"}></Card>

      </div>

    
    </div>

  );
}
