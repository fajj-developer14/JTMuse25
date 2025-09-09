import { useState, useEffect } from "react";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className="fixed right-0 left-0 px-3 py-3 z-50 border-b border-white/10 text-slate-100">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-49" />
      <div className="z-50 relative flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl">
            MUSE
            <span className="text-xs text-yellow-500 animate-pulse">'25</span>
          </h2>
          <div className="inline-block w-16 h-px ml-2 bg-gradient-to-r from-yellow-500 to-transparent" />
        </div>

        <div
          className="cursor-pointer"
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
      </div>
    </nav>
  );
}

export default Navbar;
