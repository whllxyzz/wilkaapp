
import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`bg-slate-100 animate-pulse rounded-2xl ${className}`}></div>
);

export const HomeSkeleton = () => (
  <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-48">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div className="lg:col-span-7 space-y-8">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-20 w-3/4" />
        <div className="flex space-x-4">
          <Skeleton className="h-14 w-40 rounded-full" />
          <Skeleton className="h-14 w-40 rounded-full" />
        </div>
      </div>
      <div className="lg:col-span-5">
        <Skeleton className="w-full aspect-[4/5] rounded-[4rem]" />
      </div>
    </div>
  </div>
);
