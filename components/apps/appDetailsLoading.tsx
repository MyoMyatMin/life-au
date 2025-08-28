import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";

export default function AppDetailSkeleton() {
  return (
    <div className="min-h-screen bg-page-gradient">
      {/* Header Skeleton */}
      <HeaderSkeleton />

      {/* TOP STRIP SKELETON */}
      <section className="w-full bg-header-gradient pt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6">
          <div className="h-20 w-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/20 dark:bg-white/10 rounded-lg animate-pulse"></div>
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-48 bg-white/20 dark:bg-white/10 rounded animate-pulse"></div>
              <div className="h-6 w-20 bg-white/20 dark:bg-white/10 rounded-full animate-pulse"></div>
            </div>
            <div className="h-4 w-64 bg-white/20 dark:bg-white/10 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <main className="max-w-6xl mx-auto px-4 py-8 pt-0">
        {/* Media section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr,240px] gap-6">
          {/* Highlight slider */}
          <div className="h-full flex flex-col justify-center rounded-xl bg-white/70 dark:bg-black/20 p-2 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
            <div className="bg-gray-300/60 dark:bg-gray-600/60 h-64 rounded animate-pulse"></div>
          </div>

          {/* Right column (thumbnails) */}
          <div className="grid grid-rows-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="relative md:h-36 w-full overflow-hidden rounded-lg bg-white/70 dark:bg-black/20 shadow ring-1 ring-black/5 dark:ring-white/10 backdrop-blur"
              >
                <div className="w-full h-full bg-gray-300/60 dark:bg-gray-600/60 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Info + Team */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr,280px]">
          <div className="rounded-xl p-4">
            <div className="h-5 w-40 bg-gray-300/60 dark:bg-gray-600/60 rounded mb-3 animate-pulse"></div>
            <div className="space-y-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-4">
            <div className="h-5 w-24 bg-gray-300/60 dark:bg-gray-600/60 rounded mb-3 animate-pulse"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 w-20 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
            </div>
            <div className="h-5 w-24 bg-gray-300/60 dark:bg-gray-600/60 rounded mb-3 animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-300/60 dark:bg-gray-600/60 rounded animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <FooterSkeleton />
    </div>
  );
}
