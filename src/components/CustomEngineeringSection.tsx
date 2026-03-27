import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Layers, Zap, Shield } from "lucide-react";

const capabilities = [
  { icon: Code2, label: "Custom SaaS" },
  { icon: Layers, label: "API Integrations" },
  { icon: Zap, label: "AI Solutions" },
  { icon: Shield, label: "Enterprise Security" },
];

const MicroParticles = () => (
  <>
    {[...Array(14)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -350], opacity: [0, 0.4, 0] }}
        transition={{
          duration: 5 + Math.random() * 4,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "linear",
        }}
        className="absolute w-0.5 h-0.5 rounded-full bg-primary-foreground/25"
        style={{ left: `${7 + i * 6.5}%`, bottom: "-5px" }}
      />
    ))}
  </>
);

const CustomEngineeringSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-ring/60" />
      <div className="absolute inset-0 opacity-[0.10]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <motion.div
        animate={{ opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[50%] h-full"
        style={{ background: "linear-gradient(135deg, hsl(var(--accent) / 0.15), transparent 55%)" }}
      />
      <MicroParticles />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground">
            Custom Engineering, Without Limits.
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
            Beyond our ecosystem, we build custom SaaS platforms engineered to solve complex
            challenges and grow with your business.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium backdrop-blur-sm cursor-default"
              >
                <cap.icon size={16} />
                {cap.label}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-bold shadow-xl px-10 py-6 text-lg"
            >
              View Our Capabilities <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full"
            >
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomEngineeringSection;