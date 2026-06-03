import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight, Users, Lightbulb, Heart, Rocket } from "lucide-react";
import careersHeroAsset from "@/assets/careers.png.asset.json";
const collageImg = careersHeroAsset.url;


const values = [
  { icon: Users, title: "Exceptional people", desc: "Our strength comes from the team we've built and continue to grow." },
  { icon: Lightbulb, title: "Act on bright ideas", desc: "We encourage bold thinking and creative problem-solving." },
  { icon: Heart, title: "Care deeply", desc: "We care about the quality of our work and the people it serves." },
  { icon: Rocket, title: "Ship with speed", desc: "We move fast without compromising on quality or reliability." },
];

const openPositions = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Backend Engineer (Node.js)", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "Remote", type: "Full-time" },
  { title: "AI/ML Engineer", department: "AI Research", location: "Remote", type: "Full-time" },
  { title: "DevOps Engineer", department: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Technical Writer", department: "Content", location: "Remote", type: "Contract" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-white text-[#0a0f1f] overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-24 text-white" style={{ background: "linear-gradient(180deg, #0a2b6e 0%, #050b1f 60%, #000000 100%)" }}>
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 text-[#93C5FD]">Careers</p>
            <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Build systems that matter.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              We ask hard questions and ship better answers. Join us to solve real problems for real people.
            </p>
            <a href="#open-positions">
              <Button size="lg" className="mt-8 bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold gap-2 shadow-none">
                See open roles <ArrowRight size={16} />
              </Button>
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img src={collageImg} alt="The Pentagonware team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-black/5 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto section-padding py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { s: "2020", l: "Founding year" },
            { s: "30+", l: "Team members" },
            { s: "4", l: "Products in market" },
            { s: "100%", l: "Remote-friendly" },
          ].map((x) => (
            <div key={x.l}>
              <p className="font-display font-semibold text-3xl md:text-4xl text-[#0a0f1f]">{x.s}</p>
              <p className="text-sm text-[#0a0f1f]/60 mt-1">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#1F63ED]">How we work</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-[#0a0f1f]">
              We hire people with a builder's mentality.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl p-7 ring-1 ring-black/5 bg-white shadow-[0_10px_40px_-20px_rgba(6,33,97,0.15)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1F63ED]/10 ring-1 ring-[#1F63ED]/20 flex items-center justify-center text-[#1F63ED] mb-5">
                  <v.icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-[#0a0f1f]">{v.title}</h3>
                <p className="text-sm text-[#0a0f1f]/65 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-positions" className="py-24 bg-[#f8f7f4]">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#1F63ED]">Open roles</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-[#0a0f1f]">Find your next role.</h2>
          </motion.div>
          <div className="rounded-2xl ring-1 ring-black/5 overflow-hidden divide-y divide-black/5 bg-white shadow-[0_10px_40px_-20px_rgba(6,33,97,0.15)]">
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-6 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-black/[0.02] transition"
              >
                <div>
                  <h3 className="font-display font-semibold text-lg text-[#0a0f1f]">{pos.title}</h3>
                  <p className="text-sm text-[#0a0f1f]/60 mt-1">{pos.department}</p>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex items-center gap-1 text-xs text-[#0a0f1f]/60"><MapPin size={14} /> {pos.location}</span>
                  <span className="flex items-center gap-1 text-xs text-[#0a0f1f]/60"><Clock size={14} /> {pos.type}</span>
                  <Link to="/contact">
                    <Button size="sm" className="bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg text-xs gap-1 shadow-none">
                      Apply <ArrowRight size={12} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <CTASection />


      <Footer />
    </div>
  );
};

export default Careers;
