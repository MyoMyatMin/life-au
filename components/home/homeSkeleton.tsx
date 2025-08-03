"use client";

import CardSkeleton from "@/components/common/cardSkeleton";
import NewsCardSkeleton from "@/components/common/newsCardSkeleton";
import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";

export default function HomeLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      {/* Header Skeleton */}
      <HeaderSkeleton />

      {/* Hero Section Skeleton */}
      <section className="relative h-[70vh] overflow-hidden pt-16">
        <div className="absolute inset-0 bg-muted animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-red-900/70 dark:from-blue-950/80 dark:via-blue-900/70 dark:to-red-950/80"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-white text-left md:text-center max-w-4xl mx-auto px-4">
            <div className="bg-white/15 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/30 dark:border-white/10 shadow-2xl">
              <div className="h-12 w-3/4 mx-auto bg-muted rounded animate-pulse mb-6" />
              <div className="h-6 w-1/2 mx-auto bg-muted rounded animate-pulse mb-8" />
              <div className="h-12 w-40 mx-auto bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100/90 via-blue-100/70 to-red-100/90 dark:from-gray-900/90 dark:via-blue-950/80 dark:to-red-950/90 backdrop-blur-sm transition-colors duration-300 border-b border-gray-200/50 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glass header container */}
          <div className="text-center mb-12 bg-white/70 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-200/60 dark:border-white/10 shadow-xl">
            <div className="h-8 w-64 mx-auto bg-muted rounded animate-pulse mb-4" />
            <div className="h-5 w-96 mx-auto bg-muted rounded animate-pulse" />
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardSkeleton key={i} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <div className="h-12 w-40 mx-auto bg-muted rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* News Section Skeleton */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100/90 via-blue-100/70 to-red-100/90 dark:from-gray-900/90 dark:via-blue-950/80 dark:to-red-950/90 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Glass header container */}
          <div className="text-center mb-12 bg-white/70 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-gray-200/60 dark:border-white/10 shadow-xl">
            <div className="h-8 w-48 mx-auto bg-muted rounded animate-pulse mb-4" />
            <div className="h-5 w-80 mx-auto bg-muted rounded animate-pulse" />
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>

          {/* Read More Button */}
          <div className="text-center">
            <div className="h-12 w-40 mx-auto bg-muted rounded animate-pulse" />
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <FooterSkeleton />
    </div>
  );
}
