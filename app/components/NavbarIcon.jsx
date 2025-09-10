function NavbarIcon({ isExpanded, setIsExpanded }) {
  return (
    <div
      className="cursor-pointer sm:hidden"
      onClick={() => setIsExpanded((prev) => !prev)}
    >
      <div
        className={`w-[28px] h-[3px] bg-slate-100 transition-all duration-300 origin-center ${isExpanded ? "translate-y-[8px] rotate-45" : ""}`}
      />
      <div
        className={`w-[28px] h-[3px] my-1.5 bg-slate-100 transition-all duration-300 origin-center ${isExpanded ? "opacity-0" : ""}`}
      />
      <div
        className={`w-[28px] h-[3px] bg-slate-100 transition-all duration-300 origin-center ${isExpanded ? "-translate-y-[10px] -rotate-45" : ""}`}
      />
    </div>
  );
}

export default NavbarIcon;
