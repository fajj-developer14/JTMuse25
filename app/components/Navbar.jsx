import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router";
import NavbarIcon from "./NavbarIcon";
import GlitchText from "./GlitchText";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarRef = useRef(null);
  const links = [
    { name: "home", path: "/" },
    { name: "info", path: "/info" },
    { name: "categories", path: "/categories" },
    { name: "register", path: "/register" },
    { name: "contact", path: "contact" },
  ];

  useEffect(() => {
    const handleClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed right-0 left-0 px-4 py-3 z-51 border-b border-white/10 text-slate-50"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-49" />

      <div className="z-50 relative flex justify-between items-center max-w-7xl mx-auto flex-wrap sm:flex-nowrap sm:justify-between">
        <div className="flex items-center">
          <h2 className="text-2xl">
            MUSE
            <span className="text-xs text-yellow-500 animate-pulse inline-block ml-1.5">
              '25
            </span>
          </h2>
          <div className="inline-block w-16 h-px ml-2 bg-gradient-to-r from-yellow-500 to-transparent" />
        </div>

        <NavbarIcon isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <ul
          id="nav-list"
          className={`w-screen sm:w-fit text-center text-sm md:text-base uppercase text-slate-300 flex flex-col sm:flex-row sm:gap-x-3 sm:justify-end items-center transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? "opacity-100 max-h-[300px]" : "max-sm:opacity-0 max-sm:max-h-0 delay-300"}`}
        >
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`not-last:border-b not-last:border-white/10 max-sm:not-last:mb-1 max-sm:not-last:pb-0.5 max-sm:w-full sm:border-none transition-all duration-300 ${!isExpanded ? "max-sm:-translate-y-full max-sm:opacity-0" : "translate-0 opacity-100 "}`}
              style={{
                transitionTimingFunction:
                  "transition-timing-function: cubic-bezier(0.750, -0.015, 0.565, 1.055)",
                transitionDelay: `${idx * 0.055}s`,
              }}
            >
              <NavLink
                data-text={link.name}
                id="nav-link"
                to={link.path}
                className="px-1 inline-block transition-transform duration-75 ease-in-out"
                className={({ isActive }) =>
                  isActive ? "text-white" : "hover:scale-105"
                }
              >
                {({ isActive }) =>
                  isActive ? (
                    <GlitchText text={link.name} slices={5} />
                  ) : (
                    link.name
                  )
                }
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
