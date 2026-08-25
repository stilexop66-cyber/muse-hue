'use client';

import React from 'react';
import Image from 'next/image';

export const GalHero: React.FC = () => {
  return (
     <section className="relative w-full bg-black overflow-hidden">
          {/* Desktop / Tablet Container (Proportional Height, No Cropping) */}
          <div className="hidden sm:block relative w-full aspect-[1440/890]">
            <Image
              src="/images/gal-hero.jpg"
              alt="Gallery Hero"
              fill
              priority
              quality={100}
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

      {/* Mobile Phone Container */}
      <div className="block sm:hidden relative aspect-[400/1000]">
        <Image
          src="/images/h3.jpg"
          alt="Muse & Hue Studio Mobile Hero"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};