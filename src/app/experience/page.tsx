import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional, internship, organizational, and project-based experience of Farrel Lokajaya.",
};

export default function ExperiencePage() {
  return (
    <PagePlaceholder
      eyebrow="Experience"
      title="Professional and project-based experience"
      description="This page will present internship experience, organizational activities, responsibilities, technologies used, and relevant contributions."
    />
  );
}