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
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground">
              Contact us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with us to discuss your needs and explore collaboration opportunities. We're here to assist you and value your input.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input
                    placeholder="Angel"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input
                    placeholder="Philips"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="rounded-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Work Email</label>
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                <Input
                  placeholder="Acme Corp."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">How can we help you?</label>
                <Textarea
                  placeholder="Share your requirements"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-brand text-primary-foreground hover:bg-brand/90 rounded-lg font-bold">
                Submit
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {[
                { icon: Mail, title: "Email Us", desc: "hello@pentagonware.com", detail: "We typically respond within 24 hours." },
                { icon: Phone, title: "Call Us", desc: "+1 (555) 000-0000", detail: "Mon-Fri from 9am to 6pm." },
                { icon: MapPin, title: "Visit Us", desc: "Lagos, Nigeria", detail: "Available for in-person meetings." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-accent font-medium text-sm">{item.desc}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
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
