import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
    <div>
      <Navbar />
      <Hero />;
    </div>
  );
}
