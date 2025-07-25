import HeroSection from "@/components/home/hero/hero-section";
import FeatureProjects from "@/components/home/projects/feature-projects";
import FeatureNews from "@/components/home/news/feature-news";
import Footer from "@/components/main/footer";
import Header from "@/components/main/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <FeatureProjects />

      {/* News Section */}
      <FeatureNews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
