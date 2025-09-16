import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main id="hero-section" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden hero-main-center hero-section"> {/*Adding overflow hidden here, Farjad please dont kill me, we can remove this if need be*/}
      {/* Floating particles and other stuff */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>



      <div className="shimmer-dot shimmer-dot-1"></div>
      <div className="shimmer-dot shimmer-dot-2"></div>
      <div className="shimmer-dot shimmer-dot-3"></div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 w-full min-h-0 hero-flex-vertical">
  <div className="flex flex-col items-center justify-center flex-1 w-full min-h-0 gap-0 sm:gap-0 desktop-no-gap" style={{gap: 0}}>
          {/* Topline */}
          <div
            className="text-center z-20 w-full"
            style={{
              animation: "fadeInUp 1.5s ease-out 0.3s both",
            }}
          >
            <div className="flex items-center justify-center w-full max-w-3xl mx-auto my-4 px-2 hero-lines-wrap">
              {/* Left line */}
              <div className="flex-1 min-w-[10vw] h-[2.5px] sm:h-[4px] bg-gradient-to-r from-transparent to-[#dfc797]"></div>

              {/* Text */}
              <span className="mx-2 text-[#dfc797] font-extrabold uppercase tracking-[0.18em] text-[clamp(0.8rem,4vw,1.1rem)] sm:text-base whitespace-nowrap hero-lines-text">
                JT ARTS COUNCIL PRESENTS
              </span>

              {/* Right line */}
              <div className="flex-1 min-w-[10vw] h-[2.5px] sm:h-[4px] bg-gradient-to-l from-transparent to-[#dfc797]" />
            </div>
          </div>

          {/* Logo */}
          <div
            className="relative z-10 flex items-center justify-center w-full"
            style={{
              animation: "fadeIn 1s ease-out 1.2s both",
            }}
          >
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="max-h-[40vh] sm:max-h-[60vh] w-auto object-contain"
              style={{
                animation: "paintReveal 2.5s ease-in-out 1.5s both",
              }}
            />
          </div>

          {/* Coming soon */}
          <div
            className="z-20 flex items-center justify-center w-full"
            style={{
              animation: "fadeInUp 1.2s ease-out 2.2s both",
            }}
          >
            <h2 className="font-bold text-[#dfc797] text-center font-nexa-bold text-[clamp(1.5rem,7vw,2.5rem)] leading-tight mt-0 desktop-no-mt" style={{marginTop: 0}}>coming soon...</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
