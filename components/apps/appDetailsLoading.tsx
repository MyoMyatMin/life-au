import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";

export default function AppDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      {/* Header Skeleton */}
      <HeaderSkeleton />

      {/* Main Content Skeleton */}
      <main className="max-w-6xl mx-auto px-4 py-8 pt-20">
        {/* App Header Skeleton */}
        <div className="flex items-start gap-6 mb-8">
          <div className="bg-muted w-24 h-24 rounded animate-pulse"></div>
          <div className="flex-1">
            <div className="h-7 w-20 bg-muted rounded mb-2 animate-pulse"></div>
            <div className="h-4 w-48 bg-muted rounded mb-4 animate-pulse"></div>
            <div className="flex gap-2">
              <div className="h-8 w-20 bg-muted rounded animate-pulse"></div>
              <div className="h-8 w-16 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content Layout Skeleton */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {/* Main Image Skeleton */}
          <div className="col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-lg p-6 shadow-lg">
              <div className="bg-muted h-64 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Side Images Skeleton */}
          <div className="space-y-4">
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-lg p-4 shadow-lg">
              <div className="bg-muted h-20 rounded animate-pulse"></div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-lg p-4 shadow-lg">
              <div className="bg-muted h-20 rounded animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Description Section Skeleton */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="h-5 w-40 bg-muted rounded mb-3 animate-pulse"></div>
            <div className="space-y-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 bg-muted rounded animate-pulse"
                  style={{ width: `${Math.random() * 40 + 60}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div>
            <div className="h-5 w-24 bg-muted rounded mb-3 animate-pulse"></div>
            <div className="space-y-2 mb-6">
              <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
            </div>
            <div className="h-5 w-24 bg-muted rounded mb-3 animate-pulse"></div>
            <div className="h-4 w-16 bg-muted rounded animate-pulse"></div>
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <FooterSkeleton />
    </div>
  );
}
