import { motion } from "framer-motion";
import { Play } from "lucide-react";
import nutshellThumb from "@/assets/nutshell-thumbnail.png";

const NutshellSection = () => {
  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Pentagonware in a{" "}
            <span style={{ color: "#D12A2A" }}>nutshell.....</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="img-zoom relative aspect-video rounded-[3px] overflow-hidden bg-muted group cursor-pointer max-w-5xl mx-auto"
        >
          <img
            src={nutshellThumb}
            alt="Pentagonware in a nutshell"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/15 group-hover:bg-foreground/5 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play size={28} className="text-brand-blue ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NutshellSection;
