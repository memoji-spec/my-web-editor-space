import { motion } from "framer-motion";
import p2 from "@/assets/collage/p2.png";
import p3 from "@/assets/collage/p3.png";
import p4 from "@/assets/collage/p4.png";
import p5 from "@/assets/collage/p5.png";

const PicCollageSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* 1: Experienced field experts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[3px] overflow-hidden aspect-square col-span-1"
          >
            <img src={p2} alt="Experienced field experts" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-primary-foreground font-display font-bold text-lg md:text-xl leading-tight">
              Experienced field experts
            </p>
          </motion.div>

          {/* 2: 54+ Projects completed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[3px] overflow-hidden aspect-square col-span-1"
          >
            <img src={p3} alt="54+ Projects completed" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <p className="font-display font-extrabold text-3xl md:text-4xl leading-none">54+</p>
              <p className="font-display font-semibold text-sm md:text-base mt-1">Projects completed</p>
            </div>
          </motion.div>

          {/* 3: Image only */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[3px] overflow-hidden aspect-square col-span-1"
          >
            <img src={p4} alt="Pentagonware team" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>

          {/* 4: 95% customer satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[3px] overflow-hidden aspect-square col-span-1"
          >
            <img src={p5} alt="95% customer satisfaction" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
              <p className="font-display font-extrabold text-3xl md:text-4xl leading-none">95%</p>
              <p className="font-display font-semibold text-sm md:text-base mt-1">Customer satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PicCollageSection;
