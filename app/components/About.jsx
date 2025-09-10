import Button from "./Button";
import { useNavigate } from "react-router-dom";



function About() {
  return (
    <div className="about-section mr-15 ml-15 px-10 bg-white/20 backdrop-blur-xs border border-white/20 rounded-xl p-6 shadow-lg text-[#f3f2ee]">
      <h2 className="text-center text-4xl font-bold mb-3">What is JT Muse?</h2>
      <p>
         Muse is the second iteration of LGS JT's flagship arts event,
         ready to reclaim its throne as one of the most thrilling olympiads in the circuit.
         The product of meticulous planning and painstaking care for perfection,
         Muse will be an opportunity for creative minds to express themselves through five mediums: Art, Literature, Music, Dramatics and Media.
         Muse aims to be more than just a competition, but rather an experience for students to realise the true extent of their passions..
      </p>
      <div className="flex justify-center mt-6">

      <Button className="" text="Categories" color="rgba(255, 183, 83, 0.527)" glowColor="rgba(0, 0, 0, 0.5)" />
      </div>
    </div>
  );
}

export default About;
