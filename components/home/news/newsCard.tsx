import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import Image from "next/image";
import { Badge } from "../../ui/badge";
import { Calendar } from "lucide-react";
import { getFeaturedMediaById } from "../../../lib/wordpress";

interface NewsArticle {
  key?: number;
  id: number;
  title: string;
  content: string;
  thumbnail_image?: number;
  date: string;
  short_description: string;
  category?: string;
  excerpt?: string;
}

interface NewsCardProps {
  newsArticle: NewsArticle;
}
const NewsCard = async ({ newsArticle }: NewsCardProps) => {
  const thumbnailImageRetrieved = newsArticle.thumbnail_image
    ? await getFeaturedMediaById(newsArticle.thumbnail_image)
    : null;
  return (
    <>
      <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10">
        <div className="relative overflow-hidden rounded-t-lg">
          {thumbnailImageRetrieved?.source_url ? (
            <Image
              className="h-full w-full object-cover"
              src={thumbnailImageRetrieved.source_url}
              alt={newsArticle.title || "Post thumbnail"}
              width={400}
              height={200}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-muted-foreground">
              No image available
            </div>
          )}
          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-blue-600/95 dark:bg-blue-700/90 text-white text-xs backdrop-blur-sm border border-white/30 shadow-md"
            >
              {newsArticle.category}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 drop-shadow-sm">
            {newsArticle.title}
          </CardTitle>
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-300 mb-2 drop-shadow-sm">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(newsArticle.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <CardDescription className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 drop-shadow-sm">
            {newsArticle.excerpt}
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default NewsCard;
