import React, { useState } from "react";
import { Calendar, Clock, User, Phone, Scissors, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BookingForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Mock submission
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
            >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border border-primary/30">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-white mb-4">Booking Confirmed!</h3>
                <p className="text-white/60 mb-8 max-w-sm mx-auto">
                    We've received your request. A specialist from LOONIX will contact you shortly to confirm the details.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="btn-gold px-12"
                >
                    Book Another
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60 font-medium ml-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60 font-medium ml-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <input
                            required
                            type="tel"
                            placeholder="+91 00000 00000"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/60 font-medium ml-1">Select Service</label>
                <div className="relative">
                    <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                    <select
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary appearance-none transition-colors"
                    >
                        <option className="bg-secondary-dark">Select a service</option>
                        <option className="bg-secondary-dark">Executive Haircut</option>
                        <option className="bg-secondary-dark">Beard Grooming</option>
                        <option className="bg-secondary-dark">Luxury Facial</option>
                        <option className="bg-secondary-dark">Hair Spa & Treatment</option>
                        <option className="bg-secondary-dark">Bridal/Groom Package</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60 font-medium ml-1">Preferred Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <input
                            required
                            type="date"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/60 font-medium ml-1">Preferred Time</label>
                    <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={18} />
                        <input
                            required
                            type="time"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                        />
                    </div>
                </div>
            </div>

            <button
                disabled={loading}
                type="submit"
                className="w-full btn-gold !py-5 shadow-xl shadow-primary/10 flex items-center justify-center space-x-3 text-lg"
            >
                {loading ? (
                    <div className="w-6 h-6 border-2 border-secondary border-t-transparent rounded-full animate-spin" />
                ) : (
                    <span>Confirm Appointment</span>
                )}
            </button>

            <p className="text-center text-white/40 text-[10px] uppercase tracking-tighter">
                BY BOOKING, YOU AGREE TO OUR TERMS AND CANCELLATION POLICY.
            </p>
        </form>
    );
};

export default BookingForm;
