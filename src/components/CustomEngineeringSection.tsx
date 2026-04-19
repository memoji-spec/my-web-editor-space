import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import whatWeDoDesktop from "@/assets/what-we-do-desktop.png";
import whatWeDoMobile from "@/assets/what-we-do-mobile.png";

const pillars = [
  {
    title: "Custom SaaS",
    desc: "Tailored platforms engineered to solve your most complex operational challenges.",
  },
  {
    title: "API Integrations",
    desc: "Connect tools and systems for seamless data exchange.",
  },
  {
    title: "AI Solutions",
    desc: "Bring intelligence into your workflows with AI agents and predictive systems.",
  },
  {
    title: "Office Workflow Automation",
    desc: "Automate tasks to improve efficiency.",
  },
];

const CustomEngineeringSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #062161 0%, #02112E 60%, #000000 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
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
            className="order-1"
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3" style={{ color: "#93C5FD" }}>
              What We Do
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-primary-foreground leading-tight">
              Custom engineering, without limits.
            </h2>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
              Beyond our ecosystem, we design and engineer bespoke software
              that scales with your ambition; from intelligent SaaS to
              enterprise-grade integrations.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[3px] p-5 bg-primary-foreground/[0.04] border border-primary-foreground/10 hover:bg-primary-foreground/[0.08] transition-colors"
                >
                  <h3 className="text-primary-foreground font-semibold text-base">
                    {p.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link to="/services" className="inline-block mt-10">
              <Button
                className="rounded-[3px] text-primary-foreground font-semibold px-6 py-5"
                style={{ backgroundColor: "#1F63ED" }}
              >
                See all services
              </Button>
            </Link>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[14px] overflow-hidden border border-primary-foreground/10 order-2 aspect-square lg:aspect-auto lg:h-[560px]"
          >
            <img
              src={whatWeDoMobile}
              alt="Pentagonware custom engineering"
              className="w-full h-full object-cover lg:hidden"
              loading="lazy"
            />
            <img
              src={whatWeDoDesktop}
              alt="Pentagonware custom engineering"
              className="w-full h-full object-cover hidden lg:block"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomEngineeringSection;
