'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import localFont from "next/font/local";
import Link from "next/link";

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

interface GalleryItem {
  id: number;
  type: "photo" | "video";
  src: string;
  alt: string;
}

const galleryData: GalleryItem[] = [
  { id: 1, type: "photo", src: "/images/gal-1.jpg", alt: "Gallery 1" },
  { id: 2, type: "photo", src: "/images/gal-2.jpg", alt: "Gallery 2" },
  { id: 3, type: "photo", src: "/images/gal-3.jpg", alt: "Gallery 3" },
  { id: 4, type: "photo", src: "/images/gal-center.jpg", alt: "Gallery Center" },
  { id: 5, type: "photo", src: "/images/gal-4.jpg", alt: "Gallery 4" },
  { id: 6, type: "photo", src: "/images/gal-5.jpg", alt: "Gallery 5" },
  { id: 7, type: "photo", src: "/images/gal-6.jpg", alt: "Gallery 6" },
];

export const SweetMemoriesTwo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const filteredItems = galleryData.filter((item) =>
    activeTab === "photos" ? item.type === "photo" : item.type === "video"
  );

  return (
    <section className="bg-white py-16 w-full">
      {/* GALLERY SECTION (Restricted width and responsive side-padding) */}
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center px-6 md:px-12">
        
        {/* ================= HEADING ================= */}
        <h2 className={`${syne.className} text-3xl md:text-5xl mb-8 flex items-center justify-center gap-2 text-zinc-900`}>
          Our Sweet{" "}
          <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-md text-neutral-900 leading-none shadow-sm select-none bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935]">
            Memories
          </span>
        </h2>

        {/* ================= PHOTOS / VIDEOS TOGGLE ================= */}
        <div className="flex items-center justify-center p-1 bg-zinc-100/80 rounded-full mb-12 border border-zinc-200/60">
          <button
            type="button"
            onClick={() => setActiveTab("photos")}
            className={`${syne.className} px-7 py-2 rounded-full text-xs transition-all duration-300 border-0 outline-none leading-none select-none ${
              activeTab === "photos"
                ? "bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-900 shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Photos
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("videos")}
            className={`${syne.className} px-7 py-2 rounded-full text-xs transition-all duration-300 border-0 outline-none leading-none select-none ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-[#E59935] via-[#FFE998] to-[#E59935] text-neutral-900 shadow-sm"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Videos
          </button>
        </div>

        {/* ================= 7-IMAGE SYMMETRIC GRID ================= */}
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-3 max-w-5xl mx-auto mb-20 items-center">
          
          {/* 1. Far Left Outer Image */}
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow">
            <Image
              src={filteredItems[0]?.src || "/images/gal-1.jpg"}
              alt={filteredItems[0]?.alt || "Gallery 1"}
              fill
              className="object-cover"
            />
          </div>

          {/* 2. Left Stacked Column (2 Images) */}
          <div className="flex flex-col gap-3">
            <div className="relative h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow">
              <Image
                src={filteredItems[1]?.src || "/images/gal-2.jpg"}
                alt={filteredItems[1]?.alt || "Gallery 2"}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow">
              <Image
                src={filteredItems[2]?.src || "/images/gal-3.jpg"}
                alt={filteredItems[2]?.alt || "Gallery 3"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 3. Tall Center Featured Image */}
          <div className="col-span-2 md:col-span-1 relative h-96 sm:h-[420px] md:h-[480px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={filteredItems[3]?.src || "/images/gal-center.jpg"}
              alt={filteredItems[3]?.alt || "Gallery Center"}
              fill
              className="object-cover"
            />
          </div>

          {/* 4. Right Stacked Column (2 Images) */}
          <div className="flex flex-col gap-3">
            <div className="relative h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow">
              <Image
                src={filteredItems[4]?.src || "/images/gal-4.jpg"}
                alt={filteredItems[4]?.alt || "Gallery 4"}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden shadow">
              <Image
                src={filteredItems[5]?.src || "/images/gal-5.jpg"}
                alt={filteredItems[5]?.alt || "Gallery 5"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 5. Far Right Outer Image */}
          <div className="relative h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow">
            <Image
              src={filteredItems[6]?.src || "/images/gal-6.jpg"}
              alt={filteredItems[6]?.alt || "Gallery 6"}
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>

      {/* APPOINTMENT SECTION (Unconstrained full-width banner) */}
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