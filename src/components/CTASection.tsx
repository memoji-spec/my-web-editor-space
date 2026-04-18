import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div
          className="relative rounded-[3px] overflow-hidden py-20 md:py-28 px-8 md:px-16"
          style={{ backgroundColor: "#1664F0" }}
        >
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-primary-foreground/10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-primary-foreground/10" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              Bring Structure to Your Business Records
            </h2>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl mx-auto">
              Manage invoices, receipts, and inventory with clarity and
              control — all in one system.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex items-center justify-center"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-10 py-6 text-lg gap-2 bg-primary-foreground text-[#1664F0] hover:bg-primary-foreground/90 rounded-[3px] font-bold shadow-xl"
                >
                  Book a Demo <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
