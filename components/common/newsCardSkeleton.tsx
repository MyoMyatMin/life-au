import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const NewsCardSkeleton = () => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 flex flex-row overflow-hidden min-h-[280px]">
      {/* Image skeleton - left side */}
      <div className="relative overflow-hidden w-1/2 min-h-[280px]">
        <div className="w-full h-full bg-muted animate-pulse" />
        {/* Badge skeleton */}
        <div className="absolute top-3 left-3">
          <div className="h-5 w-16 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Content area - right side */}
      <CardHeader className="pb-4 flex-1 w-1/2 p-6">
        {/* Title skeleton */}
        <div className="h-6 w-full bg-muted rounded animate-pulse mb-3" />
        <div className="h-6 w-3/4 bg-muted rounded animate-pulse mb-3" />

        {/* Date skeleton */}
        <div className="flex items-center mb-3">
          <div className="h-4 w-4 bg-muted rounded animate-pulse mr-2" />
          <div className="h-4 w-32 bg-muted rounded animate-pulse" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
          <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
        </div>
      </CardHeader>
    </Card>
  );
};

export default NewsCardSkeleton;
