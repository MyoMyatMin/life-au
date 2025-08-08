import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Users } from "lucide-react";
import { Button } from "../../ui/button";
import {
  getAllApplications,
  getAppCategoryById,
  getFeaturedMediaById,
} from "@/lib/wordpress";
import Image from "next/image";
interface Project {
  id: number;
  title: string;
  description: string;
  image?: number;
  techStack?: string[];
  students?: string[];
  category?: number;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = async ({ project }: ProjectCardProps) => {
  const thumbnailImageRetrieved = project?.image
    ? await getFeaturedMediaById(project?.image)
    : null;

  const category = project.category
    ? await getAppCategoryById(Number(project?.category))
    : null;

  return (
    <>
      <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 h-full flex flex-col cursor-pointer">
        <div className="relative overflow-hidden rounded-t-lg h-48 w-full">
          {thumbnailImageRetrieved?.source_url ? (
            <Image
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={thumbnailImageRetrieved.source_url}
              alt={project.title || "Post thumbnail"}
              width={400}
              height={200}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-700 text-muted-foreground">
              No image available
            </div>
          )}

          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-red-600/95 dark:bg-red-700/90 text-white backdrop-blur-sm border border-white/30 shadow-md"
            >
              {category?.name || "General"}
            </Badge>
          </div>
        </div>

        {/* Content area with proper flex structure */}
        <div className="flex flex-col flex-grow">
          <CardHeader className="pb-3 flex-shrink-0">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors drop-shadow-sm">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 drop-shadow-sm min-h-[4.5rem]">
              {project.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0 flex-shrink-0"></CardContent>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
