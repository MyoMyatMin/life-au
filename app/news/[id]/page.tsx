import {
  getAllNews,
  getFeaturedMediaById,
  getNewsById,
  getNewsCategoryById,
} from "@/lib/wordpress";
import Image from "next/image";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export async function generateStaticParams() {
  const allNews = await getAllNews();
  return allNews.map((news) => ({
    id: news.id.toString(),
  }));
}

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  const news = await getNewsById(Number(id));
  if (!news) {
    return <div>News not found</div>;
  }

  const thumbnailImageRetrieved = news?.thumbnail_image
    ? await getFeaturedMediaById(news?.thumbnail_image)
    : null;

  const category = news?.category
    ? await getNewsCategoryById(news?.category)
    : null;

  return (
    <div>
      <h1>News: {id}</h1>
      <p>This will show details for the news &apos;{id}&apos; on life.au</p>
      {news && (
        <div>
          <h2>News Title: {news.title}</h2>
          <p>Short Description: {news.short_description}</p>
          <p>Date: {news.date}</p>
          <p>Category ID: {news.category}</p>
          {category && <p>Category Name: {category.name}</p>}
          <p>Thumbnail Image ID: {news.thumbnail_image}</p>
          {thumbnailImageRetrieved?.source_url ? (
            <Image
              src={thumbnailImageRetrieved.source_url}
              alt={news.title || "News thumbnail"}
              width={400}
              height={200}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div>No image available</div>
          )}
        </div>
      )}
    </div>
  );
}
