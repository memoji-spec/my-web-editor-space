import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, ArrowRight, Users, Lightbulb, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Users, title: "Exceptional People", desc: "Our strength comes from the team we've built and continue to grow." },
  { icon: Lightbulb, title: "Act on Bright Ideas", desc: "We encourage bold thinking and creative problem-solving." },
  { icon: Heart, title: "Care Deeply", desc: "We care about the quality of our work and the people it serves." },
  { icon: Rocket, title: "Ship with Speed", desc: "We move fast without compromising on quality or reliability." },
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
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight">
                Build systems that matter. Ship with speed. Deliver real impact.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Here we ask hard questions and build better answers. Join us to solve real problems for real people.
              </p>
              <a href="#open-positions">
                <Button size="lg" className="mt-8 bg-brand text-primary-foreground hover:bg-brand/90 rounded-lg font-bold gap-2">
                  See open roles <ArrowRight size={16} />
                </Button>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto section-padding grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "2020", label: "Founding year" },
            { stat: "30+", label: "Team members" },
            { stat: "5+", label: "Products" },
            { stat: "100%", label: "Remote-friendly" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-extrabold text-3xl text-brand">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
              We hire people who embody a builder mentality
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-4">
                  <v.icon size={20} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
              Open Positions
            </h2>
            <p className="mt-4 text-muted-foreground">Find your next role at Pentagonware.</p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand/30 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-foreground">{pos.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{pos.department}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin size={14} /> {pos.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={14} /> {pos.type}
                  </span>
                  <Link to="/contact">
                    <Button size="sm" variant="outline" className="rounded-lg text-xs gap-1">
                      Apply <ArrowRight size={12} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
