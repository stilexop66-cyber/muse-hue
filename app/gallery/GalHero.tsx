'use client';

import React from 'react';
import Image from 'next/image';

export const GalHero: React.FC = () => {
  return (
    <section className="w-full bg-black flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[2000px] aspect-[1440/700] min-h-[360px] max-h-[942px]">
        <Image
          src="/images/gal-hero.jpg"
          alt="Muse & Hue Studio Hero"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};