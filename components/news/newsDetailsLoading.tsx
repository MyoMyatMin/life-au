import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";

export default function NewsDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      <HeaderSkeleton />
      <main className="max-w-4xl mx-auto px-4 py-8 pt-20">
        <div className="text-center mb-8">
          <div className="h-8 w-24 bg-muted rounded mx-auto animate-pulse"></div>
        </div>
        <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/60 dark:border-white/10 rounded-lg p-6 mb-8 shadow-lg">
          <div className="bg-muted h-64 rounded animate-pulse"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="h-6 w-36 bg-muted rounded mb-4 animate-pulse"></div>
          <div className="space-y-3 mb-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-muted rounded animate-pulse"
                style={{ width: `${Math.random() * 30 + 70}%` }}
              ></div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-8 bg-muted rounded animate-pulse"></div>
            <div className="h-6 w-20 bg-muted rounded animate-pulse"></div>
          </div>
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
}
