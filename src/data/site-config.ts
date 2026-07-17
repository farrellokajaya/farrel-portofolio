export type SocialLink = {
  label: string;
  href: string;
  displayValue: string;
};

type SiteConfig = {
  name: string;
  initials: string;
  location: string;
  status: string;
  headline: string;
  description: string;
  email: string;
  cvUrl: string;
  profileImage: {
    src: string;
    alt: string;
  };
  socialLinks: {
    github: SocialLink;
    linkedin: SocialLink;
    instagram: SocialLink;
  };
};

export const siteConfig = {
  name: "Farrel Lokajaya",
  initials: "FL",
  location: "Bandung, Indonesia",
  status: "Fresh Graduate in Informatics Engineering",
  headline: "Fresh Graduate · Web Developer · Data Science",
  description:
    "Portfolio of Farrel Lokajaya, a fresh graduate in Informatics Engineering with interests in full-stack web development, backend development, machine learning, natural language processing, and data analysis.",
  email: "farrellokajaya1@gmail.com",
  cvUrl: "/documents/Farrel-Lokajaya-CV.pdf",
  profileImage: {
    src: "/images/profile/farrel-profile.jpg",
    alt: "Portrait of Farrel Lokajaya",
  },
  socialLinks: {
    github: {
      label: "GitHub",
      href: "https://github.com/farrellokajaya",
      displayValue: "github.com/farrellokajaya",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/farrellokajaya",
      displayValue: "linkedin.com/in/farrellokajaya",
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/farrellokajayaa",
      displayValue: "instagram.com/farrellokajayaa",
    },
  },
} as const satisfies SiteConfig;