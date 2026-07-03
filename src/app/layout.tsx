import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

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

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}