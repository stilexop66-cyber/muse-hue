import React from 'react';
import Image from 'next/image';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] xl:h-[950px] max-w-[2040px] mx-auto overflow-hidden bg-black">
      {/* Desktop / Tablet Hero Image */}
      <Image
        src="/images/hero-1.png"
        alt="Hero Cover"
        fill
        priority
        sizes="(max-width: 1240px) 100vw, 1440px"
        className="hidden sm:block object-cover object-center"
      />

      {/* Mobile Phone Hero Image */}
      <Image
        src="/images/h2.png" // Replace with your mobile hero image path
        alt="Hero Cover Mobile"
        fill
        priority
        sizes="100vw"
        className="block sm:hidden object-cover object-center"
      />
    </section>
  );
};