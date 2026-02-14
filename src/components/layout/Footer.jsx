import React from "react";
import { Link } from "react-router-dom";
import { Scissors, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";
import dummyData from "../../data/dummyData.json";

const Footer = () => {
    const { business } = dummyData;

    return (
        <footer className="bg-secondary-dark border-t border-white/5 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center space-x-2">
                        <Scissors className="text-primary w-8 h-8" />
                        <div className="flex flex-col">
                            <span className="text-xl font-playfair font-bold text-white tracking-widest leading-none">LOONIX</span>
                            <span className="text-[10px] text-primary tracking-[0.2em] font-medium leading-none mt-1">UNISEX SALON</span>
                        </div>
                    </Link>
                    <p className="text-white/60 text-sm leading-relaxed">
                        {business.tagline}. Boutique grooming for the modern individual. Elevate your style at our Sant Nagar location.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                            <Instagram size={20} className="text-primary" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                            <Facebook size={20} className="text-primary" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                            <Twitter size={20} className="text-primary" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-playfair text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Home', 'Services', 'Academy', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-white/60 hover:text-primary transition-colors text-sm font-medium">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-playfair text-lg font-bold mb-6">Contact Info</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="text-primary mt-1 shrink-0" />
                            <span className="text-white/60 text-sm">{business.address}</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-primary shrink-0" />
                            <span className="text-white/60 text-sm">{business.phone}</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-primary shrink-0" />
                            <span className="text-white/60 text-sm">info@loonixsalon.com</span>
                        </li>
                    </ul>
                </div>

                {/* Booking */}
                <div>
                    <h4 className="text-white font-playfair text-lg font-bold mb-6">Opening Hours</h4>
                    <ul className="space-y-2 text-sm text-white/60">
                        <li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 - 20:30</span></li>
                        <li className="flex justify-between"><span>Saturday</span> <span>10:30 - 20:30</span></li>
                        <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 20:00</span></li>
                    </ul>
                    <Link to="/contact" className="btn-outline-gold !w-full mt-6 !text-xs">
                        Request Appointment
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] tracking-widest uppercase">
                <p>&copy; 2024 LOONIX UNISEX SALON. ALL RIGHTS RESERVED.</p>
                <p>DESIGNED BY SENIOR DEV TEAM</p>
            </div>
        </footer>
    );
};

export default Footer;
