import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CallToActionSection } from "@/components/call-to-action-section";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/particle-background";
import { FloatingElements } from "@/components/floating-elements";

export default function Home() {
  return (
    <>
      <ParticleBackground 
        particleCount={16} 
        floatingElementsCount={2}
      />
      <FloatingElements count={4} />
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}
