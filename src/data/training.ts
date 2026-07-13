export type TrainingItem = {
  title: string;
  provider: string;
  year: string;
  summary: string;
  topics: string[];
  credentialUrl?: string;
};

export const trainingItems: TrainingItem[] = [
  {
    title: "Mini Course Title 1",
    provider: "Course Provider",
    year: "20XX",
    summary:
      "Add a short description of what you learned and how the course supports your professional development.",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
    credentialUrl: "",
  },
  {
    title: "Mini Course Title 2",
    provider: "Course Provider",
    year: "20XX",
    summary:
      "Add a short description of the course, the main material covered, and the practical skills you developed.",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
    credentialUrl: "",
  },
  {
    title: "Mini Course Title 3",
    provider: "Course Provider",
    year: "20XX",
    summary:
      "Add a short description of the course and explain its relevance to web development, data, or machine learning.",
    topics: ["Topic 1", "Topic 2", "Topic 3"],
    credentialUrl: "",
  },
];