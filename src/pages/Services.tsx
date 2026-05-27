import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers, Zap, Shield, Database, Globe, CheckCircle2 } from "lucide-react";
import integratedImg from "@/assets/consulting/integrated.png";
import reliabilityImg from "@/assets/consulting/reliability.png";
import whatWeDoImg from "@/assets/what-we-do-desktop.png";

const services = [
  { icon: Code2, title: "Custom SaaS Development", desc: "Bespoke platforms tailored to your operations — architected, built, and shipped end-to-end.", features: ["Full-stack delivery", "Cloud-native", "CI/CD pipelines", "Performance tuned"] },
  { icon: Layers, title: "API Development & Integration", desc: "Robust APIs and integrations that quietly connect every tool you already depend on.", features: ["REST & GraphQL", "Third-party integrations", "Webhook systems", "Versioned docs"] },
  { icon: Zap, title: "AI & Machine Learning", desc: "Automate workflows, surface insights, and build experiences that learn with your business.", features: ["Custom models", "NLP & vision", "Predictive analytics", "RAG pipelines"] },
  { icon: Shield, title: "Enterprise Security", desc: "Compliance-grade controls embedded from the first commit, not bolted on later.", features: ["Pen testing", "Security audits", "Compliance frameworks", "Encryption"] },
  { icon: Database, title: "Database Architecture", desc: "Schemas and data layers designed to scale with you without re-platforming every year.", features: ["Schema design", "Migration strategy", "Performance tuning", "Warehousing"] },
  { icon: Globe, title: "Digital Transformation", desc: "Modernize legacy stacks and automate the manual processes slowing your teams down.", features: ["Process automation", "Legacy modernization", "Cloud migration", "Digital strategy"] },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#06122e] text-white overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero — Brex inspired */}
      <section className="relative pt-20 md:pt-28 pb-24 md:pb-36">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 600px at 80% 20%, rgba(31,99,237,0.35), transparent 60%), radial-gradient(900px 500px at 10% 80%, rgba(11,77,204,0.35), transparent 60%), linear-gradient(180deg, #06122e 0%, #050b1f 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 text-[#93C5FD]">Our Services</p>
            <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Engineering that compounds.<br />
              <span className="text-white/60">Built to ship.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              From custom platforms to AI systems and enterprise security — we deliver software that ships fast and runs forever.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold gap-2 shadow-none">
                  Get started <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-lg border-white/20 bg-white/5 text-white hover:bg-white/10 font-bold">
                  Talk to us
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative">
            <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img src={whatWeDoImg} alt="Pentagonware engineering workspace" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto section-padding py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { s: "54+", l: "Projects shipped" },
            { s: "95%", l: "Customer satisfaction" },
            { s: "4", l: "Production products" },
            { s: "99.9%", l: "Uptime delivered" },
          ].map((x) => (
            <div key={x.l}>
              <p className="font-display font-semibold text-3xl md:text-4xl text-white">{x.s}</p>
              <p className="text-sm text-white/60 mt-1">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#93C5FD]">What we deliver</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
              Six practices. One delivery team.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl p-8 ring-1 ring-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] hover:ring-[#1F63ED]/40 transition"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1F63ED]/15 ring-1 ring-[#1F63ED]/30 flex items-center justify-center text-[#93C5FD] mb-6">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 size={14} className="text-[#93C5FD] shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature split — Consulting */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src={integratedImg} alt="Integrated consulting" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#93C5FD]">Integrated consulting</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-5">
              Strategy and engineering, under one roof.
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              We pair senior engineers with product strategists so you ship the right thing, the right way, the first time.
            </p>
            <Link to="/contact">
              <Button className="bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold gap-2 shadow-none">
                Start a project <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature split — Reliability */}
      <section className="py-24 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src={reliabilityImg} alt="Reliability and performance" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#93C5FD]">Performance & reliability</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-5">
              Built to perform. Wired to last.
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Observability, automated recovery, and capacity built in from day one — so your team sleeps at night.
            </p>
            <Link to="/contact">
              <Button className="bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold gap-2 shadow-none">
                See how <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto section-padding">
          <div className="rounded-3xl p-12 md:p-20 text-center ring-1 ring-white/10" style={{ background: "linear-gradient(135deg, #1F63ED 0%, #0B4DCC 100%)" }}>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.04em] text-white">Build what's next with us.</h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">Tell us what you're building. We'll bring the engineers.</p>
            <Link to="/contact">
              <Button size="lg" className="mt-8 bg-white text-[#0B4DCC] hover:bg-white/90 rounded-lg font-bold gap-2 shadow-none">
                Get started <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
