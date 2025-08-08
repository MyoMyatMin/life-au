import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import Image from "next/image";
import { Badge } from "../../ui/badge";
import { Calendar } from "lucide-react";
import { Button } from "../../ui/button";
import { getAllNews } from "../../../lib/wordpress";
import NewsCard from "./newsCard";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "CS Department Receives $2M Grant for AI Research",
    excerpt:
      "The National Science Foundation awards major funding to advance artificial intelligence research initiatives and student opportunities.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    date: "2024-01-15",
    category: "Research",
  },
  {
    id: 2,
    title: "Student Team Wins International Hackathon",
    excerpt:
      "Life.AU students take first place at Global Tech Challenge with innovative climate monitoring solution using IoT sensors.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    date: "2024-01-12",
    category: "Achievement",
  },
  {
    id: 3,
    title: "New Cybersecurity Lab Opens This Fall",
    excerpt:
      "State-of-the-art facility will provide hands-on experience with latest security tools and ethical hacking techniques.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    date: "2024-01-10",
    category: "Facilities",
  },
  {
    id: 4,
    title: "Industry Partnership Program Expands",
    excerpt:
      "Leading tech companies join our internship and mentorship program, offering more opportunities for student career development.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    date: "2024-01-08",
    category: "Partnerships",
  },
];

const FeatureNews = async () => {
  const news = await getAllNews();

  return (
    <>
      {/* Divider Line */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-300/60 dark:border-gray-600/40"></div>
        </div>
      </div>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
              Student Activities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-12">
            {news.slice(0, 2).map((article) => (
              <NewsCard
                key={article.id}
                newsArticle={{
                  id: article.id,
                  title: article.title,
                  content: article.content,
                  thumbnail_image: article.thumbnail_image,
                  date: article.date,
                  short_description: article.short_description,
                  category: article.category,
                }}
              />
            ))}
          </div>

          {/* This section will be deleted in the future, so it is not needed. */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-12">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 flex flex-row overflow-hidden min-h-[280px]  max-w-[520px] w-full cursor-pointer "
            >
              <div className="relative overflow-hidden w-1/2 min-h-[280px]">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={280}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-600/95 dark:bg-blue-700/90 text-white text-xs backdrop-blur-sm border border-white/30 shadow-md"
                  >
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4 flex-1 w-1/2 p-6">
                <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 drop-shadow-sm mb-3">
                  {article.title}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3 drop-shadow-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardDescription className="text-sm text-gray-700 dark:text-gray-200 line-clamp-4 drop-shadow-sm">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div> */}

          <Link className="flex items-center justify-center" href="/news">
            <Button
              variant="outline"
              size="lg"
              className="border-red-600/80 dark:border-red-500/70 text-red-600 dark:text-red-400 hover:bg-red-600 dark:hover:bg-red-700 hover:text-white bg-white/60 dark:bg-gray-800/30 backdrop-blur-md border-2 shadow-lg"
            >
              See more
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeatureNews;
