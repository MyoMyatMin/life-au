"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-blue-100/80 via-gray-50 to-red-100/80 dark:from-blue-950 dark:via-gray-900 dark:to-red-950 transition-colors duration-300 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            {/* Error Card */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/30 p-8 text-center">
              {/* Error Icon */}
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-red-100/80 dark:bg-red-900/30 mb-6 backdrop-blur-sm">
                <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
              </div>

              {/* Error Message */}
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 drop-shadow-sm">
                Critical Error
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 drop-shadow-sm">
                A critical error has occurred. The application needs to be
                restarted.
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
              <div className="flex flex-col gap-3">
                <Button
                  onClick={reset}
                  className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restart Application
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-white/50 dark:bg-gray-800/50 border-white/30 dark:border-gray-600/30 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-200"
                >
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go to Homepage
                  </Link>
                </Button>
              </div>

              {/* Brand */}
              <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/30">
                <Link
                  href="/"
                  className="text-xl font-bold text-gray-800 dark:text-white drop-shadow-lg"
                >
                  Life
                  <span className="text-red-500 dark:text-red-400">.AU</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
