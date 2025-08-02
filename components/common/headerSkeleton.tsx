export default function HeaderSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="h-8 w-32 bg-muted rounded animate-pulse" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-4 w-16 bg-muted rounded animate-pulse"
                />
              ))}
            </nav>
            <div className="h-8 w-8 bg-muted rounded animate-pulse" />
          </div>
          <div className="md:hidden h-8 w-8 bg-muted rounded animate-pulse" />
        </div>
      </div>
    </header>
  );
}
