import React from 'react';
import { useLang } from '@/lib/useLang';
import { education, ui } from '@/content/site';
import { Reveal } from './Reveal';

export const Education: React.FC = () => {
  const { t, isRtl } = useLang();

  return (
    <section className="px-6 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2
            className={`mb-14 text-3xl font-bold text-ink md:text-5xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.education)}
          </h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          {education.map((entry, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <h3 className="text-xl font-semibold text-ink">
                {t(entry.institution)}
              </h3>
              <p className="mt-2 text-dim">{t(entry.degree)}</p>
              <div dir="ltr" className="mt-3 font-mono text-xs text-dim">
                {entry.period}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
