import HeroSection from "@/components/home/hero/heroSection";
import FeatureProjects from "@/components/home/projects/featureProjects";
import FeatureNews from "@/components/home/news/featureNews";
import Footer from "@/components/common/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page-gradient">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <FeatureProjects />

      {/* News Section */}
      <FeatureNews />
    </div>
  );
}
