import React from "react";
import { Star, MessageSquareQuote, Check } from "lucide-react";
import { ReviewCard } from "../components/common/Cards";
import dummyData from "../data/dummyData.json";

const Reviews = () => {
    const { reviews, business } = dummyData;

    return (
        <div className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24 space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 px-5 py-2 rounded-full">
                        <Star size={18} className="text-primary fill-primary" />
                        <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Trusted by Thousands</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white">Client <span className="text-gold italic">Stories</span></h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-y border-white/5">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">{business.rating}</div>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-primary fill-primary" />
                                ))}
                            </div>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Google Rating</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10" />
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">{business.reviewsCount}</div>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Total Reviews</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-white/10" />
                        <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-1">99%</div>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                    {/* Add more mock reviews if needed */}
                    {[1, 2, 3].map((item) => (
                        <ReviewCard
                            key={`mock-${item}`}
                            review={{
                                id: `m${item}`,
                                name: "Happy Client",
                                rating: 5,
                                comment: "Excellent service and very professional staff. The premium feel of the salon is unmatched!"
                            }}
                        />
                    ))}
                </div>

                {/* Review CTA */}
                <div className="max-w-4xl mx-auto glass-card p-12 text-center space-y-8">
                    <MessageSquareQuote size={48} className="text-primary/40 mx-auto" />
                    <h3 className="text-3xl font-playfair font-bold text-white">Loved your experience?</h3>
                    <p className="text-white/60">Your feedback helps us maintain our elite standards and helps others choose the best grooming destination.</p>
                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold !px-12 !py-4"
                    >
                        Leave a Google Review
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
