import { useState, useRef, useEffect } from "react";
import type React from "react";
import { ArrowUpRight } from "lucide-react";

interface Article {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const articles: Article[] = [
  {
    title: "The Future of Generative AI in Enterprise",
    description: "How generative AI is reshaping enterprise workflows.",
    year: "2026",
    link: "/blog",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop",
  },
  {
    title: "Scaling Infrastructure for Modern Applications",
    description: "Best practices for scalable, reliable infrastructure.",
    year: "2026",
    link: "/blog",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop",
  },
];

const InsightsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (s: number, e: number, f: number) => s + (e - s) * f;
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section id="insights" className="py-24 md:py-32" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="max-w-3xl mx-auto section-padding">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-brand-blue">
            Insights
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Trending Insights
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Stay ahead of the curve with the latest perspectives on AI-powered
            innovation and digital transformation.
          </p>
        </div>

        <section
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full"
        >
          <div
            className="pointer-events-none fixed z-50 overflow-hidden rounded-[3px] shadow-2xl hidden md:block"
            style={{
              left: containerRef.current?.getBoundingClientRect().left ?? 0,
              top: containerRef.current?.getBoundingClientRect().top ?? 0,
              transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="relative w-[300px] h-[190px] bg-secondary overflow-hidden">
              {articles.map((a, i) => (
                <img
                  key={a.title}
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
                  style={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    transform: hoveredIndex === i ? "scale(1)" : "scale(1.1)",
                    filter: hoveredIndex === i ? "none" : "blur(10px)",
                  }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-0">
            {articles.map((a, i) => (
              <a
                key={a.title}
                href={a.link}
                className="group block"
                onMouseEnter={() => {
                  setHoveredIndex(i);
                  setIsVisible(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setIsVisible(false);
                }}
              >
                <div className="relative py-6 border-t border-border/60 transition-all duration-300 ease-out">
                  <div
                    className={`absolute inset-0 -mx-4 px-4 bg-background/50 rounded-[3px] transition-all duration-300 ease-out ${
                      hoveredIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center gap-2">
                        <h3 className="text-foreground font-display font-semibold text-xl md:text-2xl tracking-tight">
                          <span className="relative">
                            {a.title}
                            <span
                              className={`absolute left-0 -bottom-0.5 h-px bg-foreground transition-all duration-300 ease-out ${
                                hoveredIndex === i ? "w-full" : "w-0"
                              }`}
                            />
                          </span>
                        </h3>
                        <ArrowUpRight
                          className={`w-5 h-5 text-muted-foreground transition-all duration-300 ease-out ${
                            hoveredIndex === i
                              ? "opacity-100 translate-x-0 translate-y-0"
                              : "opacity-0 -translate-x-2 translate-y-2"
                          }`}
                        />
                      </div>
                      <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground tabular-nums shrink-0 mt-2">
                      {a.year}
                    </span>
                  </div>
                </div>
              </a>
            ))}
            <div className="border-t border-border/60" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default InsightsSection;
