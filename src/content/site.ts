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
  url?: string;
  /* label shown inside the gradient placeholder until real screenshots arrive */
  phLabel: string;
  /* TODO: real screenshot path once the user provides one; replaces the placeholder */
  image?: string;
}

export interface ExperienceEntry {
  period: string;
  company: Localized;
  role: Localized;
  desc: Localized;
  /* placeholder rows render dimmed until real data lands */
  placeholder?: boolean;
}

export interface SkillGroup {
  label: Localized;
  items: string[];
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
    writing: { en: 'Writing', ar: 'المقالات' },
    contact: { en: 'Contact', ar: 'تواصل' },
  },
  switchLang: { en: 'عربي', ar: 'English' },
  themeToggle: {
    toDark: { en: 'Dark', ar: 'داكن' },
    toLight: { en: 'Light', ar: 'فاتح' },
  },
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
    writing: { en: 'Writing', ar: 'المقالات' },
  },
  writing: {
    allPosts: { en: 'All posts', ar: 'كل المقالات' },
    pageIntro: {
      en: 'Tutorials and notes on Moodle, Laravel, and building e-learning platforms at scale.',
      ar: 'شروح وملاحظات في Moodle و Laravel وبناء منصات التعليم الإلكتروني على نطاق واسع.',
    },
    filterAll: { en: 'All', ar: 'الكل' },
    filterTutorials: { en: 'Tutorials', ar: 'الشروح' },
    filterNotes: { en: 'Notes', ar: 'الملاحظات' },
    minRead: { en: 'MIN', ar: 'دقائق' },
    back: { en: 'Writing', ar: 'المقالات' },
    prev: { en: 'Previous', ar: 'السابق' },
    next: { en: 'Next', ar: 'التالي' },
    minReadLong: { en: 'MIN READ', ar: 'دقائق قراءة' },
  },
  footer: {
    heading: { en: "Let's work together", ar: 'لنعملْ معًا' },
    rights: {
      en: `© ${new Date().getFullYear()} Wail Abualela Osman`,
      ar: `© ${new Date().getFullYear()} وائل أبوالعلا عثمان`,
    },
  },
} as const;

/* TODO: real project data and screenshots arrive from the user */
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
    phLabel: 'Project screenshot 1400 × 900',
  },
  {
    slug: 'alborhan-academy',
    title: 'Alborhan Academy',
    desc: {
      en: 'Religious education portal: platform upgrades, Docker infrastructure, and Nginx optimization.',
      ar: 'بوابة تعليم شرعي: ترقيات للمنصة، وبنية تحتية بـ Docker، وتحسينات Nginx.',
    },
    tags: ['Moodle', 'Mustache', 'JS'],
    url: 'https://academy.alborhan.com',
    phLabel: 'Project screenshot 1400 × 900',
  },
  {
    slug: 'moddaker',
    title: 'Moddaker',
    desc: {
      en: 'Quran memorization platform: customization, administration, and scaling for a growing student base.',
      ar: 'منصة لحفظ القرآن: تخصيص وإدارة وتوسيع لقاعدة طلاب متنامية.',
    },
    tags: ['Laravel', 'MySQL'],
    url: 'https://moddaker.com',
    phLabel: 'Project screenshot 2100 × 900',
  },
  {
    slug: 'wailbox-blog-engine',
    title: 'wailbox Blog Engine',
    desc: {
      en: "Placeholder: the Laravel + Markdown engine behind this site's Writing section: bilingual posts, RTL-aware typography, zero-JS pages.",
      ar: 'مؤقت: محرك Laravel + Markdown خلف قسم المقالات في هذا الموقع: تدوينات ثنائية اللغة وصفحات بلا JavaScript.',
    },
    tags: ['Laravel', 'Markdown', 'Open source'],
    phLabel: 'Blog screenshot 1400 × 900',
  },
  {
    slug: 'moodle-dev-series',
    title: 'Moodle Dev Tutorial Series',
    desc: {
      en: 'Placeholder: a written series taking developers from first plugin to production: scaffolding, upgrades, and Arabic-first theming.',
      ar: 'مؤقت: سلسلة مكتوبة تأخذ المطورين من أول إضافة حتى الإنتاج: التهيئة والترقيات والقوالب العربية.',
    },
    tags: ['Moodle', 'Tutorials', 'PHP'],
    phLabel: 'Series cover 1400 × 900',
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
      en: 'Assigned to the Princess Nourah University e-learning platform. Custom Moodle features, core performance optimization, and large-scale data migrations.',
      ar: 'مكلَّف بمنصة التعليم الإلكتروني لجامعة الأميرة نورة: ميزات Moodle مخصّصة، وتحسين أداء النظام، وترحيل بيانات واسع النطاق.',
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
  {
    period: '2021 - 2024',
    company: { en: 'Company name', ar: 'اسم الشركة' },
    role: { en: 'Earlier role (placeholder)', ar: 'دور سابق (مؤقت)' },
    desc: {
      en: 'Swap in previous roles, scope, and outcomes.',
      ar: 'تُستبدل بالأدوار السابقة ونطاقها ونتائجها.',
    },
    placeholder: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Backend', ar: 'الواجهة الخلفية' },
    items: ['PHP', 'Laravel', 'MySQL', 'Redis', 'REST APIs'],
  },
  {
    label: { en: 'E-Learning', ar: 'التعليم الإلكتروني' },
    items: ['Moodle', 'SCORM', 'LTI'],
  },
  {
    label: { en: 'Frontend', ar: 'الواجهة الأمامية' },
    items: ['JavaScript', 'Vue', 'Mustache'],
  },
  {
    label: { en: 'DevOps', ar: 'التشغيل' },
    items: ['Docker', 'Linux', 'Nginx', 'CI/CD'],
  },
];
