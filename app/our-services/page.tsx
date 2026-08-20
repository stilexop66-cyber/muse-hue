import HeroSection from "./HeroSection";
import OurServicesSection from "./OurServicesSection";
import AddOnSection from "./AddOnSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <OurServicesSection />
      <AddOnSection />
    </main>
  );
}