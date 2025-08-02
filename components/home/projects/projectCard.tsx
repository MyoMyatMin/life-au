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
import { getAllApplications, getFeaturedMediaById } from "@/lib/wordpress";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: number;
  techStack?: string[];
  students?: string[];
  category?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = async ({ project }: ProjectCardProps) => {
  const thumbnailImageRetrieved = project?.image
    ? await getFeaturedMediaById(project?.image)
    : null;

  console.log(project);

  return (
    <>
      <Card className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 h-full flex flex-col">
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
          {project?.category && (
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-red-600/95 dark:bg-red-700/90 text-white backdrop-blur-sm border border-white/30 shadow-md"
              >
                {project.category}
              </Badge>
            </div>
          )}
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

          {/* Spacer to push bottom content down */}
          <div className="flex-grow"></div>

          <CardContent className="pt-0 flex-shrink-0">
            {project?.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-gray-300/80 dark:border-gray-400/40 text-gray-700 dark:text-gray-200 bg-gray-50/80 dark:bg-gray-700/40 backdrop-blur-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
            {project?.students && project.students.length > 0 && (
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 drop-shadow-sm">
                <Users className="w-4 h-4 mr-2" />
                {project.students.join(", ")}
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ProjectCard;
