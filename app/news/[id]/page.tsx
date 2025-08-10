import {
  getAllNews,
  getFeaturedMediaById,
  getNewsById,
  getNewsCategoryById,
} from "@/lib/wordpress";
import Image from "next/image";

type RouteParams = { params: { id: string } };

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

export default async function Page({ params }: RouteParams) {
  const id = params.id;

  const news = await getNewsById(Number(id));
  if (!news) return <div className="p-6">News not found</div>;

  const [thumb, category] = await Promise.all([
    news.thumbnail_image ? getFeaturedMediaById(news.thumbnail_image) : null,
    news.category ? getNewsCategoryById(news.category) : null,
  ]);

  const title = news.title || `Topic ${id}`;
  const dateStr = formatDate(news.date);
  const description =
    news.short_description || "— No short description provided —";

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="h-16" /> 
      <header className="border-b">
        <div className="bg-amber-100">
          <div className="mx-auto max-w-5xl px-6 py-4">
            <h1 className="text-center text-2xl font-bold">{title}</h1>
          </div>
        </div>
      </header>


      <main className="mx-auto max-w-3xl px-6 pb-20 pt-10">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {thumb?.source_url ? (
              <Image
                src={thumb.source_url}
                alt={title}
                width={800}
                height={1000}
                className="rounded-md border object-cover"
                priority
              />
            ) : (
              <div className="h-96 w-full rounded-md border bg-zinc-200" />
            )}
          </div>
        </div>


        {dateStr && (
          <p className="mt-2 text-center text-xs text-zinc-500">{dateStr}</p>
        )}


        <section className="mt-8 space-y-2">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wide">
            Short Description
          </h2>
          <p className="mx-auto max-w-2xl text-justify leading-relaxed text-sm text-zinc-700">
            {description}
          </p>
        </section>


        <section className="mt-8 flex items-center justify-center gap-2">
          <span className="text-xs text-zinc-500">Tag:</span>
          <span className="rounded-full border px-2.5 py-1 text-xs">
            {category?.name || "general"}
          </span>
        </section>
      </main>


      <footer className="mt-auto border-t bg-amber-100">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center">
          <div className="text-xl font-semibold">
            <span>Life.</span><span className="text-amber-600">au</span>
          </div>
          <p className="mt-1 text-[11px] text-zinc-500">by d’code 2025</p>
        </div>
      </footer>
    </div>
  );
}
