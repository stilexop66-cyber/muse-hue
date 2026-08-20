import Link from "next/link";
import Image from "next/image";

const specialties = [
  {
    title: "Hair Cut",
    text: "Elevate your everyday style with a precision-crafted cut. Our stylists sculpt every layer to flatter your facial structure and deliver an effortlessly sharp finish.",
    icon: "/images/haircut-icon.png", // Replace with your image path
  },
  {
    title: "Beard & Princess",
    text: "Immerse yourself in bespoke beauty treatments crafted for pure indulgence. From timeless elegance to modern glamour, we curate every detail to make you feel truly extraordinary.",
    icon: "/images/beard-icon.png", // Replace with your image path
  },
  {
    title: "Our Expertise",
    text: "Immerse yourself in a space crafted for pure indulgence. From rich textures to ambient lighting, our bespoke interiors blend modern elegance with tranquil comfort for the ultimate pampering session.",
    icon: "/images/expertise-icon.png", // Replace with your image path
  },
];

export default function Speciality() {
  return (
    <>
      {/* =========================================
          FOUNDER
      ========================================= */}
      <section className="founder-section">
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
            style={{ 
              width: "100%", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              gap: "20px" 
            }}
          >
            Words By Our{" "}
            <div 
              className="relative inline-flex items-center justify-center px-8 py-2 rounded-md overflow-hidden align-middle"
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
            <p className="founder-text">
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
      <section style={{ width: "100%", backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "80px",
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
              className="relative inline-flex items-center justify-center px-8 py-2 rounded-md overflow-hidden align-middle"
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
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side Image Collage */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "247px 247px",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "247px",
                height: "368px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/speciality-2.jpg"
                alt="Hair styling"
                fill
                className="object-cover"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div
                style={{
                  position: "relative",
                  width: "247px",
                  height: "298px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/speciality-1.jpg"
                  alt="Salon treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                style={{
                  position: "relative",
                  width: "247px",
                  height: "298px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
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

          {/* Right Side Services List Container (width: 511px, height: 736px, gap: 32px) */}
          <div 
            style={{ 
              width: "511px", 
              height: "736px", 
              display: "flex", 
              flexDirection: "column", 
              gap: "32px",
              boxSizing: "border-box"
            }}
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
                    className="object-contain"
                  />
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontSize: "40px",
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
      <div className="relative w-full flex flex-col items-center my-12">
        <div className="w-full bg-black text-white py-10 flex justify-center">
          <div className="w-full max-w-[1072px] px-4 flex flex-row justify-between items-center pb-28">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
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

        <div className="w-full max-w-[1072px] px-4 -mt-28 relative z-10">
          <div className="relative w-full h-[254px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/images/appointment.jpg"
              alt="Designing Hair Crafts That Speak Your Style"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 z-10 bg-black/40 flex items-center justify-center p-6 text-center">
              <p className="text-2xl md:text-4xl font-bold text-white tracking-wide max-w-2xl leading-relaxed drop-shadow-md">
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
        className="brand-statement"
        style={{
          width: "100%",
          padding: "80px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Urbanist', sans-serif",
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: "60px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "justify",
            maxWidth: "1100px",
            margin: "0 auto",
            color: "#1a2228",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "180px",
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