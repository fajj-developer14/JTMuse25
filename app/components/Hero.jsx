import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden hero-main-center"> {/*Adding overflow hidden here, Farjad please dont kill me, we can remove this if need be*/}  
      {/* Floating particles and other stuff */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>



      <div className="shimmer-dot shimmer-dot-1"></div>
      <div className="shimmer-dot shimmer-dot-2"></div>
      <div className="shimmer-dot shimmer-dot-3"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className="text-center z-20 mb-[-3rem] sm:mb-[-6rem] w-full"
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
            <div className="flex-1 min-w-[10vw] h-[2.5px] sm:h-[4px] bg-gradient-to-l from-transparent to-[#dfc797]"></div>
          </div>
        </div>

        <div
          className="relative z-10"
          style={{
            animation: "fadeIn 1s ease-out 1.2s both",
          }}
        >
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="h-[75vh] w-auto object-contain mb-[-4rem] mt-[-4rem]"
            style={{
              animation:
                "paintReveal 2.5s ease-in-out 1.5s both",
            }}
          />
        </div>

        <div
          className="mt-[-4rem] z-20"
          style={{
            animation: "fadeInUp 1.2s ease-out 2.2s both",
          }}
        >
          <h2 className="font-bold text-[#dfc797] text-center mt-[2rem] font-nexa-bold text-[clamp(1.5rem,7vw,2.5rem)] leading-tight">coming soon...</h2>
          {/*
          <Button
            text="REGISTER NOW"
            color="rgba(255, 215, 0, 0.25)"
            glowColor="#FFFFFF"
            textColor="#fff"
            onClick={() => navigate("/")}
          />
          */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
