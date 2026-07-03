export type ExperienceItem = {
  role: string;
  organization: string;
  type: string;
  period?: string;
  summary: string;
  highlights: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    role: "Web Developer Intern",
    organization: "Nutrifood",
    type: "Internship",
    summary:
      "Contributed to the development of an admin dashboard using Django and supported the presentation of data through clear visualizations.",
    highlights: [
      "Implemented and refined features in a Django-based dashboard.",
      "Prepared and presented data through dashboard visualizations.",
      "Tested, debugged, and improved features based on project requirements.",
    ],
  },
];