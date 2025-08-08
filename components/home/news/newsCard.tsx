import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import Image from "next/image";
import { Badge } from "../../ui/badge";
import { Calendar } from "lucide-react";
import {
  getFeaturedMediaById,
  getNewsCategoryById,
} from "../../../lib/wordpress";
interface NewsArticle {
  id: number;
  title: string;
  content: string;
  thumbnail_image?: number;
  date: string;
  short_description: string;
  category?: number;
  excerpt?: string;
}
interface NewsCardProps {
  newsArticle: NewsArticle;
}
const NewsCard = async ({ newsArticle }: NewsCardProps) => {
  const thumbnailImageRetrieved = newsArticle?.thumbnail_image
    ? await getFeaturedMediaById(newsArticle?.thumbnail_image)
    : null;

  const category = newsArticle?.category
    ? await getNewsCategoryById(newsArticle?.category)
    : null;

  return (
    <>
      <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 flex flex-row overflow-hidden min-h-[280px] max-w-[520px] w-full cursor-pointer">
        <div className="relative overflow-hidden w-1/2 min-h-[280px]">
          {thumbnailImageRetrieved?.source_url ? (
            <Image
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={thumbnailImageRetrieved.source_url}
              alt={newsArticle.title || "Post thumbnail"}
              width={400}
              height={280}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-muted-foreground bg-gray-100 dark:bg-gray-700">
              No image available
            </div>
          )}

          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="bg-blue-600/95 dark:bg-blue-700/90 text-white text-xs backdrop-blur-sm border border-white/30 shadow-md"
            >
              {category?.name || "General"}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-4 flex-1 w-1/2 p-6">
          <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 drop-shadow-sm mb-3">
            {newsArticle.title}
          </CardTitle>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3 drop-shadow-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(newsArticle.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <CardDescription className="text-sm text-gray-700 dark:text-gray-200 line-clamp-4 drop-shadow-sm">
            {newsArticle?.excerpt ||
              newsArticle?.short_description ||
              "No description available"}
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};
export default NewsCard;
