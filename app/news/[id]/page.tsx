import {
  getAllNews,
  getFeaturedMediaById,
  getNewsById,
  getNewsCategoryById,
} from "@/lib/wordpress";
import Image from "next/image";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const allNews = await getAllNews();
  return allNews.map((n) => ({ id: String(n.id) }));
}

function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso ?? "";
  }
}

export default async function NewsDetail({ params }: Props) {
  const id = (await params).id;

  const news = await getNewsById(Number(id));
  if (!news) {
    return (
      <div className="min-h-screen bg-page-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
            News not found
          </h1>
        </div>
      </div>
    );
  }

  const [thumb, category] = await Promise.all([
    news.thumbnail_image ? getFeaturedMediaById(news.thumbnail_image) : null,
    news.category ? getNewsCategoryById(news.category) : null,
  ]);

  const title = news.title || `Topic ${id}`;
  const dateStr = formatDate(news.date);
  const description =
    news.short_description || "— No short description provided —";

  return (
    <div className="min-h-screen bg-page-gradient text-zinc-900 dark:text-zinc-50">
      <header className="relative mt-auto border-t bg-header-gradient">
        <div className="mx-auto max-w-5xl px-6 h-48 flex items-center justify-center">
          <h1 className="relative text-center text-2xl md:text-3xl font-bold pt-10 text-white">
            {title}
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-10 pt-10">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {thumb?.source_url ? (
              <Image
                src={thumb.source_url}
                alt={title}
                width={600}
                height={800}
                className="rounded-md border object-cover"
                priority
              />
            ) : (
              <div className="h-96 w-full rounded-md border bg-white/60 dark:bg-white/10" />
            )}
            {dateStr && (
              <p className="mt-2 text-left text-xs text-zinc-500 dark:text-zinc-400">
                {dateStr}
              </p>
            )}
          </div>
        </div>

        <section className="mt-8 space-y-2">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide">
            Short Description
          </h2>
          <p className="mx-auto max-w-2xl text-justify leading-relaxed text-sm text-zinc-700 dark:text-zinc-300">
            {description}
          </p>
        </section>

        <section className="mt-8 flex items-center justify-center gap-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Tag:</span>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 bg-red-600/95 dark:bg-red-700/90 text-white backdrop-blur-sm border border-white/30 shadow-md">
            {category?.name || "general"}
          </span>
        </section>
      </main>
    </div>
  );
}
