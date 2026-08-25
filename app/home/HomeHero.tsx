import React from 'react';
import Image from 'next/image';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Desktop / Tablet Hero Image Container (Full Width, Natural Banner Ratio) */}
      <div className="hidden sm:block relative w-full aspect-[1920/850]">
        <Image
          src="/images/hero-1.png"
          alt="Hero Cover"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Phone Hero Image Container */}
      <div className="block sm:hidden relative w-full h-[calc(100vh-80px)]">
        <Image
          src="/images/h2.png"
          alt="Hero Cover Mobile"
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