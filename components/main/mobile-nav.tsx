"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/main/theme-toggle";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden h-10 w-10 p-0 text-white hover:bg-white/20 hover:text-white"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] sm:w-[350px] bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-red-900/95 dark:from-blue-950/98 dark:via-blue-900/95 dark:to-red-950/98 backdrop-blur-md border-l border-white/20 dark:border-white/10 text-white"
      >
        <SheetHeader className="text-left border-b border-white/20 dark:border-white/10 pb-4">
          <SheetTitle className="text-left">
            <Link
              href="/"
              className="text-2xl font-bold text-white drop-shadow-lg"
              onClick={() => setOpen(false)}
            >
              Life<span className="text-red-400 dark:text-red-300">.AU</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-6 mt-8">
          <nav className="flex flex-col space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-white/90 hover:text-red-400 dark:hover:text-red-300 transition-colors py-3 px-2 rounded-md hover:bg-white/10 drop-shadow-sm"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 mt-auto border-t border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white/90 drop-shadow-sm">
                Theme
              </span>
              <div className="[&>button]:border-white/30 [&>button]:text-white [&>button]:hover:bg-white/20">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
