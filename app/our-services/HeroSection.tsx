import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden border-b border-neutral-800">
      {/* Desktop / Tablet Hero Image Wrapper (Proportional Aspect Ratio, Edge-to-Edge) */}
      <div className="hidden sm:block relative w-full aspect-[1920/850]">
        <Image
          src="/images/hero-banner.jpg"
          alt="Muse & Hue Hero Banner"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Phone Hero Image */}
      <div className="block sm:hidden relative w-full h-[60vh]">
        <Image
          src="/images/h1.jpg"
          alt="Muse & Hue Hero Banner Mobile"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}