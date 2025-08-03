export default function FooterSkeleton() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-red-900/90 dark:from-blue-950/95 dark:via-blue-900/85 dark:to-red-950/95 text-white backdrop-blur-md">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="h-8 w-32 bg-muted rounded animate-pulse mb-4" />
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
            </div>
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 bg-muted rounded-full animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-white/5">
            <div className="h-6 w-24 bg-muted rounded animate-pulse mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 w-32 bg-muted rounded animate-pulse"
                />
              ))}
            </div>
          </div>

          <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-white/5">
            <div className="h-6 w-24 bg-muted rounded animate-pulse mb-4" />
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-4 w-32 bg-muted rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-white/10 mt-8 py-8 text-center bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-lg">
          <div className="h-4 w-64 mx-auto bg-muted rounded animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
