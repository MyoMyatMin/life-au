import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-red-900/90 dark:from-blue-950/95 dark:via-blue-900/85 dark:to-red-950/95 text-white backdrop-blur-md">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold mb-4 block drop-shadow-lg"
            >
              Life<span className="text-red-400 dark:text-red-300">.AU</span>
            </Link>
            <p className="text-white/90 dark:text-white/80 mb-4 max-w-md drop-shadow-sm">
              Showcasing the innovative work of computer science students and
              fostering connections between academia and industry.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors p-2 rounded-full bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-white/5">
            <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-sm">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects"
                  className="text-white/80 hover:text-red-400 dark:hover:text-red-300 transition-colors drop-shadow-sm"
                >
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-white/80 hover:text-red-400 dark:hover:text-red-300 transition-colors drop-shadow-sm"
                >
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-lg p-6 border border-white/10 dark:border-white/5">
            <h3 className="text-lg font-semibold mb-4 text-white drop-shadow-sm">
              Contact Info
            </h3>
            <div className="space-y-2 text-white/80 dark:text-white/70">
              <div className="flex items-center drop-shadow-sm">
                <Mail className="w-4 h-4 mr-2 text-red-400 dark:text-red-300" />
                <span className="text-sm">info@life.au.edu</span>
              </div>
              <p className="text-sm drop-shadow-sm">
                Computer Science Department
              </p>
              <p className="text-sm drop-shadow-sm">Assumption University</p>
              <p className="text-sm drop-shadow-sm">Sydney, NSW 2000</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-white/10 mt-8 py-8 text-center bg-white/5 dark:bg-white/3 backdrop-blur-sm rounded-lg ">
          <p className="text-white/70 dark:text-white/60 text-sm drop-shadow-sm">
            © {new Date().getFullYear()} Life.AU - Assumption University. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
