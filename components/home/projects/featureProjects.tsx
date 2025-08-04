import Image from "next/image";
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
import ProjectCard from "./projectCard";

const featuredProjects = [
  {
    id: 1,
    title: "AI-Powered Code Review Assistant",
    description:
      "Machine learning system that automatically reviews code quality and suggests improvements using natural language processing.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    techStack: ["Python", "TensorFlow", "React", "Node.js"],
    students: ["Sarah Chen", "Michael Rodriguez"],
    category: "Machine Learning",
  },
  {
    id: 2,
    title: "Blockchain Supply Chain Tracker",
    description:
      "Decentralized application for tracking products through supply chains with immutable transaction records.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    techStack: ["Solidity", "Web3.js", "React", "MongoDB"],
    students: ["David Kim", "Emma Thompson"],
    category: "Blockchain",
  },
  {
    id: 3,
    title: "Real-time Collaborative IDE",
    description:
      "Web-based integrated development environment supporting real-time collaboration with live code sharing.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    techStack: ["TypeScript", "Socket.io", "Monaco Editor", "Docker"],
    students: ["Alex Johnson"],
    category: "Web Development",
  },
  {
    id: 4,
    title: "Smart Campus Navigation",
    description:
      "Mobile app using AR and indoor positioning to help students navigate campus buildings and find resources.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    techStack: ["Swift", "ARKit", "Firebase", "Core ML"],
    students: ["Jessica Wu", "Ryan O'Connor"],
    category: "Mobile Development",
  },
  {
    id: 5,
    title: "Automated Testing Framework",
    description:
      "Comprehensive testing suite that automatically generates test cases and performs regression testing.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    techStack: ["Java", "Selenium", "JUnit", "Jenkins"],
    students: ["Marcus Brown"],
    category: "Software Engineering",
  },
  {
    id: 6,
    title: "Quantum Algorithm Simulator",
    description:
      "Educational platform for visualizing and simulating quantum computing algorithms with interactive tutorials.",
    image:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?_gl=1*aicsb5*_ga*MTA4NDEzMzA3NC4xNzUzNDQyMTkz*_ga_8JE65Q40S6*czE3NTM0NDIxOTIkbzEkZzEkdDE3NTM0NDIzMTgkajM4JGwwJGgw",
    techStack: ["Python", "Qiskit", "D3.js", "Flask"],
    students: ["Priya Patel", "James Wilson"],
    category: "Quantum Computing",
  },
];

const FeatureProjects = async () => {
  const apps = await getAllApplications();

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm">
            Highlight Apps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {apps.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id || project.name}
              project={{
                id: project.id,
                title: project.name,
                description: project.short_description,
                image: project.thumbnail_image,
              }}
            />
          ))}
        </div>

        {/* Fixed hardcoded projects section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-300 shadow-lg bg-white/80 dark:bg-gray-800/60 hover:bg-white/95 dark:hover:bg-gray-700/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 h-full flex flex-col cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-red-600/95 dark:bg-red-700/90 text-white backdrop-blur-sm border border-white/30 shadow-md"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-col flex-grow">
                <CardHeader className="pb-3 flex-shrink-0">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors drop-shadow-sm">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-700 dark:text-gray-200 line-clamp-3 drop-shadow-sm min-h-[4.5rem]">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <div className="flex-grow"></div>

                <CardContent className="pt-0 flex-shrink-0">
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
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 drop-shadow-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {project.students.join(", ")}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div> */}

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-red-600/80 dark:border-red-500/70 text-red-600 dark:text-red-400 hover:bg-red-600 dark:hover:bg-red-700 hover:text-white bg-white/60 dark:bg-gray-800/30 backdrop-blur-md border-2 shadow-lg"
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
