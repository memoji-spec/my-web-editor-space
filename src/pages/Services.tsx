import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code2, Layers, Zap, Shield, ArrowRight, CheckCircle2, Cog, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code2,
    title: "Custom SaaS Development",
    description: "We build bespoke SaaS platforms tailored to your unique business needs. From architecture to deployment, we handle the entire lifecycle.",
    features: ["Full-stack development", "Cloud-native architecture", "CI/CD pipelines", "Performance optimization"],
  },
  {
    icon: Layers,
    title: "API Development & Integration",
    description: "Connect your systems with robust, well-documented APIs. We design and build integrations that work seamlessly with your existing tools.",
    features: ["RESTful & GraphQL APIs", "Third-party integrations", "Webhook systems", "API documentation"],
  },
  {
    icon: Zap,
    title: "AI & Machine Learning Solutions",
    description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences.",
    features: ["Custom AI models", "Natural language processing", "Computer vision", "Predictive analytics"],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Protect your business with enterprise-grade security solutions. We implement comprehensive security measures from the ground up.",
    features: ["Penetration testing", "Security audits", "Compliance frameworks", "Encryption systems"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Design and optimize your data infrastructure for performance, reliability, and scalability at any scale.",
    features: ["Schema design", "Migration strategies", "Performance tuning", "Data warehousing"],
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Transform your business processes with modern digital solutions. We help organizations adapt and thrive in the digital age.",
    features: ["Process automation", "Legacy modernization", "Cloud migration", "Digital strategy"],
  },
];

const benefits = [
  { title: "Easy to setup", icon: Cog, desc: "Get started in days, not months. Our streamlined process ensures rapid deployment." },
  { title: "Infinite possibility", icon: Layers, desc: "Fit into your product, improve continuously, and grow through flexible components." },
  { title: "Integrations & automation", icon: Zap, desc: "10+ integrations and automation tools to streamline your workflows." },
];

const Services = () => {
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
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            Flexible, high-quality digital solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We make product-led growth easier so you can focus on your core product.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-16 bg-background">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                    <b.icon size={16} />
                  </div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-3xl md:text-4xl text-foreground text-center mb-16"
          >
            Everything you need
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-brand/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-6">
                  <service.icon size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-brand-green shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-brand text-primary-foreground hover:bg-brand/90 rounded-lg font-bold gap-2">
                Get Started <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
