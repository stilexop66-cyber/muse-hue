"use client";

import Link from "next/link";
import Image from "next/image";
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

export default function ContactFormSection() {
  return (
    <div className="w-full bg-white text-neutral-900 pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
      {/* Title Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h1 className={`${syne.className} text-3xl sm:text-4xl md:text-5xl tracking-tight inline-flex items-center gap-2 flex-wrap justify-center`}>
          <span>Fill Up The</span>
          <span className="bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-black px-4 py-1 rounded-md">
            Form
          </span>
        </h1>
      </div>

      <div className="max-w-[1068px] mx-auto px-4">
        {/* Main Form & Image Container */}
        <div className="w-full bg-white rounded-2xl p-4 sm:p-6 lg:p-[30px] shadow-sm border border-neutral-100 mb-6 mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[45px] items-start lg:items-stretch justify-between">
            
            {/* Left Side: Form */}
            <form 
              className="w-full lg:w-[406px] flex flex-col justify-between gap-6 lg:gap-[32px] shrink-0" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-6 lg:gap-[32px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="abc"
                      className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E59935] text-xs bg-white`}
                    />
                  </div>
                  <div>
                    <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="abc"
                      className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E59935] text-xs bg-white`}
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
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E59935] text-xs bg-white`}
                  />
                </div>

                <div>
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="abc"
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E59935] text-xs bg-white`}
                  />
                </div>

                <div>
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Preferable Time Slot
                  </label>
                  <input
                    type="text"
                    placeholder="abc"
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E59935] text-xs bg-white`}
                  />
                </div>

                <div>
                  <label className={`${syne.className} block text-[10px] text-neutral-500 uppercase mb-1 tracking-wider`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Text us ..."
                    className={`${urbanist.className} w-full px-3 py-2.5 rounded-md border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-[#E59935] text-xs bg-white resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`${syne.className} px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-950 font-bold text-xs shadow-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1 w-full sm:w-fit shrink-0`}
              >
                Submit ↗
              </button>
            </form>

            {/* Right Side: Image Box */}
            <div className="relative rounded-xl overflow-hidden w-full lg:w-[556px] h-[280px] sm:h-[380px] lg:h-auto lg:min-h-[550px] shrink-0">
              <Image
                src="/images/hair-styling.jpg"
                alt="Office Location Background"
                fill
                sizes="(max-width: 1024px) 100vw, 556px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 sm:p-6 text-white">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#E59935] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className={`${syne.className} text-sm`}>Office Location</h3>
                    <p className={`${urbanist.className} text-[11px] text-neutral-200 leading-tight`}>
                      PLOT NO - AB 36, PRE-07-0074,
                      <br />
                      ACTION AREA - I, NEWTOWN KOLKATA - 700156
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Info Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-[18px] mb-12">
          {/* Location */}
          <div className="w-full h-[160px] sm:h-[192px] p-[20px] bg-black rounded-xl border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-[#E59935]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#E59935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 
                className={`${syne.className} text-[24px] sm:text-[28px] font-bold leading-none bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                Location
              </h4>
              <p 
                className={`${urbanist.className} text-base sm:text-lg font-semibold mt-2 bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                New Town, Kolkata
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="w-full h-[160px] sm:h-[192px] p-[20px] bg-black rounded-xl border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-[#E59935]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#E59935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 
                className={`${syne.className} text-[24px] sm:text-[28px] font-bold leading-none bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                Phone
              </h4>
              <p 
                className={`${urbanist.className} text-base sm:text-lg font-semibold mt-2 bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                +91-9073706968
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="w-full h-[160px] sm:h-[192px] p-[20px] bg-black rounded-xl border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-[#E59935]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#E59935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 
                className={`${syne.className} text-[24px] sm:text-[28px] font-bold leading-none bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                Email
              </h4>
              <p 
                className={`${urbanist.className} text-[11px] sm:text-[13px] md:text-xs lg:text-[13px] xl:text-[15px] font-semibold mt-2 whitespace-nowrap bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                muse0hue@gmail.com
              </p>
            </div>
          </div>

          {/* Timing */}
          <div className="w-full h-[160px] sm:h-[192px] p-[20px] bg-black rounded-xl border border-neutral-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-neutral-900 border border-[#E59935]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#E59935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 
                className={`${syne.className} text-[24px] sm:text-[28px] font-bold leading-none bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                Timing
              </h4>
              <p 
                className={`${urbanist.className} text-base sm:text-lg font-semibold mt-2 bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] bg-clip-text text-transparent`}
              >
                11 A.M. - 8 P.M.
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Container */}
        <div className="w-full max-w-[1068px] h-[250px] sm:h-[380px] md:h-[559px] rounded-2xl overflow-hidden mx-auto mb-12 sm:mb-20 shadow-sm border border-neutral-100">
          <iframe
            title="Office Location Map"
            src="https://maps.google.com/maps?q=PLOT%20NO%20-%20AB%2036%2C%20ACTION%20AREA%20-%20I%2C%20NEWTOWN%20KOLKATA%20-%20700156&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* APPOINTMENT (EDGE-TO-EDGE) */}
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

    </div>
  );
}