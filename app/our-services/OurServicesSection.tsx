import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

// Local Fonts Setup
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

interface ServiceCategory {
  title: string;
  iconSrc: string;
  items: string[];
}

const leftColumnData: ServiceCategory[] = [
  {
    title: "Hair Services",
    iconSrc: "/images/hair-icon.png",
    items: [
      "Haircut (Men, Women & kids)",
      "Hair Styling & Blow Dry",
      "Hair Spa & Treatments",
      "Smoothening / Straightening",
      "Keratin / Botox",
      "Hair Coloring",
      "Highlights / Global Color",
      "Balayage / Ombre",
      "Root Touch Up",
      "Scalp Treatments",
    ],
  },
  {
    title: "Skin & Facial",
    iconSrc: "/images/skin-icon.png",
    items: [
      "Cleansing",
      "Anti-Tan Facial",
      "Glow Facial",
      "Acne / Anti-Acne Facial",
      "Bridal Facial",
      "Hydra Facial",
      "Skin Lightening",
      "De-Tan Treatment",
      " D-Tan / Lotus / VLCC Facials",
    ],
  },
  {
    title: "Nail Services",
    iconSrc: "/images/skin-icon.png",
    items: [
      "Manicure",
      "Pedicure",
      "Nail Extensions",
      "Nail Art",
      "Gel Polish",
      "Acrylic Nails",
      "French Nails",
    ],
  },
];

const rightColumnData: ServiceCategory[] = [
  {
    title: "Beard & Grooming",
    iconSrc: "/images/beard2-icon.png",
    items: [
      "Beard Styling",
      "Beard Trim",
      "Shaving",
      "Haircut",
      "Hair Spa",
      "Facial",
      "Cleaning",
      "Hair & Beard Coloring",
      "Detan Treatment",
    ],
  },
  {
    title: "Waxing Services",
    iconSrc: "/images/makeup-icon.png",
    items: [
      "Full Body Wax",
      "Half Body Wax",
      "Underarm Wax",
      "Arms Wax",
      "Legs Wax",
      "Bikini Wax",
      "Facial Wax (Upper Lip, Chin, etc.)",
    ],
  },
  {
    title: "Other Services",
    iconSrc: "/images/makeup-icon.png",
    items: [
      "Body Polishing",
      "Detan Pack",
      "Head Massage",
      "Hair Spa",
      "Pre-Bridal Packages",
      "Groom Packages",
    ],
  },
  {
    title: "Threading Services",
    iconSrc: "/images/skin-icon.png",
    items: [
      "Eyebrow Threading",
      "Upper Lip Threading",
      "Chin Threading",
      "Forehead Threading",
      "Full Face Threading",
    ],
  },
];

const getItemGap = (title: string): string => {
  if (
    title === "Hair Services" ||
    title === "Beard & Grooming" ||
    title === "Skin & Facial"
  ) {
    return "gap-3 sm:gap-4";
  }
  return "gap-2.5 sm:gap-3";
};

export default function OurServicesSection() {
  const renderCard = (category: ServiceCategory) => (
    <div
      key={category.title}
      className="w-full max-w-[504px] p-6 sm:p-8 lg:p-10 bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col relative"
    >
      {/* Category Icon Badge */}
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#E5B548] via-[#F3CE6D] to-[#D89F30] flex items-center justify-center mb-6 shadow-md overflow-hidden">
        <div className="relative w-7 h-7 sm:w-9 sm:h-9">
          <Image
            src={category.iconSrc}
            alt={`${category.title} Icon`}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Title & Floral Accent */}
      <div className="relative mb-6 sm:mb-8 flex items-center justify-between">
        <h3
          className={`${syne.className} text-2xl sm:text-3xl md:text-4xl tracking-tight text-neutral-900 max-w-[65%] leading-tight`}
        >
          {category.title}
        </h3>

        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <Image
            src="/images/floral-leaf.png"
            alt="Floral Leaf"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Service Items Box */}
      <div
        className={`flex flex-col mb-6 sm:mb-8 w-full max-w-[367px] ${getItemGap(
          category.title
        )}`}
      >
        {category.items.map((item, itemIdx) => (
          <div key={itemIdx} className="pb-2 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#D4A338] via-[#FCE38A] to-[#B8860B] flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg
                  className="w-3 h-3 text-neutral-950 stroke-[3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span
                className={`${urbanist.className} text-xs sm:text-sm text-neutral-800`}
              >
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div>
        <Link
          href="/contact"
          className={`${syne.className} inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4A338] via-[#FCE38A] to-[#B8860B] text-neutral-950 font-semibold text-xs shadow-md hover:opacity-90 transition-opacity`}
        >
          Contact Us <span>↗</span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="bg-[#FAF8F5] text-neutral-900 py-12 sm:py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Title Header */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-10 sm:mb-16">
          <span
            className={`${syne.className} text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight`}
          >
            Our
          </span>
          <div className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-sm shadow-sm bg-gradient-to-r from-[#D4A338] via-[#FCE38A] to-[#B8860B]">
            <span
              className={`${syne.className} text-[#111111] text-3xl sm:text-4xl md:text-5xl`}
            >
              Services
            </span>
          </div>
        </div>

        {/* 2-Column Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-[40px] justify-center items-center lg:items-start w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-6 sm:gap-[40px] w-full lg:w-auto items-center">
            {leftColumnData.map(renderCard)}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 sm:gap-[40px] w-full lg:w-auto items-center">
            {rightColumnData.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}