import { getAllNews } from "@/lib/wordpress";
import PageHeader from "@/components/common/pageHeader";

export default async function News() {
  const news = await getAllNews();
  return (
    <div className="min-h-screen bg-page-gradient">
      <PageHeader
        title="Student Activities"
        description="Explore our Activities!"
      />
      {/* to be implemented later */}
      <div>
        {news.map((activity) => (
          <div key={activity.id}>
            <h2>{activity.title}</h2>
            <p>{activity.short_description}</p>
            <p>Date: {activity.date}</p>
            {activity.category && <p>Category ID: {activity.category}</p>}
            {activity.thumbnail_image && (
              <p>Thumbnail ID: {activity.thumbnail_image}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
