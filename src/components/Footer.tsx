import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { identity, ui } from '@/content/site';
import { Reveal } from './Reveal';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: identity.github },
  { label: 'LinkedIn', href: identity.linkedin },
  { label: identity.website, href: `https://${identity.website}` },
];

export const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer id="contact" className="border-t border-line px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-xl text-dim md:text-2xl">{t(ui.footer.heading)}</p>
          <a
            dir="ltr"
            href={`mailto:${identity.email}`}
            className="group relative mt-6 inline-block break-all font-bold text-ink transition-colors duration-300 hover:text-accent-ink"
            style={{ fontSize: 'clamp(1.75rem, 5.5vw, 5rem)' }}
          >
            {identity.email}
            <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none" />
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                dir="ltr"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs uppercase text-dim transition-colors hover:text-accent-ink"
              >
                {link.label}
                <ArrowUpRight size={13} className="rtl:-scale-x-100" />
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-dim">{t(ui.footer.rights)}</p>
        </div>
      </div>
    </footer>
  );
};
