export type Language = 'en' | 'ar';

export interface Localized {
  en: string;
  ar: string;
}

export interface Project {
  slug: string;
  title: string;
  desc: Localized;
  tags: string[];
  url: string;
  /* TODO: replace picsum placeholders with real project screenshots from the user */
  image: string;
}

export interface ExperienceEntry {
  period: string;
  company: Localized;
  role: Localized;
  desc: Localized;
}

export interface EducationEntry {
  institution: Localized;
  degree: Localized;
  period: string;
}

export const identity = {
  firstName: { en: 'WAIL', ar: 'وائل' },
  lastName: { en: 'ABUALELA', ar: 'أبوالعلا' },
  shortName: { en: 'Wail', ar: 'وائل' },
  email: 'wailabualela@gmail.com',
  website: 'wailbox.com',
  github: 'https://github.com/wabualela',
  linkedin: 'https://www.linkedin.com/in/wailabualela',
  location: { en: 'Riyadh, Saudi Arabia', ar: 'الرياض، السعودية' },
} as const;

export const ui = {
  nav: {
    work: { en: 'Work', ar: 'الأعمال' },
    experience: { en: 'Experience', ar: 'الخبرة' },
    skills: { en: 'Skills', ar: 'المهارات' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },
  switchLang: { en: 'عربي', ar: 'English' },
  hero: {
    rolePre: {
      en: 'Full stack PHP engineer building ',
      ar: 'مهندس PHP متكامل يبني ',
    },
    roleAccent: { en: 'e-learning platforms', ar: 'منصات التعليم الإلكتروني' },
    rolePost: {
      en: ' with Moodle and Laravel.',
      ar: ' بـ Moodle و Laravel.',
    },
    ctaWork: { en: 'View work', ar: 'شاهد الأعمال' },
    ctaEmail: { en: 'Email me', ar: 'راسلني' },
  },
  sections: {
    work: { en: 'Selected Work', ar: 'أعمال مختارة' },
    experience: { en: 'Experience', ar: 'الخبرة المهنية' },
    skills: { en: 'Skills', ar: 'المهارات التقنية' },
    education: { en: 'Education', ar: 'التعليم' },
  },
  skillGroups: {
    backend: { en: 'Backend', ar: 'الواجهة الخلفية' },
    frontend: { en: 'Frontend', ar: 'الواجهة الأمامية' },
    cms: { en: 'E-learning & CMS', ar: 'التعليم الإلكتروني وإدارة المحتوى' },
    tools: { en: 'Infrastructure & Tools', ar: 'البنية التحتية والأدوات' },
  },
  footer: {
    heading: { en: "Let's work together", ar: 'لنعملْ معًا' },
    rights: {
      en: `© ${new Date().getFullYear()} Wail Abualela Osman`,
      ar: `© ${new Date().getFullYear()} وائل أبوالعلا عثمان`,
    },
  },
} as const;

/* TODO: real project data arrives from the user; structure stays identical */
export const projects: Project[] = [
  {
    slug: 'pnu-elearning',
    title: 'PNU e-Learning',
    desc: {
      en: 'Moodle platform for Princess Nourah University: custom features, performance tuning, and large-scale data migrations.',
      ar: 'منصة Moodle لجامعة الأميرة نورة: ميزات مخصّصة، وتحسين أداء، وترحيل بيانات واسع النطاق.',
    },
    tags: ['Moodle', 'PHP', 'MySQL'],
    url: 'https://elearning.pnu.edu.sa',
    image: 'https://picsum.photos/seed/pnu-elearning-platform/1400/900',
  },
  {
    slug: 'alborhan-academy',
    title: 'Alborhan Academy',
    desc: {
      en: 'Religious education portal: platform upgrades, Docker infrastructure, and Nginx optimization.',
      ar: 'بوابة تعليم شرعي: ترقيات للمنصة، وبنية تحتية بـ Docker، وتحسينات Nginx.',
    },
    tags: ['Laravel', 'Moodle', 'Docker'],
    url: 'https://academy.alborhan.com',
    image: 'https://picsum.photos/seed/alborhan-academy-portal/1000/900',
  },
  {
    slug: 'moddaker',
    title: 'Moddaker',
    desc: {
      en: 'Quran memorization platform: customization, administration, and scaling for a growing student base.',
      ar: 'منصة لحفظ القرآن: تخصيص وإدارة وتوسيع لقاعدة طلاب متنامية.',
    },
    tags: ['Moodle', 'PHP', 'Nginx'],
    url: 'https://moddaker.com',
    image: 'https://picsum.photos/seed/moddaker-quran-platform/2000/900',
  },
];

export const experience: ExperienceEntry[] = [
  {
    period: '2024 - PRESENT',
    company: {
      en: 'Crystal International Technology',
      ar: 'كريستال العالمية للتقنية',
    },
    role: { en: 'Senior PHP & Moodle Developer', ar: 'مطوّر PHP و Moodle أوّل' },
    desc: {
      en: 'Assigned to the Princess Nourah University e-learning platform. Working directly with university staff to manage, administer, and develop the platform: custom Moodle features, core performance optimization, and large-scale data migrations.',
      ar: 'مكلَّف بمنصة التعليم الإلكتروني لجامعة الأميرة نورة. أعمل مباشرة مع فريق الجامعة على إدارة المنصة وتطويرها: ميزات Moodle مخصّصة، وتحسين أداء النظام، وترحيل بيانات واسع النطاق.',
    },
  },
  {
    period: '2024 - PRESENT',
    company: { en: 'Alborhan Organization', ar: 'مؤسسة البرهان' },
    role: {
      en: 'PHP & Moodle Developer (Part-time)',
      ar: 'مطوّر PHP و Moodle (دوام جزئي)',
    },
    desc: {
      en: 'Upgrading, customizing, and administering Alborhan Academy and Moddaker. Managing infrastructure and scalability with Docker containers and Nginx optimization.',
      ar: 'ترقية وتخصيص وإدارة أكاديمية البرهان ومنصة مدّكر. إدارة البنية التحتية وقابلية التوسّع بحاويات Docker وتحسينات Nginx.',
    },
  },
];

export const education: EducationEntry[] = [
  {
    institution: { en: 'National Ribat University', ar: 'جامعة الرباط الوطني' },
    degree: {
      en: "Bachelor's in Computer Science (Honours)",
      ar: 'بكالوريوس علوم الحاسوب (مرتبة الشرف)',
    },
    period: '2010 - 2014',
  },
  {
    institution: { en: 'University of Khartoum', ar: 'جامعة الخرطوم' },
    degree: {
      en: 'Master of Computer Science (Incomplete)',
      ar: 'ماجستير علوم الحاسوب (غير مكتمل)',
    },
    period: '2017',
  },
];

export const skills = {
  backend: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'LEMP Stack'],
  frontend: ['JavaScript', 'React', 'Vue.js', 'HTML5', 'CSS3'],
  cms: ['Moodle Development', 'Custom Plugins', 'WordPress'],
  tools: ['Docker', 'Nginx', 'Git', 'Laravel Forge'],
} as const;
