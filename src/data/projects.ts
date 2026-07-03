export type ProjectStatus = "Completed" | "In development";

export type Project = {
  title: string;
  category: string;
  year: string;
  status: ProjectStatus;
  summary: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    title: "Soundify",
    category: "Full-stack web application",
    year: "2026",
    status: "In development",
    summary:
      "A Spotify-inspired music application built with the MERN stack. The project is being developed in structured milestones, including authentication, music management, and playback features.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    githubUrl: "https://github.com/farrellokajaya/Spotify_MERN",
  },
  {
    title: "Laravel Ecommerce",
    category: "Full-stack ecommerce",
    year: "2026",
    status: "Completed",
    summary:
      "An ecommerce application with separate user and admin workflows, product management, cart and checkout, Stripe payment, order tracking, and invoice support.",
    technologies: ["Laravel", "PHP", "MariaDB", "Blade", "Stripe"],
    githubUrl: "https://github.com/farrellokajaya/Laravel_Ecommerce",
  },
  {
    title: "Expense & Budget Visualizer",
    category: "Frontend web application",
    year: "2026",
    status: "Completed",
    summary:
      "A responsive expense and budget dashboard for recording transactions and visualizing spending against a defined budget.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl:
      "https://github.com/farrellokajaya/CodingCamp-22June26-farrellokajaya",
    liveUrl:
      "https://farrellokajaya.github.io/CodingCamp-22June26-farrellokajaya/",
  },
];