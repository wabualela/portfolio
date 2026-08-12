import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LangProvider } from '@/lib/useLang';
import { ThemeProvider } from '@/lib/useTheme';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { LangOverlay } from '@/components/LangOverlay';
import { Home } from '@/pages/Home';
import { WritingPage } from '@/pages/WritingPage';
import { ArticlePage } from '@/pages/ArticlePage';

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => (
  <LangProvider>
    <ThemeProvider>
      <ScrollToTop />
      <LangOverlay />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </LangProvider>
);

export default App;
