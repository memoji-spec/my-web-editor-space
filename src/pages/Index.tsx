import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TrustedBySection from "@/components/TrustedBySection";
import CustomEngineeringSection from "@/components/CustomEngineeringSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      {[
        ProductsSection,
        CustomEngineeringSection,
        TestimonialsSection,
        CTASection,
        InsightsSection,
      ].map((Section, i) => (
        <motion.div
          key={i}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Section />
        </motion.div>
      ))}
      <Footer />
    </div>
  );
};

export default Index;
