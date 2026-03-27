import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVenture Inc.",
    quote: "Pentagonware's AI Studio transformed our creative workflow. We're shipping 3x faster than before.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "CEO, CloudScale Systems",
    quote: "The hosting infrastructure is rock-solid. Zero downtime in 18 months. Exactly what we needed.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Finance, Global Payments Co.",
    quote: "Pentagonware Pay integrated seamlessly. Our transaction success rate improved by 12%.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Director, Education Tech Solutions",
    quote: "The Academic Suite is a game-changer for institutions. Our adoption rate exceeded expectations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-24 md:py-32 bg-muted/60">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">
            Social Proof
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          <div className="max-w-3xl">
            <Quote className="mb-4 text-accent/20" size={48} />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <p className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-snug">
                  "{testimonials[current].quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <motion.img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex absolute right-0 top-8 flex-col gap-3"
          >
            {testimonials.map((t, i) => (
              <motion.button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                animate={{
                  scale: i === current ? 1.15 : 0.9,
                  opacity: i === current ? 1 : 0.5,
                }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className={`w-12 h-12 rounded-full object-cover transition-all duration-300 ${
                    i === current ? "ring-2 ring-accent shadow-lg" : "ring-1 ring-border"
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>

          <div className="flex gap-3 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronRight size={18} />
            </button>
            <div className="flex items-center gap-2 ml-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;