import React, { useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { List } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { ui } from '@/content/site';
import { MobileMenu } from './MobileMenu';

export const SECTION_IDS = ['work', 'experience', 'skills', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const NavBar: React.FC = () => {
  const { t, toggle } = useLang();
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setStuck(y > 24));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
          stuck
            ? 'border-b border-line bg-black/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-tight text-ink"
          >
            wail<span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {SECTION_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm transition-colors duration-200 ${
                  active === id ? 'text-accent' : 'text-dim hover:text-ink'
                }`}
              >
                {t(ui.nav[id])}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="border border-line px-4 py-2 font-mono text-xs text-dim transition-colors duration-200 hover:border-ink hover:text-ink active:scale-[0.98]"
            >
              {t(ui.switchLang)}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center border border-line text-ink lg:hidden"
            >
              <List size={18} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} active={active} />
    </>
  );
};
