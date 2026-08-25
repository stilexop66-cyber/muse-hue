'use client';

import React from 'react';
import Image from 'next/image';

export const GalHero: React.FC = () => {
  return (
    <section className="w-full bg-black flex justify-center items-center overflow-hidden">
      <div className="relative w-full max-w-[2000px] aspect-[1980/500] md:aspect-[820/400]">
        <Image
          src="/images/gal-hero.jpg"
          alt="Muse & Hue Studio Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};