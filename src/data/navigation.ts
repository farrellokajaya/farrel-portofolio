export const navigationItems = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "About",
    href: "/#about",
    sectionId: "about",
  },
  {
    label: "Projects",
    href: "/#projects",
    sectionId: "projects",
  },
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
  },
  {
    label: "Training",
    href: "/#training",
    sectionId: "training",
  },
  {
    label: "Skills",
    href: "/#skills",
    sectionId: "skills",
  },
  {
    label: "Contact",
    href: "/#contact",
    sectionId: "contact",
  },
] as const;

export type NavigationSectionId =
  (typeof navigationItems)[number]["sectionId"];