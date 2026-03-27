import blackRecreation from "@/assets/black-recreation-final.png";
import mobileRecreation from "@/assets/mobile-recreation-final.png";

const BlackRecreationSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto section-padding">
        <img
          src={blackRecreation}
          alt="Custom platform configuration"
          className="hidden md:block w-full h-auto rounded-2xl"
        />
        <img
          src={mobileRecreation}
          alt="Custom platform configuration"
          className="block md:hidden w-full h-auto rounded-2xl"
        />
      </div>
    </section>
  );
};

export default BlackRecreationSection;