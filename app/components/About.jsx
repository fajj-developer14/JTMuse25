import Button from "./Button";


function About() {
  return (
    <div className="about-section lg:mr-15 lg:ml-15 lg:px-10 bg-white/20 backdrop-blur-xs border border-white/20 md:rounded-xl p-6 shadow-lg m-50vh">
      <h2 className="Headings">What is JT Muse?</h2>
      <p className="text-[#f7f6f4] mb-6 fade-in-up delay-900">
         Muse is the second iteration of LGS JT's flagship arts event,
         ready to reclaim its throne as one of the most thrilling olympiads in the circuit.
         The product of meticulous planning and painstaking care for perfection,
         Muse will be an opportunity for creative minds to express themselves through five mediums: Art, Literature, Music, Dramatics and Media.
         Muse aims to be more than just a competition, but rather an experience for students to realise the true extent of their passions..
      </p>
  <div className="flex justify-center fade-in-up delay-400">
        <Button className="" text="Categories" color="rgba(255, 183, 83, 0.527)" glowColor="rgba(0, 0, 0, 0.5)" />
      </div>
    </div>
  );
}

export default About;
