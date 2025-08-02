"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, ArrowLeft } from "lucide-react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300">
      {/* Header */}
      <Header />

      {/* Error Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-md w-full">
          {/* Error Card */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30 p-8 text-center">
            {/* Error Icon */}
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100/80 dark:bg-red-900/30 mb-6 backdrop-blur-sm">
              <svg
                className="h-10 w-10 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                />
              </svg>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-sm">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6 drop-shadow-sm">
              We apologize for the inconvenience. An unexpected error has
              occurred.
            </p>

            {/* Error Details (in development) */}
            {process.env.NODE_ENV === "development" && (
              <div className="mb-6 p-4 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-200/50 dark:border-red-800/30 backdrop-blur-sm">
                <p className="text-xs text-red-800 dark:text-red-300 font-mono break-all">
                  {error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={reset}
                className="flex-1 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>

              <Button
                asChild
                variant="outline"
                className="flex-1 bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-200"
              >
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>

            {/* Additional Help */}
            <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/30">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Need help?
              </p>
              <Link
                href="/contact"
                className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium transition-colors drop-shadow-sm"
              >
                Contact Support
              </Link>
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
