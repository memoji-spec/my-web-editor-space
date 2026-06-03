import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "future-of-generative-ai",
    category: "AI & Innovation",
    title: "The Future of Generative AI in Enterprise",
    excerpt: "How generative AI is reshaping enterprise workflows and unlocking new opportunities for digital transformation.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=600&fit=crop",
    date: "March 28, 2026",
  },
  {
    slug: "scaling-infrastructure",
    category: "Engineering",
    title: "Scaling Infrastructure for Modern Applications",
    excerpt: "Best practices for building scalable, reliable infrastructure that grows with your business.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop",
    date: "March 20, 2026",
  },
  {
    slug: "design-systems-that-scale",
    category: "Design",
    title: "Design Systems That Scale With Your Team",
    excerpt: "How a thoughtful design system keeps product velocity high as your team and surface area grow.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&h=600&fit=crop",
    date: "March 12, 2026",
  },
  {
    slug: "payments-in-emerging-markets",
    category: "Fintech",
    title: "Building Payments for Emerging Markets",
    excerpt: "Lessons from shipping a payment gateway built for African businesses with global ambitions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop",
    date: "March 4, 2026",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-[#0a0f1f] overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 text-white" style={{ background: "linear-gradient(180deg, #0a2b6e 0%, #050b1f 60%, #000000 100%)" }}>
        <div className="max-w-7xl mx-auto section-padding">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 text-[#93C5FD]">
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-3xl"
          >
            Notes from the build floor.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 text-lg text-white/70 max-w-2xl leading-relaxed">
            Ideas, lessons, and product thinking from the Pentagonware team.
          </motion.p>
        </div>
      </section>

      {/* Articles grid tile layout */}
      <section className="py-20 md:py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group h-full rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-[0_10px_40px_-20px_rgba(6,33,97,0.15)] hover:shadow-[0_20px_60px_-20px_rgba(6,33,97,0.25)] transition-shadow"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1F63ED]">{post.category}</span>
                    <h3 className="font-display font-semibold text-xl mt-3 text-[#0a0f1f] group-hover:text-[#1F63ED] transition-colors">{post.title}</h3>
                    <p className="mt-3 text-sm text-[#0a0f1f]/65 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <p className="text-xs text-[#0a0f1f]/50">{post.date}</p>
                      <ArrowRight size={14} className="text-[#1F63ED] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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
