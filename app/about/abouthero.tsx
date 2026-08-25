import localFont from "next/font/local";
import Link from "next/link";

const fiorello = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/FiorelloCGCondensed-Regular.otf",
  weight: "400",
  style: "normal",
});

export default function AboutHero() {
  return (
    <section className="w-full bg-white">
      {/* ================= HERO CONTAINER ================= */}
      <div className="relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] w-full overflow-hidden bg-[#15110d]">
        
        {/* Desktop / Tablet Hero Image */}
        <div
          className="hidden sm:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/8190b3e0a3f2389aa305a8703fe2551571018f42.png')",
          }}
        />

        {/* Mobile Phone Hero Image */}
        <div
          className="block sm:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/h5.png')", // <--- Add your phone image path here
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Content Layer */}
        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 lg:px-12">
          {/* Your overlay text content goes here */}
        </div>
      </div>

      {/* ================= YOU DESERVE SECTION ================= */}
      <section id="story" className="w-full bg-white px-4 sm:px-6 lg:px-12">
        <div className="flex min-h-[200px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[420px] w-full flex-col justify-center py-8 sm:py-14 lg:py-20">
          <div
            className={`${fiorello.className} uppercase flex flex-col gap-1 sm:gap-2`}
            style={{
              backgroundImage:
                "linear-gradient(180deg, #E99A2B 0%, #FFD978 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1em",
              fontSize: "clamp(1.875rem, -0.51rem + 10.17vw, 6rem)",
            }}
          >
            {/* First statement */}
            <div className="you-deserve-line first-line leading-tight">
              YOU DESERVE TO LOOK
            </div>

            {/* Second statement */}
            <div className="you-deserve-line second-line leading-tight pl-[1.3333em]">
              AND FEEL THE BEST
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}