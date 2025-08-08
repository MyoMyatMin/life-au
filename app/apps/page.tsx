import { getAllApplications } from "@/lib/wordpress";
export default async function Apps() {
  const apps = await getAllApplications();
  return (
    <div className="p-6 mt-20">
      <h1>Apps Page</h1>
      <p>This will show the app on life.au</p>
      <hr />
      <ul>
        {apps.map((app) => (
          <li key={app.id || app.name}>
            <h2>{app.name}</h2>
            <p>{app.short_description}</p>
            <p>Category: {app.category}</p>
            <p>FeaturedMedia : {app.thumbnail_image}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
