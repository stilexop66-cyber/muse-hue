'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import localFont from 'next/font/local';

// Local Fonts Setup
const syne = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Syne-Bold.ttf",
  weight: "800",
  style: "normal",
});

const urbanistBold = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-Black.ttf",
  weight: "800",
  style: "normal",
});

const urbanistMedium = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-Medium.ttf",
  weight: "500",
  style: "normal",
});
const urbanistt = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-SemiBold.ttf",
  weight: "200",
  style: "normal",
});

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-6 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand Logo & Title (Left) */}
          <div className="md:col-span-4 flex flex-col items-start gap-3">
            <Image
              src="/images/logo.png" 
              alt="Muse & Hue Logo"
              width={100}
              height={100}
              className="object-contain"
            />
            <div className="flex flex-col items-start leading-none tracking-tight mt-1">
              {/* MUSE & HUE (Smaller Gold Gradient) */}
              <span className={`${urbanistt.className} text-xl sm:text-1xl  tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4A338] via-[#FCE38A] to-[#B8860B]`}>
                MUSE & HUE
              </span>

              {/* UNISEX SALON (Bigger Gold Gradient) */}
              <h1 className={`${urbanistt.className} text-2xl sm:text-3xl md:text-3xl tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#D4A338] via-[#FCE38A] to-[#B8860B] mt-1`}>
                UNISEX SALON
              </h1>
            </div>
          </div>

          {/* Column 2: Pages Navigation */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className={`${syne.className} text-xl text-white mb-1`}>Pages</h3>
            <Link href="/" className={`${urbanistMedium.className} text-sm text-zinc-400 hover:text-white transition-colors`}>Home</Link>
            <Link href="/about" className={`${urbanistMedium.className} text-sm text-zinc-400 hover:text-white transition-colors`}>About</Link>
            <Link href="/our-services" className={`${urbanistMedium.className} text-sm text-zinc-400 hover:text-white transition-colors`}>Services</Link>
            <Link href="/gallery" className={`${urbanistMedium.className} text-sm text-zinc-400 hover:text-white transition-colors`}>Gallery</Link>
            <Link href="/contactus" className={`${urbanistMedium.className} text-sm text-zinc-400 hover:text-white transition-colors`}>Contact</Link>
          </div>

          {/* Column 3: Services List */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h3 className={`${syne.className} text-xl text-white mb-1`}>Services</h3>
            <span className={`${urbanistMedium.className} text-sm text-zinc-400`}>Hair</span>
            <span className={`${urbanistMedium.className} text-sm text-zinc-400`}>Beard</span>
            <span className={`${urbanistMedium.className} text-sm text-zinc-400`}>Skin</span>
            <span className={`${urbanistMedium.className} text-sm text-zinc-400`}>Nail</span>
            <span className={`${urbanistMedium.className} text-sm text-zinc-400`}>Waxing</span>
            <span className={`${urbanistMedium.className} text-sm text-zinc-400`}>Threading</span>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className={`${syne.className} text-xl text-white mb-1`}>Join a Newsletter</h3>
            <label htmlFor="newsletter-email" className={`${urbanistMedium.className} text-sm text-white`}>Your Email</label>
            
            {/* Email Input Field */}
            <div className="relative w-full max-w-sm flex items-center bg-white rounded-full px-4 py-2.5">
              <svg
                className="w-5 h-5 text-zinc-900 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter Your Email"
                className={`${urbanistMedium.className} w-full bg-transparent text-zinc-900 text-sm focus:outline-none placeholder-zinc-500`}
              />
            </div>

            {/* Compact Know More Button */}
            <button
              type="button"
              className={`${syne.className} relative inline-flex items-center justify-center w-auto self-start px-6 py-2.5 rounded-full text-xs font-bold text-neutral-900 shadow-md mt-1 bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] hover:opacity-90 transition-opacity`}
            >
              <span>Know More</span>
            </button>

            {/* Social Media Image Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors overflow-hidden relative">
                <Image src="/images/x.png" alt="X (Twitter)" width={18} height={18} className="object-contain" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors overflow-hidden relative">
                <Image src="/images/instagra.png" alt="Instagram" width={18} height={18} className="object-contain" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors overflow-hidden relative">
                <Image src="/images/linkedi.png" alt="LinkedIn" width={18} height={18} className="object-contain" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center hover:border-white transition-colors overflow-hidden relative">
                <Image src="/images/facebook.png" alt="Facebook" width={18} height={18} className="object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* MIDDLE SECTION: Copyright Bar */}
        <div className={`${urbanistMedium.className} flex flex-col sm:flex-row justify-between items-center border-t border-zinc-800 pt-6 text-xs text-zinc-400 gap-2`}>
          <p>© 2026 muse&hue. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed by Createdge <span className="text-red-500">❤️</span>
          </p>
        </div>

        {/* BOTTOM SECTION: Large Text Banner */}
        <div className="w-full flex justify-center pt-4 overflow-hidden">
          <h1 className={`${syne.className} text-5xl sm:text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-zinc-500 to-zinc-900 tracking-wider text-center select-none opacity-80`}>
            MUSE & HUE
          </h1>
        </div>

      </div>
    </footer>
  );
}