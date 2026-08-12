import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useLang } from '@/lib/useLang';
import { identity, ui } from '@/content/site';
import { EASE_OUT_EXPO } from './Reveal';

const MaskLine: React.FC<{
  children: React.ReactNode;
  delay: number;
  className?: string;
}> = ({ children, delay, className = '' }) => {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { t, isRtl } = useLang();

  const nameClass = `font-bold uppercase leading-[0.95] ${
    isRtl
      ? 'font-arabic text-[clamp(3.25rem,12vw,9rem)]'
      : 'tracking-tight text-[clamp(3.5rem,13vw,10.5rem)]'
  }`;

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-end px-6 pb-14 pt-24 md:px-10"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <h1 className="text-ink">
          <MaskLine delay={0.1}>
            <span className={`block ${nameClass}`}>{t(identity.firstName)}</span>
          </MaskLine>
          <MaskLine delay={0.22}>
            <span className={`block ${nameClass}`}>{t(identity.lastName)}</span>
          </MaskLine>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-end">
          <MaskLine delay={0.38} className="md:col-span-7">
            <p className="max-w-[38ch] text-xl leading-relaxed text-dim md:text-2xl">
              {t(ui.hero.rolePre)}
              <span className="text-accent-ink">{t(ui.hero.roleAccent)}</span>
              {t(ui.hero.rolePost)}
            </p>
          </MaskLine>

          <motion.div
            className="flex flex-wrap gap-4 md:col-span-5 md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a
              href="#work"
              className="bg-accent px-7 py-4 font-mono text-xs font-bold uppercase text-black transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            >
              {t(ui.hero.ctaWork)}
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="border border-line px-7 py-4 font-mono text-xs uppercase text-ink transition-colors duration-200 hover:border-accent-ink hover:text-accent-ink active:scale-[0.98]"
            >
              {t(ui.hero.ctaEmail)}
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line pt-6 font-mono text-xs text-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span>{t(identity.location)}</span>
          <a
            dir="ltr"
            href={`mailto:${identity.email}`}
            className="transition-colors hover:text-accent-ink"
          >
            {identity.email}
          </a>
          <a
            dir="ltr"
            href={`tel:${identity.phone.replace(/\s/g, '')}`}
            className="transition-colors hover:text-accent-ink"
          >
            {identity.phone}
          </a>
          <a
            dir="ltr"
            href={`https://${identity.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-ink"
          >
            {identity.website}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
