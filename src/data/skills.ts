export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "Node.js",
      "Express.js",
    ],
  },
  {
    category: "Data & Machine Learning",
    skills: [
      "Pandas",
      "Scikit-learn",
      "Data Analysis",
      "Natural Language Processing",
      "TF-IDF",
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];