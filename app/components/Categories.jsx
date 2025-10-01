import CategoriesBtn from "./CategoriesBtn";
import { useState, useEffect, useRef } from "react";
const btnDetails = [
  { href: "", imgSrc: "/assets/categories/ArtsIcon.webp" },
  { href: "", imgSrc: "/assets/categories/MusicIcon.webp" },
  { href: "", imgSrc: "/assets/categories/MiscIcon.webp" },
  { href: "", imgSrc: "/assets/categories/LitIcon.webp" },
  { href: "", imgSrc: "/assets/categories/MediaIcon.webp" },
  { href: "", imgSrc: "/assets/categories/DramaIcon.webp" },
];

function Categories() {
  const [inView, setInView] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: [0.1, 1] }
    );
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    return () => {
      if (categoryRef.current) observer.unobserve(categoryRef.current);
    };
  }, []);
  return (
    <article
      ref={categoryRef}
      className="z-10 relative bg-gradient-to-br from-[#232323]/80 to-[#181818]/80 backdrop-blur py-15 sm:py-14 px-6 lg:px-10 border-t border-white/20"
    >
      <h2
        className={`Headings text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg transition-all duration-700 ease-out transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        Categories
      </h2>
      <div
        className={`w-16 h-1 bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] rounded-full mb-4 mx-auto transition-all duration-700 delay-200 ease-in-out ${inView ? "scale-x-100 opacity-100 translate-y-0" : "scale-x-0 opacity-0 translate-y-4"}`}
      ></div>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 my-15 justify-center items-center justify-items-center mx-auto max-w-7xl ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {btnDetails.map((btn, index) => (
          <CategoriesBtn key={index} href={btn.href} imgSrc={btn.imgSrc} />
        ))}
      </div>
    </article>
  );
}

export default Categories;
