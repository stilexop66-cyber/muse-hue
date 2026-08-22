
import React from "react";
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

const reasons = [
  {
    number: "01",
    title: "Expert Professionals",
    text: "Our certified stylists and therapists bring years of master-level training to every appointment. We stay ahead of global beauty trends to deliver flawless, tailored results every time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Personalized Care",
    text: "We begin every visit with a dedicated consultation to understand your unique lifestyle, hair, and skin goals. Every treatment, cut, and product is customized exclusively for you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Premium Products",
    text: "We exclusively use high-end, salon-grade formulations that nourish your hair and skin from within. Experience vibrant, long-lasting results backed by gentle, premium ingredients.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Relaxing Ambience",
    text: "Step away from the daily hustle into a calm, thoughtfully designed sanctuary. Enjoy soothing aromas, comfortable seating, and a serene atmosphere crafted for your total relaxation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0 0l1.9-1.9C9.2 19.53 10.56 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Hygienic & Cafe",
    text: "Enjoy total peace of mind with our strict single-use and sanitized tool protocols. Relax even further with a complimentary beverage and snack menu served right to your chair.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l2 2z" />
      </svg>
    ),
  },
];

export default function ChooseUs() {
  return (
    <section className="choose-section w-full py-10 xs:py-12 sm:py-16 px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <div className="section-heading text-center mb-8 sm:mb-12">
        <h2
          className={`${syne.className} text-2xl xs:text-3xl sm:text-4xl lg:text-5xl tracking-tight inline-flex items-center justify-center gap-2 flex-wrap`}
        >
          Why Clients{" "}
          <div className="relative inline-flex items-center justify-center px-4 sm:px-8 py-1 sm:py-2 mx-1 rounded-md overflow-hidden align-middle">
            {/* Background Div */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/gold-bg.png')" }}
            />

            {/* Text on top */}
            <span className={`${syne.className} relative z-10 text-neutral-900`}>
              Choose
            </span>
          </div>{" "}
          Us
        </h2>
      </div>

      {/* Main Composition */}
      <div className="choose-wrapper max-w-7xl mx-auto">
        <div className="choose-container flex flex-col lg:block relative gap-6 sm:gap-8 lg:gap-0">
          {/* Center Arch Image */}
          <div className="choose-image w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto mb-6 lg:mb-0">
            <img
              src="/images/why-choose-us.jpg"
              alt="Muse & Hue salon"
              className="w-full h-auto object-cover rounded-2xl lg:rounded-none"
            />
          </div>

          {/* Grid Layout for Mobile/Tablet Screens, CSS Class Positioning on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:contents">
            {/* Left Top Card (01) */}
            <div className="choose-card choose-card-1 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
              <div className="choose-icon mb-3 text-[#D4A338]">
                {reasons[0].icon}
              </div>

              <h3 className={`${syne.className} text-lg sm:text-xl mb-2`}>
                {reasons[0].title}
              </h3>

              <p
                className={`${urbanist.className} text-xs sm:text-sm text-neutral-600 leading-relaxed`}
              >
                {reasons[0].text}
              </p>
            </div>

            {/* Right Top Card (02) */}
            <div className="choose-card choose-card-2 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
              <div className="choose-icon mb-3 text-[#D4A338]">
                {reasons[1].icon}
              </div>

              <h3 className={`${syne.className} text-lg sm:text-xl mb-2`}>
                {reasons[1].title}
              </h3>

              <p
                className={`${urbanist.className} text-xs sm:text-sm text-neutral-600 leading-relaxed`}
              >
                {reasons[1].text}
              </p>
            </div>

            {/* Left Bottom Card (03) */}
            <div className="choose-card choose-card-3 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
              <div className="choose-icon mb-3 text-[#D4A338]">
                {reasons[2].icon}
              </div>

              <h3 className={`${syne.className} text-lg sm:text-xl mb-2`}>
                {reasons[2].title}
              </h3>

              <p
                className={`${urbanist.className} text-xs sm:text-sm text-neutral-600 leading-relaxed`}
              >
                {reasons[2].text}
              </p>
            </div>

            {/* Right Bottom Card (04) */}
            <div className="choose-card choose-card-4 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
              <div className="choose-icon mb-3 text-[#D4A338]">
                {reasons[3].icon}
              </div>

              <h3 className={`${syne.className} text-lg sm:text-xl mb-2`}>
                {reasons[3].title}
              </h3>

              <p
                className={`${urbanist.className} text-xs sm:text-sm text-neutral-600 leading-relaxed`}
              >
                {reasons[3].text}
              </p>
            </div>

            {/* Bottom Center Card (05) */}
            <div className="choose-card choose-card-5 md:col-span-2 lg:col-span-1 p-5 sm:p-6 bg-white rounded-xl shadow-sm border border-neutral-100">
              <div className="choose-icon mb-3 text-[#D4A338]">
                {reasons[4].icon}
              </div>

              <h3 className={`${syne.className} text-lg sm:text-xl mb-2`}>
                {reasons[4].title}
              </h3>

              <p
                className={`${urbanist.className} text-xs sm:text-sm text-neutral-600 leading-relaxed`}
              >
                {reasons[4].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
