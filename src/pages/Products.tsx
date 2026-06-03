import { motion } from "framer-motion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import nerdclipImg from "@/assets/ecosystem/nerdclip.png";
import invoicepentImg from "@/assets/ecosystem/invoicepent.png";
import pentimageImg from "@/assets/ecosystem/pentimage.png";
import pentapayImg from "@/assets/ecosystem/pentapay.png";


const products = [
  {
    name: "Nerdclip",
    tagline: "Platform for modern education",
    headline: "Manage your academic life in one place.",
    body: "Showcase your profile, research, courses, and sell content.",
    features: ["Custom Website", "Course Management", "Sell Your Content", "Publication Showcase and lots more"],
    image: nerdclipImg,
    accent: "#062161",
  },
  {
    name: "InvoicePent",
    tagline: "Invoicing, receipts, inventory all in one",
    headline: "Handle invoices, receipts, and inventory within one connected system.",
    body: "Issue invoices, track payments, manage stock, and keep clean books without juggling five tools.",
    features: ["Invoice Management", "Receipt Management", "Inventory Management", "Track System Activity and lots more"],
    image: invoicepentImg,
    accent: "#062161",
  },
  {
    name: "PentPic",
    tagline: "Studio-grade images without prompts",
    headline: "Generate hyper-real images of yourself no prompt engineering required.",
    body: "Powered by our proprietary models. Upload a few photos and get studio-ready visuals in seconds.",
    features: ["Hyper-real generation", "Studio quality", "No prompts needed", "Batch export"],
    image: pentimageImg,
    accent: "#062161",
  },
  {
    name: "PentaPay",
    tagline: "Payment gateway tailored for businesses",
    headline: "Take payments anywhere. Reconcile everything in one ledger.",
    body: "A modern gateway built for African businesses with global ambitions. PCI-compliant, multi-currency, instant payouts.",
    features: ["PCI DSS compliant", "Multi-currency", "Realtime analytics", "Fraud detection"],
    image: pentapayImg,
    accent: "#062161",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#0a0f1f]">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Owner inspired, huge bold */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto section-padding text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.045em]"
          >
            Products engineered <br className="hidden md:block" />
            to power your <span className="text-[#1F63ED]">modern business.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-7 text-lg md:text-xl text-[#0a0f1f]/70 max-w-2xl mx-auto leading-relaxed"
          >
            Smart software for modern business
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-9">
            <Link to="/contact">
              <Button size="lg" className="bg-[#062161] hover:bg-[#062161]/90 text-white rounded-lg font-bold gap-2 shadow-none px-7">
                Get a free demo <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product stack */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto section-padding space-y-8 md:space-y-10">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[28px] overflow-hidden ring-1 ring-black/5 shadow-[0_30px_80px_-40px_rgba(6,33,97,0.35)]"
              style={{ backgroundColor: p.accent }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-0 min-h-[360px]">
                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center text-white">
                  <p className="text-xs font-light tracking-wide text-[#93C5FD] mb-4">{p.name}</p>
                  <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] max-w-xl">
                    {p.headline}
                  </h2>
                  <p className="mt-5 text-white/70 leading-relaxed max-w-xl">{p.body}</p>
                  <ul className="mt-7 grid grid-cols-2 gap-y-2 gap-x-4 max-w-xl">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/85">
                        <CheckCircle2 size={14} className="text-[#93C5FD] shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link to="/contact">
                      <Button className="bg-white text-[#062161] hover:bg-white/90 rounded-lg font-bold gap-2 shadow-none">
                        Learn more <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative bg-[#041648] flex items-end justify-center overflow-hidden">
                  <motion.img
                    initial={{ scale: 1.05 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />


      <Footer />
    </div>
  );
};

export default Products;
