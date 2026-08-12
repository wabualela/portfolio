import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { List } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { useTheme } from '@/lib/useTheme';
import { ui } from '@/content/site';
import { MobileMenu } from './MobileMenu';

export const HOME_SECTION_IDS = ['work', 'experience', 'contact'] as const;
export type SectionId = (typeof HOME_SECTION_IDS)[number];

export interface NavItem {
  key: 'work' | 'experience' | 'writing' | 'contact';
  /** anchor on the home page, or a router path */
  to: string;
  route?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'work', to: '/#work' },
  { key: 'experience', to: '/#experience' },
  { key: 'writing', to: '/writing', route: true },
  { key: 'contact', to: '/#contact' },
];

export const NavBar: React.FC = () => {
  const { t, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [stuck, setStuck] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const onHome = pathname === '/';
  const onWriting = pathname.startsWith('/writing');

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setStuck(y > 24));

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    HOME_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (item: NavItem) =>
    item.route ? onWriting : onHome && activeSection === item.key;

  const linkClass = (item: NavItem) =>
    `text-sm transition-colors duration-200 ${
      isActive(item) ? 'text-accent-ink' : 'text-dim hover:text-ink'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
          stuck
            ? 'border-b border-line bg-nav backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
          <Link
            to="/"
            className="font-mono text-sm font-bold tracking-tight text-ink"
          >
            wail<span className="text-accent-ink">.</span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.route ? (
                <Link key={item.key} to={item.to} className={linkClass(item)}>
                  {t(ui.nav[item.key])}
                </Link>
              ) : (
                <a key={item.key} href={item.to} className={linkClass(item)}>
                  {t(ui.nav[item.key])}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="border border-line px-4 py-2 font-mono text-xs text-dim transition-colors duration-200 hover:border-ink hover:text-ink active:scale-[0.98]"
            >
              {t(ui.switchLang)}
            </button>
            <button
              onClick={toggleTheme}
              className="hidden border border-line px-3 py-2 font-mono text-xs uppercase tracking-wide text-dim transition-colors duration-200 hover:border-ink hover:text-ink active:scale-[0.98] sm:block"
            >
              {t(theme === 'dark' ? ui.themeToggle.toLight : ui.themeToggle.toDark)}
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink lg:hidden"
            >
              <List size={18} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isActive={isActive}
      />
    </>
  );
};
