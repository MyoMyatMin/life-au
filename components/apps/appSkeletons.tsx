import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";
import CardSkeleton from "@/components/common/cardSkeleton";

export default function AppsSkeleton() {
  return (
    <div className="min-h-screen bg-page-gradient">
      {/* Header Skeleton */}
      <HeaderSkeleton />

      {/* Page Header Skeleton */}
      <section className="w-full bg-header-gradient pt-16">
        <div className="max-w-4xl mx-auto text-center px-4 py-12">
          <div className="h-8 w-24 bg-white/20 dark:bg-white/10 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 w-64 bg-white/20 dark:bg-white/10 rounded mx-auto animate-pulse"></div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Form Skeleton */}
        <div className="flex justify-end mb-6">
          <div className="h-10 w-64 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
        </div>

        {/* Apps Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </main>

      {/* Footer Skeleton */}
      <FooterSkeleton />
    </div>
  );
}
