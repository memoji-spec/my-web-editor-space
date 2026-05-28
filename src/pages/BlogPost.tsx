import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const articles: Record<string, { title: string; category: string; date: string; image: string; content: string[] }> = {
  "future-of-generative-ai": {
    title: "The Future of Generative AI in Enterprise",
    category: "AI & Innovation",
    date: "March 28, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    content: [
      "Generative AI is no longer a buzzword it's a fundamental shift in how enterprises operate. From automating content creation to streamlining complex decision-making processes, AI-powered tools are becoming integral to modern business strategy.",
      "At Pentagonware, we've been at the forefront of integrating generative AI into enterprise workflows. Our AI Studio platform enables businesses to harness the power of advanced language models, image generation, and predictive analytics without the complexity of building from scratch.",
      "The key to successful AI adoption lies not in the technology itself, but in how it's integrated into existing processes. Organizations that approach AI as an enhancement to human capability rather than a replacement are seeing the greatest returns on investment.",
      "Looking ahead, we expect to see generative AI become even more specialized, with industry-specific models that understand the nuances of healthcare, finance, education, and manufacturing. The enterprises that invest in AI infrastructure today will be the leaders of tomorrow.",
      "Our team continues to push the boundaries of what's possible, developing tools that make AI accessible, reliable, and genuinely useful for everyday business operations.",
    ],
  },
  "scaling-infrastructure": {
    title: "Scaling Infrastructure for Modern Applications",
    category: "Engineering",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    content: [
      "Modern applications demand infrastructure that can scale seamlessly. Whether you're handling thousands or millions of requests, your architecture needs to be built for growth from day one.",
      "At Pentagonware, we've developed Penthost with scalability as a core principle. Our hosting solutions leverage containerization, auto-scaling, and edge computing to ensure your applications perform consistently under any load.",
      "Key principles for scalable infrastructure include horizontal scaling, stateless architecture, caching strategies, and database optimization. These aren't just technical details they directly impact user experience and business outcomes.",
      "We've seen firsthand how proper infrastructure planning can save organizations millions in operational costs while improving reliability and performance. The investment in getting it right from the start always pays dividends.",
    ],
  },
  "secure-payment-processing": {
    title: "Secure Payment Processing in 2026",
    category: "Security",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
    content: [
      "Payment security has evolved dramatically in recent years. With increasing cyber threats and regulatory requirements, businesses need payment solutions that are both secure and user-friendly.",
      "Pentapay was built with security-first architecture, incorporating end-to-end encryption, tokenization, and real-time fraud detection. Our platform ensures that every transaction is protected without compromising the checkout experience.",
      "Compliance with PCI DSS, GDPR, and other regulatory frameworks is not optional it's essential. Our payment gateway handles compliance automatically, so businesses can focus on growth rather than regulatory overhead.",
      "Looking forward, we're investing in biometric authentication, AI-powered fraud prevention, and blockchain-based verification to stay ahead of emerging threats in the payment landscape.",
    ],
  },
  "digital-transformation-education": {
    title: "Digital Transformation in Academic Institutions",
    category: "Education",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop",
    content: [
      "The education sector is undergoing a profound digital transformation. From learning management systems to automated administrative processes, technology is reshaping how institutions operate and how students learn.",
      "AcadSuite was designed to address the unique challenges faced by educational institutions complex scheduling, student engagement, assessment management, and administrative overhead.",
      "Our platform provides a unified system that connects all aspects of academic life, from enrollment to graduation. By eliminating data silos and automating routine tasks, institutions can focus on what matters most: education.",
      "The future of education technology lies in personalization. AI-driven insights can help educators identify struggling students early, adapt curricula to individual learning styles, and provide actionable feedback at scale.",
    ],
  },
  "edge-computing-rise": {
    title: "The Rise of Edge Computing in 2026",
    category: "Cloud",
    date: "March 5, 2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    content: [
      "Edge computing is fundamentally changing how we think about application architecture. By processing data closer to where it's generated, edge computing reduces latency, improves performance, and enables new categories of real-time applications.",
      "At Pentagonware, we're integrating edge computing capabilities into our hosting infrastructure, allowing our clients to deploy applications that respond in milliseconds rather than seconds.",
      "The combination of edge computing with AI creates particularly powerful possibilities from real-time image processing to predictive maintenance in industrial settings.",
      "As 5G networks expand and IoT devices proliferate, edge computing will become increasingly critical. Organizations that build edge-ready architectures today will have a significant competitive advantage.",
    ],
  },
  "ai-powered-business-operations": {
    title: "AI-Powered Business Operations: A Practical Guide",
    category: "AI & Innovation",
    date: "February 28, 2026",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    content: [
      "Implementing AI in business operations doesn't have to be overwhelming. With the right approach, organizations of any size can leverage AI to improve efficiency, reduce costs, and drive growth.",
      "Start with clear objectives. Identify specific processes that would benefit most from automation or intelligent analysis. Common starting points include customer service, data entry, report generation, and supply chain optimization.",
      "Choose tools that integrate with your existing systems. At Pentagonware, we design our AI solutions to work seamlessly with popular business platforms, reducing implementation time and minimizing disruption.",
      "Measure and iterate. AI implementation is not a one-time project it's an ongoing process of refinement. Track key metrics, gather feedback, and continuously improve your AI-powered processes.",
      "Most importantly, invest in your team. AI is most effective when it enhances human capability. Provide training, encourage experimentation, and create a culture that embraces intelligent automation.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const article = articles[slug || ""];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Navbar />
        <div className="py-32 text-center">
          <h1 className="font-display font-bold text-3xl text-foreground">Article not found</h1>
          <Link to="/blog" className="text-accent mt-4 inline-block">← Back to blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto section-padding">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Back to blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent">{article.category}</span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>{article.date}</span>
              <span>·</span>
              <span>Pentagonware Team</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden aspect-[2/1] mb-10"
          >
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {article.content.map((p, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-6">{p}</p>
            ))}
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
