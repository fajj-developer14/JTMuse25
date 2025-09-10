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
  {/* Navbar removed on all devices */}
  {/* <div className="fade-in-up delay-0 hidden md:block"><Navbar /></div> */}
      <div className="fade-in-up delay-100"><Hero /></div>
      {/* commented this for now will fix more later
      <div className="fade-in-up delay-200"><About id="about" /></div>
      <div className="fade-in-up delay-300"><Sponsors id="sponsors" /></div>
      <div className="fade-in-up delay-400"><h2 className="text-center text-xl font-bold mb-3">Contact Us</h2></div>
      <div className="fade-in-up delay-500"><Contact name="Hassan Amiruddin Ansari" email="contact@example.com" phone="+92 314 4133798" /></div>
      <div className="fade-in-up delay-600"><Contact name="Abubakar Farukh" email="contact2@example.com" phone="+92 332 4637107" /></div>
      <div className="fade-in-up delay-700"><Location id="location" /></div>
      <div className="fade-in-up delay-800"><Sites id="sites" /></div>
      */}
    </div>
  );
}
