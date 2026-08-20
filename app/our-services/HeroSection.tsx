import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
   <section className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden border-b border-neutral-800">
      <Image
        src="/images/hero-banner.jpg" // Replace with your image path
        alt="Muse & Hue Hero Banner"
        fill
        priority
        className="object-cover object-center"
      />
    </section>
  );
}