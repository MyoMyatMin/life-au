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

const FeatureProjects = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 border-b-2 border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Senior Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore innovative solutions and cutting-edge research from our
            talented computer science students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-gray-700 dark:hover:bg-gray-600"
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
                    className="bg-red-600 dark:bg-red-700 text-white"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Users className="w-4 h-4 mr-2" />
                  {project.students.join(", ")}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 hover:bg-red-600 dark:hover:bg-red-700 hover:text-white bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
