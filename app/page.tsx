import HeroSection from "@/components/home/hero/heroSection";
import FeatureProjects from "@/components/home/projects/featureProjects";
import FeatureNews from "@/components/home/news/featureNews";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
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
