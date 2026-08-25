import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden border-b border-neutral-800">
      {/* Desktop / Tablet Hero Image */}
      <Image
        src="/images/hero-banner.jpg"
        alt="Muse & Hue Hero Banner"
        fill
        priority
        sizes="100vw"
        className="hidden sm:block object-cover object-center"
      />

      {/* Mobile Phone Hero Image */}
      <Image
        src="/images/h1.jpg" // Replace with your mobile image path
        alt="Muse & Hue Hero Banner Mobile"
        fill
        priority
        sizes="100vw"
        className="block sm:hidden object-cover object-center"
      />
    </section>
  );
}