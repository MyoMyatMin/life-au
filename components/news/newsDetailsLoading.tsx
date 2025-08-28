import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";

export default function NewsDetailSkeleton() {
  return (
    <div className="min-h-screen bg-page-gradient">
      <HeaderSkeleton />

      {/* Page Header Skeleton */}
      <section className="w-full bg-header-gradient pt-16">
        <div className="max-w-4xl mx-auto text-center px-4 py-12">
          <div className="h-8 w-24 bg-white/20 dark:bg-white/10 rounded mx-auto animate-pulse"></div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-8 pt-0">
        {/* Main Image Skeleton */}
        <div className="mt-8 bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-lg p-6 mb-8 shadow-lg">
          <div className="bg-gray-300/60 dark:bg-gray-600/60 h-64 rounded animate-pulse"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="h-6 w-36 bg-gray-300/60 dark:bg-gray-600/60 rounded mb-4 animate-pulse"></div>
          <div className="space-y-3 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"
                style={{ width: `${Math.random() * 30 + 70}%` }}
              ></div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-8 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
          </div>
        </div>
      </main>

      <FooterSkeleton />
    </div>
  );
}
