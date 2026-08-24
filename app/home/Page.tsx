import { HomeHero } from './HomeHero';
import { OurStory } from './OurStory';
import { SweetMemoriesOne } from './SweetMemoriesOne';
import { SweetMemoriesTwo } from './SweetMemoriesTwo';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-black">
      <HomeHero />
      <OurStory />
      <SweetMemoriesOne />
      <SweetMemoriesTwo />
    </main>
  );
}