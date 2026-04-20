import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "NerdClip has made it much easier to organize my academic work in one place. I can manage my courses, share my research, and keep everything structured without relying on multiple tools. It's simple, practical, and actually useful.",
    name: "Professor Ayorinde",
    role: "Department of Computer Science, University of Ibadan",
  },
  {
    quote:
      "Pentagonware's Sales tool helped us bring our invoices, receipts, and inventory into one place. It reduced the need for spreadsheets and made it easier to keep track of records. Everything is more organized and easier to manage now.",
    name: "Paul",
    role: "Operations Manager, Bain Energies",
  },
  {
    quote:
      "Working with the team was a smooth experience. They understood our requirements clearly and delivered a solution that fits our operations. The system has improved how we handle our internal processes.",
    name: "Michael",
    role: "CEO, FC Superwheels",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 md:py-28" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="max-w-4xl mx-auto section-padding text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-8 text-brand-blue">
          Reviews
        </p>

        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center">
          <Quote
            className="absolute -top-2 left-1/2 -translate-x-1/2 text-brand-blue/15"
            size={64}
          />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <p className="font-display text-lg md:text-2xl text-foreground leading-relaxed max-w-3xl mx-auto">
                "{reviews[current].quote}"
              </p>
              <div className="mt-8">
                <p className="font-semibold text-foreground">{reviews[current].name}</p>
                <p className="text-sm text-muted-foreground mt-1">{reviews[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="w-10 h-10 rounded-[3px] border border-border/60 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-[3px] transition-all ${
                  i === current ? "w-8 bg-brand-blue" : "w-3 bg-foreground/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next review"
            className="w-10 h-10 rounded-[3px] border border-border/60 bg-background text-foreground hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
