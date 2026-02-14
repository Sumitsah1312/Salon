import React from "react";
import { Star, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ServiceCard = ({ service }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card overflow-hidden group border border-white/5 hover:border-primary/30 transition-all duration-500"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        {service.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-primary font-bold">
                        <span className="text-sm mr-1">₹</span>
                        <span className="text-2xl">{service.price}</span>
                    </div>
                    <div className="flex items-center text-white/40 text-xs">
                        <Clock size={14} className="mr-1" />
                        <span>{service.duration}</span>
                    </div>
                </div>
                <Link
                    to="/contact"
                    className="w-full btn-outline-gold !text-xs !py-3 flex items-center justify-center space-x-2 group-hover:bg-primary group-hover:text-secondary"
                >
                    <span>Book Appointment</span>
                    <ChevronRight size={14} />
                </Link>
            </div>
        </motion.div>
    );
};

export const ReviewCard = ({ review }) => {
    return (
        <div className="glass-card p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 h-full">
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "text-primary fill-primary" : "text-white/20"}
                    />
                ))}
            </div>
            <p className="text-white/80 italic mb-6 leading-relaxed">"{review.comment}"</p>
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-secondary font-bold">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white text-sm font-bold">{review.name}</h4>
                    <span className="text-white/40 text-[10px] uppercase">Verified Customer</span>
                </div>
            </div>
        </div>
    );
};
