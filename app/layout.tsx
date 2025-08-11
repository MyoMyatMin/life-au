import { ThemeProvider } from "@/components/common/themeProvider";
import "./globals.css";

import { ReactNode } from "react";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
