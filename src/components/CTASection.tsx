import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div
          className="relative overflow-hidden py-20 md:py-24 px-8 md:px-16"
          style={{ backgroundColor: "#1664F0", borderRadius: "24px" }}
        >
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              Build What's Next
            </h2>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl mx-auto">
              With Pentagonware you can create intelligent systems and scalable
              solutions that move your business forward.
            </p>
            <div className="mt-9 flex items-center justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base gap-2 bg-primary-foreground text-[#1664F0] hover:bg-primary-foreground/90 rounded-[3px] font-semibold shadow-lg"
                >
                  Get free Consultation <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
