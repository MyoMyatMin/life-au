import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import Image from "next/image";
import { Badge } from "../../ui/badge";
import { Calendar } from "lucide-react";
import { Button } from "../../ui/button";

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

const FeatureNews = () => {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest University News
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest developments, achievements, and
            announcements from our CS department
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-600 dark:bg-blue-700 text-white text-xs"
                  >
                    {article.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 hover:bg-red-600 dark:hover:bg-red-700 hover:text-white bg-transparent"
          >
            Read More News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureNews;
