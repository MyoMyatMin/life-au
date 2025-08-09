"use client";

import { useState, useMemo } from "react";
import SimpleSearch from "../../components/common/searchBar";

export default function AppsClient({ apps }: { apps: any[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    if (!searchQuery.trim()) return apps;
    return apps.filter(app =>
      app.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [apps, searchQuery]);

  return (
    <div className="p-6 mt-20">
          <h1>Apps Page</h1>
          <p>This will show the app on life.au</p>
          <hr />
          <SimpleSearch onSearch={setSearchQuery} />
          <ul>
            {filteredApps.map((app) => (
              <li key={app.id || app.name}>
                <h2>{app.name}</h2>
                <p>{app.short_description}</p>
                <p>Category: {app.category}</p>
                <p>FeaturedMedia : {app.thumbnail_image}</p>
                <hr />
              </li>
            ))}
          </ul>
        </div>
  );
}