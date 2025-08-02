import HeaderSkeleton from "@/components/common/headerSkeleton";
import FooterSkeleton from "@/components/common/footerSkeleton";
import NewsCardSkeleton from "@/components/common/newsCardSkeleton";

export default function NewsSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      <HeaderSkeleton />
      <main className="max-w-6xl mx-auto px-4 py-8 pt-20">
        <div className="text-center mb-8">
          <div className="h-8 w-48 bg-muted rounded mx-auto mb-2 animate-pulse"></div>
          <div className="h-4 w-36 bg-muted rounded mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mb-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-muted rounded animate-pulse"
            ></div>
          ))}
        </div>
      </main>
      <FooterSkeleton />
    </div>
  );
}
