import { motion, Variants } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import ProductsSection from "@/components/ProductsSection";
import CustomEngineeringSection from "@/components/CustomEngineeringSection";
import PicCollageSection from "@/components/PicCollageSection";
import ConsultingReliabilitySection from "@/components/ConsultingReliabilitySection";
import NutshellSection from "@/components/NutshellSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const ease = [0.16, 1, 0.3, 1] as const;

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.1, ease } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease } },
  },
  blurUp: {
    hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease } },
  },
};

const sectionMap: Array<{ Component: React.ComponentType; variant: keyof typeof variants }> = [
  { Component: ProductsSection, variant: "fadeUp" },
  { Component: CustomEngineeringSection, variant: "blurUp" },
  { Component: PicCollageSection, variant: "zoomIn" },
  { Component: ConsultingReliabilitySection, variant: "slideLeft" },
  { Component: NutshellSection, variant: "fadeIn" },
  { Component: TestimonialsSection, variant: "slideRight" },
  { Component: CTASection, variant: "zoomIn" },
  { Component: InsightsSection, variant: "fadeUp" },
];

const Index = () => {
  useSmoothScroll();
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <motion.div
        variants={variants.fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <TrustedBySection />
      </motion.div>
      {sectionMap.map(({ Component, variant }, i) => (
        <motion.div
          key={i}
          variants={variants[variant]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Component />
        </motion.div>
      ))}
      <Footer />
    </div>
  );
};

export default Index;
