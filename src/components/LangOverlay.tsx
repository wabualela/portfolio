import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLang } from '@/lib/useLang';
import { identity } from '@/content/site';

/**
 * Signature interaction kept from the original site: a full-black cover with
 * the name in the target language and a blinking terminal cursor.
 */
export const LangOverlay: React.FC = () => {
  const { switching, targetLang } = useLang();

  return (
    <AnimatePresence>
      {switching && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h2
            dir={targetLang === 'ar' ? 'rtl' : 'ltr'}
            className={`text-5xl font-bold text-ink md:text-7xl ${
              targetLang === 'ar' ? 'font-arabic' : ''
            }`}
          >
            {identity.shortName[targetLang]}
            <span className="ms-2 inline-block h-[1em] w-[0.5ch] animate-pulse bg-accent align-middle" />
          </h2>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
