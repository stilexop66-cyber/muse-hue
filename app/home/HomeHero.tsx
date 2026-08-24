import React from 'react';
import Image from 'next/image';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-1200px h-[calc(100vh-80px)] xl:h-[950px] max-w-[2040px] mx-auto overflow-hidden bg-black">
      <Image
        src="/images/hero-1.png"
        alt="Hero Cover"
        fill
        priority
        sizes="(max-width: 1240px) 100vw, 1440px"
        className="object-cover object-center"
      />
    </section>
  );
};