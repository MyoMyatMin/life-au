"use client";

import { useState, useMemo, useEffect } from "react";
import SimpleSearch from "../../components/common/searchBar";
import AppCard from "@/components/apps/appCard";
import PageHeader from "@/components/common/pageHeader";

interface App {
  id: number;
  name: string;
  short_description: string;
  thumbnail_image_url?: string;
  techStack?: string[];
  students?: string[];
  category_name?: string;
}

export default function AppsClient({ apps }: { apps: App[] }) {
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
    <div className="min-h-screen bg-page-gradient">
      <PageHeader
        title="Apps"
        description="Discover the latest applications available on our platform!"
      />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <SimpleSearch onSearch={setSearchQuery} />
        </div>

        {pagedApps.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pagedApps.map((app) => (
                <AppCard key={app.id || app.name} app={app} />
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
                  <span
                    key={`dots-${i}`}
                    className="px-2 text-sm text-gray-500"
                  >
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
    </div>
  );
}
