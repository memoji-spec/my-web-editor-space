import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Compass, CheckCircle2 } from "lucide-react";

const goals = [
  "Build reliable systems that solve real operational challenges",
  "Create tools that are simple to use yet powerful in function",
  "Support businesses in moving away from manual and disconnected processes",
  "Continuously improve our solutions to meet evolving needs",
  "Deliver technology that balances innovation with practicality",
];

const About = () => {
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
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground"
          >
            About <span className="text-brand">Pentagonware</span> Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Pentagonware Technologies is a technology company focused on building practical, reliable, and scalable digital solutions for modern businesses and users.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-brand/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent">Our Story</p>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6">
                Building Connected Systems
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We design and develop systems that simplify complex processes — from business operations and financial record management to academic platforms and intelligent tools. Our approach is centered on structure, usability, and real-world application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rather than offering isolated tools, we build connected systems that help organizations operate more efficiently, maintain clarity in their processes, and adapt to evolving digital needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                label: "Our Mission",
                title: "Simplify Complex Processes",
                desc: "To simplify complex processes through well-structured digital solutions that improve how businesses and individuals manage their operations, data, and everyday workflows. We aim to replace fragmented tools and manual systems with unified platforms that bring clarity, control, and efficiency.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                title: "A Trusted Provider",
                desc: "To become a trusted provider of intelligent and practical digital systems that support how organizations operate, grow, and adapt in a changing world. We envision a future where businesses rely on connected systems — not scattered tools — to manage their processes with confidence.",
              },
              {
                icon: Compass,
                label: "Our Goals",
                title: "Building for Impact",
                desc: "We focus on building reliable systems that solve real operational challenges, creating tools that are simple to use yet powerful in function, and delivering technology that balances innovation with practicality.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-5">
                  <item.icon size={24} />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">{item.label}</p>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Goals list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-10 md:p-16"
          >
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-primary-foreground mb-8">
              What We're Working Towards
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {goals.map((goal) => (
                <div key={goal} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                  <p className="text-primary-foreground/80 text-sm">{goal}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6">
              Experience That Spans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
              With experience spanning web platforms, enterprise systems, and emerging technologies, we work with businesses of all sizes to deliver solutions that are both functional and sustainable.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "50+", label: "Projects Delivered" },
              { stat: "20+", label: "Enterprise Clients" },
              { stat: "5+", label: "Products Built" },
              { stat: "99.9%", label: "Uptime" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display font-extrabold text-4xl text-brand">{s.stat}</p>
                <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
