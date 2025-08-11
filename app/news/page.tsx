import {
  getAllNews,
  getNewsPaginated,
  WordPressAPIError,
  WordPressResponse,
} from "@/lib/wordpress";
import PageHeader from "@/components/common/pageHeader";
import NewsCard from "@/components/home/news/newsCard";
import SearchForm from "@/components/common/searchForm";
import Pagination from "@/components/common/pagination";
import { NewsResponse } from "@/lib/wordpress.d";

async function fetchNewsSafely(page: number, perPage: number, q: string) {
  try {
    return await getNewsPaginated(page, perPage, { search: q });
  } catch (e: any) {
    if (e instanceof WordPressAPIError && e.status === 400) {
      const fallback = await getNewsPaginated(1, perPage, { search: q });
      return fallback;
    }
    throw e;
  }
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const q = resolvedSearchParams?.q ?? "";
  const page = Number(resolvedSearchParams?.page ?? 1);
  const perPage = 6;
  const newsResult = await fetchNewsSafely(page, perPage, q);
  const data = newsResult.data as NewsResponse[];
  const headers = newsResult.headers;

  return (
    <div className="min-h-screen bg-page-gradient">
      <PageHeader
        title="News"
        description="Stay updated with our latest news and updates!"
      />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <SearchForm basePath="/news" initialQuery={q} className="mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => (
            <NewsCard key={item.id} newsArticle={item} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalPages={headers.totalPages}
          q={q}
          basePath="/news"
          minVisiblePages={Math.ceil(data.length / perPage)}
        />
      </div>
    </div>
  );
}
