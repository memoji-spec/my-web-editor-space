import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Compass, CheckCircle2 } from "lucide-react";
import collageImg from "@/assets/collage/p2.png";
import workingTowardsAsset from "@/assets/working-towards.png.asset.json";

const workingTowardsImg = workingTowardsAsset.url;

const goals = [
  "Build reliable systems that solve real operational challenges",
  "Create tools that are simple to use yet powerful in function",
  "Help businesses move away from manual, disconnected processes",
  "Continuously improve our solutions to meet evolving needs",
  "Deliver technology that balances innovation with practicality",
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-[#0a0f1f] overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-24 md:pb-32 text-white" style={{ background: "linear-gradient(180deg, #0a2b6e 0%, #050b1f 60%, #000000 100%)" }}>
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
      <section className="border-y border-black/5 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto section-padding py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { s: "54+", l: "Projects shipped" },
            { s: "30+", l: "Team members" },
            { s: "4", l: "Products in market" },
            { s: "95%", l: "Customer satisfaction" },
          ].map((x) => (
            <div key={x.l}>
              <p className="font-display font-semibold text-3xl md:text-4xl text-[#0a0f1f]">{x.s}</p>
              <p className="text-sm text-[#0a0f1f]/60 mt-1">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Goals */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#1F63ED]">What drives us</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-[#0a0f1f]">
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
                className="rounded-2xl p-8 ring-1 ring-black/5 bg-white shadow-[0_10px_40px_-20px_rgba(6,33,97,0.15)]"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1F63ED]/10 ring-1 ring-[#1F63ED]/20 flex items-center justify-center text-[#1F63ED] mb-6">
                  <item.icon size={20} />
                </div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1F63ED] mb-2">{item.label}</p>
                <h3 className="font-display font-semibold text-xl mb-3 text-[#0a0f1f]">{item.title}</h3>
                <p className="text-sm text-[#0a0f1f]/65 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story centered text only */}
      <section className="py-24 md:py-32 bg-[#f8f7f4]">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#1F63ED]">Our story</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-8 text-[#0a0f1f]">
              Solutions for almost every industry.
            </h2>
            <p className="text-[#0a0f1f]/75 leading-relaxed mb-5">
              Founded in 2018, Pentagonware Technologies aims to offer IT solutions to businesses in almost every industry. Through our innovative solutions, we can help solve your business issues. Whether you need a website, software, a tool, a portal, IT consultations, digital marketing services, cloud-based solutions, blockchain solutions, or more, we offer everything.
            </p>
            <p className="text-[#0a0f1f]/75 leading-relaxed">
              Our team of experts can provide tailored IT solutions to businesses in industries such as aerospace, agriculture, marketing, education, banking, finance, law firms, auto dealers, religious institutes, restaurants, hotels, real estate, health, media industry, and entertainment, thus, everyone out there. We have a wealth of experience and knowledge in each of these industries and can provide bespoke IT solutions that will help your business to succeed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What we're working towards */}
      <section className="py-24 md:py-32 bg-[#eef0f3]">
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-2 rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_10px_40px_-20px_rgba(6,33,97,0.15)]">
            <img src={workingTowardsImg} alt="What we're working towards" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:order-1">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#1F63ED]">What we're working towards</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-6 text-[#0a0f1f]">
              Goals that guide every release.
            </h2>
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[#0a0f1f]/80">
                  <CheckCircle2 size={18} className="text-[#1F63ED] mt-0.5 shrink-0" /> <span>{g}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
