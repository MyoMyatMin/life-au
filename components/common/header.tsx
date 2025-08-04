import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./themeToggle";
import { MobileNav } from "./mobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-md shadow-lg border-b border-white/10 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-white drop-shadow-lg"
            >
              Life<span className="text-red-500 dark:text-red-400">.AU</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8 items-center">
              <Link
                href="/projects"
                className="text-white/90 hover:text-red-400 dark:hover:text-red-300 font-medium transition-colors drop-shadow-sm"
              >
                Projects
              </Link>
              <Link
                href="/news"
                className="text-white/90 hover:text-red-400 dark:hover:text-red-300 font-medium transition-colors drop-shadow-sm"
              >
                News
              </Link>
              <ThemeToggle />
            </nav>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
