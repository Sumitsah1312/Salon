import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceCard, ReviewCard } from "../components/common/Cards";
import dummyData from "../data/dummyData.json";

const Home = () => {
    const { business, services, reviews } = dummyData;

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-hero-pattern">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2000&auto=format&fit=crop"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-5xl text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-full backdrop-blur-sm shadow-xl"
                    >
                        <Star size={16} className="text-primary fill-primary" />
                        <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                            {business.rating} Google Rated Salon
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-8xl font-playfair font-bold text-white leading-tight"
                    >
                        Where Style Meets <br />
                        <span className="text-gold">Perfection</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Experience premium grooming and world-class styling at LOONIX UNISEX SALON. From elite haircuts to professional academy training.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link to="/contact" className="btn-gold !px-12 !py-4 text-lg w-full sm:w-auto">
                            Book Appointment
                        </Link>
                        <Link to="/services" className="btn-outline-gold !px-12 !py-4 text-lg w-full sm:w-auto">
                            Explore Services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-secondary p-12 md:p-24 relative z-30 -mt-12 mx-6 rounded-3xl border border-white/5 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">4.8</h2>
                        <p className="text-primary text-xs uppercase tracking-widest font-bold">Google Rating</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">10K+</h2>
                        <p className="text-primary text-xs uppercase tracking-widest font-bold">Happy Clients</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">15+</h2>
                        <p className="text-primary text-xs uppercase tracking-widest font-bold">Expert Stylists</p>
                    </div>
                </div>
            </section>

            {/* Featured Services */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
                    <div className="space-y-4">
                        <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Premium Services</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair">Popular Choices</h2>
                    </div>
                    <Link to="/services" className="text-primary hover:text-white transition-colors flex items-center space-x-2 font-bold uppercase text-xs tracking-widest">
                        <span>View All Services</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-white/5 py-24 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4 text-center md:text-left">
                            <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Why Choose Us</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair leading-tight">Elite Grooming <br /> Redefined</h2>
                        </div>

                        <div className="space-y-8">
                            {[
                                { title: "Expert Stylists", desc: "Our team consists of certified professionals with years of industry experience.", icon: Star },
                                { title: "Premium Products", desc: "We use only high-end grooming products to ensure the best care for your hair and skin.", icon: ShieldCheck },
                                { title: "Luxury Ambiance", desc: "Enjoy a relaxing environment designed for your comfort and style journey.", icon: MapPin }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-6">
                                    <div className="bg-primary/20 p-4 rounded-2xl text-primary border border-primary/20">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                        <img
                            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop"
                            alt="Salon Experience"
                            className="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-24 px-6 bg-dark-gradient">
                <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
                    <span className="text-primary text-xs font-bold tracking-[0.5em] uppercase">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-playfair">What Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto glass-card p-12 md:p-24 text-center space-y-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

                    <h2 className="text-4xl md:text-7xl font-bold text-white font-playfair relative z-10">Ready to <span className="text-gold">Transform?</span></h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto relative z-10 leading-relaxed font-light">
                        Book your session today and join the elite community of styled individuals.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <Link to="/contact" className="btn-gold !px-16 !py-5 text-xl w-full sm:w-auto">
                            Book Appointment
                        </Link>
                        <a href={`tel:${business.phone}`} className="flex items-center space-x-3 text-white hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm">
                            <Phone size={20} className="text-primary" />
                            <span>{business.phone}</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
