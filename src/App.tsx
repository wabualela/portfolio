import React from 'react';
import { LangProvider } from '@/lib/useLang';
import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { Footer } from '@/components/Footer';
import { LangOverlay } from '@/components/LangOverlay';

const App: React.FC = () => (
  <LangProvider>
    <LangOverlay />
    <NavBar />
    <main>
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <Education />
    </main>
    <Footer />
  </LangProvider>
);

export default App;
