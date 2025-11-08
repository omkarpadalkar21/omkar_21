import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ScrollingText from "@/components/ScrollingText";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ScrollingText />
      <ContactSection />
    </div>
  );
};

export default Index;
