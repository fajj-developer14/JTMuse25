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
        left: el.offsetLeft + "px",
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
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("click", handleClick);
      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const activeIndex = navlinksRef.current.findIndex(
      (el) => el.getAttribute("href") === location.pathname
    );
    handleActive(activeIndex);

    const resizeObserver = new ResizeObserver(() => {
      handleActive(activeIndex);
    });
    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [location]);

  return (
    <nav
      ref={navbarRef}
      className="fixed left-1/2 -translate-x-1/2 pl-4 pr-1.5 sm:px-4 py-3 z-51 border-b border-white/10 text-slate-50 mx-auto mt-2 md:mt-2.5 rounded-xl max-w-fit w-fit min-w-[220px]"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-49 rounded-xl" />

      <div className="z-50 relative flex-col justify-between items-center sm:flex-row">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center sm:hidden">
            <h2 className="text-lg font-medium whitespace-nowrap">
              MUSE
              <span className="text-[10px] text-yellow-500 animate-pulse inline-block ml-[2px]">
                '25
              </span>
            </h2>
            <div className="inline-block w-8 h-px ml-1 bg-gradient-to-r from-yellow-500 to-transparent" />
          </div>

          <NavbarIcon
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            label={
              location.pathname === "/"
                ? "home"
                : location.pathname.replace("/", "")
            }
          />
        </div>
        <ul
          id="nav-list"
          className={`w-full text-center text-sm md:text-base uppercase flex flex-col items-end sm:flex-row sm:justify-end transition-all duration-300 ease-in-out sm:transition-none overflow-hidden ${isExpanded ? "opacity-100 max-h-[300px]" : "max-sm:opacity-0 max-sm:max-h-0 delay-300"}`}
        >
          <div
            className="sm:absolute top-0 bottom-0 bg-yellow-400/25 backdrop-blur-sm transition-all duration-300 rounded-xl hidden sm:inline-block"
            style={{
              left: tabStyles.left,
              width: tabStyles.width,
            }}
          />
          {links.map((link, idx) => (
            <li
              key={idx}
              className={`max-sm:mt-1.5 max-sm:w-full sm:border-none transition-all sm:transition-none duration-300 ${!isExpanded ? "max-sm:-translate-y-full max-sm:opacity-0" : "translate-0 opacity-100 "}`}
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
                  isActive
                    ? "text-white bg-yellow-400/30 sm:bg-transparent "
                    : " text-slate-300 hover:scale-105 ", //added space beacuse function joins the array using ,
                  " relative px-3 py-1 md:px-4 rounded-xl sm:py-2 inline-block transition-all duration-75 ease-in-out pointer-events-none ", // disabled clicking for now
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
