import React, { useState, useEffect } from 'react';

const ModernHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-2">
            <header
                className={`flex items-center justify-between px-6 py-3 md:py-4 max-w-5xl rounded-full mx-auto w-full bg-white transition-all duration-300 ${scrolled
                    ? 'shadow-2xl shadow-black/20'
                    : 'shadow-lg shadow-black/10'
                    } hover:shadow-2xl hover:shadow-black/15 transform hover:-translate-y-1`}
                style={{
                    animation: scrolled ? 'shadowPulse 2s ease-in-out infinite' : 'none'
                }}
            >
                <a href="https://prebuiltui.com" className="transition-transform hover:scale-105">
                    <img
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
                        alt="PrebuiltUI Logo"
                        className="h-8"
                    />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-gray-900 text-sm font-normal">
                    <a className="hover:text-indigo-600 transition-colors duration-200 relative group" href="#features">
                        Features
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className="hover:text-indigo-600 transition-colors duration-200 relative group" href="#testimonials">
                        Testimonials
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className="hover:text-indigo-600 transition-colors duration-200 relative group" href="#pricing">
                        Pricing
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className="hover:text-indigo-600 transition-colors duration-200 relative group" href="#faqs">
                        Faqs
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                        <nav className="flex flex-col p-4 gap-1">
                            <a className="hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#" onClick={() => setIsMenuOpen(false)}>
                                Products
                            </a>
                            <a className="hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#" onClick={() => setIsMenuOpen(false)}>
                                Customer Stories
                            </a>
                            <a className="hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#" onClick={() => setIsMenuOpen(false)}>
                                Pricing
                            </a>
                            <a className="hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#" onClick={() => setIsMenuOpen(false)}>
                                Docs
                            </a>
                            <div className="border-t border-gray-200/50 mt-2 pt-3">
                                <a
                                    className="flex bg-indigo-600 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 justify-center"
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sign up
                                </a>
                            </div>
                        </nav>
                    </div>
                )}

                <div className="flex items-center space-x-4">
                    <button className="size-8 flex items-center justify-center hover:bg-gray-100 transition-all duration-200 border border-slate-300 rounded-md hover:shadow-md hover:scale-105">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
                                stroke="#353535" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <a className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg hover:scale-105 transform" href="#">
                        Sign up
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-100 p-1 rounded-md"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>

            <style jsx>{`
        @keyframes shadowPulse {
          0%, 100% {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
          }
          50% {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
        }
      `}</style>
        </div>
    );
};

export default ModernHeader;