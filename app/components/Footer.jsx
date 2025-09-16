import { useEffect } from "react";
const Footer = () => {
    // Show footer on scroll up (mobile only)
    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth > 640) return;
        let lastScroll = window.scrollY;
        const footer = document.querySelector('.footer-reveal-mobile');
        const onScroll = () => {
            if (!footer) return;
            if (window.scrollY < lastScroll || window.scrollY < 10) {
                footer.classList.add('show');
            } else {
                footer.classList.remove('show');
            }
            lastScroll = window.scrollY;
        };
        window.addEventListener('scroll', onScroll);
        // Show on load if at top
        if (footer && window.scrollY < 10) footer.classList.add('show');
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <footer className="footer-reveal-mobile fixed bottom-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-2 sm:px-6 sm:py-3">
                <div className="flex flex-col items-center text-center space-y-1">
                    <div className="flex items-center space-x-1 text-[10px] sm:text-xs footer-mobile-text font-nexa-bold text-[#dfc797]/70">
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
