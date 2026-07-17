export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  summary: string;
  highlights: readonly string[];
};

export const educationItems: readonly EducationItem[] = [
  {
    degree: "Bachelor of Informatics Engineering",
    institution: "Telkom University",
    location: "Bandung, Indonesia",
    summary:
      "Completed undergraduate studies in Informatics Engineering with experience applying software development, data analysis, and machine-learning concepts through academic and personal projects.",
    highlights: ["GPA: 3.09/4.00"],
  },
];