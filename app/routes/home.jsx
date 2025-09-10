import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Sites from "@/components/Sites";

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
      <Navbar />
      <Hero />
      <About id="about" />
      <Sponsors id="sponsors" />
      <h2 className="text-center text-4xl font-bold mb-3 text-white">Contact Us</h2>
      <Contact name="Hassan Amiruddin Ansari" email="contact@example.com" phone="+92 314 4133798" />
      <Contact name="Abubakar Farukh" email="contact2@example.com" phone="+92 332 4637107" />
      <Location id="location" />
      <Sites id="sites" />

    </div>
  );
}
