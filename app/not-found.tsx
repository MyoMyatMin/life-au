"use client";

import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-lg w-full">
          {/* 404 Card */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30 p-8 text-center">
            {/* 404 Number */}
            <div className="mb-6">
              <h1 className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 dark:from-blue-400 dark:via-purple-400 dark:to-red-400 drop-shadow-lg">
                404
              </h1>
            </div>

            {/* Search Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100/80 dark:bg-blue-900/30 mb-6 backdrop-blur-sm">
              <Search className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>

            {/* Error Message */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-sm">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 drop-shadow-sm">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or you entered the wrong URL.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                asChild
                className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="flex-1 bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-200"
              >
                <Link href="/news">
                  <Search className="w-4 h-4 mr-2" />
                  Browse News
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="border-t border-gray-200/50 dark:border-gray-700/30 pt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Quick Links:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  href="/apps"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors drop-shadow-sm"
                >
                  Apps
                </Link>
                <Link
                  href="/news"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors drop-shadow-sm"
                >
                  News
                </Link>
                <Link
                  href="/about"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors drop-shadow-sm"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors drop-shadow-sm"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-6 text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors drop-shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Go back to previous page
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
