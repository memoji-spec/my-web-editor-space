import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setFormData({ firstName: "", lastName: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#06122e] text-white overflow-hidden">
      <AnnouncementBar />
      <Navbar />

      <section className="relative pt-20 md:pt-28 pb-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1100px 560px at 80% 10%, rgba(31,99,237,0.3), transparent 60%), radial-gradient(900px 500px at 10% 90%, rgba(11,77,204,0.3), transparent 60%), linear-gradient(180deg, #06122e 0%, #050b1f 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-5 text-[#93C5FD]">Contact</p>
            <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Let's talk.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
              Tell us what you're building, where you're stuck, or what you want to ship next. We respond within 24 hours.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit}
              className="lg:col-span-3 rounded-2xl p-8 md:p-10 ring-1 ring-white/10 bg-white/[0.03] space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-white/80 mb-2 block">First name</label>
                  <Input value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/40" placeholder="Angel" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-white/80 mb-2 block">Last name</label>
                  <Input value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/40" placeholder="Philips" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Work email</label>
                <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/40" placeholder="name@company.com" required />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Company</label>
                <Input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/40" placeholder="Acme Corp." />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">How can we help?</label>
                <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="rounded-lg bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[140px]" placeholder="Tell us about your project" required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#1F63ED] hover:bg-[#1F63ED]/90 text-white rounded-lg font-bold shadow-none">
                Send message
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-2 space-y-5"
            >
              {[
                { icon: Mail, title: "Email", desc: "hello@pentagonware.com", detail: "Typical reply within 24 hours." },
                { icon: Phone, title: "Call", desc: "+1 (555) 000-0000", detail: "Mon–Fri, 9am to 6pm." },
                { icon: MapPin, title: "Visit", desc: "Lagos, Nigeria", detail: "Available for in-person meetings." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.02] flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#1F63ED]/15 ring-1 ring-[#1F63ED]/30 flex items-center justify-center text-[#93C5FD] shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base">{item.title}</h3>
                    <p className="text-[#93C5FD] font-medium text-sm mt-1">{item.desc}</p>
                    <p className="text-xs text-white/55 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
