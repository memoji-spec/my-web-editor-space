import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const FloatingOrb = ({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: string; color: string }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      scale: [1, 1.1, 0.95, 1],
    }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute rounded-full blur-3xl pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, background: color, opacity: 0.25 }}
  />
);

const GridLines = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(hsl(var(--accent) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent) / 0.4) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />
);

const ParticleField = () => (
  <>
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -400],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 6 + Math.random() * 6,
          repeat: Infinity,
          delay: i * 0.4,
          ease: "linear",
        }}
        className="absolute w-[3px] h-[3px] rounded-full bg-accent/60"
        style={{ left: `${5 + i * 4.5}%`, bottom: "0%" }}
      />
    ))}
  </>
);

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity: opacityFade, scale }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-10 md:pt-14"
    >
      <FloatingOrb delay={0} x="70%" y="10%" size="500px" color="hsl(223 45% 46%)" />
      <FloatingOrb delay={2} x="-5%" y="50%" size="450px" color="hsl(220 72% 20%)" />
      <FloatingOrb delay={4} x="50%" y="60%" size="350px" color="hsl(0 75% 48%)" />
      <FloatingOrb delay={1} x="30%" y="20%" size="300px" color="hsl(260 60% 40%)" />
      <GridLines />
      <ParticleField />

      <motion.div
        animate={{ x: ["-120%", "220%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 5 }}
        className="absolute top-0 left-0 w-[30%] h-full pointer-events-none hidden md:block"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.06), transparent)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <motion.div style={{ y: yParallax }} className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-brand"
          style={{ letterSpacing: "-0.03em" }}
        >
          Engineering the
          <br />
          Future of{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-red"
          >
            Digital
          </motion.span>
          <span className="text-brand">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          Pentagonware builds intelligent, AI-powered products and bespoke solutions
          that simplify complexity and drive scalable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button size="lg" className="gap-2 px-8 py-6 text-base bg-brand text-primary-foreground hover:bg-brand/90 rounded-full font-bold shadow-lg shadow-brand/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand/30 hover:scale-[1.02]">
            Explore Our Ecosystem <ArrowRight size={16} />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2.5 rounded-full bg-muted-foreground/50"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;