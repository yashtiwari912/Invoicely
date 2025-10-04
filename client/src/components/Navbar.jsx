import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
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

    const { user } = useUser();
    const { openSignIn } = useClerk();

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
                <a href="/" className="transition-transform hover:scale-105 flex items-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                        Invoicely
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
                    <a className="hover:text-teal-600 transition-colors duration-200 relative group" href="#features">
                        Features
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className="hover:text-teal-600 transition-colors duration-200 relative group" href="#testimonials">
                        Customers
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className="hover:text-teal-600 transition-colors duration-200 relative group" href="#pricing">
                        Pricing
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a className="hover:text-teal-600 transition-colors duration-200 relative group" href="#faq">
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                        <nav className="flex flex-col p-4 gap-1">
                            <a className="hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#features" onClick={() => setIsMenuOpen(false)}>
                                Features
                            </a>
                            <a className="hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                                Customers
                            </a>
                            <a className="hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#pricing" onClick={() => setIsMenuOpen(false)}>
                                Pricing
                            </a>
                            <a className="hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200 px-4 py-3 rounded-xl" href="#faq" onClick={() => setIsMenuOpen(false)}>
                                FAQ
                            </a>
                            <div className="border-t border-gray-200/50 mt-2 pt-3">
                                {user ? (
                                    <div className="flex justify-center">
                                        <UserButton afterSignOutUrl="/" />
                                    </div>
                                ) : (
                                    <button
                                        className="flex bg-teal-600 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-teal-700 transition-colors duration-200 justify-center"
                                        onClick={() => {
                                            openSignIn();
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        Get Started Free
                                    </button>
                                )}
                            </div>
                        </nav>
                    </div>
                )}

                <div className="flex items-center space-x-4">
                    <button className="size-8 flex items-center justify-center hover:bg-gray-100 transition-all duration-200 border border-slate-200 rounded-lg hover:shadow-md hover:scale-105">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
                                stroke="#353535" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Auth Button */}
                    {user ? (
                        <UserButton afterSignOutUrl="/" />
                    ) : (
                        <button
                            onClick={openSignIn}
                            className="hidden md:flex bg-gradient-to-r from-teal-600 to-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:scale-105 transform"
                        >
                            Get Started Free
                        </button>
                    )}

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

            <style>{`
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

export default Navbar;
