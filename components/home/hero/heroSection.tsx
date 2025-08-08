import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-red-900/80 dark:from-blue-950/90 dark:via-blue-900/80 dark:to-red-950/90 backdrop-blur-sm">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Welcome to Life.au!
        </h1>
        <Link href="/apps">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore our Apps!
          </Button>
        </Link>
      </div>
    </section>
  );
}
