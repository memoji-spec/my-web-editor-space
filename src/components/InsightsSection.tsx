import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/2]">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
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
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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