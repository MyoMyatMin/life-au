"use client";

import { useState, useMemo } from "react";
import SimpleSearch from "../../components/common/searchBar";
import AppCard from "../../components/apps/appCard";

export default function AppsClient({ apps }: { apps: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    if (!searchQuery.trim()) return apps;
    return apps.filter(app =>
      app.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [apps, searchQuery]);

  return (
    <section className="relative">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Apps
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            This will show the apps on life.au
          </p>
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
        {filteredApps.length > 0 ? (
          <div
            className="
            grid gap-5 sm:gap-6
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            auto-rows-fr
          "
          >
            {filteredApps.map((app) => (
              <div
                key={app.id ?? app.name}
                className="h-full transform transition-transform duration-200 hover:-translate-y-1"
              >
                <AppCard app={app} />
              </div>
            ))}
          </div>
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