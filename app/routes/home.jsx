import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Sponsors from "@/components/Sponsors";
import Contact from "@/components/Contact";
import contacts from "@/ContactInfo";
import Data from "@/components/Data";
import { useState, useEffect, useRef } from "react";

const regiInfo = contacts.find((item) => item.category === "Registrations");

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
  const [inView, setInView] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.1, 1] }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-transparent">
      <section className="w-full max-w-5xl px-4">
        <Hero />
      </section>
      <section>
        <About id="about" />
        <div className="bg-gradient-to-br from-[#232323]/80 to-[#181818]/80 backdrop-blur py-17 sm:py-16 px-6 lg:px-10">
          <div ref={contactRef} className="max-w-[600px] mx-auto">
            <Data
              index={0}
              category={regiInfo.category}
              president={regiInfo.president}
              vicePresident={regiInfo.vicePresident}
              inView={inView}
            />
          </div>
        </div>
      </section>
      {/*
      <section className="w-full max-w-5xl px-4 mt-12">
        <Sponsors id="sponsors" />
      </section>
      */}
    </div>
  );
}
