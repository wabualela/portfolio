
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Globe, 
  Terminal, 
  ChevronRight, 
  ChevronUp,
  Code2, 
  Briefcase, 
  GraduationCap,
  ExternalLink,
  Cpu, 
  MessageSquare,
  Menu,
  X,
  Languages,
  Sparkles,
  Lock
} from 'lucide-react';
import { translations, Language, INITIAL_EXPERIENCE_DATA, INITIAL_EDUCATION_DATA, skillsData } from './translations';
import { DataService, Experience } from './services';
import { AdminDashboard } from './Admin';

const ProjectCard: React.FC<{
  title: string;
  desc: string;
  tags: string[];
  url: string;
  delay?: number;
}> = ({ title, desc, tags, url, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      style={{ animationDelay: `${delay}ms` }}
      className={`project-reveal block border border-white/20 p-8 hover:bg-white hover:text-black hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 group relative overflow-hidden ${isVisible ? 'visible' : ''}`}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 flex justify-between items-center group-hover:translate-x-1 transition-transform">
          {title}
          <ExternalLink size={20} className="opacity-40 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="opacity-60 text-sm mb-6 leading-relaxed group-hover:opacity-90 transition-opacity">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] border border-current px-3 py-1 font-bold tracking-tighter">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-[1500ms] pointer-events-none" />
    </a>
  );
};

const ExperienceItem: React.FC<{ 
  exp: Experience; 
  lang: Language; 
}> = ({ exp, lang }) => {
  const isRtl = lang === 'ar';
  return (
    <div className="group relative pl-8 border-l border-white/10 hover:border-white transition-all duration-500 py-6">
      <div className="absolute -left-[5px] top-8 w-[9px] h-[9px] bg-black border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:rotate-45" />
      
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="text-xl font-bold group-hover:translate-x-1 transition-transform duration-300">{exp.role}</h3>
        <span className="text-sm text-white/40 font-mono mt-1 md:mt-0" dir="ltr">{exp.period}</span>
      </div>
      <div className="text-white/60 mb-3 font-medium tracking-wide">{exp.company}</div>
      
      <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-700 ease-out">
        <div className="overflow-hidden">
          <div className="relative pl-6 py-4 mt-2 border-t border-white/10 transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
            <div className={`absolute top-4 bottom-4 ${isRtl ? 'right-0' : 'left-0'} w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-1000 delay-100`} />
            
            <p className={`text-white/80 max-w-4xl leading-relaxed text-sm md:text-base`}>
              {lang === 'en' ? exp.descEn : exp.descAr}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-3 text-[9px] text-white/20 uppercase tracking-[0.3em] group-hover:opacity-0 transition-opacity duration-500 flex items-center gap-2">
        <ChevronRight size={10} className="animate-pulse" />
        {isRtl ? "[ حرك الماوس لرؤية التفاصيل ]" : "[ hover to view full details ]"}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isSwitching, setIsSwitching] = useState(false);
  const [transitionName, setTransitionName] = useState('Wail');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNavStuck, setIsNavStuck] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Dynamic Data State
  const [experience, setExperience] = useState<Experience[]>([]);
  const [education] = useState(INITIAL_EDUCATION_DATA);

  const t = translations[lang];
  const isRtl = lang === 'ar';

  const navLinks = [
    { id: 'hero', label: t.navHero },
    { id: 'profile', label: t.navProfile },
    { id: 'experience', label: t.navExperience },
    { id: 'projects', label: t.navProjects },
    { id: 'education', label: t.navEducation }
  ];

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      // In a real app, this waits for the API response
      const data = await DataService.getExperience();
      setExperience(data);
    };
    fetchData();
  }, []);

  // Reload data if Admin closes (in case updates occurred)
  useEffect(() => {
    if (!isAdminOpen) {
      DataService.getExperience().then(setExperience);
    }
  }, [isAdminOpen]);

  const toggleLang = () => {
    setTransitionName(lang === 'en' ? 'Wail' : 'وائل');
    setIsSwitching(true);
    setTimeout(() => {
      setLang(prev => prev === 'en' ? 'ar' : 'en');
      setTimeout(() => {
        setIsSwitching(false);
      }, 300);
    }, 600); 
  };

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, .cursor-pointer'));
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsNavStuck(window.scrollY > 20);
    };

    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    navLinks.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [lang]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const SectionTitle: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({ children, icon }) => (
    <div className={`flex items-center gap-3 mb-10 border-b border-white/20 pb-3 relative`}>
      <span className="text-white">{icon}</span>
      <h2 className="text-2xl font-bold tracking-widest uppercase">{children}</h2>
      <div className={`absolute bottom-[-1px] ${isRtl ? 'left-0' : 'right-0'} w-12 h-px bg-white/60`}></div>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-300 relative overflow-hidden ${isSwitching ? 'lang-switching' : ''}`}>
      
      {/* Admin Dashboard Overlay */}
      {isAdminOpen && <AdminDashboard onClose={() => setIsAdminOpen(false)} />}

      {/* Language Switch Overlay */}
      <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-500 pointer-events-none ${isSwitching ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-4">
          <Terminal size={32} className="text-white animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white animate-pulse">
            {transitionName}
            <span className="terminal-cursor" />
          </h2>
        </div>
      </div>

      {/* Custom Cursor */}
      <div className="custom-cursor hidden md:block" style={{ left: mousePos.x, top: mousePos.y, transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})` }} />
      <div className="cursor-follower hidden md:block" style={{ left: mousePos.x, top: mousePos.y, transform: `translate(-50%, -50%)`, width: isHovering ? '60px' : '30px', height: isHovering ? '60px' : '30px', opacity: isHovering ? 0.8 : 0.3 }} />

      {/* Spotlight */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-30" style={{ background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)` }} />

      {/* Fixed Nav */}
      <nav id="main-nav" className={`fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${isNavStuck ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Terminal size={18} />
          <span className="font-bold tracking-tighter text-lg">WAO.DEV</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((section) => (
            <button key={section.id} onClick={() => scrollToSection(section.id)} className={`text-[10px] uppercase tracking-[0.2em] font-bold py-1 ${activeSection === section.id ? 'text-white border-b border-white' : 'text-white/40 hover:text-white'}`}>
              {section.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleLang} className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white hover:text-black transition-all">
            <Languages size={18} />
          </button>
          <button className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/20" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={`fixed bottom-8 right-8 z-[70] w-12 h-12 flex items-center justify-center border border-white/20 bg-black/80 backdrop-blur-md hover:bg-white hover:text-black transition-all ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <ChevronUp size={24} />
      </button>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto w-full relative z-10 pt-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white/60 text-sm font-mono">
            <Sparkles size={14} />
            <ChevronRight size={14} />
            <span>whoami</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-4 tracking-tight leading-none relative">
            {t.name}
          </h1>
          <p className="text-xl md:text-3xl text-white/70 max-w-3xl font-light">
            {t.title}
          </p>
          <div className="flex flex-wrap gap-8 mt-12 opacity-60">
            <a href={`mailto:${t.email}`} className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={18} /> {t.email}</a>
            <a href={`https://${t.website}`} className="flex items-center gap-2 hover:text-white transition-colors"><Globe size={18} /> {t.website}</a>
            <div className="flex items-center gap-2"><MapPin size={18} /> {t.location}</div>
          </div>
        </div>
      </section>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl transition-transform duration-500 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-12 justify-center items-center text-center gap-8">
           <button className="absolute top-6 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
           {navLinks.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-2xl uppercase tracking-[0.2em] font-bold transition-all ${activeSection === section.id ? 'text-white' : 'text-white/40'}`}
            >
              {section.label}
            </button>
          ))}
          <div className="mt-8">
            <button 
              onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
              className="border border-white px-8 py-2 uppercase font-bold text-xs hover:bg-white hover:text-black transition-all"
            >
              {t.switchLang}
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow px-6 md:px-12 lg:px-24 max-w-6xl mx-auto w-full relative z-10 pt-32">
        <section id="profile" className="mb-40 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionTitle icon={<Terminal size={24} />}>{t.profileTitle}</SectionTitle>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p>{t.about}</p>
              <p>{t.aboutExtended}</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 border border-white/10 relative overflow-hidden group">
             <SectionTitle icon={<Cpu size={24} />}>{t.skillsTitle}</SectionTitle>
             <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs font-bold text-white/40 mb-3 uppercase">Backend</h3>
                  <ul className="space-y-1 text-sm">{skillsData.backend.map(s => <li key={s}>&gt;&gt; {s}</li>)}</ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/40 mb-3 uppercase">Frontend</h3>
                  <ul className="space-y-1 text-sm">{skillsData.frontend.map(s => <li key={s}>&gt;&gt; {s}</li>)}</ul>
                </div>
             </div>
          </div>
        </section>

        <section id="experience" className="mb-40">
          <SectionTitle icon={<Briefcase size={24} />}>{t.experienceTitle}</SectionTitle>
          <div className="space-y-2">
            {experience.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} lang={lang} />
            ))}
          </div>
        </section>

        <section id="projects" className="mb-40">
          <SectionTitle icon={<Code2 size={24} />}>{t.projectsTitle}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard title="PNU e-Learning" desc="LMS Customization for Princess Nourah University." tags={["Moodle", "PHP"]} url="https://elearning.pnu.edu.sa" />
            <ProjectCard title="Alborhan Academy" desc="Advanced religious education portal." tags={["Laravel", "MySQL"]} url="https://academy.alborhan.com" />
          </div>
        </section>

        <section id="education" className="mb-40">
          <SectionTitle icon={<GraduationCap size={24} />}>{t.educationTitle}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            {education.map((edu, idx) => (
              <div key={idx} className="pl-4 border-l-2 border-white/20 hover:border-white transition-all">
                <h4 className="font-bold text-lg">{edu.institution}</h4>
                <p className="text-white/60">{lang === 'en' ? edu.degreeEn : edu.degreeAr}</p>
                <p className="text-xs text-white/40 font-mono mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-white/10 py-16 px-6 flex justify-center text-[10px] text-white/20 tracking-[0.3em] uppercase">
        <div className="flex gap-4 items-center">
          <p>© {new Date().getFullYear()} WAIL ABUALELA OSMAN. SECURE_PROTOCOL: ENABLED</p>
          <button onClick={() => setIsAdminOpen(true)} className="opacity-0 hover:opacity-50 transition-opacity"><Lock size={12} /></button>
        </div>
      </footer>

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  );
};

export default App;
