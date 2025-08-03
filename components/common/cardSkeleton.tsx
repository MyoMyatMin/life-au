import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const CardSkeleton = () => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 h-full flex flex-col">
      {/* Image skeleton */}
      <div className="relative overflow-hidden rounded-t-lg h-48 w-full">
        <div className="w-full h-full bg-muted animate-pulse" />
        {/* Badge skeleton */}
        <div className="absolute top-4 left-4">
          <div className="h-6 w-16 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-3 flex-shrink-0">
          {/* Title skeleton */}
          <div className="h-6 w-3/4 bg-muted rounded animate-pulse mb-3" />
          {/* Description skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
          </div>
        </CardHeader>

        {/* Spacer */}
        <div className="flex-grow"></div>

        <CardContent className="pt-0 flex-shrink-0">
          {/* Tech stack badges skeleton */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="h-5 w-12 bg-muted rounded animate-pulse" />
            <div className="h-5 w-16 bg-muted rounded animate-pulse" />
            <div className="h-5 w-14 bg-muted rounded animate-pulse" />
          </div>

          {/* Bottom info skeleton */}
          <div className="flex items-center">
            <div className="h-4 w-4 bg-muted rounded animate-pulse mr-2" />
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default CardSkeleton;
