import Link from "next/link";
import Image from "next/image";

const addOns = [
  "Hair Treatments",
  "Skin Treatments",
  "Relaxing Therapies",
  "Membership Plans",
  "Special Offers & Seasonal Packages",
];

export default function AddOnSection() {
  return (
    <section className="bg-white text-neutral-900 pt-16 pb-24">
      {/* 1. Add On Title Header */}
      <div className="flex justify-center items-center gap-3 mb-12">
        <span className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
          Add
        </span>
        <div className="relative px-6 py-2 rounded-sm shadow-sm overflow-hidden flex items-center justify-center min-w-[80px] min-h-[50px]">
          {/* Gold Image Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/gold-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
          <span className="text-[#111111] font-bold text-4xl md:text-5xl relative z-10">
            On
          </span>
        </div>
      </div>

      {/* 2. Add On Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        {/* Top Row: 3 Cards */}
        <div className="flex flex-wrap justify-center gap-[24px] mb-[24px]">
          {addOns.slice(0, 3).map((item, index) => (
            <div
              key={index}
              style={{
                width: "266px",
                height: "118px",
                paddingTop: "40px",
                paddingRight: "20px",
                paddingBottom: "40px",
                paddingLeft: "20px",
              }}
              className="relative bg-white rounded-md shadow-md flex items-center justify-center border-t-[4px] border-transparent overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gold-bg.png')" }}
              />
              <h3 className="text-lg font-bold text-neutral-900 tracking-wide text-center leading-snug">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="flex flex-wrap justify-center gap-[24px]">
          {addOns.slice(3).map((item, index) => (
            <div
              key={index}
              style={{
                width: "266px",
                height: "118px",
                paddingTop: "40px",
                paddingRight: "20px",
                paddingBottom: "40px",
                paddingLeft: "20px",
              }}
              className="relative bg-white rounded-md shadow-md flex items-center justify-center border-t-[4px] border-transparent overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/gold-bg.png')" }}
              />
              <h3 className="text-lg font-bold text-neutral-900 tracking-wide text-center leading-snug">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Black Strip CTA & Overlapping Image (1072px x 254px Layout) */}
      <div className="relative w-full flex flex-col items-center">
        {/* Black Horizontal Band */}
        <div className="w-full bg-black text-white py-10 flex justify-center">
          <div className="w-full max-w-[1072px] px-4 flex flex-row justify-between items-center pb-28">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Book Your Appointment Now
            </h2>

            {/* Gold CTA Button - Shaped to Container */}
            <Link
              href="/contact"
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

        {/* Overlapping Image Card (1072px x 254px) */}
        <div className="w-full max-w-[1072px] px-4 -mt-28 relative z-10">
          <div className="relative w-full h-[254px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/images/appointment.jpg"
              alt="Designing Hair Crafts That Speak Your Style"
              fill
              className="object-cover object-center"
            />

            {/* Dark Overlay with Centered Text */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
              <p className="text-2xl md:text-4xl font-bold text-white tracking-wide max-w-2xl leading-relaxed drop-shadow-md">
                Designing Hair Crafts <br />
                That Speak Your Style
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}