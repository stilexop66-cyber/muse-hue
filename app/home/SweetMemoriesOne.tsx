import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link'; 

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

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  icon: string;
  reversed?: boolean;
}

const services: ServiceItem[] = [
  {
    title: "Hair Services",
    description:
      "Custom haircuts, creative highlights, treatments, and styling made to express your personality effortlessly.",
    image: "/images/sa.jpg",
    icon: "/images/beard2-icon.png",
    reversed: false,
  },
  {
    title: "Grooming Services",
    description:
      "Precision beard care, modern haircuts, and clean grooming for men aiming for sharp, sleek appearances.",
    image: "/images/sa.jpg",
    icon: "/images/beard2-icon.png",
    reversed: true,
  },
  {
    title: "Waxing Services",
    description:
      "Smooth, gentle skin treatments designed to offer long-lasting silkiness with high hygiene standards.",
    image: "/images/sa.jpg",
    icon: "/images/beard2-icon.png",
    reversed: false,
  },
  {
    title: "Makeup & Facial",
    description:
      "From glowing facial therapies to party/event makeup, crafted to enhance your natural beauty.",
    image: "/images/sa.jpg",
    icon: "/images/beard2-icon.png",
    reversed: true,
  },
];

export const SweetMemoriesOne: React.FC = () => {
  return (
    <section className="bg-zinc-50 py-16 px-6 md:px-12 w-full">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= HEADING ================= */}
        <h2 className={`${syne.className} text-3xl md:text-4xl text-center mb-12 flex items-center justify-center gap-2`}>
          Our Sweet{" "}
          <div className="relative inline-flex items-center justify-center px-5 py-1.5 rounded-md overflow-hidden align-middle shadow-sm">
            <Image
              src="/images/gold-bg.png"
              alt=""
              fill
              sizes="200px"
              className="absolute inset-0 w-full h-full object-cover z-0"
              priority
            />
            <span className={`${syne.className} relative z-10 text-neutral-900 leading-none`}>
              Memories
            </span>
          </div>
        </h2>

        {/* ================= SERVICE CARDS ================= */}
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center shadow-md border border-zinc-100"
          >
            {/* Text & Action Column */}
            <div className={service.reversed ? "order-1 md:order-2" : "order-1"}>
              
              {/* Circular Gold Icon Badge */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center mb-4 shadow-sm flex-shrink-0">
                <Image
                  src="/images/gold-bg.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="absolute inset-0 w-full h-full object-cover z-0 rounded-full"
                />
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={20}
                  height={20}
                  className="relative z-10 object-contain"
                />
              </div>

              <h3 className={`${syne.className} text-2xl mb-3 text-zinc-900`}>
                {service.title}
              </h3>
              <p className={`${urbanist.className} text-zinc-500 text-sm mb-6 leading-relaxed`}>
                {service.description}
              </p>

              {/* View More Pill Button */}
{/* View More Pill Button */}
<Link
  href="/our-services"
  className={`${syne.className} inline-flex items-center justify-center px-6 py-2 rounded-full text-xs font-semibold text-neutral-900 shadow-none border-0 outline-none select-none transition-transform active:scale-95`}
  style={{
    backgroundImage: `url('/images/gold-bg.png')`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    WebkitAppearance: 'none',
  }}
>
  <span className="flex items-center gap-1 leading-none py-0.5">
    View More ↗
  </span>
</Link>
            </div>

            {/* Image Column */}
            <div
              className={`relative rounded-xl overflow-hidden h-64 ${
                service.reversed ? "order-2 md:order-1" : "order-2"
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}

        {/* ================= BOTTOM BUTTON ================= */}
        <div className="text-center pt-4">
          <button className={`${syne.className} relative inline-flex items-center justify-center px-9 py-3 rounded-full text-sm overflow-hidden group shadow-md text-neutral-900 transition-transform active:scale-95`}>
            <Image
              src="/images/gold-bg.png"
              alt=""
              fill
              sizes="250px"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-full group-hover:scale-105 transition-transform duration-300"
            />
            <span className="relative z-10 flex items-center gap-2 leading-none">
              Enter Care →
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};