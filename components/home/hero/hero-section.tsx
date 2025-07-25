"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/placeholder.svg?height=800&width=1200",
      title: "Showcasing Student Innovation",
      subtitle:
        "Bringing CS senior projects to life - Discover groundbreaking work from our computer science students",
    },
    {
      image: "/placeholder.svg?height=800&width=1200",
      title: "Excellence in Computer Science Education",
      subtitle:
        "Fostering the next generation of tech leaders through cutting-edge research and hands-on learning",
    },
    {
      image: "/placeholder.svg?height=800&width=1200",
      title: "Where Innovation Meets Opportunity",
      subtitle:
        "Join our community of aspiring developers, researchers, and tech entrepreneurs",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden pt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-red-900/70 dark:from-blue-950/80 dark:via-blue-900/70 dark:to-red-950/80"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-white text-left md:text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-medium text-blue-100 dark:text-blue-200 drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 px-8 py-3 rounded-lg text-white font-bold text-lg transition-colors shadow-lg"
          >
            Explore Projects
          </Button>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-full p-3 transition-all z-20 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 rounded-full p-3 transition-all z-20 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
