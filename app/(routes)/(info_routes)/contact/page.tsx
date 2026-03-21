import Card from "@/app/_components/card/card";
export default function Contact() {

  return (

    <div className="flex flex-col">
      <div className="flex justify-center">
        <h1 className="sm:text-7xl text-6xl font-bold text-primary my-20 font-jost">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <Card url="https://avatars.githubusercontent.com/u/78985742" name="Matthew" link={"https://www.linkedin.com/in/matthewtfarah/"}></Card>
        <Card url="https://avatars.githubusercontent.com/u/39472802" name="Maxim" link={"https://github.com/Maxty99"}></Card>
      </div>
      <div className="flex flex-row justify-center md:my-12 sm:my-6 my-4">
        <Card url="https://avatars.githubusercontent.com/u/61240608" name="Colin" link={"https://github.com/colinchambachan"}></Card>
        <div className="rounded-full bg-accent md:h-36 md:w-36 h-24 w-24 z-10 md:mx-12 sm:mx-6 mx-4 self-center"></div>
        <Card url="https://avatars.githubusercontent.com/u/122488890" name="Cristal" link={"https://github.com/cristallu84"}></Card>
      </div>
      <div className="flex flex-row justify-center">
        <Card url="https://avatars.githubusercontent.com/u/64499892" name="Nevin" link={"https://github.com/nevinds"}></Card>
        <Card url="https://avatars.githubusercontent.com/u/86172867" name="Aaryan" link={"https://github.com/patel-aaryan"}></Card>
      </div>
    </div>

  );
}
