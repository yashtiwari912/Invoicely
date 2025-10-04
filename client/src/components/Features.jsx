export default function Features() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div id="features" className="max-w-5xl mx-auto px-4 md:px-0 py-20">
                <h1 className="text-3xl font-semibold text-center mx-auto">Everything you need to get paid</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">Create invoices, track expenses, and monitor cash flow — all in one place with Invoicely.</p>
                <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
                    <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-slate-200 shadow-sm gap-6 max-w-sm bg-white">
                        <div className="p-6 aspect-square bg-blue-50 rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 18.667V24.5m4.668-8.167V24.5m4.664-12.833V24.5m2.333-21L15.578 13.587a.584.584 0 0 1-.826 0l-3.84-3.84a.583.583 0 0 0-.825 0L2.332 17.5M4.668 21v3.5m4.664-8.167V24.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-800">Create Invoices Easily</h3>
                            <p className="text-sm text-slate-600">Generate branded, professional invoices in seconds and share with a click.</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-slate-200 shadow-sm gap-6 max-w-sm bg-white">
                        <div className="p-6 aspect-square bg-teal-50 rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 11.667A2.333 2.333 0 0 0 11.667 14c0 1.19-.117 2.929-.304 4.667m4.972-3.36c0 2.776 0 7.443-1.167 10.36m5.004-1.144c.14-.7.502-2.683.583-3.523M2.332 14a11.667 11.667 0 0 1 21-7m-21 11.667h.01m23.092 0c.233-2.333.152-6.246 0-7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.832 22.75C6.415 21 6.999 17.5 6.999 14a7 7 0 0 1 .396-2.333m2.695 13.999c.245-.77.525-1.54.665-2.333m-.255-15.4A7 7 0 0 1 21 14v2.333" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-800">Track Payments & Expenses</h3>
                            <p className="text-sm text-slate-600">See cash flow in real-time and never miss a payment again.</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-slate-200 shadow-sm gap-6 max-w-sm bg-white">
                        <div className="p-6 aspect-square bg-blue-50 rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.668 25.666h16.333a2.333 2.333 0 0 0 2.334-2.333V8.166L17.5 2.333H7a2.333 2.333 0 0 0-2.333 2.333v4.667" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.332 2.333V7a2.334 2.334 0 0 0 2.333 2.333h4.667m-21 8.167h11.667M10.5 21l3.5-3.5-3.5-3.5" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-800">Multi-Currency Support</h3>
                            <p className="text-sm text-slate-600">Bill clients globally with automatic currency formatting and exchange rates.</p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-slate-200 shadow-sm gap-6 max-w-sm bg-white">
                        <div className="p-6 aspect-square bg-slate-50 rounded-full">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 22h20M4 6h20M4 14h20" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-semibold text-slate-800">Analytics Dashboard</h3>
                            <p className="text-sm text-slate-600">Insights on revenue, outstanding payments, top clients, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};