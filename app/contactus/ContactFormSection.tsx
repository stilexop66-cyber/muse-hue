"use client";

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

export default function ContactFormSection() {
  return (
    <div className="w-full bg-white text-neutral-900 pt-12 pb-24">
      {/* Title Header */}
      <div className="text-center mb-12">
        <h1 className={`${syne.className} text-3xl md:text-5xl tracking-tight inline-flex items-center gap-2`}>
          <span>Fill Up The</span>
          <span className="bg-gradient-to-r from-[#E5B548] via-[#F3CE6D] to-[#D89F30] text-black px-4 py-1 rounded-md">
            Form
          </span>
        </h1>
      </div>

      <div className="max-w-[1068px] mx-auto px-4">
        {/* Main Form & Image Container */}
        <div className="w-full max-w-[1065px] h-[828px] bg-white rounded-2xl p-[30px] shadow-sm border border-neutral-100 mb-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-[45px] h-full items-stretch justify-between">
            
            {/* Left Side: Form Fill Layout */}
            <form 
              className="w-full lg:w-[406px] h-[765px] flex flex-col justify-between gap-[32px] shrink-0" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-[32px] flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="abc"
                      className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E5B548] text-xs bg-white`}
                    />
                  </div>
                  <div>
                    <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="abc"
                      className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E5B548] text-xs bg-white`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E5B548] text-xs bg-white`}
                  />
                </div>

                <div>
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="abc"
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E5B548] text-xs bg-white`}
                  />
                </div>

                <div>
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Preferable Time Slot
                  </label>
                  <input
                    type="text"
                    placeholder="abc"
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E5B548] text-xs bg-white`}
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Message
                  </label>
                  <textarea
                    placeholder="Text us ..."
                    className={`${urbanist.className} w-full flex-1 px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E5B548] text-xs bg-white resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`${syne.className} px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E5B548] via-[#F3CE6D] to-[#D89F30] text-neutral-950 text-xs shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1 w-fit shrink-0`}
              >
                Submit ↗
              </button>
            </form>

            {/* Right Side: Image Box */}
            <div className="relative rounded-xl overflow-hidden w-full lg:w-[556px] h-[768px] shrink-0 mx-auto">
              <Image
                src="/images/hair-styling.jpg"
                alt="Office Location Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#E5B548] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className={`${syne.className} text-sm`}>Office Location</h3>
                    <p className={`${urbanist.className} text-[11px] text-neutral-200 leading-tight`}>
                      PLOT NO - AB 36, PRE-E/36024, STREET NO - 89,
                      <br />
                      ACTION AREA - I, NEWTOWN KOLKATA - 700156
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mb-12">
          {/* Location */}
          <div className="w-full max-w-[251px] h-[192px] p-[20px] bg-white rounded-xl border border-neutral-100 shadow-sm flex flex-col justify-between mx-auto">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className={`${syne.className} text-neutral-900 text-[25px] leading-none`}>
                Location
              </h4>
              <p className={`${urbanist.className} text-xs text-neutral-500 mt-1`}>New Town, Kolkata</p>
            </div>
          </div>

          {/* Phone */}
          <div className="w-full max-w-[251px] h-[192px] p-[20px] bg-white rounded-xl border border-neutral-100 shadow-sm flex flex-col justify-between mx-auto">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className={`${syne.className} text-neutral-900 text-[25px] leading-none`}>
                Phone
              </h4>
              <p className={`${urbanist.className} text-xs text-neutral-500 mt-1`}>+91-9073706968</p>
            </div>
          </div>

          {/* Email */}
          <div className="w-full max-w-[251px] h-[192px] p-[20px] bg-white rounded-xl border border-neutral-100 shadow-sm flex flex-col justify-between mx-auto">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className={`${syne.className} text-neutral-900 text-[25px] leading-none`}>
                Email
              </h4>
              <p className={`${urbanist.className} text-xs text-neutral-500 mt-1 break-all`}>skenterprise@gmail.com</p>
            </div>
          </div>

          {/* Timing */}
          <div className="w-full max-w-[251px] h-[192px] p-[20px] bg-white rounded-xl border border-neutral-100 shadow-sm flex flex-col justify-between mx-auto">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className={`${syne.className} text-neutral-900 text-[25px] leading-none`}>
                Timing
              </h4>
              <p className={`${urbanist.className} text-xs text-neutral-500 mt-1`}>11 A.M. - 8 P.M.</p>
            </div>
          </div>
        </div>

        {/* Grey Placeholder Box */}
        <div className="w-full max-w-[1068px] h-[559px] bg-[#D9D9D9] rounded-2xl mx-auto mb-20" />
      </div>

      {/* Appointment CTA Banner */}
      <div className="relative w-full flex flex-col items-center mt-12">
        <div className="w-full bg-black text-white py-12 flex justify-center">
          <div className="w-full max-w-[1068px] px-4 flex flex-row justify-between items-center pb-28">
            <h2 className={`${syne.className} text-2xl md:text-3xl tracking-tight`}>
              Book Your Appointment Now
            </h2>

            <Link
              href="/contact"
              className={`${syne.className} px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E5B548] via-[#F3CE6D] to-[#D89F30] text-neutral-950 text-xs shadow-md hover:opacity-90 transition-opacity flex-shrink-0 flex items-center gap-1`}
            >
              Contact Now <span>↗</span>
            </Link>
          </div>
        </div>

        {/* Overlapping Image Card */}
        <div className="w-full max-w-[1068px] px-4 -mt-28 relative z-10">
          <div className="relative w-full h-[254px] rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src="/images/appointment.jpg"
              alt="Designing Hair Crafts That Speak Your Style"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center">
              <p className={`${syne.className} text-2xl md:text-4xl text-white tracking-wide max-w-2xl leading-relaxed drop-shadow-md`}>
                Designing Hair Crafts <br />
                That Speak Your Style
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}