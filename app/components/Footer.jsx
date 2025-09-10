const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-30 bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="px-6 py-3">
                <div className="flex flex-col items-center text-center space-y-1">

                    <div className="flex items-center space-x-2 text-xs text-white/70">
                        <span>Copyright © 2025 LGS JT</span>
                        <span className="text-white/40">⚬</span>
                        <span>All Rights Reserved</span>
                    </div>
                    

                    <div className="flex flex-wrap items-center justify-center space-x-2 text-xs text-white/60">
                        <span>Made By:</span>
                        <a 
                            href="https://github.com/ARTariqDev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white/90 transition-colors duration-200 text-white/50 focus:outline-none"
                            style={{
                                textDecoration: 'none',
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 8px 2px #FFD700'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            Abdur Rehman Tariq
                        </a>
                        <span className="text-white/30">⚬</span>
                        <a 
                            href="https://github.com/fajj-developer14" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white/90 transition-colors duration-200 text-white/50 focus:outline-none"
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
                            href="https://github.com/Abdul-Wasiq-Khan" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white/90 transition-colors duration-200 text-white/50 focus:outline-none"
                            style={{
                                textDecoration: 'none',
                                transition: 'box-shadow 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 8px 2px #FFD700'}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
                        >
                            Abdul Wasiq Khan
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
