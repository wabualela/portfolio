import React from 'react';
import { Hero } from '@/components/Hero';
import { StackMarquee } from '@/components/StackMarquee';
import { Work } from '@/components/Work';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { WritingSection } from '@/components/WritingSection';

export const Home: React.FC = () => (
  <main>
    <Hero />
    <StackMarquee />
    <Work />
    <Experience />
    <Skills />
    <Education />
    <WritingSection />
  </main>
);
