import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import BookingForm from "../components/booking/BookingForm";
import dummyData from "../data/dummyData.json";

const Contact = () => {
    const { business } = dummyData;

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Join the Elite</span>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white">Book Appointment</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        Reserve your session at LOONIX. Experience grooming that blends tradition with modern excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        <div className="glass-card p-10 space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-playfair font-bold text-white border-b border-primary/20 pb-4">Our Location</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-6">
                                        <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Address</p>
                                            <p className="text-white text-sm leading-relaxed">{business.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Call Us</p>
                                            <a href={`tel:${business.phone}`} className="text-white text-lg font-bold hover:text-primary transition-colors">{business.phone}</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6">
                                        <div className="p-3 bg-primary/10 rounded-2xl text-primary border border-primary/20">
                                            <MessageSquare size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                                            <a
                                                href={`https://wa.me/${business.whatsapp.replace('+', '')}`}
                                                className="text-white text-lg font-bold hover:text-primary transition-colors"
                                            >
                                                Start Chat
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-4 border-t border-white/5">
                                <h3 className="text-2xl font-playfair font-bold text-white">Opening Hours</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-white/40 text-[10px] uppercase font-bold">Weekdays</p>
                                        <p className="text-white text-sm font-medium">10:00 - 20:30</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white/40 text-[10px] uppercase font-bold">Weekends</p>
                                        <p className="text-white text-sm font-medium">10:30 - 20:30</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <a href="#" className="flex-1 flex items-center justify-center space-x-2 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all text-white/60 hover:text-primary">
                                    <Instagram size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
                                </a>
                                <a href="#" className="flex-1 flex items-center justify-center space-x-2 py-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all text-white/60 hover:text-primary">
                                    <Facebook size={20} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="glass-card h-80 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-all pointer-events-none" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="bg-secondary-dark/80 backdrop-blur-md px-6 py-3 rounded-full border border-primary/30 text-primary font-bold text-xs uppercase tracking-[0.2em]">
                                    Interactive Map Placeholder
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop"
                                className="w-full h-full object-cover grayscale opacity-50"
                                alt="Map Preview"
                            />
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="glass-card p-10 md:p-14 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                            <h3 className="text-3xl font-playfair font-bold text-white mb-10 relative z-10">Select Your <span className="text-gold">Time & Service</span></h3>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
