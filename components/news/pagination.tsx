import Link from "next/link";

function makeHref(n: number, q?: string, basePath: string = "/news") {
    const p = new URLSearchParams();
    p.set("page", String(n));
    if (q?.trim()) p.set("q", q.trim());
    const qs = p.toString();
    return `${basePath}${qs ? `?${qs}` : ""}`;
}

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       q,
                                       basePath = "/news",
                                       minVisiblePages = 3,
                                   }: {
    currentPage: number;
    totalPages: number;
    q?: string;
    basePath?: string;
    minVisiblePages?: number;
}) {
    // Always show at least N pages in the UI
    const pagesToShow = Math.max(totalPages || 1, minVisiblePages);

    const MAX = 5;
    const safeCurrent = Math.max(1, Math.min(currentPage, pagesToShow));
    const start = Math.max(1, safeCurrent - Math.floor(MAX / 2));
    const end = Math.min(pagesToShow, start + MAX - 1);
    const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <nav className="flex items-center gap-2 justify-center mt-8">
            <Link
                href={safeCurrent > 1 ? makeHref(safeCurrent - 1, q, basePath) : "#"}
                aria-disabled={safeCurrent === 1}
                className={`px-3 py-2 rounded border ${
                    safeCurrent === 1 ? "opacity-50 pointer-events-none" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
                Prev
            </Link>

            {pages.map((p) => {
                const active = p === safeCurrent;
                return (
                    <Link
                        key={p}
                        href={makeHref(p, q, basePath)}
                        className={`px-3 py-2 rounded border ${
                            active ? "bg-red-600 text-white border-red-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                        {p}
                    </Link>
                );
            })}

            <Link
                href={safeCurrent < pagesToShow ? makeHref(safeCurrent + 1, q, basePath) : "#"}
                aria-disabled={safeCurrent === pagesToShow}
                className={`px-3 py-2 rounded border ${
                    safeCurrent === pagesToShow ? "opacity-50 pointer-events-none" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
                Next
            </Link>
        </nav>
    );
}
