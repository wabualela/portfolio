import React from 'react';
import { useLang } from '@/lib/useLang';
import { projects, ui } from '@/content/site';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';

export const Work: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section id="work" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className={`mb-16 text-4xl font-bold text-ink md:mb-24 md:text-6xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.work)}
          </h2>
        </Reveal>

        <div className="grid gap-x-8 gap-y-20 md:grid-cols-12">
          <ProjectCard
            project={projects[0]}
            className="md:col-span-7"
            aspect="aspect-[14/9]"
          />
          <ProjectCard
            project={projects[1]}
            className="md:col-span-5 md:mt-24"
            aspect="aspect-[10/9]"
            delay={0.1}
          />
          <ProjectCard
            project={projects[2]}
            className="md:col-span-12"
            aspect="aspect-[16/9] md:aspect-[21/8]"
          />
        </div>
      </div>
    </section>
  );
};
