import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import HeroSection from "@/components/home/heroSection";
import HighlightAppsSection from "@/components/home/highlightAppsSection";
import StudentActivitiesSection from "@/components/home/highlightNewsSection";
import SectionDivider from "@/components/home/sectionDivider";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Highlight Apps Section */}
      <HighlightAppsSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Student Activities Section */}
      <StudentActivitiesSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
