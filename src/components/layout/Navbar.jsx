import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "../../utils/cn";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Academy", path: "/academy" },
        { name: "Gallery", path: "/gallery" },
        { name: "Reviews", path: "/reviews" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
                isScrolled ? "bg-secondary-dark/90 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <Scissors className="text-primary w-8 h-8" />
                    <div className="flex flex-col">
                        <span className="text-xl font-playfair font-bold text-white tracking-widest leading-none">LOONIX</span>
                        <span className="text-[10px] text-primary tracking-[0.2em] font-medium leading-none mt-1">UNISEX SALON</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium hover:text-primary transition-colors",
                                pathname === link.path ? "text-primary" : "text-white/80"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-gold !px-5 !py-2 !text-sm">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 top-[72px] bg-secondary-dark z-40 transition-transform duration-300 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col p-8 space-y-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-2xl font-playfair",
                                pathname === link.path ? "text-primary" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn-gold !w-full text-center mt-4">
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
