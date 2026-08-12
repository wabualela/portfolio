import React from 'react';
import { useLang } from '@/lib/useLang';
import { projects, ui } from '@/content/site';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';

/* grid recipe per mockup: 7/5 offset pair, full-width wide, then a 6/6 pair */
const SLOTS = [
  { className: 'md:col-span-7', aspect: 'aspect-[14/9]', delay: 0 },
  { className: 'md:col-span-5 md:mt-[120px]', aspect: 'aspect-[14/9]', delay: 0.1 },
  { className: 'md:col-span-12', aspect: 'aspect-[16/9] md:aspect-[21/9]', delay: 0 },
  { className: 'md:col-span-6', aspect: 'aspect-[14/9]', delay: 0 },
  { className: 'md:col-span-6', aspect: 'aspect-[14/9]', delay: 0.1 },
];

export const Work: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section id="work" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className={`mb-14 text-4xl font-bold text-ink md:mb-16 md:text-6xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.work)}
          </h2>
        </Reveal>

        <div className="grid gap-x-6 gap-y-20 md:grid-cols-12 md:gap-y-24">
          {projects.map((project, i) => {
            const slot = SLOTS[i % SLOTS.length];
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                className={slot.className}
                aspect={slot.aspect}
                delay={slot.delay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
