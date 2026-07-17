import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { EducationSection } from "@/components/home/education-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { TrainingSection } from "@/components/home/training-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <ExperienceSection />
      <TrainingSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}