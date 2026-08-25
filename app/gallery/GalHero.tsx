'use client';

import React from 'react';
import Image from 'next/image';

export const GalHero: React.FC = () => {
  return (
    <section className="w-full bg-black leading-none">
      <Image
        src="/images/gal-hero.jpg"
        alt="Muse & Hue Studio Hero"
        width={1620}
        height={100} // Approximate reference ratio, Next.js auto-adjusts
        priority
        className="w-full h-auto block"
      />
    </section>
  );
};