import {
  getAllApplications,
  getApplicationById,
  getFeaturedMediaById,
  getCategoryById,
  getAppCategoryById,
} from "@/lib/wordpress";
import Image from "next/image";
import Footer from "@/components/common/footer";
import AppMediaSlider from "@/components/apps/appMediaSlider";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const applications = await getAllApplications();
  return applications.map((app) => ({
    id: app.id.toString(),
  }));
}

export default async function AppDetail({ params }: Props) {
  const { id } = await params;

  const app = await getApplicationById(Number(id));

  if (!app) {
    return <div className="p-6 mt-24">Application not found</div>;
  }

    const thumbnailImageRetrieved = app?.thumbnail_image
    ? await getFeaturedMediaById(app?.thumbnail_image)
    : null;

  const category = app?.category
    ? await getAppCategoryById(app?.category)
    : null;

  const developedBy = [app.developer_1, app.developer_2, app.developer_3].filter(Boolean);

  const images = thumbnailImageRetrieved?.source_url
  ? [thumbnailImageRetrieved.source_url]
  : [];


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      <main className="mt-20">
        <div className="mx-auto max-w-6xl px-4 py-8">
          {/* Top hero card */}
          <div className="grid grid-cols-1 gap-6 rounded-xl bg-white/70 dark:bg-black/20 p-4 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur md:grid-cols-[auto,1fr]">
            <div className="h-24 w-40 overflow-hidden rounded-lg bg-neutral-200 md:h-28 md:w-48">
              {thumbnailImageRetrieved?.source_url && (
                <Image
                  src={thumbnailImageRetrieved.source_url}
                  alt={app.name || "App thumbnail"}
                  width={480}
                  height={280}
                  className="h-full w-full object-cover"
                  priority
                />
              )}
            </div>

            <div className="flex flex-col items-start justify-center gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold leading-none tracking-tight text-neutral-900 dark:text-neutral-100">
                  {app.name || `App ${id}`}
                </h1>
                {category?.name && (
                  <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-medium text-white">
                    {category.name}
                  </span>
                )}

              </div>
              {app.short_description && (
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  {app.short_description}
                </p>
              )}
              {/* If you have an external/app URL, show Explore:
              {app.url && (
                <Link
                  href={app.url}
                  className="mt-1 inline-flex items-center rounded-md bg-black px-3 py-1.5 text-sm font-medium text-white ring-1 ring-black hover:opacity-90 dark:bg-white dark:text-black dark:ring-white"
                >
                  Explore
                </Link>
              )} */}
            </div>
          </div>

          {/* Media section */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr,280px]">
            {/* Highlight slider (uses only thumbnail for now) */}
            <div className="rounded-xl bg-white/70 dark:bg-black/20 p-2 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
              <AppMediaSlider images={images} altBase={app.name || "App"} />
            </div>

            {/* Right column (placeholders / future thumbs) */}
            <div className="grid grid-rows-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative h-28 w-full overflow-hidden rounded-lg bg-white/70 dark:bg-black/20 shadow ring-1 ring-black/5 dark:ring-white/10 backdrop-blur"
                />
              ))}
            </div>
          </div>

          {/* Info + Team */}
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr,280px]">
            <div className="rounded-xl bg-white/80 dark:bg-black/25 p-4 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Application Information
              </h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {app.long_description || "No description available."}
              </p>
            </div>

            <div className="rounded-xl bg-white/80 dark:bg-black/25 p-4 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur">
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Developed by
                </h4>
                <ul className="mt-2 list-inside list-disc text-sm text-neutral-700 dark:text-neutral-300">
                  {developedBy.length ? (
                    developedBy.map((n: string, idx: number) => <li key={idx}>{n}</li>)
                  ) : (
                    <li>—</li>
                  )}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Advised by
                </h4>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {app.advisor || "—"}
                </p>
              </div>
            </div>
          </div>

          {/* Meta (optional) */}
          <div className="sr-only mt-6 text-sm text-neutral-500">
            App ID: {app.id}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}