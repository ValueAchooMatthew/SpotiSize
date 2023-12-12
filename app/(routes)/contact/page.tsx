import Image from "next/image";
import Card from "../../_components/card/card";
export default function Contact() {
  return (

    <>
      <Image className="absolute -bottom-0 -left-64 -z-20 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      <Image className="absolute -top-64 -right-80 -z-20 " width={1000} height={1000} src={"/img/Noise.svg"} alt="noise svg"></Image>
      <Image className="absolute bottom-24 left-16 w-96 h-80 -z-20 rotate-180" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>
      {/* Maybe insert more background images */}
      <div className="flex justify-center">
          <h1 className="text-center text-7xl font-bold text-fontBlue my-20">
            Contact Us
          </h1>
      </div>

      <div className="flex justify-center">
        <Card url="/img/dog.jpg" name="Matthew" link={"https://github.com/ValueAchooMatthew"}></Card>
        <Card url="/img/dog.jpg" name="Maxim" link={"https://github.com/ValueAchooMatthew"}></Card>
      </div>

      <div className="flex justify-center my-12">
        <Card url="/img/dog.jpg" name="Colin" link={"https://github.com/ValueAchooMatthew"}></Card>
        <div className="rounded-full bg-[#FC9601] h-36 w-36 z-10 mx-12 self-center"></div>   
        <Card url="/img/dog.jpg" name="Cristal" link={"https://github.com/ValueAchooMatthew"}></Card>
  
      </div>
      <div className="flex justify-center">

          <Card url="/img/dog.jpg" name="Nevin" link={"https://github.com/ValueAchooMatthew"}></Card>
          <Card url="/img/dog.jpg" name="Aaryan" link={"https://github.com/ValueAchooMatthew"}></Card>

      </div>

    
    </>

  );
}
