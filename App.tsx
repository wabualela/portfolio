
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Terminal, 
  ChevronRight, 
  Code2, 
  Briefcase, 
  GraduationCap,
  ExternalLink,
  Cpu,
  MessageSquare,
  Moon,
  Sparkles
} from 'lucide-react';
import { translations, Language, experienceData, skillsData } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isFlickering, setIsFlickering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const toggleLang = () => {
    setIsFlickering(true);
    setTimeout(() => {
      setLang(prev => prev === 'en' ? 'ar' : 'en');
      setTimeout(() => setIsFlickering(false), 150);
    }, 100);
  };

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button'));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const SectionTitle: React.FC<{ children: React.ReactNode; icon: React.ReactNode }> = ({ children, icon }) => (
    <div className={`flex items-center gap-3 mb-8 border-b border-white/20 pb-2 relative ${isRtl ? 'font-arabic' : ''}`}>
      <span className="text-white">{icon}</span>
      <h2 className="text-xl font-bold tracking-widest uppercase">
        {children}
      </h2>
      <div className={`absolute bottom-[-1px] ${isRtl ? 'left-0' : 'right-0'} w-8 h-px bg-white/60`}></div>
    </div>
  );

  const whatsappLink = "https://wa.me/966502592707";

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-300 relative overflow-hidden ${isRtl ? 'font-arabic' : ''} ${isFlickering ? 'crt-flicker' : ''}`}>
      {/* Ramadan Season Pattern - Mashrabiya influence */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[-1]" 
           style={{ 
             backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij4KICAgIDxwYXRoIGQ9Ik00MCAwTDgwIDQwTDQwIDgwTDAgNDBaIiAvPgogICAgPHBhdGggZD0iTTQwIDEwTDcwIDQwTDQwIDcwTDEwIDQwWiIgLz4KICAgIDxyZWN0IHg9IjMwIiB5PSIzMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSg0NSA0MCA0MCkiIC8+CiAgPC9nPgo8L3N2Zz4=')`,
             backgroundSize: '120px 120px'
           }} 
      />

      {/* Custom Cursor Elements */}
      <div 
        className="custom-cursor hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y, transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})` }} 
      />
      <div 
        className="cursor-follower hidden md:block" 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y, 
          transform: `translate(-50%, -50%)`,
          width: isHovering ? '60px' : '30px',
          height: isHovering ? '60px' : '30px',
          opacity: isHovering ? 0.8 : 0.3
        }} 
      />

      {/* Mouse Spotlight / Moonlight Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-[0] opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.08), transparent 40%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Moon size={18} className="text-white group-hover:rotate-[360deg] transition-transform duration-700" />
          <span className="font-bold tracking-tighter text-lg">WAO.DEV</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 hidden md:block">{t.ramadanGreeting}</span>
          <button 
            onClick={toggleLang}
            className="border border-white hover:bg-white hover:text-black px-4 py-1 transition-all text-sm font-bold uppercase relative overflow-hidden group"
          >
            <span className="relative z-10">{t.switchLang}</span>
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto w-full relative z-10">
        
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-white/60 text-sm font-mono">
              <Sparkles size={14} className="text-white/40" />
              <ChevronRight size={14} />
              <span>whoami</span>
              <span className="ml-2 px-2 py-0.5 border border-white/20 text-[10px] tracking-widest uppercase">{t.ramadanGreeting}</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-4 tracking-tight leading-none relative">
              {t.name}
              <div className={`absolute ${isRtl ? '-left-8' : '-right-8'} top-0 opacity-10 hidden lg:block`}>
                 <Moon size={120} strokeWidth={0.5} />
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
              {t.title}
            </p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
              <a href={`mailto:${t.email}`} className="flex items-center gap-2 hover:text-white text-white/60 transition-all hover:translate-x-1">
                <Mail size={18} /> <span className="text-sm underline underline-offset-4 decoration-white/20 hover:decoration-white">{t.email}</span>
              </a>
              <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white text-white/60 transition-all hover:translate-x-1">
                <Phone size={18} /> <span className="text-sm" dir="ltr">{t.phone}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-white/60 transition-all hover:translate-x-1">
                <MessageSquare size={18} /> <span className="text-sm underline underline-offset-4 decoration-white/20 hover:decoration-white">WhatsApp</span>
              </a>
              <a href={`https://${t.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-white/60 transition-all hover:translate-x-1">
                <Globe size={18} /> <span className="text-sm underline underline-offset-4 decoration-white/20 hover:decoration-white">{t.website}</span>
              </a>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin size={18} /> <span className="text-sm">{t.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-4">
              <a href="https://github.com/wabualela" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-white/60 transition-all group">
                <Github size={18} className="group-hover:scale-110 transition-transform" /> <span className="text-sm">github.com/wabualela</span>
              </a>
              <a href="https://linkedin.com/in/wabualela" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white text-white/60 transition-all group">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" /> <span className="text-sm">linkedin.com/in/wabualela</span>
              </a>
            </div>
          </div>
        </section>

        {/* Profile / About */}
        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <SectionTitle icon={<Terminal size={24} />}>{t.profileTitle}</SectionTitle>
            <div className="space-y-4 text-white/80 leading-relaxed text-lg">
              <p className="hover:text-white transition-colors">{t.about}</p>
              <p className="hover:text-white transition-colors">{t.aboutExtended}</p>
            </div>
          </div>
          <div className="bg-white/5 p-8 border border-white/10 hover:border-white/30 transition-all relative overflow-hidden group">
             {/* Subtle Islamic pattern element */}
             <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/10 group-hover:border-white/30 transition-colors pointer-events-none"></div>
             
             <SectionTitle icon={<Cpu size={24} />}>{t.skillsTitle}</SectionTitle>
             <div className="grid grid-cols-2 gap-8 relative z-10">
                <div>
                  <h3 className="text-xs font-bold text-white/40 mb-3 border-l-2 border-white/40 pl-2 tracking-widest">BACKEND</h3>
                  <ul className="space-y-1">
                    {skillsData.backend.map(s => <li key={s} className="text-sm flex items-center gap-2 group cursor-default"><span className="text-white/30 group-hover:text-white transition-colors">>></span>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/40 mb-3 border-l-2 border-white/40 pl-2 tracking-widest">FRONTEND</h3>
                  <ul className="space-y-1">
                    {skillsData.frontend.map(s => <li key={s} className="text-sm flex items-center gap-2 group cursor-default"><span className="text-white/30 group-hover:text-white transition-colors">>></span>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/40 mb-3 border-l-2 border-white/40 pl-2 tracking-widest">CMS / LMS</h3>
                  <ul className="space-y-1">
                    {skillsData.cms.map(s => <li key={s} className="text-sm flex items-center gap-2 group cursor-default"><span className="text-white/30 group-hover:text-white transition-colors">>></span>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white/40 mb-3 border-l-2 border-white/40 pl-2 tracking-widest">DEV OPS</h3>
                  <ul className="space-y-1">
                    {skillsData.tools.map(s => <li key={s} className="text-sm flex items-center gap-2 group cursor-default"><span className="text-white/30 group-hover:text-white transition-colors">>></span>{s}</li>)}
                  </ul>
                </div>
             </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <SectionTitle icon={<Briefcase size={24} />}>{t.experienceTitle}</SectionTitle>
          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="group relative pl-8 border-l border-white/10 hover:border-white transition-colors py-1">
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-black border border-white/20 group-hover:bg-white group-hover:border-white transition-colors group-hover:rotate-45" />
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:translate-x-1 transition-transform">{exp.role}</h3>
                  <span className="text-sm text-white/40 font-mono mt-1 md:mt-0" dir="ltr">{exp.period}</span>
                </div>
                <div className="text-white/60 mb-3 font-medium">{exp.company}</div>
                <p className="text-white/80 max-w-4xl leading-relaxed group-hover:text-white transition-colors">
                  {lang === 'en' ? exp.descEn : exp.descAr}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects / Highlights */}
        <section className="mb-20">
          <SectionTitle icon={<Code2 size={24} />}>{t.projectsTitle}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/20 p-6 hover:bg-white hover:text-black transition-all group cursor-pointer relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 flex justify-between items-center">
                  Moodle Customization (PNU)
                  <ExternalLink size={16} />
                </h3>
                <p className="opacity-60 text-sm mb-4 group-hover:opacity-100 transition-opacity">
                  Advanced plugin development and system administration for the Princess Nourah University e-learning platform.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] border border-current px-2 py-1">MOODLE</span>
                  <span className="text-[10px] border border-current px-2 py-1">PHP</span>
                  <span className="text-[10px] border border-current px-2 py-1">LINUX</span>
                </div>
              </div>
            </div>
            <div className="border border-white/20 p-6 hover:bg-white hover:text-black transition-all group cursor-pointer relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 flex justify-between items-center">
                  Alborhan Academy
                  <ExternalLink size={16} />
                </h3>
                <p className="opacity-60 text-sm mb-4 group-hover:opacity-100 transition-opacity">
                  Scaling and customizing a multi-language learning platform for specialized religious education.
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] border border-current px-2 py-1">LARAVEL</span>
                  <span className="text-[10px] border border-current px-2 py-1">VUE.JS</span>
                  <span className="text-[10px] border border-current px-2 py-1">MYSQL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Info */}
        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle icon={<GraduationCap size={24} />}>{t.educationTitle}</SectionTitle>
            <div className="space-y-6">
              <div className="hover:translate-x-1 transition-transform">
                <h4 className="font-bold">National Ribat University</h4>
                <p className="text-sm text-white/60">Bachelor's Degree in Computer Science (Honours)</p>
                <p className="text-xs text-white/40" dir="ltr">2010 – 2014</p>
              </div>
              <div className="hover:translate-x-1 transition-transform">
                <h4 className="font-bold">University of Khartoum</h4>
                <p className="text-sm text-white/60">Master of Computer Science (Incomplete)</p>
                <p className="text-xs text-white/40" dir="ltr">2017</p>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle icon={<Globe size={24} />}>{t.languagesTitle}</SectionTitle>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-white/20 p-4 text-center hover:bg-white hover:text-black transition-all cursor-default relative group">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-black transition-colors"></div>
                <span className="block text-lg font-bold">Arabic</span>
                <span className="text-xs opacity-40 uppercase">Native</span>
              </div>
              <div className="border border-white/20 p-4 text-center hover:bg-white hover:text-black transition-all cursor-default relative group">
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-black transition-colors"></div>
                <span className="block text-lg font-bold">English</span>
                <span className="text-xs opacity-40 uppercase">Professional</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/10 py-12 px-6 text-center text-white/40 text-xs relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
             <p className="font-mono">© {new Date().getFullYear()} WAIL ABUALELA OSMAN. STATUS: ONLINE</p>
             <p className="text-[9px] tracking-[0.3em] uppercase opacity-60">{t.ramadanGreeting}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com/wabualela" className="hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white">GITHUB</a>
            <a href="https://linkedin.com/in/wabualela" className="hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white">LINKEDIN</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white">WHATSAPP</a>
            <a href={`mailto:${t.email}`} className="hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white uppercase">EMAIL</a>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="hover:text-white transition-all underline underline-offset-8 decoration-white/20 hover:decoration-white" dir="ltr">{t.phone}</a>
          </div>
        </div>
      </footer>

      {/* Background Overlays */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    </div>
  );
};

export default App;
