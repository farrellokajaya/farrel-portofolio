import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web development, machine learning, data analysis, and academic projects by Farrel Lokajaya.",
};

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      eyebrow="Projects"
      title="Selected development and data projects"
      description="This page will display full-stack, frontend, backend, machine learning, natural language processing, and sentiment analysis projects."
    />
  );
}