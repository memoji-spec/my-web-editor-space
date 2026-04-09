import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "future-of-generative-ai",
    category: "AI & Innovation",
    title: "The Future of Generative AI in Enterprise",
    excerpt: "Discover how generative AI is reshaping enterprise workflows and creating new opportunities for digital transformation across industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    date: "March 28, 2026",
    author: "Pentagonware Team",
    featured: true,
  },
  {
    slug: "scaling-infrastructure",
    category: "Engineering",
    title: "Scaling Infrastructure for Modern Applications",
    excerpt: "Learn best practices for building scalable, reliable infrastructure that grows with your business needs.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    date: "March 20, 2026",
    author: "Pentagonware Team",
  },
  {
    slug: "secure-payment-processing",
    category: "Security",
    title: "Secure Payment Processing in 2026",
    excerpt: "Explore the latest standards and technologies for ensuring secure, compliant payment processing at scale.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    date: "March 15, 2026",
    author: "Pentagonware Team",
  },
  {
    slug: "digital-transformation-education",
    category: "Education",
    title: "Digital Transformation in Academic Institutions",
    excerpt: "How modern educational platforms are revolutionizing student engagement and institutional management.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    date: "March 10, 2026",
    author: "Pentagonware Team",
  },
  {
    slug: "edge-computing-rise",
    category: "Cloud",
    title: "The Rise of Edge Computing in 2026",
    excerpt: "Understanding edge computing's role in reducing latency and improving performance for global applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    date: "March 5, 2026",
    author: "Pentagonware Team",
  },
  {
    slug: "ai-powered-business-operations",
    category: "AI & Innovation",
    title: "AI-Powered Business Operations: A Practical Guide",
    excerpt: "A comprehensive guide to integrating AI into your business operations for maximum efficiency and growth.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    date: "February 28, 2026",
    author: "Pentagonware Team",
  },
];

const Blog = () => {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-extrabold text-4xl md:text-5xl text-foreground mb-12"
          >
            The Pentagonware Blog
          </motion.h1>

          {/* Featured */}
          {featured && (
            <Link to={`/blog/${featured.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 group cursor-pointer border border-border"
              >
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-xs font-semibold tracking-wider uppercase text-accent mb-4">{featured.category}</span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                  <p className="mt-6 text-xs text-muted-foreground">{featured.date}</p>
                </div>
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>
            </Link>
          )}
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-xl overflow-hidden aspect-[3/2] mb-4">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-accent">{post.category}</span>
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors mt-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <p className="mt-3 text-xs text-muted-foreground">{post.date}</p>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
