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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=700&fit=crop",
    date: "March 28, 2026",
    featured: true,
  },
  {
    slug: "scaling-infrastructure",
    category: "Engineering",
    title: "Scaling Infrastructure for Modern Applications",
    excerpt: "Best practices for building scalable, reliable infrastructure that grows with your business.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop",
    date: "March 20, 2026",
  },
];

const Blog = () => {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#06122e] text-white overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1100px 560px at 80% 20%, rgba(31,99,237,0.3), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(11,77,204,0.3), transparent 60%), linear-gradient(180deg, #06122e 0%, #050b1f 100%)",
          }}
        />
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

      {/* Featured */}
      {featured && (
        <section className="pb-12">
          <div className="max-w-7xl mx-auto section-padding">
            <Link to={`/blog/${featured.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02] grid grid-cols-1 lg:grid-cols-2"
              >
                <div className="overflow-hidden order-2 lg:order-1 aspect-[4/3] lg:aspect-auto">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center order-1 lg:order-2">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#93C5FD] mb-4">{featured.category}</span>
                  <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight group-hover:text-[#93C5FD] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-white/70 leading-relaxed">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3 text-sm text-white/60">
                    <span>{featured.date}</span>
                    <ArrowRight size={14} className="text-[#93C5FD]" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </section>
      )}

      {/* Rest */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post, i) => (
              <Link to={`/blog/${post.slug}`} key={post.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02]"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#93C5FD]">{post.category}</span>
                    <h3 className="font-display font-semibold text-xl mt-3 group-hover:text-[#93C5FD] transition-colors">{post.title}</h3>
                    <p className="mt-3 text-sm text-white/65 line-clamp-2">{post.excerpt}</p>
                    <p className="mt-5 text-xs text-white/50">{post.date}</p>
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
