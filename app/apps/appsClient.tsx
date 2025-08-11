"use client";

import { useState, useMemo, useEffect } from "react";
import SimpleSearch from "../../components/common/searchBar";
import AppCard from "../../components/apps/appCard";

export default function AppsClient({ apps }: { apps: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 9; // tweak as you like (e.g., 6/9/12)

  // Filter
  const filteredApps = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return apps;
    return apps.filter((app) => app.name?.toLowerCase().includes(q));
  }, [apps, searchQuery]);

  // Reset to first page whenever results change (e.g., new search)
  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  // Pagination math
  const totalPages = Math.max(1, Math.ceil(filteredApps.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  const pagedApps = useMemo(
    () => filteredApps.slice(start, end),
    [filteredApps, start, end]
  );

  // Smooth scroll to top when page changes (helps on mobile)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  // Build compact page number list: [1, ..., k-1, k, k+1, ..., N]
  const pageNumbers = useMemo(() => {
    const nums: (number | string)[] = [];
    const add = (n: number | string) => nums.push(n);
    const N = totalPages;
    const k = currentPage;

    if (N <= 7) {
      for (let i = 1; i <= N; i++) add(i);
      return nums;
    }
    add(1);
    if (k > 3) add("…");
    const startRange = Math.max(2, k - 1);
    const endRange = Math.min(N - 1, k + 1);
    for (let i = startRange; i <= endRange; i++) add(i);
    if (k < N - 2) add("…");
    add(N);
    return nums;
  }, [currentPage, totalPages]);

  const gotoPage = (p: number) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <section className="relative pt-20 sm:pt-24 min-h-screen">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 justify-center">
        {/* Header */}
        <div className="mb-8 flex justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Apps
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Welcome to Our Apps
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-gray-800/60 backdrop-blur p-4 sm:p-5 shadow-sm">
          <div className="flex">
            <div className="ml-auto w-full sm:w-72">
              <SimpleSearch onSearch={setSearchQuery} />
            </div>
          </div>
        </div>

        {/* Grid */}
        {pagedApps.length > 0 ? (
          <>
            <div
              className="
                grid gap-5 sm:gap-6
                grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                auto-rows-fr
              "
            >
              {pagedApps.map((app) => (
                <div
                  key={app.id ?? app.name}
                  className="h-full transform transition-transform duration-200 hover:-translate-y-1"
                >
                  <AppCard app={app} />
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => gotoPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800"
                aria-label="Previous page"
              >
                Prev
              </button>

              {pageNumbers.map((n, i) =>
                typeof n === "number" ? (
                  <button
                    key={`${n}-${i}`}
                    type="button"
                    onClick={() => gotoPage(n)}
                    aria-current={n === currentPage ? "page" : undefined}
                    className={`px-3 py-2 rounded-lg text-sm border ${
                      n === currentPage
                        ? "bg-red-600 text-white border-red-600"
                        : "border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {n}
                  </button>
                ) : (
                  <span key={`dots-${i}`} className="px-2 text-sm text-gray-500">
                    {n}
                  </span>
                )
              )}

              <button
                type="button"
                onClick={() => gotoPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-sm disabled:opacity-50 hover:bg-gray-50 dark:hover:bg-gray-800"
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              No apps found. Try a different search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
