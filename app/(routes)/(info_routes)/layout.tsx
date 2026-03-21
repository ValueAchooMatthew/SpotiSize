import Navbar from "@/app/_components/navbar/Navbar";
import Image from "next/image";


export default function InformationalPagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
    {children}
    </section>
  )
    
}