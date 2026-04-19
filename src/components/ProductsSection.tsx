import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import nerdclipImg from "@/assets/ecosystem/nerdclip.png";
import invoicepentImg from "@/assets/ecosystem/invoicepent.png";
import pentimageImg from "@/assets/ecosystem/pentimage.png";
import pentapayImg from "@/assets/ecosystem/pentapay.png";

type Product = {
  name: string;
  descPrefix: string;
  highlight: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Nerdclip",
    descPrefix: "Platform for ",
    highlight: "modern education",
    image: nerdclipImg,
  },
  {
    name: "InvoicePent",
    descPrefix: "Invoicing, receipts, inventory, and operations ",
    highlight: "all in one.",
    image: invoicepentImg,
  },
  {
    name: "PentPic",
    descPrefix: "Generate high quality images without using ",
    highlight: "prompts.",
    image: pentimageImg,
  },
  {
    name: "PentaPay",
    descPrefix: "Payment gateway tailored for ",
    highlight: "businesses.",
    image: pentapayImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-brand-blue">
            Our Ecosystem
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Smart software for modern business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((p, index) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[10px] overflow-hidden p-7 md:p-9 flex flex-col justify-between min-h-[440px]"
              style={{ backgroundColor: "#062161" }}
            >
              <div>
                <h3
                  className="font-display font-light text-xs tracking-wide mb-3"
                  style={{ color: "#93C5FD" }}
                >
                  {p.name}
                </h3>
                <p className="font-display font-semibold text-2xl md:text-[26px] leading-snug text-primary-foreground max-w-sm">
                  {p.descPrefix}
                  <span style={{ color: "#93C5FD" }}>{p.highlight}</span>
                </p>
                <Link to="/products" className="inline-block mt-6">
                  <Button
                    className="rounded-[3px] text-primary-foreground font-semibold px-5"
                    style={{ backgroundColor: "#1F63ED" }}
                  >
                    Learn more
                  </Button>
                </Link>
              </div>

              <div className="img-zoom mt-6 rounded-[10px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
