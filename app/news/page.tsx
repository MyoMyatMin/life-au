import { getAllNews } from "@/lib/wordpress";

export default async function News() {
  const news = await getAllNews();
  return (
    <div className="p-6 mt-20">
      <h1>Activities Page</h1>
      <p>This will show the activities on life.au</p>

      <hr />
      {news.map((activity) => (
        <div key={activity.id}>
          <h2>{activity.title}</h2>
          <p>{activity.short_description}</p>
          <p>{activity.date}</p>
          <p>category id: {activity?.category}</p>
          <p>thumbnail image id: {activity?.thumbnail_image}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
