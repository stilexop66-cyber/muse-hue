import Link from "next/link";
import Image from "next/image";

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
      {/* =========================================
          FOUNDER
      ========================================= */}
      <section className="founder-section py-10 sm:py-16 px-4">
        <div 
          className="section-heading" 
          style={{ 
            width: "100%", 
            maxWidth: "1400px", 
            margin: "0 auto 60px auto", 
            display: "block" 
          }}
        >
          <h2 
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl"
            style={{ 
              width: "100%", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "20px",
              flexWrap: "wrap"
            }}
          >
            Words By Our{" "}
            <div 
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2 rounded-md overflow-hidden align-middle"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gold-bg.png')" }}
              />
              <span className="relative z-10 text-neutral-900 font-bold">
                Founder
              </span>
            </div>
          </h2>
        </div>
        
        <div className="founder-wrapper">
          <div className="founder-box">
            <div className="quote quote-left">“</div>
            <p className="founder-text text-sm sm:text-base leading-relaxed">
              When I set out to build this salon, I envisioned far more than just
              a place to get a haircut or a facial. I wanted to create a welcoming
              sanctuary where luxury meets genuine personal connection—a space
              where you can leave the rush of the everyday world behind, take a
              deep breath, and dedicate time entirely to yourself. True beauty is
              an art form rooted in individuality. It isn’t about fitting into
              rigid trends; it’s about discovering what makes you feel confident,
              radiant, and empowered in your own skin. Every stylist on our team
              shares this philosophy, combining master-level technique with
              honest consultations to bring your personal vision to life. From
              our carefully sourced, nourishing product lines to our serene
              interiors, every detail is curated with your well-being in mind.
            </p>
            <div className="quote quote-right">”</div>
          </div>
        </div>
      </section>

      {/* =========================================
          SPECIALITY SECTION
      ========================================= */}
      <section style={{ width: "100%", backgroundColor: "#ffffff" }} className="py-12 sm:py-20 px-4 sm:px-5">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            className="text-3xl xs:text-4xl sm:text-6xl lg:text-[80px]"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#1a2228",
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: 0,
            }}
          >
            Our{" "}
            <div 
              className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2 rounded-md overflow-hidden align-middle"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gold-bg.png')" }}
              />
              <span className="relative z-10 text-neutral-900 font-bold">
                Speciality
              </span>
            </div>
          </h2>
        </div>

        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[40px] max-w-[1150px] mx-auto"
        >
          {/* Left Side Image Collage */}
          <div
            className="grid grid-cols-1 xs:grid-cols-2 gap-4 items-center w-full lg:w-auto"
          >
            <div
              className="relative w-full xs:w-[247px] h-[300px] xs:h-[368px] rounded-lg overflow-hidden mx-auto"
            >
              <Image
                src="/images/speciality-2.jpg"
                alt="Hair styling"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 w-full xs:w-auto">
              <div
                className="relative w-full xs:w-[247px] h-[220px] xs:h-[298px] rounded-lg overflow-hidden mx-auto"
              >
                <Image
                  src="/images/speciality-1.jpg"
                  alt="Salon treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="relative w-full xs:w-[247px] h-[220px] xs:h-[298px] rounded-lg overflow-hidden mx-auto"
              >
                <Image
                  src="/images/speciality-3.jpg"
                  alt="Hair treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side Services List Container */}
          <div 
            className="w-full lg:w-[511px] h-auto lg:h-[736px] flex flex-col gap-[32px] box-border"
          >
            {specialties.map((service) => (
              <div 
                key={service.title} 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "12px",
                  flex: 1
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Image 
                    src={service.icon} 
                    alt={`${service.title} icon`} 
                    width={32} 
                    height={32} 
                    className="object-contain flex-shrink-0"
                  />
                  <h3
                    className="text-2xl sm:text-3xl lg:text-[40px]"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontStyle: "normal",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#111111",
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    backgroundColor: "#fcfcfc",
                    border: "1px solid #f0f0f0",
                    borderRadius: "6px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555555", margin: 0 }}>
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          APPOINTMENT SECTION (Exact Copy from Contact)
      ========================================= */}
      <div className="relative w-full flex flex-col items-center my-8 sm:my-12 px-4">
        <div className="w-full bg-black text-white py-8 sm:py-10 flex justify-center rounded-t-2xl sm:rounded-none">
          <div className="w-full max-w-[1072px] px-4 flex flex-col sm:flex-row justify-between items-center gap-4 pb-20 sm:pb-28 text-center sm:text-left">
            <h2 className="text-xl xs:text-2xl md:text-4xl font-bold tracking-tight">
              Book Your Appointment Now
            </h2>

            <Link
              href="/contactus"
              className="relative inline-flex items-center justify-center px-7 py-3 rounded-full text-neutral-950 font-semibold text-sm shadow-md overflow-hidden group flex-shrink-0"
            >
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: "url('/images/gold-bg.png')" }}
              />
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                Contact Now <span>↗</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[1072px] px-2 sm:px-4 -mt-16 sm:-mt-28 relative z-10">
          <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[254px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/images/appointment.jpg"
              alt="Designing Hair Crafts That Speak Your Style"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center p-4 sm:p-6 text-center">
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide max-w-2xl leading-snug sm:leading-relaxed drop-shadow-md">
                Designing Hair Crafts <br />
                That Speak Your Style
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BRAND STATEMENT
      ========================================= */}
      <section
        className="brand-statement w-full py-12 sm:py-20 px-4 flex justify-center"
      >
        <p
          className="text-2xl xs:text-3xl sm:text-5xl lg:text-[60px]"
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 600,
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
              backgroundColor: "#1a2228",
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