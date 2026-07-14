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
    status: "Completed",
    summary:
      "A Spotify-inspired music application built with the MERN stack, featuring authentication, admin-managed music content, media uploads, playback, favorites, playlists, queue management, and listening history.",
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
  {
    title: "YouTube Sentiment Analysis Dashboard",
    category: "Machine learning and data analysis",
    year: "2026",
    status: "Completed",
    summary:
      "An interactive dashboard for analyzing sentiment in YouTube comments. It includes dataset exploration, sentiment filtering, text visualization, model evaluation, and real-time sentiment prediction.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "Linear SVM"],
    githubUrl:
      "https://github.com/farrellokajaya/Youtube-Sentiment-Analysis-Dashboard",
  },
  {
  title: "CareerFlow",
  category: "Full-stack web application",
  year: "2026",
  status: "In development",
  summary:
    "A job application tracking platform for managing companies, job applications, application stages, and recruitment progress through a structured dashboard.",
  technologies: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Auth.js",
    "Tailwind CSS"],
  githubUrl:
    "https://github.com/farrellokajaya/careerflow",
  }
];