import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesOverview from "@/components/ServicesOverview";
import ProjectsSection from "@/components/ProjectsSection";
import OurProcess from "@/components/OurProcess";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import GlobalCTA from "@/components/GlobalCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ServicesOverview />
      <ProjectsSection />
      <OurProcess />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <GlobalCTA />
    </>
  );
}
