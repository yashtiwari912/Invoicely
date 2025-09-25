import { useState } from "react";
import { FileText } from "lucide-react"; // Lucide React icon

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section className="flex flex-col items-center text-sm bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat">
            {/* Top Navbar */}
            <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-slate-800 text-sm">
                <div className="flex items-center gap-2">
                    <FileText className="w-8 h-8 text-indigo-600" />
                    <span className="text-2xl font-bold text-slate-900">Invoicely</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    <a href="/" className="hover:text-slate-500 transition">
                        Home
                    </a>
                    <a href="/products" className="hover:text-slate-500 transition">
                        Products
                    </a>
                    <a href="/stories" className="hover:text-slate-500 transition">
                        Stories
                    </a>
                    <a href="/pricing" className="hover:text-slate-500 transition">
                        Pricing
                    </a>
                </div>

                {/* Buttons */}
                <div className="hidden md:block space-x-3">
                    <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md">
                        Get started
                    </button>
                    <button className="hover:bg-slate-100 transition px-6 py-2 border border-indigo-600 rounded-md">
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden active:scale-90 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 5h16" />
                        <path d="M4 12h16" />
                        <path d="M4 19h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`fixed inset-0 z-[100] bg-white/60 text-slate-800 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/stories">Stories</a>
                <a href="/pricing">Pricing</a>
                <button
                    onClick={() => setMenuOpen(false)}
                    className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>

            {/* Hero Section */}
            <main className="flex flex-col items-center max-md:px-2">
                <h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[80px] font-semibold max-w-4xl text-slate-900 mt-32">
                    The fastest way to create and manage invoices.
                </h1>
                <p className="text-center text-base text-slate-700 max-w-lg mt-2">
                    Invoicely helps you generate, send, and track invoices easily — so
                    you can focus on growing your business.
                </p>

                <div className="flex items-center gap-4 mt-8">
                    <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 rounded-lg px-7 h-11">
                        Get started
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.166 10h11.667m0 0L9.999 4.165m5.834 5.833-5.834 5.834"
                                stroke="#fff"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <button className="border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-lg px-8 h-11">
                        Pricing
                    </button>
                </div>

                <img
                    src="/invoice-dashboard.webp"
                    className="w-full rounded-[15px] max-w-4xl mt-16"
                    alt="invoice dashboard showcase"
                />
            </main>
        </section>
    );
};

export default Home;
