import logo1 from "@/assets/logos-scroll/logo1.png";
import logo2 from "@/assets/logos-scroll/logo2.png";
import logo3 from "@/assets/logos-scroll/logo3.png";
import logo4 from "@/assets/logos-scroll/logo4.png";
import logo5 from "@/assets/logos-scroll/logo5.png";
import logo6 from "@/assets/logos-scroll/logo6.png";
import logo7 from "@/assets/logos-scroll/logo7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const TrustedBySection = () => {
  return (
    <section className="py-14" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="max-w-7xl mx-auto section-padding">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-center text-muted-foreground mb-8">
          Trusted by
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
          <div className="flex animate-scroll-logos">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-10 flex items-center justify-center h-12"
              >
                <img
                  src={logo}
                  alt="Partner logo"
                  loading="lazy"
                  className="h-8 md:h-10 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
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
