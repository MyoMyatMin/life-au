import {
    getNewsPaginated,
    WordPressAPIError,
} from "@/lib/wordpress";

import NewsCard from "@/components/home/news/newsCard";
import SearchForm from "@/components/news/searchForm";
import Pagination from "@/components/news/pagination";

async function fetchNewsSafely(page: number, perPage: number, q: string) {
    try {
        return await getNewsPaginated(page, perPage, { search: q });
    } catch (e: any) {
        if (e instanceof WordPressAPIError && e.status === 400) {
            const fallback = await getNewsPaginated(1, perPage, { search: q });
            return { ...fallback, data: [], outOfRange: true as const };
        }
        throw e;
    }
}

export default async function NewsPage({
                                           searchParams,
                                       }: { searchParams?: { q?: string; page?: string } }) {
    const q = searchParams?.q ?? "";
    const page = Number(searchParams?.page ?? 1);
    const perPage = 6;

    const { data, headers, outOfRange } = await fetchNewsSafely(page, perPage, q);

    const showEmpty =
        outOfRange || data.length === 0;

    return (
        <div className="p-6 mt-20 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">News</h1>

            <SearchForm basePath="/news" initialQuery={q} className="mb-6" />

            {showEmpty ? (
                <div className="rounded border p-6 text-center">
                    {outOfRange ? (
                        <>
                            <p className="mb-1">
                                You’re looking at <b>page {page}</b>, but there aren’t that many pages yet.
                            </p>
                            <p className="text-sm opacity-70">
                                Try page 1 or refine your search.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="mb-1">No results{q ? ` for “${q}”` : ""}.</p>
                            <p className="text-sm opacity-70">Try a different keyword.</p>
                        </>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.map((item) => (
                        <NewsCard key={item.id} newsArticle={item} />
                    ))}
                </div>
            )}

            {/* Always show pagination (min 3 pages), even if totalPages === 1 */}
            <Pagination
                currentPage={page}
                totalPages={headers.totalPages}
                q={q}
                basePath="/news"
                minVisiblePages={3}
            />
        </div>
    );
}
