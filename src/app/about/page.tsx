import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Farrel Lokajaya, his education, professional interests, values, and career goals.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="My background and professional journey"
      description="This page will present my professional profile, education, values, interests, career goals, and technologies I am currently learning."
    />
  );
}