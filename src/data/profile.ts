import { siteConfig } from "@/data/site-config";

export type ProfileDetail = {
  label: string;
  value: string;
};

export const profileContent = {
  availability:
    "Open to Junior Web Development or Junior Data Science opportunities",

  heroSummary:
    "I build modern web applications and data-driven solutions designed to solve real-world problems.",

  aboutTitle: "A little about me",

  aboutParagraphs: [
    "I'm a fresh graduate in Informatics Engineering with an interest in building useful and accessible web applications. I enjoy working across web development, data analysis, and machine learning.",

    "During my internship at Nutrifood, I gained experience working with Django, admin dashboards, and data visualization. I also continue developing personal projects to strengthen my full-stack development and problem-solving skills.",

    "I value clean implementation, practical solutions, and continuous learning. I'm currently looking for an opportunity where I can contribute while continuing to grow as a developer.",
  ],

  contactTitle: "Let's work together",

  contactDescription:
    "I'm currently open to junior web development opportunities, internships, and projects where I can contribute while continuing to grow as a developer.",
} as const;

export const profileDetails: readonly ProfileDetail[] = [
  {
    label: "Status",
    value: siteConfig.status,
  },
  {
    label: "Experience",
    value: "Web Developer Intern",
  },
  {
    label: "Focus",
    value: "Web Development & Data",
  },
];