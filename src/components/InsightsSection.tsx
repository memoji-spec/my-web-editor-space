import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import nutshellThumb from "@/assets/nutshell-thumbnail.png";

const articles = [
  {
    category: "AI & Innovation",
    title: "The Future of Generative AI in Enterprise",
    description:
      "Discover how generative AI is reshaping enterprise workflows and creating new opportunities for digital transformation.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop",
  },
  {
    category: "Engineering",
    title: "Scaling Infrastructure for Modern Applications",
    description:
      "Learn best practices for building scalable, reliable infrastructure that grows with your business needs.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Pentagonware in a nutshell */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-brand-blue">
              Pentagonware in a Nutshell
            </p>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Watch how we engineer the future of digital.
            </h2>
          </div>

          <div className="img-zoom relative aspect-video rounded-[3px] overflow-hidden bg-muted group cursor-pointer max-w-5xl mx-auto">
            <img
              src={nutshellThumb}
              alt="Pentagonware in a nutshell"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play
                  size={28}
                  className="text-brand-blue ml-1"
                  fill="currentColor"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Insights articles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-brand-blue">
            Insights
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-3xl">
            Trending insights on artificial intelligence.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
            >
              <div className="img-zoom relative rounded-[3px] mb-5 aspect-[3/2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-[3px] bg-background/90 backdrop-blur-sm text-brand-blue">
                  {article.category}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-foreground group-hover:text-brand-blue transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {article.description}
              </p>

              <Link
                to="/blog"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:gap-2 transition-all"
              >
                Read More <ArrowUpRight size={14} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
