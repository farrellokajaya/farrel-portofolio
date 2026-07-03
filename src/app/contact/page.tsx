import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Farrel Lokajaya through email, LinkedIn, or GitHub for professional opportunities and collaboration.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact"
      title="Let us connect and build something valuable"
      description="This page will provide email, LinkedIn, GitHub, location information, and a downloadable CV."
    />
  );
}