import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedApplications } from "@/lib/mock-data";
import Image from "next/image";

export default function HighlightAppsSection() {
  const featuredApps = getFeaturedApplications(3);

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Highlight Apps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredApps.map((app) => (
            <Card
              key={app.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-shadow border border-gray-200/50 dark:border-gray-700/50"
            >
              <CardHeader className="pb-2 md:pb-3">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 md:mb-3">
                  <Image
                    src={
                      app.thumbnail_image ||
                      "/placeholder.svg?height=200&width=300"
                    }
                    alt={app.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mt-1 text-xs md:text-sm">
                      {app.short_description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-3 md:pb-4">
                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-red-300 text-black dark:bg-red-900 dark:text-white text-xs px-2 py-1 rounded-full"
                  >
                    {app.category}
                  </Badge>
                  <Link href={`/apps/${app.id}`}>
                    <Button
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white text-xs md:text-sm px-2 md:px-3"
                    >
                      View App
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/apps">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2">
              See more
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
