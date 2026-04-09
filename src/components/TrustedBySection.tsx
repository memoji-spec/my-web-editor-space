import jbsLogo from "@/assets/logos/jbs.png";
import bainLogo from "@/assets/logos/bain.png";
import yamatoLogo from "@/assets/logos/yamato.png";
import htLogo from "@/assets/logos/hometutorsnow.png";
import alphidLogo from "@/assets/logos/alphid.png";
import nerdclipLogo from "@/assets/logos/nerdclip.png";
import ultrainterioLogo from "@/assets/logos/ultrainterio.png";
import superwheelsLogo from "@/assets/logos/superwheels.png";

const logos = [
  { src: jbsLogo, alt: "JBS" },
  { src: bainLogo, alt: "Bain & Company" },
  { src: yamatoLogo, alt: "Yamato" },
  { src: htLogo, alt: "Hometutorsnow" },
  { src: alphidLogo, alt: "Alphid" },
  { src: nerdclipLogo, alt: "NerdClip" },
  { src: ultrainterioLogo, alt: "Ultra Interio" },
  { src: superwheelsLogo, alt: "Superwheels" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto section-padding">
        <p className="text-sm font-semibold tracking-widest uppercase text-center text-muted-foreground mb-10">
          Trusted by Leading Organizations
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-scroll-logos">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex items-center justify-center h-12"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
