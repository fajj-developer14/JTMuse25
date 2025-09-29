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
    <div className="flex flex-col items-center w-full min-h-screen bg-transparent">
      <section className="w-full max-w-5xl px-4">
        <Hero />
      </section>
      <section>
        <About id="about" />
      </section>
      {/*
      <section className="w-full max-w-5xl px-4 mt-12">
        <Sponsors id="sponsors" />
      </section>
      */}
    </div>
  );
}
