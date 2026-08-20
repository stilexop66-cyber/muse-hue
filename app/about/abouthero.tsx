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

      {/* ================= HERO ================= */}
      {/* ================= HERO CONTAINER ================= */}
<div className="relative min-h-[560px] w-full overflow-hidden bg-[#15110d]">

  {/* Full-width Background Image */}
<div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/8190b3e0a3f2389aa305a8703fe2551571018f42.png')" }}
/>
{/* Overlay */}
<div className="absolute inset-0 bg-black/10" />

{/* Content Layer */}
<div className="relative z-10 flex h-full items-center px-6 lg:px-12">
  {/* Your overlay text content goes here */}
</div>
</div>

   

{/* ================= YOU DESERVE SECTION ================= */}

<section
  id="story"
  className="w-full bg-white px-4 sm:px-6"
>
  <div className="flex min-h-[360px] w-full flex-col justify-center py-16 sm:min-h-[420px] sm:py-20">
    
    <div
      className={`${fiorello.className} uppercase`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #E99A2B 0%, #FFD978 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {/* First statement */}
      <div className="you-deserve-line first-line">
        YOU DESERVE TO LOOK
      </div>

      {/* Second statement — shifted to the right */}
      <div className="you-deserve-line second-line">
        AND FEEL THE BEST
      </div>
    </div>

  </div>
</section>
    </section>
  );
}