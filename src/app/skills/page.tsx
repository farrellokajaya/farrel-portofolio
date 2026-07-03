import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills in frontend, backend, databases, machine learning, data analysis, and development tools.",
};

export default function SkillsPage() {
  return (
    <PagePlaceholder
      eyebrow="Skills"
      title="Technologies and development capabilities"
      description="This page will organize technical skills into frontend, backend, database, machine learning, data analysis, and development tool categories."
    />
  );
}