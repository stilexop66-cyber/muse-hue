'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

// Note: Ensure the folder name in your public/src directory exactly matches "fonts" or "Fonts"
const syne = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Syne-Bold.ttf",
  weight: "800",
  style: "normal",
  variable: "--font-syne",
});

const urbanist = localFont({
  src: "../fonts/Fiorello CG Condensed Regular/Urbanist-Black.ttf",
  weight: "900",
  style: "normal",
  variable: "--font-urbanist",
});

interface GalleryItem {
  id: number;
  type: "photo" | "video";
  src: string;
  alt: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, type: "photo", src: "/images/story-main.jpg", alt: "Main Chevrolet Decorated Car" },
  { id: 2, type: "photo", src: "/images/gal-5.jpg", alt: "Canopy Bed Flower Decoration" },
  { id: 3, type: "photo", src: "/images/gal-3.jpg", alt: "Side View Decorated Car" },
  { id: 4, type: "photo", src: "/images/gal-1.jpg", alt: "Night Entrance Stage" },
  { id: 5, type: "photo", src: "/images/gal-6.jpg", alt: "Groom Portrait" },
  { id: 6, type: "photo", src: "/images/gal-41.jpg", alt: "Royal Stage Chair" },
  { id: 7, type: "photo", src: "/images/gal-2.jpg", alt: "Heart Rose Petal Bed Decor" },
];

export const Beautifull: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const filteredItems = galleryData.filter((item) =>
    activeTab === "photos" ? item.type === "photo" : item.type === "video"
  );

  return (
    <section className="bg-white py-10 sm:py-14 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
        
        {/* Title */}
        <h2 className={`${syne.className} text-3xl sm:text-4xl md:text-5xl mb-6 flex items-center justify-center gap-2 text-zinc-900`}>
          Our Beautiful{" "}
          <span className="bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-900 px-4 py-1 rounded-md">
            Gallery
          </span>
        </h2>

        {/* Filter Toggle Buttons */}
        <div className="flex items-center justify-center p-1 bg-zinc-100 rounded-full mb-8 border border-zinc-200">
          <button
            onClick={() => setActiveTab("photos")}
            className={`${syne.className} px-5 py-1 rounded-full text-xs transition-all ${
              activeTab === "photos"
                ? "bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            Photos
          </button>

          <button
            onClick={() => setActiveTab("videos")}
            className={`${syne.className} px-5 py-1 rounded-full text-xs transition-all ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="w-full flex flex-col gap-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            <div className="md:col-span-7 relative h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={filteredItems[0]?.src || "/images/d1.jpg"}
                alt={filteredItems[0]?.alt || "Decorated Car"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="relative h-[150px] sm:h-[192px] md:h-[217px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={filteredItems[1]?.src || "/images/d2.jpg"}
                  alt={filteredItems[1]?.alt || "Canopy Bed Flowers"}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="relative h-[150px] sm:h-[192px] md:h-[217px] rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={filteredItems[2]?.src || "/images/d3.jpg"}
                  alt={filteredItems[2]?.alt || "Side Car"}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
            <div className="md:col-span-6 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={filteredItems[3]?.src || "/images/d4.jpg"}
                    alt={filteredItems[3]?.alt || "Night Stage"}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={filteredItems[4]?.src || "/images/d5.jpg"}
                    alt={filteredItems[4]?.alt || "Groom Portrait"}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="relative h-[150px] sm:h-[190px] md:h-[200px] w-full rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={filteredItems[5]?.src || "/images/d6.jpg"}
                  alt={filteredItems[5]?.alt || "Royal Stage Chair"}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="md:col-span-6 relative h-[340px] sm:h-[415px] md:h-auto rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={filteredItems[6]?.src || "/images/d7.jpg"}
                alt={filteredItems[6]?.alt || "Heart Rose Bed Decor"}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className={`${syne.className} px-7 py-2 rounded-full text-xs bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-900 shadow-sm hover:opacity-90 transition-opacity flex items-center gap-1 mb-14`}>
          View More ↗
        </button>

      </div>

      {/* APPOINTMENT (EDGE-TO-EDGE) */}
      <div className="relative w-full flex flex-col items-center my-8 sm:my-12">
        <div className="w-full bg-black text-white py-8 sm:py-10 flex justify-center">
          <div className="w-full max-w-[1072px] px-6 flex flex-col sm:flex-row justify-between items-center gap-4 pb-20 sm:pb-28 text-center sm:text-left">
            <h2 className={`${syne.className} text-xl xs:text-2xl md:text-4xl tracking-tight`}>Book Your Appointment Now</h2>
            <Link 
              href="https://boscle.in/book/muse-and-hue" 
              target="_blank"
              rel="noopener noreferrer"
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
};