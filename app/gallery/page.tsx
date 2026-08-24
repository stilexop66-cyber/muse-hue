import React from 'react';
import { GalHero } from './GalHero';
import { Beautifull } from './Beautifull';

export default function GalleryPage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <GalHero />
      <Beautifull />
    </main>
  );
}