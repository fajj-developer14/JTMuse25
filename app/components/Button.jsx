import { useRef, useState } from "react";

const Button = ({
  text,
  glowColor = "#3b82f6",
  onClick,
  color = "#3b82f6",
  textColor = "#ffffff"
}) => {
  const btnRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [ripples, setRipples] = useState([]);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    btnRef.current.style.setProperty("--x", `0px`);
    btnRef.current.style.setProperty("--y", `0px`);
    setHovered(false);
  };

  const handleClick = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    onClick && onClick();

    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 500);
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative px-6 py-2 rounded-md text-white font-medium overflow-hidden transition duration-150 active:scale-95 border-2 border-white/20 backdrop-blur-md cursor-pointer"
      style={{
        background: `${color}`,
        color: `${textColor}`
      }}
    >
      <span
        className="absolute inset-0 pointer-events-none rounded-md border z-10 transition-opacity duration-300 ease-out"
        style={{
          borderColor: glowColor,
          borderWidth: "2px",
          opacity: hovered ? 1 : 0,
          maskImage: `radial-gradient(120px at var(--x, 0px) var(--y, 0px), white 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(120px at var(--x, 0px) var(--y, 0px), white 0%, transparent 70%)`,
          transition: "mask-position 0.05s linear, opacity 0.3s ease-out",
          boxShadow: hovered ? `0 0 10px ${glowColor}` : "none",
        }}
      />

      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 animate-ripple"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
            pointerEvents: "none",
            zIndex: 5,
          }}
        />
      ))}

      <span className="relative z-20 text-lg uppercase tracking-widest">
        {text}
      </span>
    </button>
  );
};

export default Button;