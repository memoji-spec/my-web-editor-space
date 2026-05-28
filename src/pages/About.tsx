import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Compass, CheckCircle2 } from "lucide-react";
import collageImg from "@/assets/collage/p2.png";
import integratedImg from "@/assets/consulting/integrated.png";
import reliabilityImg from "@/assets/consulting/reliability.png";


const goals = [
  "Build reliable systems that solve real operational challenges",
  "Create tools that are simple to use yet powerful in function",
  "Help businesses move away from manual, disconnected processes",
  "Continuously improve our solutions to meet evolving needs",
  "Deliver technology that balances innovation with practicality",
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#050b1f] text-white overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-24 md:pb-32" style={{ background: "linear-gradient(180deg, #0a2b6e 0%, #050b1f 60%, #000000 100%)" }}>


        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 text-[#93C5FD]">About Pentagonware</p>
            <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Practical systems.<br />
              <span className="text-white/60">Built to last.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              We design and ship connected digital systems from business operations to academic platforms and creative AI for teams that have outgrown disconnected tools.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold gap-2 shadow-none">
                  Work with us <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src={collageImg} alt="Pentagonware team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto section-padding py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { s: "54+", l: "Projects shipped" },
            { s: "30+", l: "Team members" },
            { s: "4", l: "Products in market" },
            { s: "95%", l: "Customer satisfaction" },
          ].map((x) => (
            <div key={x.l}>
              <p className="font-display font-semibold text-3xl md:text-4xl text-white">{x.s}</p>
              <p className="text-sm text-white/60 mt-1">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Goals */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#93C5FD]">What drives us</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight">
              A clear mission. A focused vision.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Target, label: "Mission", title: "Simplify complex processes", desc: "Replace fragmented tools and manual systems with unified platforms that bring clarity, control, and efficiency." },
              { icon: Eye, label: "Vision", title: "A trusted provider", desc: "A future where teams rely on connected systems not scattered tools to operate with confidence." },
              { icon: Compass, label: "Goals", title: "Building for impact", desc: "Reliable systems that solve real operational problems while staying simple to use." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl p-8 ring-1 ring-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01]"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1F63ED]/15 ring-1 ring-[#1F63ED]/30 flex items-center justify-center text-[#93C5FD] mb-6">
                  <item.icon size={20} />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-2">{item.label}</p>
                <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story split */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src={integratedImg} alt="Our story" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#93C5FD]">Our story</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-5">
              Connected systems, not scattered tools.
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We design systems that simplify complex processes from operations and finance to academic platforms and intelligent tools with a focus on structure, usability, and real-world application.
            </p>
            <p className="text-white/70 leading-relaxed">
              Rather than offering isolated tools, we build connected systems that help teams operate efficiently and adapt to evolving digital needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Goals list */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <img src={reliabilityImg} alt="What we're building" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#93C5FD]">What we're working towards</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6">
              Goals that guide every release.
            </h2>
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-[#93C5FD] mt-0.5 shrink-0" /> <span>{g}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto section-padding">
          <div className="rounded-3xl p-12 md:p-20 text-center" style={{ background: "linear-gradient(135deg, #1F63ED 0%, #0B4DCC 100%)" }}>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-[-0.04em] text-white">Let's build something useful.</h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">Talk to our team about your operations, products, or roadmap.</p>
            <Link to="/contact">
              <Button size="lg" className="mt-8 bg-white text-[#0B4DCC] hover:bg-white/90 rounded-lg font-bold gap-2 shadow-none">
                Get in touch <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
