export type TrainingItem = {
  title: string;
  provider: string;
  period: string;
  summary: string;
  topics: string[];
  duration?: string;
  credentialUrl?: string;
};

export const trainingItems: TrainingItem[] = [
  {
    title: "Intro to Software Engineering",
    provider: "RevoU",
    period: "Jun 2026",
    summary:
      "Completed an online introduction to software engineering covering the software development process, programming fundamentals, and the responsibilities of a software engineer.",
    topics: [
      "Software engineering fundamentals",
      "Development lifecycle",
      "Programming basics",
    ],
  },
  {
    title: "AI for Work & Career Readiness with Google AI Products",
    provider: "HACKTIV8",
    period: "May – Jun 2026",
    summary:
      "Learned how generative AI and Google AI products can support career preparation and everyday productivity, including CV development, interview preparation, and professional planning.",
    topics: ["Generative AI", "Google AI tools", "Career readiness"],
  },
];