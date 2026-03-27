import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Server, CreditCard, GraduationCap, ArrowUpRight } from "lucide-react";
import aiStudioSvg from "@/assets/pentagonware-ai-studio.svg";
import hostingSvg from "@/assets/pentagonware-hosting.svg";
import paySvg from "@/assets/pentagonware-pay.svg";
import academicSuiteSvg from "@/assets/pentagonware-academic-suite.svg";

const products = [
  {
    icon: Sparkles,
    title: "Pentmini 2.0",
    description: "Generate hyper realistic images of yourself and studio ready images without a single prompt.",
    bg: "bg-[#1a1035]",
    textColor: "text-primary-foreground",
    descColor: "text-primary-foreground/70",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-300",
    illustration: aiStudioSvg,
  },
  {
    icon: Server,
    title: "Penthost",
    description: "Secure, scalable, and lightning-fast hosting solutions engineered for optimal website and application performance.",
    bg: "bg-brand-accent",
    textColor: "text-primary-foreground",
    descColor: "text-primary-foreground/70",
    iconBg: "bg-blue-300/20",
    iconColor: "text-blue-200",
    illustration: hostingSvg,
  },
  {
    icon: CreditCard,
    title: "Pentapay",
    description: "Integrate robust payment processing with ease. Our gateway ensures secure, efficient, and reliable financial operations.",
    bg: "bg-[#e8daf0]",
    textColor: "text-[#9b3a6a]",
    descColor: "text-[#9b3a6a]/70",
    iconBg: "bg-[#C74888]/15",
    iconColor: "text-[#C74888]",
    illustration: paySvg,
  },
  {
    icon: GraduationCap,
    title: "AcadSuite",
    description: "A comprehensive platform for modern education, streamlining administration and enhancing learning.",
    bg: "bg-[#181233]",
    textColor: "text-primary-foreground",
    descColor: "text-primary-foreground/70",
    iconBg: "bg-emerald-400/20",
    iconColor: "text-emerald-300",
    illustration: academicSuiteSvg,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase mb-3 text-accent"
          >
            Our Ecosystem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-3xl md:text-4xl text-foreground max-w-2xl"
          >
            Intelligent, AI-powered products engineered for the modern businesses and users.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`${product.bg} relative rounded-3xl overflow-hidden group cursor-pointer`}
            >
              {/* Illustration - behind text, oversized, right-aligned */}
              <div className={`absolute top-0 h-full flex items-center pointer-events-none ${product.illustrationClass}`}>
                <img
                  src={product.illustration}
                  alt=""
                  className="h-[120%] w-auto object-contain opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between min-h-[320px]">
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl ${product.iconBg} flex items-center justify-center ${product.iconColor}`}>
                    <product.icon size={22} />
                  </div>
                  <div className={`w-9 h-9 rounded-full border border-current/20 flex items-center justify-center ${product.descColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="mt-auto space-y-2 max-w-[55%]">
                  <h3 className={`font-display font-bold text-xl md:text-2xl ${product.textColor}`}>
                    {product.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${product.descColor}`}>
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
