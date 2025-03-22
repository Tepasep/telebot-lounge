
import React from 'react';
import { Star } from 'lucide-react';

interface StarDisplayProps {
  count: number;
  isLoading?: boolean;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ count, isLoading = false }) => {
  return (
    <div className="glass-card rounded-xl p-6 mb-6 text-center animate-slide-up delay-100">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-2 animate-pulse-star">
          <div className="absolute inset-0 bg-tg-accent opacity-20 blur-lg rounded-full"></div>
          <Star className="h-12 w-12 text-tg-accent" strokeWidth={1.5} />
        </div>
        
        <p className="text-tg-secondary text-sm mb-1">Your Stars</p>
        
        {isLoading ? (
          <div className="h-10 w-24 bg-tg-card animate-pulse rounded-md"></div>
        ) : (
          <h2 className="text-4xl font-bold">{count.toLocaleString()}</h2>
        )}
      </div>
    </div>
  );
};

export default StarDisplay;
