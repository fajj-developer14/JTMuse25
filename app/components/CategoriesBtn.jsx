function CategoriesBtn({ href, imgSrc }) {
  return (
    <a
      href={href}
      className="inline-flex justify-center items-center animated-bg z-10 relative text-white cursor-pointer w-[100px] md:w-[125px] h-[100px] md:h-[125px] rounded-sm overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      style={{
        backgroundImage: 'url("/assets/categories/btnBg.webp")',
        backgroundSize: "400% 400%",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/10 z-9 backdrop-blur-[3px]" />
      <img className="z-10 relative scale-130" src={imgSrc} alt="" />
    </a>
  );
}
export default CategoriesBtn;
