import {
  getAllApplications,
  getApplicationById,
  getFeaturedMediaById,
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

  const appScreens = await Promise.all(
    [app.app_screen_1, app.app_screen_2, app.app_screen_3, app.app_screen_4]
      .filter(Boolean)
      .map((screenId) => getFeaturedMediaById(Number(screenId)))
  );

  const images = appScreens
    .map((screen) => (screen?.source_url ? screen.source_url : null))
    .filter(Boolean) as string[];

  const sideThumbs = images.slice(0, 3);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 
                    dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300"
    >
      {/* FULL-BLEED TOP STRIP */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-red-900 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 pt-16">
        {/* inner content stays constrained */}
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6">
          <div className="overflow-hidden bg-neutral-200 h-20 w-20 md:w-32 md:h-32 lg:w-40 lg:h-40 relative rounded-lg">
            {thumbnailImageRetrieved?.source_url && (
              <Image
                src={thumbnailImageRetrieved.source_url || images[0]} // in case there is no feature image use the first app screen
                fill
                alt={app.name || "App thumbnail"}
                className="h-full w-full object-cover rounded-lg"
                priority
              />
            )}
          </div>

          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold leading-none tracking-tight text-white">
                {app.name || `App ${id}`}
              </h1>
              {category?.name && (
                <span className="rounded-full bg-red-700 px-2.5 py-0.5 text-xs font-medium text-white">
                  {category.name}
                </span>
              )}
            </div>
            {app.short_description && (
              <p className="text-sm text-white/90">{app.short_description}</p>
            )}
          </div>
        </div>
      </section>
      <main className="max-w-6xl mx-auto px-4 py-8 pt-0">
        {/* Media section */}
        <div
          className={`mt-8 grid grid-cols-1 gap-6  ${
            images.length > 1 ? "md:grid-cols-[1fr,240px]" : ""
          }`}
        >
          {/* Highlight slider */}
          <div
            className={`h-full flex flex-col justify-center rounded-xl bg-white/70 dark:bg-black/20 p-2 shadow-xl ring-1 ring-black/5 dark:ring-white/10 backdrop-blur ${
              images.length <= 1 ? "items-center" : ""
            }`}
          >
            <AppMediaSlider images={images} altBase={app.name || "App"} />
          </div>

          {/* Right column (thumbnails) */}
          {images.length > 1 && (
            <div className="grid grid-rows-3 gap-4">
              {[0, 1, 2].map((i) => {
                const src = sideThumbs[i];

                if (!src) return null; // skip if no image
                return (
                  <div
                    key={i}
                    className="none md:block relative md:h-36   w-full overflow-hidden rounded-lg bg-white/70 dark:bg-black/20 shadow ring-1 ring-black/5 dark:ring-white/10 backdrop-blur"
                  >
                    {src ? (
                      <Image
                        src={src}
                        alt={`${app.name || "App"} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="280px"
                        priority={i === 0}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Info + Team */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr,280px]">
          <div className="rounded-xl  p-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Application Information
            </h3>
            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              {app.long_description || "No description available."}
            </p>
          </div>

          <div className="rounded-xl p-4">
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Developed by
              </h4>
              <ul className="mt-2 list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300">
                {app.developer_1 && <li>{app.developer_1}</li>}
                {app.developer_2 && <li>{app.developer_2}</li>}
                {app.developer_3 && <li>{app.developer_3}</li>}
                {!app.developer_1 && !app.developer_2 && !app.developer_3 && (
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
      </main>

      <Footer />
    </div>
  );
}
