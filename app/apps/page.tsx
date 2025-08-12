import { getAllApplications, getFeaturedMediaById, getAppCategoryById } from "@/lib/wordpress";
import AppsClient from "./appsClient";

export default async function Apps() {
  const apps = await getAllApplications();
  
  // Fetch all media and categories in parallel
  const processedApps = await Promise.all(
    apps.map(async (app) => {
      const [thumbnailImage, category] = await Promise.all([
        app.thumbnail_image ? getFeaturedMediaById(app.thumbnail_image) : null,
        app.category ? getAppCategoryById(app.category) : null,
      ]);
      
      return {
        ...app,
        thumbnail_image_url: thumbnailImage?.source_url,
        category_name: category?.name,
      };
    })
  );

  // Create AppsClient component
    // Pass apps to AppsClient as onSearch function cannot be passed 
    // as props to client component SimpleSearch

  return (
    <AppsClient apps={processedApps} />
  );
}
