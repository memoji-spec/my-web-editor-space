import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle2 } from "lucide-react";

type Job = {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  essentials: string[];
  niceToHave: string[];
};

const jobs: Record<string, Job> = {
  "senior-frontend-engineer": {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "We're hiring a Senior Frontend Engineer to shape the user-facing surface of our product ecosystem. You'll partner with design and backend engineers to ship polished, performant interfaces used by thousands of businesses.",
    responsibilities: [
      "Build and own complex React features end-to-end across our product suite",
      "Define frontend architecture patterns and raise the quality bar for the team",
      "Collaborate closely with designers to translate Figma into pixel-perfect UI",
      "Profile and optimize performance on real devices and real networks",
    ],
    essentials: [
      "5+ years building production web apps with React and TypeScript",
      "Strong CSS fundamentals and a portfolio of refined interfaces",
      "Experience with state management, async patterns, and testing",
      "Comfortable owning ambiguous problems from spec to ship",
    ],
    niceToHave: ["Experience with Tailwind and shadcn/ui", "Familiarity with motion libraries", "Open source contributions"],
  },
  "backend-engineer-nodejs": {
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Join the platform team to design and operate the backend services that power our product suite. You'll work on APIs, data pipelines, and the infrastructure that keeps everything fast and reliable.",
    responsibilities: [
      "Design, build, and maintain scalable Node.js services",
      "Model data and own database schemas in Postgres",
      "Write resilient APIs with strong typing and clear contracts",
      "Participate in on-call rotation and incident response",
    ],
    essentials: [
      "4+ years of backend experience with Node.js and TypeScript",
      "Strong SQL skills, preferably with Postgres",
      "Solid understanding of distributed systems and observability",
      "Care for code quality, testing, and clean abstractions",
    ],
    niceToHave: ["Experience with event-driven architectures", "Familiarity with payments or fintech", "Open source contributions"],
  },
  "product-designer": {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for a Product Designer who can move fluidly between research, interaction design, and high-fidelity visual work. You'll own surfaces across our products and partner deeply with engineering.",
    responsibilities: [
      "Lead design across multiple product surfaces from discovery to launch",
      "Run lightweight research, prototype rapidly, and validate with users",
      "Contribute to and evolve our shared design system",
      "Partner with engineers to ship work that meets the original intent",
    ],
    essentials: [
      "4+ years designing complex digital products",
      "A portfolio that shows craft, range, and product thinking",
      "Strong Figma skills and comfort prototyping interactions",
      "Excellent written and verbal communication",
    ],
    niceToHave: ["Experience designing for fintech, edtech, or AI products", "Front-end coding comfort", "Motion design sensibility"],
  },
  "ai-ml-engineer": {
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "Remote",
    type: "Full-time",
    description:
      "Help us push the limits of what our AI products can do. You'll work on training, fine-tuning, and serving models that power features used by real customers every day.",
    responsibilities: [
      "Design, train, and evaluate models for production use cases",
      "Build evaluation harnesses and feedback loops to keep quality climbing",
      "Optimize inference for cost, latency, and reliability",
      "Partner with product to translate research into shipped features",
    ],
    essentials: [
      "Strong foundations in modern ML, especially LLMs and diffusion models",
      "Comfort with PyTorch and the modern training/inference stack",
      "Track record of shipping ML systems to production",
      "Ability to communicate research clearly to non-experts",
    ],
    niceToHave: ["Publications or open source ML work", "Experience with image generation pipelines", "GPU infrastructure experience"],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description:
      "Own and evolve the infrastructure that runs our products. You'll work on CI/CD, observability, security, and the cloud platform that everything else builds on.",
    responsibilities: [
      "Design and maintain CI/CD pipelines and deployment workflows",
      "Own observability, alerting, and incident response tooling",
      "Improve developer experience for engineers shipping every day",
      "Drive cost, performance, and security improvements across the stack",
    ],
    essentials: [
      "4+ years in DevOps, SRE, or platform engineering roles",
      "Deep experience with cloud providers (AWS, GCP, or similar)",
      "Strong scripting skills and infrastructure-as-code experience",
      "Solid grasp of networking, security, and Linux fundamentals",
    ],
    niceToHave: ["Kubernetes experience", "Experience operating Postgres at scale", "Background working with payments infrastructure"],
  },
  "technical-writer": {
    title: "Technical Writer",
    department: "Content",
    location: "Remote",
    type: "Contract",
    description:
      "Help us write documentation, guides, and developer-facing content that makes our products easier to adopt and love.",
    responsibilities: [
      "Write and maintain product documentation across the suite",
      "Produce developer guides, API references, and tutorials",
      "Collaborate with engineers and PMs to keep content accurate",
      "Improve information architecture and discoverability",
    ],
    essentials: [
      "3+ years writing technical content for developers or product users",
      "Excellent writing samples that show clarity and craft",
      "Comfort reading code and exploring APIs",
      "Self-directed and able to manage your own pipeline",
    ],
    niceToHave: ["Experience with docs-as-code workflows", "Background in fintech or AI products", "Editorial or content strategy chops"],
  },
};

const JobDetail = () => {
  const { slug } = useParams();
  const job = slug ? jobs[slug] : undefined;
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Navbar />
        <div className="py-32 text-center">
          <h1 className="font-display font-bold text-3xl text-[#0a0f1f]">Job not found</h1>
          <Link to="/careers" className="text-[#1F63ED] mt-4 inline-block">← Back to careers</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white text-[#0a0f1f] overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 md:pt-28 pb-16 text-white" style={{ background: "linear-gradient(180deg, #0a2b6e 0%, #050b1f 60%, #000000 100%)" }}>
        <div className="max-w-5xl mx-auto section-padding">
          <Link to="/careers" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} /> All jobs
          </Link>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-4 text-[#93C5FD]">{job.department}</p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">{job.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/70">
              <span className="flex items-center gap-2"><MapPin size={14} /> {job.location}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {job.type}</span>
              <span className="flex items-center gap-2"><Briefcase size={14} /> {job.department}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto section-padding grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-semibold text-2xl text-[#0a0f1f] mb-3">About the role</h2>
              <p className="text-[#0a0f1f]/75 leading-relaxed">{job.description}</p>
            </motion.div>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-xl mb-4 text-[#0a0f1f]">What you'll do</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-[#0a0f1f]/75 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#1F63ED] mt-0.5 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-xl mb-4 text-[#0a0f1f]">Essentials</h3>
              <ul className="space-y-3">
                {job.essentials.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-[#0a0f1f]/75 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#1F63ED] mt-0.5 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h3 className="font-display font-semibold text-xl mb-4 text-[#0a0f1f]">Nice to have</h3>
              <ul className="space-y-3">
                {job.niceToHave.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-[#0a0f1f]/75 leading-relaxed">
                    <CheckCircle2 size={16} className="text-[#1F63ED]/60 mt-0.5 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application form */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl ring-1 ring-black/5 bg-[#f8f7f4] p-7 shadow-[0_10px_40px_-20px_rgba(6,33,97,0.15)]">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-[#1F63ED]/10 ring-1 ring-[#1F63ED]/20 flex items-center justify-center text-[#1F63ED] mx-auto mb-4">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-[#0a0f1f]">Application submitted</h3>
                  <p className="mt-2 text-sm text-[#0a0f1f]/65">Thanks for applying. We'll review your application and be in touch if there's a fit.</p>
                  <Link to="/careers" className="inline-block mt-6">
                    <Button className="bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold gap-2 shadow-none">
                      <ArrowLeft size={14} /> Back to all jobs
                    </Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-semibold text-xl text-[#0a0f1f] mb-1">Apply for this role</h3>
                  <p className="text-xs text-[#0a0f1f]/60 mb-4">Tell us a bit about you. CV required.</p>
                  <div>
                    <label className="block text-xs font-semibold text-[#0a0f1f]/70 mb-1.5">Full name</label>
                    <input required type="text" className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F63ED]/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0a0f1f]/70 mb-1.5">Email</label>
                    <input required type="email" className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F63ED]/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0a0f1f]/70 mb-1.5">Phone (optional)</label>
                    <input type="tel" className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F63ED]/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0a0f1f]/70 mb-1.5">Attach CV (PDF/DOC)</label>
                    <input required type="file" accept=".pdf,.doc,.docx" className="block w-full text-xs text-[#0a0f1f]/70 file:mr-3 file:rounded-md file:border-0 file:bg-[#1F63ED] file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-[#1F63ED]/90" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0a0f1f]/70 mb-1.5">Attach cover letter (optional)</label>
                    <input type="file" accept=".pdf,.doc,.docx,.txt" className="block w-full text-xs text-[#0a0f1f]/70 file:mr-3 file:rounded-md file:border-0 file:bg-white file:ring-1 file:ring-black/10 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-[#0a0f1f] hover:file:bg-black/5" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0a0f1f]/70 mb-1.5">Why this role?</label>
                    <textarea rows={4} className="w-full rounded-lg border border-black/10 bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F63ED]/30" />
                  </div>
                  <Button type="submit" disabled={submitting} className="w-full bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold shadow-none">
                    {submitting ? "Submitting..." : "Submit application"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobDetail;
