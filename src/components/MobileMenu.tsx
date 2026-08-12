import React from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { X } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { ui } from '@/content/site';
import { EASE_OUT_EXPO } from './Reveal';
import { SECTION_IDS, type SectionId } from './NavBar';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  active: SectionId | null;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  open,
  onClose,
  active,
}) => {
  const { t, toggle } = useLang();
  const reduce = useReducedMotion();

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
              className="flex h-9 w-9 items-center justify-center border border-line text-ink"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {SECTION_IDS.map((id, i) => (
              <motion.a
                key={id}
                href={`#${id}`}
                onClick={onClose}
                className={`py-3 text-4xl font-bold ${
                  active === id ? 'text-accent' : 'text-ink'
                }`}
                initial={reduce ? false : { opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + i * 0.06,
                  ease: EASE_OUT_EXPO,
                }}
              >
                {t(ui.nav[id])}
              </motion.a>
            ))}
          </nav>

          <div className="px-8 pb-12">
            <button
              onClick={() => {
                onClose();
                toggle();
              }}
              className="border border-line px-6 py-3 font-mono text-xs text-dim active:scale-[0.98]"
            >
              {t(ui.switchLang)}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
