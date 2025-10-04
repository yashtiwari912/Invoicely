import React from "react";
const Faq = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "Can I create branded invoices?",
            answer: "Yes. Upload your logo, choose brand colors, and customize templates to match your business in seconds.",
        },
        {
            question: "Does Invoicely support multiple currencies?",
            answer: "Absolutely. Bill clients globally and display amounts in their local currency with automatic formatting.",
        },
        {
            question: "How do I track expenses and payments?",
            answer: "Add expenses manually or import them. Payments are tracked automatically when clients pay online.",
        },
        {
            question: "Is there a free plan?",
            answer: "Yes. Start free with core invoicing features and upgrade anytime as your business grows.",
        },
    ];
    return (
        <>
            <style>{`
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="max-w-5xl mx-auto px-4 md:px-0 py-20" id="faq">
                <div className="max-w-xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
                    <p className="text-teal-600 text-sm font-medium">FAQs</p>
                    <h1 className="text-3xl font-semibold text-center">Questions about invoicing?</h1>
                    <p className="text-sm text-slate-500 mt-2 pb-8 text-center">
                        Everything you need to know about using Invoicely for invoices, billing, and expense tracking.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"} text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md`}>
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Faq;