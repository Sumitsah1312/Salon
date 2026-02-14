import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import dummyData from "../data/dummyData.json";

const Academy = () => {
    const { academy } = dummyData;

    return (
        <div className="pt-32 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-5 py-2 rounded-full"
                    >
                        <GraduationCap size={18} className="text-primary" />
                        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Loonix Training Academy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-playfair font-bold text-white"
                    >
                        Elevate Your <span className="text-gold italic">Skill</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Join Delhi's premier unisex salon academy. Professional training from industry experts to kickstart your career in grooming and styling.
                    </motion.p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {academy.map((course, idx) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden flex flex-col md:flex-row border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:hidden" />
                            </div>
                            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                                <div className="flex items-center space-x-2 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                                    <Award size={14} />
                                    <span>Certified Course</span>
                                </div>
                                <h2 className="text-3xl font-playfair font-bold text-white mb-4 leading-tight">{course.name}</h2>

                                <div className="flex items-center space-x-3 text-white/40 text-sm mb-8 pt-4 border-t border-white/5">
                                    <BookOpen size={16} className="text-primary" />
                                    <span>Duration: {course.duration}</span>
                                    <span className="mx-2">•</span>
                                    <span>{course.certification} Level</span>
                                </div>

                                <div className="space-y-4 mb-10">
                                    {course.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <CheckCircle size={16} className="text-primary" />
                                            <span className="text-white/70 text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="btn-gold !w-full flex items-center justify-center space-x-2 group">
                                    <span>Enroll Today</span>
                                    <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Academy Stats */}
                <div className="mt-32 p-12 md:p-24 glass-card border-none bg-hero-pattern relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                        <div className="space-y-4">
                            <GraduationCap size={40} className="text-primary mx-auto" />
                            <h3 className="text-4xl font-bold text-white">500+</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Students Graduated</p>
                        </div>
                        <div className="space-y-4">
                            <Award size={40} className="text-primary mx-auto" />
                            <h3 className="text-4xl font-bold text-white">100%</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Practical Training</p>
                        </div>
                        <div className="space-y-4">
                            <BookOpen size={40} className="text-primary mx-auto" />
                            <h3 className="text-4xl font-bold text-white">Expert</h3>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Industry Mentors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;
