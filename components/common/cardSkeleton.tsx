import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const CardSkeleton = () => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 max-h-[360px] h-full flex flex-col">
      {/* Image skeleton */}
      <div className="relative overflow-hidden rounded-t-lg w-full p-4">
        <div className="w-full h-full bg-gray-300/60 dark:bg-gray-600/60 animate-pulse min-h-[300px] rounded" />
        {/* Badge skeleton */}
        <div className="absolute top-4 left-4">
          <div className="h-6 w-16 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-3 flex-shrink-0">
          {/* Title skeleton */}
          <div className="h-6 w-3/4 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse mb-3" />
          {/* Description skeleton */}
          <div className="space-y-2 h-12 overflow-hidden">
            <div className="h-4 w-full bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse" />
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex-shrink-0"></CardContent>
      </div>
    </Card>
  );
};

export default CardSkeleton;
