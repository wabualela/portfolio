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
}

export interface EducationEntry {
  institution: Localized;
  degree: Localized;
  period: string;
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
  phone: '+966 50 259 2707',
  website: 'wailbox.com',
  github: 'https://github.com/wabualela',
  linkedin: 'https://www.linkedin.com/in/wabualela',
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
      en: 'Full stack PHP developer building ',
      ar: 'مطور PHP متكامل يبني ',
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

/* TODO: real screenshots replace the gradient placeholders */
export const projects: Project[] = [
  {
    slug: 'pnu-elearning',
    title: 'PNU e-Learning',
    desc: {
      en: "Princess Nourah University's Moodle platform: custom features, performance tuning, technical administration, and direct collaboration with university staff.",
      ar: 'منصة جامعة الأميرة نورة على Moodle: ميزات مخصّصة، وضبط أداء، وإدارة تقنية، وتعاون مباشر مع فريق الجامعة.',
    },
    tags: ['Moodle', 'PHP', 'MySQL'],
    url: 'https://elearning.pnu.edu.sa',
    phLabel: 'Project screenshot 1400 × 900',
  },
  {
    slug: 'alborhan-academy',
    title: 'Alborhan Academy',
    desc: {
      en: 'Religious education portal for the Alborhan Organization, alongside Mobeen Academy: upgrades, customization, infrastructure, and performance.',
      ar: 'بوابة تعليم شرعي لجمعية البرهان، إلى جانب أكاديمية مبين: ترقيات وتخصيص وبنية تحتية وأداء.',
    },
    tags: ['Moodle', 'Docker', 'Nginx'],
    url: 'https://academy.alborhan.com',
    phLabel: 'Project screenshot 1400 × 900',
  },
  {
    slug: 'moddaker',
    title: 'Moddaker',
    desc: {
      en: 'Quran memorization platform: administration and scaling, Redis fixes, Ubuntu security updates, and migration to PHP 8.3.',
      ar: 'منصة لحفظ القرآن: إدارة وتوسيع، وإصلاحات Redis، وتحديثات أمنية لـ Ubuntu، وترحيل إلى PHP 8.3.',
    },
    tags: ['Moodle', 'PHP', 'Redis'],
    url: 'https://moddaker.com',
    phLabel: 'Project screenshot 2100 × 900',
  },
  {
    slug: 'ibn-kathir-institute',
    title: 'Imam Ibn Kathir Institute',
    desc: {
      en: 'Pro bono: designed and launched a remote Moodle platform end to end (server setup, customization, course management, and user training), enabling remote religious education.',
      ar: 'عمل خيري: تصميم وإطلاق منصة Moodle عن بُعد من الصفر: إعداد الخادم، والتخصيص، وإدارة المقررات، وتدريب المستخدمين، لتمكين التعليم الشرعي عن بُعد.',
    },
    tags: ['Moodle', 'Linux', 'Volunteer'],
    phLabel: 'Project screenshot 1400 × 900',
  },
  {
    slug: 'alborhan-elections',
    title: 'Alborhan Elections',
    desc: {
      en: "Board elections platform for the Alborhan Organization: Laravel foundation with Inertia, React 19, Tailwind 4, and Pest testing.",
      ar: 'منصة انتخابات مجلس إدارة جمعية البرهان: أساس Laravel مع Inertia و React 19 و Tailwind 4 واختبارات Pest.',
    },
    tags: ['Laravel', 'Inertia', 'React'],
    phLabel: 'Project screenshot 1400 × 900',
  },
];

export const experience: ExperienceEntry[] = [
  {
    period: 'DEC 2024 - NOV 2025',
    company: {
      en: 'Crystal International Technology · Riyadh (Remote)',
      ar: 'كريستال العالمية للتقنية · الرياض (عن بُعد)',
    },
    role: { en: 'Senior Moodle Developer', ar: 'مطوّر Moodle أوّل' },
    desc: {
      en: 'Managed and developed the Princess Nourah University e-learning platform in direct collaboration with university staff: customization, technical administration, on-demand support, and incident resolution.',
      ar: 'إدارة وتطوير منصة التعليم الإلكتروني لجامعة الأميرة نورة بالتعاون المباشر مع فريق الجامعة: تخصيص، وإدارة تقنية، ودعم عند الطلب، وحلّ الأعطال.',
    },
  },
  {
    period: 'OCT 2024 - PRESENT',
    company: { en: 'Alborhan Organization · Riyadh', ar: 'جمعية البرهان لخدمة السنة والقرآن · الرياض' },
    role: {
      en: 'PHP & Moodle Developer (Part-time)',
      ar: 'مطوّر PHP و Moodle (دوام جزئي)',
    },
    desc: {
      en: 'Upgrading, customizing, and administering Alborhan Academy and Moddaker: performance optimization, server infrastructure, custom user journeys, scalability, and user experience.',
      ar: 'ترقية وتخصيص وإدارة أكاديمية البرهان ومنصة مدّكر: تحسين الأداء، وإدارة البنية التحتية والخوادم، وتخصيص مسارات المستخدم، وضمان قابلية التوسّع وتجربة الاستخدام.',
    },
  },
  {
    period: 'JAN 2023 - OCT 2024',
    company: {
      en: 'Izdiad for Integrated Services and Solutions',
      ar: 'ازدياد للخدمات والحلول المتكاملة',
    },
    role: { en: 'Full-Stack Developer', ar: 'مطوّر متكامل' },
    desc: {
      en: 'Maintained, administered, and developed Moodle-based e-learning platforms; managed hosting on DigitalOcean; built WordPress front sites for education initiatives.',
      ar: 'صيانة وإدارة وتطوير منصات تعليم إلكتروني مبنية على Moodle، والإشراف على الاستضافة على DigitalOcean، وتطوير مواقع WordPress واجهية للمبادرات التعليمية.',
    },
  },
  {
    period: 'NOV 2022 - JAN 2023',
    company: { en: 'Khlel Platform', ar: 'منصة خليل' },
    role: { en: 'Web Developer', ar: 'مطوّر ويب' },
    desc: {
      en: 'Developed, updated, and tested features with Laravel and Inertia.js; frontend work with Bootstrap, jQuery, and React; deployments managed via Laravel Forge.',
      ar: 'تطوير وتحديث واختبار ميزات جديدة باستخدام Laravel و Inertia.js، وتطوير الواجهات بـ Bootstrap و jQuery و React، وإدارة النشر عبر Laravel Forge.',
    },
  },
  {
    period: 'OCT 2021 - NOV 2022',
    company: { en: 'Freelance (Fiverr)', ar: 'عمل حر (Fiverr)' },
    role: { en: 'Freelance Web Developer', ar: 'مطوّر ويب مستقل' },
    desc: {
      en: 'Built Moodle platforms, Laravel projects, and Moodle App solutions for clients; custom builds, UX improvements, and technical support, with strong ratings and repeat clients.',
      ar: 'بناء منصات Moodle ومشاريع Laravel وحلول Moodle App للعملاء: تطوير مخصّص، وتحسين تجربة الاستخدام، ودعم تقني، مع تقييمات قوية وتكرار التعامل.',
    },
  },
  {
    period: 'JUL 2021 - OCT 2021',
    company: { en: 'Intelligent Projects · Khartoum', ar: 'المشاريع الذكية · الخرطوم' },
    role: { en: 'Full Stack Developer', ar: 'مطوّر متكامل' },
    desc: {
      en: 'Web solutions with PHP, Laravel, and Livewire; Bootstrap and Alpine.js on the frontend; web services and payment integrations.',
      ar: 'حلول ويب باستخدام PHP و Laravel و Livewire، وواجهات بـ Bootstrap و Alpine.js، والعمل على Web Services وتكاملات الدفع.',
    },
  },
  {
    period: 'MAR 2021 - JUL 2021',
    company: {
      en: 'MSC For Information Technology · Khartoum',
      ar: 'MSC لتقنية المعلومات · الخرطوم',
    },
    role: { en: 'Web Application Developer', ar: 'مطوّر تطبيقات ويب' },
    desc: {
      en: 'Built sites with Laravel and Livewire, using Vue.js, Tailwind CSS, and Bootstrap; Moodle LMS builds; hosting management and Git/GitHub workflows.',
      ar: 'تطوير مواقع باستخدام Laravel و Livewire مع Vue.js و Tailwind CSS و Bootstrap، وبناء أنظمة LMS بـ Moodle، وإدارة الاستضافة والعمل بـ Git و GitHub.',
    },
  },
  {
    period: 'NOV 2020 - MAR 2021',
    company: { en: 'Career break', ar: 'استراحة مهنية' },
    role: { en: 'Focused self-development', ar: 'تطوير ذاتي مركّز' },
    desc: {
      en: 'Deep-dive into Laravel and PHP: self-study, hands-on experiments, and small freelance projects.',
      ar: 'تعمّق في Laravel و PHP: دراسة ذاتية، وتجارب عملية، ومشاريع حرة صغيرة.',
    },
  },
  {
    period: 'SEP 2019 - NOV 2020',
    company: { en: 'Innovative Solutions · Khartoum', ar: 'الحلول المبتكرة · الخرطوم' },
    role: { en: 'Lead Web Application Developer', ar: 'قائد تطوير تطبيقات الويب' },
    desc: {
      en: 'Led e-learning platform development on Moodle; built iOS/Android apps with Ionic; managed domains and servers; developed custom payment plugins for MBok and Sudani.',
      ar: 'قيادة تطوير منصة تعلم إلكتروني على Moodle، وبناء تطبيقات iOS و Android بـ Ionic، وإدارة النطاقات والخوادم، وتطوير إضافات دفع مخصّصة مع MBok و Sudani.',
    },
  },
  {
    period: 'JUN 2019 - SEP 2019',
    company: { en: 'Click Grafix Company · Khartoum', ar: 'كليك جرافكس · الخرطوم' },
    role: { en: 'Web Application Developer', ar: 'مطوّر تطبيقات ويب' },
    desc: {
      en: 'Built a small CMS with Laravel: requirements gathering, documentation, content and data management, testing, and maintenance.',
      ar: 'تطوير نظام إدارة محتوى صغير بـ Laravel: جمع المتطلبات، والتوثيق، وإدارة المحتوى والبيانات، والاختبار والصيانة.',
    },
  },
  {
    period: 'NOV 2017 - JUN 2019',
    company: { en: 'Innovative Solutions · Khartoum', ar: 'الحلول المبتكرة · الخرطوم' },
    role: { en: 'Junior Web Application Developer', ar: 'مطوّر تطبيقات ويب مبتدئ' },
    desc: {
      en: 'Worked on Moodle and PHP; developed an e-learning platform; built iOS/Android apps with Ionic; managed domains and hosting; published apps to the stores and trained users.',
      ar: 'العمل على Moodle و PHP، وتطوير منصة تعليم إلكتروني، وبناء تطبيقات iOS و Android بـ Ionic، وإدارة النطاق والاستضافة، ورفع التطبيقات على المتاجر وتدريب المستخدمين.',
    },
  },
  {
    period: 'MAY 2015 - MAY 2016',
    company: {
      en: 'International University of Africa · Khartoum',
      ar: 'جامعة أفريقيا العالمية · الخرطوم',
    },
    role: { en: 'Teaching Assistant (Lab Instructor)', ar: 'معيد (مشرف معمل)' },
    desc: {
      en: 'Taught practical sessions in Java, GNU/Linux, and Microsoft Office; prepared exercises and lesson plans; supported students alongside academic and administrative duties.',
      ar: 'تدريس جلسات عملية في Java و GNU/Linux و Microsoft Office، وإعداد التمارين وخطط الدروس، ودعم الطلاب مع بعض المهام الأكاديمية والإدارية.',
    },
  },
];

export const education: EducationEntry[] = [
  {
    institution: {
      en: 'National Ribat University · Khartoum',
      ar: 'جامعة الرباط الوطني · الخرطوم',
    },
    degree: {
      en: "Bachelor's in Computer Science (Honours)",
      ar: 'بكالوريوس علوم الحاسوب (مرتبة الشرف)',
    },
    period: '2010 - 2014',
  },
  {
    institution: {
      en: 'University of Khartoum',
      ar: 'جامعة الخرطوم',
    },
    degree: {
      en: 'Master of Computer Science (Incomplete)',
      ar: 'ماجستير علوم الحاسوب (غير مكتمل)',
    },
    period: '2017',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Backend', ar: 'الواجهة الخلفية' },
    items: ['PHP', 'Laravel', 'Livewire', 'MySQL / MariaDB', 'Redis', 'REST APIs'],
  },
  {
    label: { en: 'E-Learning', ar: 'التعليم الإلكتروني' },
    items: ['Moodle Development', 'Custom Plugins', 'Moodle App', 'WordPress'],
  },
  {
    label: { en: 'Frontend', ar: 'الواجهة الأمامية' },
    items: ['JavaScript', 'React', 'Vue.js', 'Inertia.js', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Ionic'],
  },
  {
    label: { en: 'DevOps', ar: 'التشغيل' },
    items: ['Linux', 'Nginx', 'Docker', 'DigitalOcean', 'Laravel Forge', 'Git'],
  },
];
