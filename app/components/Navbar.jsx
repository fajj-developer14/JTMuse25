import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router";
import NavbarIcon from "./NavbarIcon";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navbarRef = useRef(null);
  const [tabStyles, setTabStyles] = useState({}); //to keep in track of the link position and width that is active
  const navlinksRef = useRef([]);
  const location = useLocation();

  const links = [
    { name: "home", path: "/" },
    { name: "info", path: "/info" },
    { name: "categories", path: "/categories" },
    { name: "register", path: "/register" },
    { name: "contact", path: "contact" },
  ];

  const handleActive = (index) => {
    if (navlinksRef.current[index]) {
      const el = navlinksRef.current[index];
      setTabStyles({
        left: el.offsetLeft || 210 + "px",
        width: el.offsetWidth + "px",
      });
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    const activeIndex = navlinksRef.current.findIndex(
      (el) => el.getAttribute("href") === location.pathname
    );
    handleActive(activeIndex);
    if (activeIndex !== -1) {
      window.addEventListener("resize", () => handleActive(activeIndex));
    }
    return () => {
      if (activeIndex !== -1) {
        window.removeEventListener("resize", () => handleActive(activeIndex));
      }
    };
  }, [location]);

  return (
    <nav
      ref={navbarRef}
      className="fixed right-0 left-0 px-4 py-3 z-51 border-b border-white/10 text-slate-50 mx-2 mt-2 md:mt-2.5 rounded-xl"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-49 rounded-xl" />

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
          className={`w-screen sm:w-fit text-center text-sm md:text-base uppercase flex flex-col sm:flex-row sm:justify-end items-center transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? "opacity-100 max-h-[300px]" : "max-sm:opacity-0 max-sm:max-h-0 delay-300"}`}
        >
          <div
            className="sm:absolute top-0 bottom-0 sm:bg-yellow-400/25 backdrop-blur-sm transition-all duration-300 rounded-xl hidden sm:inline-block"
            style={{ left: tabStyles.left, width: tabStyles.width }}
          />
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
                ref={(el) => (navlinksRef.current[idx] = el)}
                id="navlink"
                to={link.path}
                onClick={() => handleActive(idx)}
                className={({ isActive }) => [
                  isActive ? "text-white " : " text-slate-300 hover:scale-105 ", //added space beacuse function joins the array using ,
                  " relative px-3 md:px-4 rounded-xl sm:py-2 inline-block transition-all duration-75 ease-in-out",
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
