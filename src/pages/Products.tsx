import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Server, CreditCard, GraduationCap, Clipboard, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aiStudioSvg from "@/assets/pentagonware-ai-studio.svg";
import hostingSvg from "@/assets/pentagonware-hosting.svg";
import paySvg from "@/assets/pentagonware-pay.svg";
import academicSuiteSvg from "@/assets/pentagonware-academic-suite.svg";

const products = [
  {
    icon: Sparkles,
    name: "Pentmini 2.0",
    tagline: "AI-Powered Image Generation",
    description: "Generate hyper realistic images of yourself and studio ready images without a single prompt. Powered by our proprietary AI models.",
    features: ["Hyper-realistic generation", "Studio-quality output", "No prompts needed", "Batch processing"],
    illustration: aiStudioSvg,
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    icon: Server,
    name: "Penthost",
    tagline: "Enterprise Hosting Solutions",
    description: "Secure, scalable, and lightning-fast hosting solutions engineered for optimal website and application performance.",
    features: ["99.9% uptime SLA", "Auto-scaling", "Edge CDN", "SSL included"],
    illustration: hostingSvg,
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    icon: CreditCard,
    name: "Pentapay",
    tagline: "Payment Processing Gateway",
    description: "Integrate robust payment processing with ease. Our gateway ensures secure, efficient, and reliable financial operations.",
    features: ["PCI DSS compliant", "Multi-currency", "Real-time analytics", "Fraud detection"],
    illustration: paySvg,
    color: "from-pink-500/10 to-pink-500/5",
  },
  {
    icon: GraduationCap,
    name: "AcadSuite",
    tagline: "Academic Management Platform",
    description: "A comprehensive platform for modern education, streamlining administration and enhancing learning outcomes.",
    features: ["Student management", "Automated grading", "Analytics dashboard", "Parent portal"],
    illustration: academicSuiteSvg,
    color: "from-indigo-500/10 to-indigo-500/5",
  },
  {
    icon: Clipboard,
    name: "NerdClip",
    tagline: "Smart Academic Workflows",
    description: "Our platform for smarter academic workflows, helping students and educators organize, collaborate, and achieve more.",
    features: ["Smart scheduling", "Resource sharing", "Collaboration tools", "Progress tracking"],
    illustration: null,
    color: "from-teal-500/10 to-teal-500/5",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold tracking-widest uppercase mb-4 text-accent"
          >
            Our Products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Reliable and consistent tools with zero effort
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Give every department the tailored tools they need to run smooth operations, with no extra development or maintenance.
          </motion.p>
        </div>
      </section>

      {/* Products */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto section-padding space-y-16">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-2xl border border-border overflow-hidden bg-gradient-to-br ${product.color}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                <div className="flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-6">
                    <product.icon size={24} />
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">{product.tagline}</p>
                  <h2 className="font-display font-extrabold text-2xl md:text-3xl text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button className="bg-brand text-primary-foreground hover:bg-brand/90 rounded-lg font-bold gap-2 w-fit">
                      Learn More <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  {product.illustration ? (
                    <img src={product.illustration} alt={product.name} className="max-h-[300px] w-auto object-contain opacity-80" />
                  ) : (
                    <div className="w-full h-[250px] rounded-xl bg-brand/5 border border-border flex items-center justify-center">
                      <product.icon size={64} className="text-brand/20" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
