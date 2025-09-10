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
          className="text-center mb-[-6rem] z-20"
          style={{
            animation: "fadeInUp 1.5s ease-out 0.3s both",
          }}
        >
          <h1
            className="text-4xl md:text-6xl font-light tracking-[0.3em] uppercase"
            style={{
              fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
              fontWeight: "300",
              letterSpacing: "0.3em",
              color: "#FFD700",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              animation: "paintReveal 2s ease-in-out 0.5s both",
            }}
          >
            LGS JT PRESENTS
          </h1>
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
            className="h-[80vh] w-auto object-contain"
            style={{
              animation:
                "paintReveal 2.5s ease-in-out 1.5s both, logoBreathe 4s ease-in-out 4s infinite",
            }}
          />
        </div>

        <div
          className="mt-[-4rem] z-20"
          style={{
            animation: "fadeInUp 1.2s ease-out 2.2s both",
          }}
        >
          <Button
            text="REGISTER NOW"
            color="rgba(255, 215, 0, 0.25)"
            glowColor="#FFFFFF"
            textColor="#fff"
            onClick={() => navigate("/")}
          />
          {/* redirecting to "/" for now, will change later */}
        </div>
      </div>
    </main>
  );
};

export default Hero;
