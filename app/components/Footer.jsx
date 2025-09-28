import { useEffect } from "react";
const Footer = () => {
    // Always show footer on mobile
    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth > 640) return;
        const footer = document.querySelector('.footer-reveal-mobile');
        if (footer) footer.classList.add('show');
    }, []);
    return (
    <footer className="footer-reveal-mobile show fixed inset-x-0 bottom-0 z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 m-0 w-full h-auto pointer-events-auto ">
            <div className="px-4 py-2 sm:px-6 sm:py-3">
                <div className="flex flex-col items-center text-center space-y-1">
                    <div className="flex items-center space-x-1 text-[10px] sm:text-xs footer-mobile-text font-nexa-bold text-[#dfc797]/90">
                        <span>Copyright © 2025 LGS JT</span>
                        <span className="text-white/40">⚬</span>
                        <span>All Rights Reserved</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center space-x-1 text-[10px] sm:text-xs text-[#dfc797]/60 footer-mobile-text font-nexa-bold ">
                        <span>Made By:</span>
                        <a 
                            href="https://github.com/Abdul-Wasiq-Khan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white/90 transition-colors duration-200 font-nexa-bold text-[#dfc797]/50 focus:outline-none"
                            style={{
                                textDecoration: 'none',
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 8px 2px #FFD700'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            Abdul Wasiq Khan
                        </a>
                        <span className="text-white/30">⚬</span>
                        <a 
                            href="https://github.com/fajj-developer14" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white/90 transition-colors duration-200 text-[#dfc797]/50 font-nexa-bold focus:outline-none"
                            style={{
                                textDecoration: 'none',
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 8px 2px #FFD700'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            Syed Farjad Abbas
                        </a>
                        <span className="text-white/30">⚬</span>
                        <a 
                            href="https://github.com/ARTariqDev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white/90 transition-colors duration-200 text-[#dfc797]/50 font-nexa-bold focus:outline-none"
                            style={{
                                textDecoration: 'none',
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 8px 2px #FFD700'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            Abdur Rehman Tariq
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
