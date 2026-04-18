import { motion } from "framer-motion";
import { Cpu, Workflow, ShieldCheck, Sparkles } from "lucide-react";
import whatWeDoImg from "@/assets/what-we-do.png";

const pillars = [
  {
    icon: Cpu,
    title: "Custom SaaS",
    desc: "Tailored platforms engineered to solve your most complex operational challenges.",
  },
  {
    icon: Workflow,
    title: "Seamless Integrations",
    desc: "Built to talk to the tools you already use — no friction, no rebuilds.",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    desc: "Bring intelligence into your workflows with AI agents and predictive systems.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Production-grade infrastructure with security baked in from day one.",
  },
];

const CustomEngineeringSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(222 89% 20%) 0%, hsl(222 70% 8%) 60%, hsl(0 0% 0%) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-brand-highlight">
              What We Do
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight">
              Custom engineering, without limits.
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
              Beyond our ecosystem, we design and engineer bespoke software
              that scales with your ambition — from intelligent SaaS to
              enterprise-grade integrations.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[3px] p-5 bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[3px] bg-brand-highlight/20 text-brand-highlight flex items-center justify-center mb-3">
                    <p.icon size={18} />
                  </div>
                  <h3 className="text-primary-foreground font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[3px] overflow-hidden border border-primary-foreground/10"
          >
            <img
              src={whatWeDoImg}
              alt="Pentagonware custom engineering"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomEngineeringSection;
