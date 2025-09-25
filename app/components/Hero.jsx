import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "./Button";
import Navbar from "./Navbar";

const Hero = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-10-11T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="hero-section" className="relative flex flex-col items-center justify-center min-h-screen hero-main-center hero-section"> {/* Removed overflow-hidden */}
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
            <div className="flex items-center justify-center w-full max-w-4xl mx-auto my-4 px-2 hero-lines-wrap">
              {/* Left line */}
              <div className="flex-1 min-w-[8vw] h-[2.5px] sm:h-[4px] bg-gradient-to-r from-transparent to-[#dfc797]"></div>

              {/* Text */}
              <span className="mx-1 text-[.01rem] text-[#dfc797] font-extrabold uppercase tracking-[0.01em] text-[clamp(0.8rem,4vw,1.1rem)] sm:text-base whitespace-nowrap hero-lines-text">
                THE JT ARTS COUNCIL PRESENTS
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

          {/* Countdown Timer */}
          <div
            className="z-30 flex items-center justify-center w-full mb-6 mt-[-4rem]"
            style={{
              animation: "fadeInUp 1.2s ease-out 2s both",
            }}
          >
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              {/* Days */}
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
                  style={{ fontFamily: 'NexaBold, Arial, sans-serif' }}
                >
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
                  Days
                </div>
              </div>

              <div className="text-2xl sm:text-3xl text-[#dfc797] opacity-60">:</div>

              {/* Hours */}
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
                  style={{ fontFamily: 'NexaBold, Arial, sans-serif' }}
                >
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
                  Hours
                </div>
              </div>

              <div className="text-2xl sm:text-3xl text-[#dfc797] opacity-60">:</div>

              {/* Minutes */}
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
                  style={{ fontFamily: 'NexaBold, Arial, sans-serif' }}
                >
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
                  Minutes
                </div>
              </div>

              <div className="text-2xl sm:text-3xl text-[#dfc797] opacity-60">:</div>

              {/* Seconds */}
              <div className="text-center">
                <div 
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfc797] tabular-nums"
                  style={{ fontFamily: 'NexaBold, Arial, sans-serif' }}
                >
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-[#dfc797] opacity-80 uppercase tracking-widest mt-1">
                  Seconds
                </div>
              </div>
            </div>
          </div>

          {/* Navbar inside Hero for home page */}
          <div
            className="z-50 flex items-center justify-center w-full overflow-visible"
            style={{
              animation: "fadeInUp 1.2s ease-out 2.2s both",
            }}
          >
            <Navbar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;