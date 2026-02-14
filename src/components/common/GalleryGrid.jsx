import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

const GalleryGrid = ({ items }) => {
    return (
        <motion.div
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
            <AnimatePresence mode="popLayout">
                {items.map((img) => (
                    <motion.div
                        key={img.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative group overflow-hidden rounded-2xl border border-white/10 break-inside-avoid shadow-2xl"
                    >
                        <img
                            src={img.url}
                            alt={img.category}
                            className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                            <span className="text-primary text-[10px] uppercase font-bold tracking-[0.3em] mb-2 text-gold">{img.category}</span>
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
    );
};

export default GalleryGrid;
