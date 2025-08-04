import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedNews } from "@/lib/mock-data";
import Image from "next/image";

export default function StudentActivitiesSection() {
  const featuredNews = getFeaturedNews(2);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Student Activities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredNews.map((newsItem) => (
            <Card
              key={newsItem.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-shadow border border-gray-200/50 dark:border-gray-700/50"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-full sm:w-48 lg:w-64">
                    <div className="w-full h-48 sm:h-36 lg:h-72 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <Image
                        src={
                          newsItem.thumbnail_image ||
                          "/placeholder.svg?height=200&width=400"
                        }
                        alt={newsItem.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 line-clamp-3 flex-1 text-sm sm:text-base">
                      {newsItem.short_description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mt-auto">
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {new Date(newsItem.date).toLocaleDateString()}
                      </span>
                      <Link href={`/activities/${newsItem.id}`}>
                        <Button
                          size="sm"
                          className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto"
                        >
                          Read more
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/activities">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
              See more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
