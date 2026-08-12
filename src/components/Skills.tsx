import React from 'react';
import { useLang } from '@/lib/useLang';
import { skillGroups, ui } from '@/content/site';
import { Reveal } from './Reveal';

export const Skills: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section id="skills" className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className={`mb-12 text-4xl font-bold text-ink md:text-6xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.skills)}
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {skillGroups.map((group, i) => (
            <Reveal key={group.items[0]} delay={i * 0.05}>
              <div
                className={`grid items-baseline gap-3 border-t border-line py-6 md:grid-cols-[200px_1fr] md:gap-6 ${
                  i === skillGroups.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-dim">
                  {t(group.label)}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      dir="ltr"
                      className="border border-line px-2.5 py-1 font-mono text-[11px] uppercase text-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
