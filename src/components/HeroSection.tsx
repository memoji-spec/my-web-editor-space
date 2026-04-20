import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DottedSurface from "@/components/DottedSurface";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#EAF0FA" }}
    >
      {/* Eager background image — loads with the page, no flash */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Three.js dotted overlay (sits on lower half visually) */}
      <DottedSurface />

      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6 -mt-32 md:-mt-40">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground"
          style={{ letterSpacing: "-0.03em" }}
        >
          Engineering the
          <br />
          Future of{" "}
          <span style={{ color: "#D61F1F" }}>Digital</span>
          <span className="text-foreground">...</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed"
        >
          Pentagonware builds intelligent, AI-powered products and bespoke
          <br className="hidden md:block" />
          {" "}solutions that simplify complexity and drive scalable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <Link to="/products">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-base text-primary-foreground rounded-[3px] font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: "#1F63ED" }}
            >
              Explore Our Ecosystem <ArrowRight size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
