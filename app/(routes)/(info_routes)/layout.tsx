import Image from "next/image";


export default function InformationalPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        
        <Image className="absolute hidden md:inline-block bottom-32 left-16 w-80 h-80 z-10" width={1000} height={1000} src={"/img/saturn.svg"} alt="saturn image" ></Image>
        <Image className="absolute hidden 2xl:inline-block bottom-1/2 right-32 w-48 h-48 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute bottom-32 right-64 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute hidden xs:inline-block bottom-12 left-64 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute hidden xs:inline-block -top-32 right-1/2 w-28 h-32 -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute md:inline-block hiddentop-1/4 md:left-24 w-32 h-28 flip -z-10" width={1000} height={1000} src={"/img/Long cloud.svg"} alt="cloud"></Image>
        <Image className="absolute bottom-48 right-16 w-96 h-80 rotate-180 hidden md:inline-block" width={1000} height={1000} src={"/img/spaceman.png"} alt="spaceman"></Image>
    {children}
    </section>
  )
    
}