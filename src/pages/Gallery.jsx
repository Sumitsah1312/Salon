import React, { useState } from "react";
import GalleryGrid from "../components/common/GalleryGrid";
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

                <GalleryGrid items={filteredGallery} />
            </div>
        </div>
    );
};

export default Gallery;
