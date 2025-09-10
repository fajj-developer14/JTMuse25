import Button from "./Button";



function About() {
  return (
  <section className="about-section w-[100vw] relative left-1/2 right-1/2 -translate-x-1/2 px-4 sm:px-12 py-16 bg-gradient-to-br from-black/60 via-slate-900/60 to-yellow-900/30 border-y-2 border-l-4 border-r-4 border-yellow-400/40 rounded-2xl shadow-2xl backdrop-blur-md mt-10 mb-10 overflow-x-hidden">
  <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-yellow-400 drop-shadow-lg fade-in-up delay-0">
    What is <span className="text-white">JT Muse?</span>
  </h2>
  <p className="text-slate-100 text-lg sm:text-xl leading-relaxed text-center mb-6 fade-in-up delay-200">
        Muse is the second iteration of LGS JT's flagship arts event, ready to reclaim its throne as one of the most thrilling olympiads in the circuit.<br className="hidden sm:block" />
        The product of meticulous planning and painstaking care for perfection, Muse will be an opportunity for creative minds to express themselves through five mediums: <span className="text-yellow-300 font-semibold">Art, Literature, Music, Dramatics, and Media</span>.<br className="hidden sm:block" />
        Muse aims to be more than just a competition, but rather an experience for students to realise the true extent of their passions.
      </p>
  <div className="flex justify-center fade-in-up delay-400">
        <Button className="" text="Categories" color="rgba(255, 183, 83, 0.527)" glowColor="rgba(0, 0, 0, 0.5)" />
      </div>
    </section>
  );
}

export default About;
