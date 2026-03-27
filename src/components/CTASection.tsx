import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MicroParticles = () => (
  <>
    {[...Array(18)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -350], opacity: [0, 0.4, 0] }}
        transition={{
          duration: 6 + Math.random() * 4,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "linear",
        }}
        className="absolute w-0.5 h-0.5 rounded-full bg-primary-foreground/30"
        style={{ left: `${5 + i * 5}%`, bottom: "-5px" }}
      />
    ))}
  </>
);

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-28 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-ring/80" />
      <div className="absolute inset-0 opacity-[0.10]" style={{
        backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <motion.div
        animate={{ opacity: [0.04, 0.10, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[50%] h-full"
        style={{ background: "linear-gradient(225deg, hsl(var(--accent) / 0.15), transparent 60%)" }}
      />
      <MicroParticles />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
            Build What's <span className="text-brand-green">Next</span>.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-xl mx-auto">
            With Pentagonware you can create intelligent systems and scalable solutions
            that move your business forward.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="px-10 py-6 text-lg gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-bold shadow-xl"
            >
              Get Started Today <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;