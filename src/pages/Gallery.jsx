import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, Maximize2 } from "lucide-react";
import dummyData from "../data/dummyData.json";

const Gallery = () => {
    const { gallery } = dummyData;
    const categories = ["All", ...new Set(gallery.map(g => g.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredGallery = activeCategory === "All"
        ? gallery
        : gallery.filter(g => g.category === activeCategory);

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Our Masterpieces</span>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white">Visual Gallery</h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-light">
                        Take a look at some of our best grooming work and client transformations.
                    </p>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-primary border-primary text-secondary"
                                    : "bg-white/5 border-white/10 text-white/60 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-like Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredGallery.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative group overflow-hidden rounded-2xl border border-white/10 break-inside-avoid"
                            >
                                <img
                                    src={img.url}
                                    alt={img.category}
                                    className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <span className="text-primary text-[10px] uppercase font-bold tracking-[0.3em] mb-2">{img.category}</span>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white font-bold">Signature Style</h3>
                                        <button className="p-2 bg-primary/20 rounded-full text-primary border border-primary/30">
                                            <Maximize2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Gallery;
