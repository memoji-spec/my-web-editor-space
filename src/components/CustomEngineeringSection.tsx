import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, Shield, Lightbulb, Cog } from "lucide-react";
import TerminalAnimation from "@/components/TerminalAnimation";

const capabilities = [
  { icon: Code2, label: "Custom SaaS" },
  { icon: Layers, label: "API Integrations" },
  { icon: Zap, label: "AI Solutions" },
  { icon: Shield, label: "Enterprise Security" },
];

const features = [
  { icon: Lightbulb, title: "Intelligent Design", desc: "Solutions architected with precision and purpose." },
  { icon: Cog, title: "Seamless Integration", desc: "Works with your existing tools and workflows." },
  { icon: Shield, title: "Built for Scale", desc: "Enterprise-grade from day one." },
];

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

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium backdrop-blur-sm cursor-default"
              >
                <cap.icon size={16} />
                {cap.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="text-primary-foreground font-semibold text-lg">{f.title}</h3>
              <p className="text-primary-foreground/60 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Terminal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TerminalAnimation />
        </motion.div>
      </div>
    </section>
  );
};

export default CustomEngineeringSection;
