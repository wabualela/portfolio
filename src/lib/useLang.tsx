import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { Language, Localized } from '@/content/site';

interface LangContextValue {
  lang: Language;
  /** Language being switched to while the overlay is covering the page */
  targetLang: Language;
  isRtl: boolean;
  switching: boolean;
  t: (value: Localized) => string;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const SWAP_AT_MS = 380;
const OVERLAY_TOTAL_MS = 760;

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'ar' || stored === 'en' ? stored : 'en';
  });
  const [targetLang, setTargetLang] = useState<Language>(lang);
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggle = useCallback(() => {
    if (switching) return;
    const next: Language = lang === 'en' ? 'ar' : 'en';
    setTargetLang(next);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setLang(next);
      return;
    }

    setSwitching(true);
    window.setTimeout(() => setLang(next), SWAP_AT_MS);
    window.setTimeout(() => setSwitching(false), OVERLAY_TOTAL_MS);
  }, [lang, switching]);

  const t = useCallback((value: Localized) => value[lang], [lang]);

  return (
    <LangContext.Provider
      value={{ lang, targetLang, isRtl: lang === 'ar', switching, t, toggle }}
    >
      {children}
    </LangContext.Provider>
  );
};

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
