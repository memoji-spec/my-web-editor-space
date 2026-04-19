import { motion } from "framer-motion";
import p2 from "@/assets/collage/p2.png";
import p3 from "@/assets/collage/p3.png";
import p4 from "@/assets/collage/p4.png";
import p5 from "@/assets/collage/p5.png";

const PicCollageSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 md:gap-5 md:h-[560px]">
          {/* 1: Experienced field experts — tall, spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[14px] overflow-hidden row-span-2 col-span-1 aspect-[3/4] md:aspect-auto md:h-full"
          >
            <img src={p2} alt="Experienced field experts" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display font-medium text-sm md:text-base mb-1" style={{ color: "#E8B84A" }}>
                Experienced field
              </p>
              <p className="text-primary-foreground font-display font-extrabold text-3xl md:text-5xl leading-none">
                Experts
              </p>
            </div>
          </motion.div>

          {/* 2: 54+ Projects completed — top middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[14px] overflow-hidden col-span-1 aspect-square md:aspect-auto md:h-full"
          >
            <img src={p3} alt="54+ Projects completed" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
              <p className="font-display font-extrabold text-4xl md:text-5xl leading-none">54+</p>
              <p className="font-display font-normal text-sm md:text-base mt-1 opacity-90">Projects Completed</p>
            </div>
          </motion.div>

          {/* 3: 95% customer satisfaction — tall right, spans 2 rows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[14px] overflow-hidden row-span-2 col-span-1 aspect-[3/4] md:aspect-auto md:h-full"
          >
            <img src={p5} alt="95% customer satisfaction" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
              <p className="font-display font-extrabold text-4xl md:text-5xl leading-none">95%</p>
              <p className="font-display font-normal text-sm md:text-base mt-1 opacity-90">Customer satisfaction</p>
            </div>
          </motion.div>

          {/* 4: Portrait — bottom middle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="img-zoom relative rounded-[14px] overflow-hidden col-span-1 aspect-square md:aspect-auto md:h-full md:col-start-2 md:row-start-2"
          >
            <img src={p4} alt="Pentagonware team" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PicCollageSection;
