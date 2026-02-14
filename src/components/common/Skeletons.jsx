import React from "react";

export const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-white/5 rounded-xl ${className}`} />
);

export const ServiceCardSkeleton = () => (
    <div className="glass-card overflow-hidden border border-white/5 p-0">
        <Skeleton className="h-64 rounded-none" />
        <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between items-center pt-4">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-12 w-full mt-4" />
        </div>
    </div>
);

export const ReviewCardSkeleton = () => (
    <div className="glass-card p-8 border border-white/5">
        <div className="flex space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-4 w-4 rounded-full" />)}
        </div>
        <div className="space-y-2 mb-6">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
            </div>
        </div>
    </div>
);
