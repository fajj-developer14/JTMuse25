import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Floating particles and other stuff */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
      <div className="particle particle-5"></div>

      <div className="floating-accent floating-accent-1"></div>
      <div className="floating-accent floating-accent-2"></div>

      <div className="shimmer-dot shimmer-dot-1"></div>
      <div className="shimmer-dot shimmer-dot-2"></div>
      <div className="shimmer-dot shimmer-dot-3"></div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className="text-center z-20 mb-[-3rem] sm:mb-[-6rem]"
          style={{
            animation: "fadeInUp 1.5s ease-out 0.3s both",
          }}
        >
          <img 
            src="/assets/images/top_line.png" 
            alt="Top Decorative Line" 
            className="w-auto  h-auto mt-[-2rem] sm:mt-[-6rem] mx-auto"
          />
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
          <h2 className="font-bold text-[#dfc797] text-4xl text-center mt-[2rem]">coming soon...</h2>
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
