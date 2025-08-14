import {
  getAllApplications,
  getApplicationById,
  getFeaturedMediaById,
  getCategoryById,
  getAppCategoryById,
} from "@/lib/wordpress";
import Image from "next/image";

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
    return (
      <div className="min-h-screen bg-page-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">
            Application not found
          </h1>
        </div>
      </div>
    );
  }

  const thumbnailImageRetrieved = app?.thumbnail_image
    ? await getFeaturedMediaById(app?.thumbnail_image)
    : null;

  const category = app?.category
    ? await getAppCategoryById(app?.category)
    : null;

  return (
    <div className="min-h-screen bg-page-gradient text-gray-900 dark:text-gray-100">
      <main className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-3xl font-bold mb-4">App: {id}</h1>
        <p className="text-lg mb-6">
          This will show details for the app &apos;{id}&apos; on life.au
        </p>
        {app && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Application Name: {app.name}
            </h2>
            <p>
              <strong>Short Description:</strong> {app.short_description}
            </p>
            <p>
              <strong>Long Description:</strong> {app.long_description}
            </p>
            <p>
              <strong>Advisor:</strong> {app.advisor}
            </p>
            <p>
              <strong>Developer 1:</strong> {app.developer_1}
            </p>
            {app.developer_2 && (
              <p>
                <strong>Developer 2:</strong> {app.developer_2}
              </p>
            )}
            {app.developer_3 && (
              <p>
                <strong>Developer 3:</strong> {app.developer_3}
              </p>
            )}
            <p>
              <strong>Category ID:</strong> {app.category}
            </p>
            {category && (
              <p>
                <strong>Category Name:</strong> {category.name}
              </p>
            )}
            <p>
              <strong>Thumbnail Image ID:</strong> {app.thumbnail_image}
            </p>

            <div className="my-6">
              {thumbnailImageRetrieved?.source_url ? (
                <Image
                  src={thumbnailImageRetrieved.source_url}
                  alt={app.name || "App thumbnail"}
                  width={400}
                  height={200}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              ) : (
                <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                  No image available
                </div>
              )}
            </div>

            <hr className="border-gray-300 dark:border-gray-600 my-6" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Application ID:</strong> {app.id}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
