import { useState, useEffect, useRef } from "react";
import subCategoryData from "@/subCategoryData";

export async function loader({ params }) {}

function subCategory({ params }) {
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
  const { Category } = params;
  const CategoryData = subCategoryData.find(
    (item) => item.category === Category
  );
  if (!CategoryData) {
    return (
      <div className="pt-20 min-h-[100vh]">
        <h1
          className={`text-4xl sm:text-5xl pb-1 font-extrabold italic bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out `}
          style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
        >
          Not Found
        </h1>
      </div>
    );
  }
  const subCategories = CategoryData.subCategories;

  return (
    <article
      ref={categoryRef}
      className="py-10 min-h-[100dvh]  bg-gradient-to-br from-[#232323]/10 to-[#181818]/10 backdrop-blur border border-white/20 shadow-2xl"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#232323]/40 to-[#181818]/40 backdrop-blur border border-white/20" />

      <div className="sticky top-0 z-20 flex flex-row justify-center items-center gap-6 mb-12 sm:mb-13 "></div>
      <h1
        className={`text-4xl sm:text-5xl pb-1 font-extrabold italic bg-gradient-to-r from-[#dfc797] via-[#fff2d6] to-[#dfc797] bg-clip-text text-transparent mb-2 drop-shadow-lg tracking-tight text-center transition-all duration-700 ease-out  ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ fontFamily: "Montserrat, Inter, sans-serif" }}
      >
        {Category}
      </h1>
      <div className="text-center flex flex-col flex-wrap sm:justify-center sm:items-center gap-x-6 mt-10 sm:flex-row">
        {subCategories.map((subCat, index) => (
          <a
            target="_blank"
            href={subCat.path}
            className="inline-block sm:w-[40vw] min-w-fit m-4 p-4 bg-white/10 border border-[#dfc797]/20 rounded-2xl text-[#fff2d6] font-medium md:text-lg shadow-lg hover:scale-[1.02] hover:border-[#dfc797]/60 transition-all duration-300"
            key={index}
          >
            {subCat.name}
          </a>
        ))}
      </div>
    </article>
  );
}

export default subCategory;
