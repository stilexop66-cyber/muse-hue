import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden bg-black">
      {/* Desktop / Tablet Hero Image */}
      <Image
        src="/images/contact-hero.jpg"
        alt="Contact Us Hero"
        fill
        className="hidden sm:block object-cover object-center"
        priority
      />

      {/* Mobile Phone Hero Image */}
      <Image
        src="/images/h4.jpg" // Replace with your phone image path
        alt="Contact Us Mobile Hero"
        fill
        className="block sm:hidden object-cover object-center"
        priority
      />
    </section>
  );
}