import {
  getAllApplications,
  getApplicationById,
  getFeaturedMediaById,
  getCategoryById,
  getAppCategoryById,
} from "@/lib/wordpress";

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
    return <div>Application not found</div>;
  }

  const thumbnailImageRetrieved = app?.thumbnail_image
    ? await getFeaturedMediaById(app?.thumbnail_image)
    : null;

  const category = app?.category
    ? await getAppCategoryById(app?.category)
    : null;

  return (
    <div className="p-6 mt-20">
      <h1>App: {id}</h1>
      <p>This will show details for the app &apos;{id}&apos; on life.au</p>
      {app && (
        <div>
          <h2>application Name : {app.name}</h2>
          <p>application Short Description :{app.short_description}</p>
          <p>application Long Description : {app.long_description}</p>
          <p>Advisor: {app.advisor}</p>
          <p>Developer 1: {app.developer_1}</p>
          {app.developer_2 && <p>Developer 2: {app.developer_2}</p>}
          {app.developer_3 && <p>Developer 3: {app.developer_3}</p>}
          <p>Category ID: {app.category}</p>
          {category && <p>Category Name: {category.name}</p>}
          <p>Thumbnail Image ID: {app.thumbnail_image}</p>
          {thumbnailImageRetrieved?.source_url ? (
            <img
              src={thumbnailImageRetrieved.source_url}
              alt={app.name || "App thumbnail"}
              width={400}
              height={200}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div>No image available</div>
          )}
          <hr />
          <p>Application ID: {app.id}</p>
        </div>
      )}
    </div>
  );
}
