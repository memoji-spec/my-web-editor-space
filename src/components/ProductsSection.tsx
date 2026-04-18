import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import nerdclipImg from "@/assets/ecosystem-nerdclip.jpg";
import invoicepentImg from "@/assets/ecosystem-invoicepent.jpg";
import pentimageImg from "@/assets/ecosystem-pentimage.jpg";
import pentapayImg from "@/assets/ecosystem-pentapay.jpg";

const products = [
  {
    title: "Nerdclip",
    tag: "Academic",
    description:
      "A platform built for educators and students — streamlining lectures, assignments, and academic workflows.",
    image: nerdclipImg,
  },
  {
    title: "InvoicePent",
    tag: "Finance",
    description:
      "Effortless invoicing and receipts. Send branded documents and track payments in one organised place.",
    image: invoicepentImg,
  },
  {
    title: "Pentimage",
    tag: "AI Studio",
    description:
      "Transform rough shots into hyper-realistic studio imagery with a single click. Powered by Pentagonware AI.",
    image: pentimageImg,
  },
  {
    title: "Pentapay",
    tag: "Payments",
    description:
      "Secure, fast, and reliable payment infrastructure for businesses of every size.",
    image: pentapayImg,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 text-brand-blue">
            Our Ecosystem
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Integrated software solutions designed for{" "}
            <span className="text-brand-highlight">modern business</span>{" "}
            and user needs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer rounded-[3px] overflow-hidden bg-card border border-border/60 hover:border-brand-blue/40 transition-colors"
            >
              <div className="img-zoom relative aspect-[16/10] bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-[3px] bg-background/90 backdrop-blur-sm text-brand-blue">
                  {p.tag}
                </span>
              </div>

              <div className="p-7 md:p-8 flex items-start justify-between gap-6">
                <div className="space-y-2 flex-1">
                  <h3 className="font-display font-bold text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <Link
                  to="/products"
                  aria-label={`Learn more about ${p.title}`}
                  className="shrink-0 w-11 h-11 rounded-[3px] bg-brand-highlight/20 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-primary-foreground transition-colors"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
