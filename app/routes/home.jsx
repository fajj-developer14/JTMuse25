import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";



export function meta({}) {
  return [
    { title: "JT Muse'25" },
    {
      name: "description",
      content: "The third edition of Lgs Jt's Premier Art Olympiad",
    },
  ];
}

export default function Home() {
  return (
    <div className="mb-20">
      {/*<Navbar />*/}
      <Hero />
      <About id="about" />
      <Sponsors id="sponsors" />
      <Contact id="contact" />
      

    </div>
  );
}
