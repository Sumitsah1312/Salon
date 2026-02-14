import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Search } from "lucide-react";
import { ServiceCard } from "../components/common/Cards";
import dummyData from "../data/dummyData.json";

const Services = () => {
    const { services } = dummyData;
    const categories = ["All", ...new Set(services.map(s => s.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredServices = activeCategory === "All"
        ? services
        : services.filter(s => s.category === activeCategory);

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Tailored to You</span>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white">Elite Services</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        Discover our range of premium grooming and luxury treatments designed for the modern individual.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-primary border-primary text-secondary shadow-lg shadow-primary/20"
                                    : "bg-white/5 border-white/10 text-white/60 hover:border-primary/50 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <ServiceCard service={service} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Custom Package CTA */}
                <div className="mt-24 p-12 glass-card border-primary/20 bg-hero-pattern flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-playfair font-bold text-white">Need a Custom Package?</h3>
                        <p className="text-white/60 max-w-md">Contact us for bespoke bridal, groom, or special event grooming packages tailored to your needs.</p>
                    </div>
                    <button className="btn-gold !px-12 !py-4 whitespace-nowrap">Discuss Package</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
