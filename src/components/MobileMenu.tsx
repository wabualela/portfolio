import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Moon, Sun, Translate, X } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { useTheme } from '@/lib/useTheme';
import { ui } from '@/content/site';
import { EASE_OUT_EXPO } from './Reveal';
import { NAV_ITEMS, type NavItem } from './NavBar';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  isActive: (item: NavItem) => boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  isActive,
}) => {
  const { t, toggle: toggleLang } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const reduce = useReducedMotion();

  const itemClass = (item: NavItem) =>
    `py-3 text-4xl font-bold ${isActive(item) ? 'text-accent-ink' : 'text-ink'}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-bg"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
        >
          <div className="flex h-16 items-center justify-end px-6">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {NAV_ITEMS.map((item, i) => {
              const inner = t(ui.nav[item.key]);
              const motionProps = {
                initial: reduce ? false : ({ opacity: 0, x: -24 } as const),
                animate: { opacity: 1, x: 0 },
                transition: {
                  duration: 0.5,
                  delay: 0.08 + i * 0.06,
                  ease: EASE_OUT_EXPO,
                },
              };
              return item.route ? (
                <motion.div key={item.key} {...motionProps}>
                  <Link to={item.to} onClick={onClose} className={itemClass(item)}>
                    {inner}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.key}
                  href={item.to}
                  onClick={onClose}
                  className={itemClass(item)}
                  {...motionProps}
                >
                  {inner}
                </motion.a>
              );
            })}
          </nav>

          <div className="flex gap-3 px-8 pb-12">
            <button
              onClick={() => {
                onClose();
                toggleLang();
              }}
              aria-label={t(ui.switchLang)}
              className="flex h-12 w-12 items-center justify-center border border-line text-dim active:scale-[0.98]"
            >
              <Translate size={20} />
            </button>
            <button
              onClick={toggleTheme}
              aria-label={t(theme === 'dark' ? ui.themeToggle.toLight : ui.themeToggle.toDark)}
              className="flex h-12 w-12 items-center justify-center border border-line text-dim active:scale-[0.98]"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
