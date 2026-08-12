import React from 'react';
import { useLang } from '@/lib/useLang';
import { skills, ui } from '@/content/site';
import { Reveal } from './Reveal';
import { StackMarquee } from './StackMarquee';

const GROUP_KEYS = ['backend', 'frontend', 'cms', 'tools'] as const;

export const Skills: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section id="skills" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className={`mb-16 text-4xl font-bold text-ink md:mb-24 md:text-6xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.skills)}
          </h2>
        </Reveal>

        <div className="grid gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {GROUP_KEYS.map((key, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <h3 className="font-mono text-xs uppercase text-dim">
                {t(ui.skillGroups[key])}
              </h3>
              <ul className="mt-5 space-y-2">
                {skills[key].map((skill) => (
                  <li key={skill} dir="ltr" className="text-lg text-ink/85">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <StackMarquee />
    </section>
  );
};
