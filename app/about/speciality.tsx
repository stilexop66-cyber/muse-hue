import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

const syne = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Syne-Bold.ttf",
  weight: "800",
  style: "normal",
});

const urbanist = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-Black.ttf",
  weight: "900",
  style: "normal",
});

const urbanistt = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-LightItalic.ttf",
  weight: "300",
  style: "normal",
});
const urbanisty = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-SemiBold.ttf",
  weight: "600",
  style: "normal",
});

const specialties = [
  {
    title: "Hair Cut",
    text: "Elevate your everyday style with a precision-crafted cut. Our stylists sculpt every layer to flatter your facial structure and deliver an effortlessly sharp finish.",
    icon: "/images/haircut-icon.png",
  },
  {
    title: "Beard & Princess",
    text: "Immerse yourself in bespoke beauty treatments crafted for pure indulgence. From timeless elegance to modern glamour, we curate every detail to make you feel truly extraordinary.",
    icon: "/images/beard-icon.png",
  },
  {
    title: "Our Expertise",
    text: "Immerse yourself in a space crafted for pure indulgence. From rich textures to ambient lighting, our bespoke interiors blend modern elegance with tranquil comfort for the ultimate pampering session.",
    icon: "/images/expertise-icon.png",
  },
];

export default function Speciality() {
  return (
    <>
      {/* Title Header */}
      <div className="w-full max-w-5xl mx-auto mb-16 sm:mb-24 text-center">
        <h2 className={`${syne.className} text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-tight flex items-center justify-center gap-3 flex-wrap`}>
          Words By Our{" "}
          <span className="bg-gradient-to-r from-[#D4A338] via-[#FCE38A] to-[#B8860B] text-neutral-950 px-6 py-2 rounded-sm shadow-sm font-bold">
            Founder
          </span>
        </h2>
      </div>

      {/* Founder Outer Relative Container */}
      <div className="w-full max-w-[1025px] mx-auto relative my-12 flex justify-center">
        {/* Opening Quote Icon (148x148 - Half hidden behind top-left corner) */}
        <div className="absolute top-0 left-18 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[148px] lg:h-[148px] -translate-x-1/3 -translate-y-1/3 sm:-translate-x-1/2 sm:-translate-y-1/2 z-0 pointer-events-none select-none">
          <Image
            src="/images/quote.png"
            alt="Opening Quote"
            fill
            className="object-contain"
          />
        </div>

       {/* Text Card Div (No Shadow, Pure Flat White Card) */}
<div className="w-full lg:w-[1025px] h-auto lg:h-[418px] bg-white rounded-2xl shadow-none px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-8 relative z-10 border border-neutral-200 flex items-center justify-center overflow-hidden">
  <p className={`${urbanistt.className} text-neutral-900 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[21px] xl:text-[22px] leading-relaxed italic text-left`}>
    When I set out to build this salon, I envisioned far more than just
    a place to get a haircut or a facial. I wanted to create a welcoming
    sanctuary where luxury meets genuine personal connection—a space
    where you can leave the rush of the everyday world behind, take a
    deep breath, and dedicate time entirely to yourself. True beauty is
    an art form rooted in individuality. It isn&apos;t about fitting into
    rigid trends; it&apos;s about discovering what makes you feel confident,
    radiant, and empowered in your own skin. Every stylist on our team
    shares this philosophy, combining master-level technique with
    honest consultations to bring your personal vision to life. From
    our carefully sourced, nourishing product lines to our serene
    interiors, every detail is curated with your well-being in mind.
  </p>
</div>

        {/* Closing Quote Icon (148x148 - Half hidden behind bottom-right corner) */}
        <div className="absolute bottom-0 right-18 w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[148px] lg:h-[148px] translate-x-1/3 translate-y-1/3 sm:translate-x-1/2 sm:translate-y-1/2 z-0 pointer-events-none select-none">
          <Image
            src="/images/quote (1).png"
            alt="Closing Quote"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* SPECIALITY — desktop values preserved exactly at lg:, scaled below lg */}
      <section className="w-full bg-white px-4 sm:px-5 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-10 sm:mb-14 lg:mb-[60px]">
          <h2
            className={`${syne.className} text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[80px]`}
            style={{ fontWeight: 700, lineHeight: "100%", letterSpacing: "0%", color: "#1a2228", display: "inline-flex", items: "center", gap: "20px", justifyContent: "center", flexWrap: "wrap", margin: 0 }}
          >
            Our{" "}
            <div className="relative inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-1 sm:py-2 rounded-md overflow-hidden align-middle bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] shadow-sm">
              <span className="relative z-10 text-neutral-900 font-bold">Speciality</span>
            </div>
          </h2>
        </div>

        <div className="max-w-[1150px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:gap-4 items-center mx-auto">
            <div className="relative overflow-hidden rounded-lg w-[120px] xs:w-[140px] sm:w-[180px] md:w-[210px] lg:w-[247px] aspect-[247/368]">
              <Image src="/images/speciality-2.jpg" alt="Hair styling" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4">
              <div className="relative overflow-hidden rounded-lg w-[120px] xs:w-[140px] sm:w-[180px] md:w-[210px] lg:w-[247px] aspect-[247/298]">
                <Image src="/images/speciality-1.jpg" alt="Salon treatment" fill className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-lg w-[120px] xs:w-[140px] sm:w-[180px] md:w-[210px] lg:w-[247px] aspect-[247/298]">
                <Image src="/images/speciality-3.jpg" alt="Hair treatment" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Services list */}
          <div className="w-full max-w-[511px] lg:w-[511px] lg:h-[736px] flex flex-col gap-6 sm:gap-8 box-border">
            {specialties.map((service) => (
              <div key={service.title} className="flex flex-col gap-3 lg:flex-1">
                <div className="flex items-center gap-3">
                  <Image src={service.icon} alt={`${service.title} icon`} width={32} height={32} className="object-contain w-6 h-6 sm:w-8 sm:h-8" />
                  <h3
                    className={`${syne.className} text-2xl xs:text-3xl md:text-4xl lg:text-[40px]`}
                    style={{ fontWeight: 700, lineHeight: "100%", letterSpacing: "0%", color: "#111111", margin: 0 }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="w-full h-full p-4 sm:p-5 box-border bg-[#fcfcfc] border border-[#f0f0f0] rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden flex items-center">
                  <p className="text-sm leading-relaxed text-[#555555] m-0">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT (EDGE-TO-EDGE) */}
      <div className="relative w-full flex flex-col items-center my-8 sm:my-12">
        <div className="w-full bg-black text-white py-8 sm:py-10 flex justify-center">
          <div className="w-full max-w-[1072px] px-6 flex flex-col sm:flex-row justify-between items-center gap-4 pb-20 sm:pb-28 text-center sm:text-left">
            <h2 className={`${syne.className} text-xl xs:text-2xl md:text-4xl tracking-tight`}>Book Your Appointment Now</h2>
            <Link 
              href="/contactus" 
              className={`${syne.className} relative inline-flex items-center justify-center px-7 py-3 rounded-full text-neutral-950 text-sm shadow-md overflow-hidden hover:opacity-90 transition-opacity flex-shrink-0 bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935]`}
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">Contact Now <span>↗</span></span>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[1072px] px-4 -mt-16 sm:-mt-28 relative z-10">
          <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[254px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image src="/images/appointment.jpg" alt="Designing Hair Crafts That Speak Your Style" fill className="object-cover object-center" />
            <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center p-4 sm:p-6 text-center">
              <p className={`${syne.className} text-xl sm:text-3xl md:text-4xl text-white tracking-wide max-w-2xl leading-snug sm:leading-relaxed drop-shadow-md`}>
                Designing Hair Crafts <br /> That Speak Your Style
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BRAND STATEMENT */}
<section className="brand-statement w-full py-12 sm:py-20 px-4 flex justify-center">
  <p
    className={`${urbanisty.className} text-2xl xs:text-3xl sm:text-5xl lg:text-[60px]`}
    style={{
      fontStyle: "italic",
      lineHeight: "100%",
      letterSpacing: "0%",
      textAlign: "justify",
      maxWidth: "1100px",
      margin: "0 auto",
      color: "#1a2228",
    }}
  >
    <span
      className="hidden sm:inline-block w-24 sm:w-36 lg:w-[180px]"
      style={{
        height: "4px",
        backgroundColor: "transparent",
        verticalAlign: "middle",
        marginRight: "20px",
        marginBottom: "12px",
      }}
    />
    AT MUSE & HUE WE BLEND CREATIVITY WITH CARE TO BRING OUT THE BEST IN YOU. OUR EXPERT TEAM IS HERE TO PAMPER YOU WITH PREMIUM SERVICES IN A LUXURIOUS SPACE
  </p>
</section>
    </>
  );
}