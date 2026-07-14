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
  {
    title: "Data Science & AI Advanced Full Course",
    provider: "Udemy",
    period: "Apr – Jul 2026",
    duration: "48.5 hours",
    summary:
      "Expanded my understanding of data science and artificial intelligence through a structured course that progressed from core concepts to more advanced analytical and machine-learning topics.",
    topics: ["Data science", "Machine learning", "Artificial intelligence"],
  },
  {
    title: "Software Architecture and Clean Code Design in OOP",
    provider: "Udemy",
    period: "Mar – Jul 2026",
    duration: "98.5 hours",
    summary:
      "Studied software architecture, object-oriented design, and clean-code practices for creating applications that are easier to understand, maintain, test, and extend.",
    topics: ["Software architecture", "Clean code", "Object-oriented design"],
  },
  {
    title: "Code Reviews for Secure, Clean, and Scalable Code",
    provider: "Udemy",
    period: "Mar – Jul 2026",
    duration: "23.5 hours",
    summary:
      "Learned practical code-review techniques for assessing security, readability, maintainability, and scalability while providing clear and constructive feedback.",
    topics: ["Code review", "Secure coding", "Code quality"],
  },
  {
    title: "Technopreneurship: Pemanfaatan Teknologi dalam Pengembangan Bisnis",
    provider: "Telkom University",
    period: "Nov 2025",
    summary:
      "Explored how technology can support business development, create new opportunities, and improve operational efficiency and productivity.",
    topics: ["Technopreneurship", "Business development", "Digital innovation"],
  },
  {
    title: "Leadership: Selling Ideas, Personal Branding, dan Motivating Others",
    provider: "Telkom University",
    period: "Oct – Nov 2025",
    summary:
      "Developed foundational leadership skills in presenting and selling ideas, public speaking, building a professional personal brand, influencing others, and motivating team members.",
    topics: ["Leadership", "Personal branding", "Public speaking"],
  },
  {
    title: "Relationship Management",
    provider: "Telkom University",
    period: "Oct – Nov 2025",
    summary:
      "Learned how to build stronger interpersonal relationships through effective communication, collaboration, and a better understanding of differences in personality and perspective.",
    topics: [
      "Relationship management",
      "Interpersonal communication",
      "Team collaboration",
    ],
  },
  {
    title:
      "Dicoding Developer Coaching: Make Your Application Themes Attractive with Material Design",
    provider: "Dicoding Indonesia",
    period: "May 2022",
    summary:
      "Joined a developer coaching session on applying Material Design principles in Flutter to create application themes and interfaces that are consistent, attractive, and easy to use.",
    topics: ["Flutter", "Material Design", "UI development"],
  },
  {
    title: "Machine Learning Study Jam 2022",
    provider: "Data Science Club UMM",
    period: "Apr 2022",
    summary:
      "Participated in a machine-learning study program covering foundational data-science concepts and the process of moving from basic theory to model implementation.",
    topics: ["Machine learning", "Data science", "Model implementation"],
  },
];