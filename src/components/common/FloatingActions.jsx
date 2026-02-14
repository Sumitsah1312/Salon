import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import dummyData from "../../data/dummyData.json";

export const FloatingWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${dummyData.business.whatsapp.replace('+', '')}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
            aria-label="WhatsApp"
        >
            <MessageCircle size={24} />
            <span className="absolute right-full mr-3 bg-white text-secondary-dark px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                Chat with us
            </span>
        </a>
    );
};

export const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-24 right-6 z-[60] bg-primary text-secondary p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};
