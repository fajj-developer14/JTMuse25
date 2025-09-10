import React, { useState, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import NavbarIcon from "./NavbarIcon";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarRef = useRef(null);
  const navlinksRef = useRef([]);
  const location = useLocation();

  const links = [
    { name: "home", path: "/" },
    { name: "info", path: "/info" },
    { name: "categories", path: "/categories" },
    { name: "register", path: "/register" },
    { name: "contact", path: "contact" },
  ];




  // Close navbar on outside click
  React.useEffect(() => {
    const handleClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);



  return (
    <nav
      ref={navbarRef}
  className="fixed top-0 left-1/2 transform -translate-x-1/2 w-fit max-w-full px-2 sm:px-4 py-2 sm:py-3 z-51 border-b border-white/10 text-slate-50 mt-2 md:mt-2.5 rounded-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-49 rounded-xl" />

  <div className="z-50 relative flex justify-between items-center mx-auto flex-wrap sm:flex-nowrap sm:justify-between gap-1 xs:gap-2 sm:gap-4">

        {/* MUSE'25 text and separator line, only on mobile cause it was causing issues on desktop*/}
        <div className="flex items-center sm:hidden">
          <h2 className="text-[13px] xs:text-sm whitespace-nowrap">
            MUSE
            <span className="text-[8px] xs:text-[10px] text-yellow-500 animate-pulse inline-block align-baseline ml-0.5">'25</span>
          </h2>
          <svg className="w-6 h-px ml-0 bg-gradient-to-r from-yellow-500 to-transparent" style={{ minWidth: '1.5rem' }} viewBox="0 0 24 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="24" height="1" rx="0.5" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="1" x2="24" y2="1" gradientUnits="userSpaceOnUse">
                <stop stopColor="#facc15" stopOpacity="1" />
                <stop offset="1" stopColor="#facc15" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="hidden">
          <NavbarIcon isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
        
        {/* Mobile Current Page Button */}
        <div
          className={`sm:hidden cursor-pointer flex items-center space-x-1 text-xs xs:text-sm sm:text-base rounded-xl px-2 xs:px-3 py-1 sm:py-1.5 transition-all duration-75 ${isExpanded ? 'shadow-inner' : ''} ${(() => {
            const active = links.find((l) => l.path === location.pathname);
            return isExpanded && active ? 'bg-yellow-400/30 font-bold text-white' : 'text-slate-300 font-semibold';
          })()} tracking-wide uppercase`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span>
            {(() => {
              const active = links.find(
                (l) => l.path === location.pathname
              );
              return active ? active.name : "Menu";
            })()}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <ul
          id="nav-list"
          className={`w-fit max-w-full text-center text-xs xs:text-sm md:text-base uppercase flex flex-col sm:flex-row items-center justify-center mx-auto transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? "opacity-100 max-h-[300px] mt-4" : "max-sm:opacity-0 max-sm:max-h-0 delay-300"}`}
        >

          {links.map((link, idx) => (
            <li
              key={idx}
              className={`not-last:border-b not-last:border-white/10 max-sm:not-last:mb-1 max-sm:not-last:pb-0.5 max-sm:w-full sm:border-none transition-all duration-300 ${!isExpanded ? "max-sm:-translate-y-4 max-sm:opacity-0" : "translate-y-0 opacity-100"}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.750, -0.015, 0.565, 1.055)",
                transitionDelay: `${idx * 0.055}s`,
              }}
            >
              <NavLink
                data-text={link.name}
                ref={(el) => (navlinksRef.current[idx] = el)}
                id="navlink"
                to={link.path}
                onClick={() => setIsExpanded(false)}
                className={({ isActive }) => [
                  isActive
                    ? "text-white font-bold bg-yellow-400/30 shadow-inner tab-active"
                    : "text-slate-300 hover:scale-105",
                  "relative px-1 xs:px-2 md:px-3 rounded-xl py-1 sm:py-1.5 inline-block transition-all duration-75 ease-in-out uppercase tracking-wide text-xs xs:text-sm md:text-base",
                ]}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
