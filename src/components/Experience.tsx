import React from 'react';
import { useLang } from '@/lib/useLang';
import { experience, ui } from '@/content/site';
import { Reveal } from './Reveal';

export const Experience: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section
      id="experience"
      className="border-t border-line px-6 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] items-start gap-12 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <h2
            className={`text-4xl font-bold text-ink md:sticky md:top-24 md:text-6xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.experience)}
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {experience.map((entry, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="border-t border-line py-7">
                <div dir="ltr" className="font-mono text-xs tracking-[0.1em] text-dim">
                  {entry.period}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
                  {t(entry.role)}
                </h3>
                <div className="mt-1 text-dim">{t(entry.company)}</div>
                <p className="mt-4 max-w-[65ch] leading-relaxed text-dim">
                  {t(entry.desc)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
