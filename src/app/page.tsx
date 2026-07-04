import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}