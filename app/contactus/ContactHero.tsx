import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Desktop / Tablet Container (Proportional Height, No Cropping) */}
      <div className="hidden sm:block relative w-full aspect-[1440/550]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us Hero"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile Phone Container */}
      <div className="block sm:hidden relative w-full aspect-[400/500]">
        <Image
          src="/images/h4.jpg"
          alt="Contact Us Mobile Hero"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}