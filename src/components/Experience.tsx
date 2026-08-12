import React from 'react';
import { useLang } from '@/lib/useLang';
import { experience, ui } from '@/content/site';
import { Reveal } from './Reveal';

export const Experience: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section id="experience" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <h2
              className={`text-4xl font-bold text-ink md:sticky md:top-28 md:text-6xl ${
                isRtl ? '' : 'tracking-tight'
              }`}
            >
              {t(ui.sections.experience)}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          {experience.map((entry, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article
                className={`pb-14 ${i > 0 ? 'border-t border-line pt-14' : ''}`}
              >
                <div dir="ltr" className="font-mono text-xs text-dim">
                  {entry.period}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-ink md:text-4xl">
                  {t(entry.role)}
                </h3>
                <div className="mt-2 text-lg text-dim">{t(entry.company)}</div>
                <p className="mt-6 max-w-[65ch] leading-relaxed text-dim">
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
