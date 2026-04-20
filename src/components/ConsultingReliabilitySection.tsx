import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import integratedImg from "@/assets/consulting/integrated.png";
import reliabilityImg from "@/assets/consulting/reliability.png";

type Block = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const blocks: Block[] = [
  {
    eyebrow: "Consulting",
    title: "Integrated\nConsulting Services",
    body: "We don't simply provide software, we provide consulting services along with the software. Our expertise spans from the latest in cloud technology to the design and implementation of enterprise-wide solutions. Our IT Solutions are designed to work with your existing infrastructure and process, which means you don't have to put your company at risk by taking on risky changes.",
    image: integratedImg,
    imageAlt: "Integrated consulting services",
  },
  {
    eyebrow: "Performance",
    title: "Reliability",
    body: "We have an experienced and dedicated team who understands the nuances of servicing clients at all levels, from enterprises to SMEs. With our proven track record in delivering projects on time and within budget, you'll never be disappointed with Pentagonware Technologies, ever!",
    image: reliabilityImg,
    imageAlt: "Reliability",
    reverse: true,
  },
];

const ConsultingReliabilitySection = () => {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "#EEEEEE" }}>
      <div className="max-w-7xl mx-auto section-padding space-y-20 md:space-y-28">
        {blocks.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center"
          >
            {/* Mobile-only eyebrow shown above image */}
            <p className="md:hidden text-xs font-semibold tracking-[0.25em] uppercase text-brand-blue order-1">
              {b.eyebrow}
            </p>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: b.reverse ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`order-3 md:order-none ${b.reverse ? "md:col-start-2" : "md:col-start-1"} md:row-start-1`}
            >
              <p className="hidden md:block text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-brand-blue">
                {b.eyebrow}
              </p>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight whitespace-pre-line">
                {b.title}
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                {b.body}
              </p>
              <Link to="/contact" className="inline-block mt-7">
                <Button
                  className="rounded-[3px] text-primary-foreground font-semibold px-6 py-5 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                  style={{ backgroundColor: "#1F63ED" }}
                >
                  Get free Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: b.reverse ? -60 : 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`img-zoom rounded-[3px] overflow-hidden aspect-[4/3] order-2 ${
                b.reverse ? "md:col-start-1" : "md:col-start-2"
              } md:row-start-1`}
            >
              <img src={b.image} alt={b.imageAlt} loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ConsultingReliabilitySection;
