import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { BackToTop } from "@/components/ui/back-to-top";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Farrel Lokajaya | Portfolio",
    template: "%s | Farrel Lokajaya",
  },
  description:
    "Portfolio of Farrel Lokajaya, a fresh graduate in Informatics Engineering with interests in full-stack web development, machine learning, and data analysis.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      id="top"
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <div className="flex-1">
              {children}
            </div>

            <Footer />
            <BackToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}