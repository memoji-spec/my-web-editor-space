import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

const articles = [
  {
    category: "AI & Innovation",
    title: "The Future of Generative AI in Enterprise",
    description: "Discover how generative AI is reshaping enterprise workflows and creating new opportunities for digital transformation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    category: "Engineering",
    title: "Scaling Infrastructure for Modern Applications",
    description: "Learn best practices for building scalable, reliable infrastructure that grows with your business needs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    category: "Security",
    title: "Secure Payment Processing in 2026",
    description: "Explore the latest standards and technologies for ensuring secure, compliant payment processing at scale.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    category: "Education",
    title: "Digital Transformation in Academic Institutions",
    description: "How modern educational platforms are revolutionizing student engagement and institutional management.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  },
  {
    category: "Cloud",
    title: "The Rise of Edge Computing in 2026",
    description: "Understanding edge computing's role in reducing latency and improving performance for global applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
];

const InsightsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement;
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.35;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="insights" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">
              Insights
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground">
              Trending Insights on Artificial Intelligence
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Stay ahead of the curve with the latest perspectives on AI-powered innovation
              and digital transformation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              data-card
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex-shrink-0 w-[85%] md:w-[calc(33.333%-16px)]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-foreground">
                    {article.category}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {article.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                Read More <ArrowUpRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
