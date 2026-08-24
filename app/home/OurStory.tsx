import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// Local Fonts Setup
const syne = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Syne-ExtraBold.ttf",
  weight: "800",
  style: "normal",
});

const urbanist = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-Black.ttf",
  weight: "900",
  style: "normal",
});
const bag = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/bg.ttf",
  weight: "900",
  style: "normal",
});

export const OurStory: React.FC = () => {
  const steps = [
    {
      title: "Share Your Vision",
      text: "Tell us about your event type, theme, date, and expectations. We'll listen closely to understand your goals and style.",
      icon: "/images/step1-icon.png",
    },
    {
      title: "Get a Customized Proposal",
      text: "Our team will craft a detailed event plan and transparent quote tailored to your needs.",
      icon: "/images/step1-icon.png",
    },
    {
      title: "Confirm & Relax",
      text: "Once you approve the proposal, we handle everything — planning, coordination, and execution. Just enjoy the event.",
      icon: "/images/step1-icon.png",
    },
  ];

  return (
    <section className="bg-white text-zinc-900 py-12 md:py-16 px-4 md:px-12 w-full">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* ================= HEADING WITH BOTH GOLD BACKGROUND WORDS ================= */}
        <h2 className={`${syne.className} text-3xl md:text-5xl text-center mb-10 flex flex-wrap items-center gap-3 justify-center`}>
          Our{" "}
          <div className="relative inline-flex items-center justify-center px-6 py-1.5 rounded-md overflow-hidden align-middle">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/gold-bg.png')" }}
            />
            <span className={`${syne.className} relative z-10 text-neutral-900`}>
              Story
            </span>
          </div>{" "}
          All In{" "}
          <div className="relative inline-flex items-center justify-center px-6 py-1.5 rounded-md overflow-hidden align-middle">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/gold-bg.png')" }}
            />
            <span className={`${syne.className} relative z-10 text-neutral-900`}>
              One
            </span>
          </div>
        </h2>

        {/* ================= IMAGE COLLAGE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full">
          <div className="relative md:col-span-2 rounded-xl overflow-hidden h-64 md:h-80 shadow-md">
            <Image
              src="/images/story-main.jpg"
              alt="Story Main"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative rounded-xl overflow-hidden h-28 md:h-[152px] shadow-md">
              <Image
                src="/images/story-sub1.jpg"
                alt="Story Sub 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-28 md:h-[152px] shadow-md">
              <Image
                src="/images/story-sub2.jpg"
                alt="Story Sub 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= 3 FEATURE CARDS (TOP BORDER + IMAGE ICONS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAF9F6] rounded-xl border-t-4 border-[#D4A338] shadow-sm flex flex-col gap-3"
            >
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className={`${syne.className} text-lg text-zinc-900 leading-snug`}>
                {step.title}
              </h3>
              <p className={`${urbanist.className} text-zinc-500 text-xs leading-relaxed`}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* ================= COUNTER STATS (TOP BORDER) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="p-8 bg-[#FAF9F6] rounded-xl border-t-4 border-[#D4A338] shadow-sm flex flex-col gap-2">
            <p className={`${bag.className} text-3xl md:text-4xl text-zinc-900`}>
              225+
            </p>
            <p className={`${bag.className} text-lg text-zinc-800`}>
              Happy Clients
            </p>
            <p className={`${bag.className} text-xs text-zinc-500 leading-relaxed`}>
              Happy clients are the true measure of our success and the strongest voice of our work.
            </p>
          </div>

          <div className="p-8 bg-[#FAF9F6] rounded-xl border-t-4 border-[#D4A338] shadow-sm flex flex-col gap-2">
            <p className={`${bag.className} text-3xl md:text-4xl text-zinc-900`}>
              4700 +
            </p>
            <p className={`${bag.className} text-lg text-zinc-800`}>
              Images Capture
            </p>
            <p className={`${bag.className} text-xs text-zinc-500 leading-relaxed`}>
              Images that capture real emotions, unforgettable moments, and stories that last forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};