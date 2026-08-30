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

const addOns = [
  "Hair Treatments",
  "Skin Treatments",
  "Relaxing Therapies",
  "Membership Plans",
  "Special Offers & Seasonal Packages",
];

export default function AddOnSection() {
  return (
    <section className="bg-white text-neutral-900 pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      {/* 1. Add On Title Header */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
        <span className={`${syne.className} text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight`}>
          Add
        </span>
        <span 
          className={`${syne.className} text-[#111111] text-3xl sm:text-4xl md:text-5xl px-4 sm:px-6 py-1.5 sm:py-2 rounded-sm shadow-sm inline-flex items-center justify-center min-w-[65px] sm:min-w-[80px] leading-none select-none bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935]`}
        >
          On
        </span>
      </div>

      {/* 2. Add On Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 mb-12 sm:mb-20">
        {/* Top Row: 3 Cards */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-[24px] mb-4 sm:mb-[24px]">
          {addOns.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[266px] h-[100px] sm:h-[118px] p-4 sm:py-[40px] sm:px-[20px] bg-white rounded-md shadow-md flex items-center justify-center overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935]"
              />
              <h3 className={`${syne.className} text-base sm:text-lg text-neutral-900 tracking-wide text-center leading-snug`}>
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-[24px]">
          {addOns.slice(3).map((item, index) => (
            <div
              key={index}
              className="relative w-full sm:w-[266px] h-[100px] sm:h-[118px] p-4 sm:py-[40px] sm:px-[20px] bg-white rounded-md shadow-md flex items-center justify-center overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935]"
              />
              <h3 className={`${syne.className} text-base sm:text-lg text-neutral-900 tracking-wide text-center leading-snug`}>
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

     {/* APPOINTMENT SECTION (Unconstrained full-width banner) */}
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
    </section>
  );
}