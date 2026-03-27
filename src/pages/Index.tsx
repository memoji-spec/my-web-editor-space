import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import CustomEngineeringSection from "@/components/CustomEngineeringSection";
import BlackRecreationSection from "@/components/BlackRecreationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <CustomEngineeringSection />
      <BlackRecreationSection />
      <TestimonialsSection />
      <CTASection />
      <InsightsSection />
      <Footer />
    </div>
  );
};

export default Index;