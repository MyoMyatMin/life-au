"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchForm({
                                       basePath = "/news",
                                       initialQuery = "",
                                       placeholder = "Search news…",
                                       className = "",
                                   }: {
    basePath?: string;
    initialQuery?: string;
    placeholder?: string;
    className?: string;
}) {
    const router = useRouter();
    const [q, setQ] = useState(initialQuery);
    useEffect(() => setQ(initialQuery || ""), [initialQuery]);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (q.trim()) params.set("q", q.trim());
        params.set("page", "1");
        router.push(`${basePath}?${params.toString()}`);
    };

    return (
        <form onSubmit={onSubmit} className={`flex gap-2 ${className}`}>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={placeholder}
                className="w-full md:w-80 rounded border px-3 py-2 bg-white/70 dark:bg-gray-800/60"
            />
            <button
                type="submit"
                className="rounded px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            >
                Search
            </button>
        </form>
    );
}
