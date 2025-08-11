import { getAllApplications } from "@/lib/wordpress";
import PageHeader from "@/components/common/pageHeader";

export default async function Apps() {
  const apps = await getAllApplications();
  return (
    <div className="min-h-screen bg-page-gradient">
      <PageHeader title="Apps" description="Explore our Apps!" />
      {/* to be implemented later */}
      <div>
        {apps.map((app) => (
          <div key={app.id || app.name}>
            <h2>{app.name}</h2>
            <p>{app.short_description}</p>
            <p>Category: {app.category}</p>
            {app.thumbnail_image && (
              <p>Featured Media: {app.thumbnail_image}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
