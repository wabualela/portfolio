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
  /* label shown inside the gradient placeholder when a project has no screenshot */
  phLabel: string;
  /* screenshot in public/projects: 1600x1029 (14:9), or 2100x900 (21:9) for the wide grid slot */
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
  website: 'wail.fyi',
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
      en: 'Senior Moodle developer building ',
      ar: 'مطوّر Moodle أوّل يبني ',
    },
    roleAccent: { en: 'e-learning platforms', ar: 'منصات التعليم الإلكتروني' },
    rolePost: {
      en: ' for universities, academies and nonprofits, from custom plugins to the servers they run on.',
      ar: ' للجامعات والأكاديميات والجمعيات، من الإضافات المخصّصة إلى الخوادم التي تعمل عليها.',
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

/* Media: public-page screenshots in public/projects; a project without one keeps the gradient block */
export const projects: Project[] = [
  {
    slug: 'moddaker',
    title: 'Moddaker',
    desc: {
      en: 'Merged six standalone language platforms (Arabic, English, Indonesian, French, Urdu, Portuguese) into one Moodle site teaching Al-Mukhtasar in six languages, with consolidated learner data and Telegram sign-up for learners without email. Launched in Ramadan 2026.',
      ar: 'دمج ست منصات لغوية مستقلة (العربية والإنجليزية والإندونيسية والفرنسية والأردية والبرتغالية) في موقع Moodle واحد يدرّس كتاب المختصر بست لغات، مع توحيد بيانات الدارسين والتسجيل عبر Telegram لمن لا يملك بريدًا. أُطلقت في رمضان 2026.',
    },
    tags: ['Moodle', 'Migration', 'Telegram'],
    url: 'https://moddaker.com',
    image: '/projects/moddaker.webp',
    phLabel: '',
  },
  {
    slug: 'alborhan-academy',
    title: 'Alborhan Academy',
    desc: {
      en: 'Performance engineering on a Moodle 4.5 platform serving 8,000+ learners: home-page queries cut from 853 to 219 and p95 latency at 300 concurrent users from 11.0 s to 4.4 s with zero errors, after moving it to self-managed servers and upgrading Moodle.',
      ar: 'هندسة أداء لمنصة Moodle 4.5 تخدم أكثر من 8,000 دارس: خفض استعلامات الصفحة الرئيسية من 853 إلى 219، وزمن الاستجابة p95 عند 300 مستخدم متزامن من 11.0 إلى 4.4 ثانية دون أخطاء، بعد نقلها إلى خوادم مُدارة ذاتيًا وترقية Moodle.',
    },
    tags: ['Moodle', 'PHP-FPM', 'Redis'],
    url: 'https://alborhanacademy.com',
    image: '/projects/alborhan-academy.webp',
    phLabel: '',
  },
  {
    slug: 'africa-academy',
    title: 'Africa Academy',
    desc: {
      en: 'Moodle platforms teaching Sharia studies to African learners in their own languages (Amharic and Oromo live, Hausa and Swahili in preparation): returned the academy to Moodle from WordPress LMS plugins, migrated every server to Contabo, and shipped a customized Moodle App for the Amharic platform on Google Play.',
      ar: 'منصات Moodle تدرّس العلوم الشرعية للمتعلمين الأفارقة بلغاتهم (الأمهرية والأورومية تعملان، والهوسا والسواحيلية قيد التجهيز): إعادة الأكاديمية إلى Moodle بعد تجربة إضافات WordPress التعليمية، ونقل كل الخوادم إلى Contabo، وإطلاق تطبيق Moodle مخصّص للمنصة الأمهرية على Google Play.',
    },
    tags: ['Moodle', 'Moodle App', 'Linux'],
    url: 'https://africaacademy.com',
    image: '/projects/africa-academy.webp',
    phLabel: '',
  },
  {
    slug: 'iua-learn',
    title: 'IUA Learn',
    desc: {
      en: 'Moodle 5.1 distance-learning platform for about 20,000 students across 22 colleges at the International University of Africa, delivered between June and August 2025 with staff training.',
      ar: 'منصة تعليم عن بُعد على Moodle 5.1 لنحو 20,000 طالب في 22 كلية بجامعة أفريقيا العالمية، سُلّمت بين يونيو وأغسطس 2025 مع تدريب الكوادر.',
    },
    tags: ['Moodle 5.1', 'University', 'Training'],
    url: 'https://lms.iua.edu.sd',
    image: '/projects/iua-learn.webp',
    phLabel: '',
  },
  {
    slug: 'alborhan-elections',
    title: 'Alborhan Elections',
    desc: {
      en: "Electronic voting platform for the association's board elections, built in 10 working days: OTP login over SMS, passkeys, proxy voting, tie-breaking with a secure random draw, an append-only audit log, and an installable PWA.",
      ar: 'منصة تصويت إلكتروني لانتخابات مجلس إدارة الجمعية، بُنيت في 10 أيام عمل: دخول برمز تحقق عبر SMS، ومفاتيح المرور (Passkeys)، والتصويت بالإنابة، وحسم التعادل بسحب عشوائي آمن، وسجل تدقيق لا يُعدَّل، وتطبيق ويب قابل للتثبيت.',
    },
    tags: ['Laravel', 'React', 'PWA'],
    phLabel: '',
  },
];

export const experience: ExperienceEntry[] = [
  {
    period: 'JUN 2025 - PRESENT',
    company: {
      en: 'Al-Siraj Association · Riyadh (Remote)',
      ar: 'جمعية السراج · الرياض (عن بُعد)',
    },
    role: {
      en: 'Senior Moodle Developer & eLearning Platform Engineer (Part-time)',
      ar: 'مطوّر Moodle أوّل ومهندس منصات تعليم إلكتروني (دوام جزئي)',
    },
    desc: {
      en: "Own Africa Academy's Moodle language platforms end to end: servers, Moodle setup, hardening, scaling around registration and exams, the Amharic Moodle App, and staff training. Delivered the International University of Africa's Moodle 5.1 platform and support the Islamic University of Kenya's platform.",
      ar: 'إدارة منصات أكاديمية أفريقيا اللغوية على Moodle من البداية للنهاية: الخوادم والإعداد والتأمين والتوسعة في مواسم التسجيل والاختبارات، وتطبيق Moodle للمنصة الأمهرية، وتدريب الفريق. سلّمت منصة جامعة أفريقيا العالمية على Moodle 5.1، وأدعم منصة الجامعة الإسلامية في كينيا.',
    },
  },
  {
    period: 'OCT 2024 - PRESENT',
    company: {
      en: 'Al-Burhan Association · Riyadh (Hybrid)',
      ar: 'جمعية البرهان · الرياض (هجين)',
    },
    role: {
      en: 'Senior Moodle Developer & eLearning Platforms Manager (Part-time)',
      ar: 'مطوّر Moodle أوّل ومدير منصات التعليم الإلكتروني (دوام جزئي)',
    },
    desc: {
      en: "Run Moddaker and Alborhan Academy: merged Moddaker's six language platforms into one site, moved and upgraded Alborhan Academy, and cut its p95 latency from 11.0 s to 4.4 s. Manage the association's servers and online services, and build its Moodle plugins and Laravel systems.",
      ar: 'إدارة منصتي مدّكر وأكاديمية البرهان: دمج منصات مدّكر الست في موقع واحد، ونقل أكاديمية البرهان وترقيتها، وخفض زمن الاستجابة p95 فيها من 11.0 إلى 4.4 ثانية. إدارة خوادم الجمعية وخدماتها الإلكترونية، وتطوير إضافات Moodle وأنظمة Laravel.',
    },
  },
  {
    period: 'DEC 2024 - NOV 2025',
    company: {
      en: 'Crystal International Technology · Riyadh (Hybrid)',
      ar: 'كريستال العالمية للتقنية · الرياض (هجين)',
    },
    role: {
      en: 'Moodle Developer, Princess Nourah University (contract placement)',
      ar: 'مطوّر Moodle لجامعة الأميرة نورة (تعاقد)',
    },
    desc: {
      en: "Developed and administered components of the university's e-learning platform with its platform team, and customized an exam-booking plugin for its ESOL exams with session filters, booking and payment through Moodle.",
      ar: 'تطوير وإدارة مكوّنات في منصة التعليم الإلكتروني للجامعة بالتنسيق اليومي مع فريقها، وتخصيص إضافة لحجز اختبارات ESOL تتيح تصفية الجلسات والحجز والدفع عبر Moodle.',
    },
  },
  {
    period: 'JAN 2023 - SEP 2024',
    company: {
      en: 'Izdiad for Integrated Services and Solutions',
      ar: 'ازدياد للخدمات والحلول المتكاملة',
    },
    role: { en: 'Senior Moodle Developer', ar: 'مطوّر Moodle أوّل' },
    desc: {
      en: "Built and ran Moodle platforms for the company's clients, including Moddaker and Africa Academy: upgraded Moddaker's four language sites and built its Urdu site from scratch, implemented Google login, paid enrolment and H5P, and provisioned LEMP servers.",
      ar: 'بناء وتشغيل منصات Moodle لعملاء الشركة، ومنها مدّكر وأكاديمية أفريقيا: ترقية مواقع مدّكر الأربعة وبناء موقعها الأردي من الصفر، وتنفيذ الدخول عبر Google والتسجيل المدفوع وH5P، وتجهيز خوادم LEMP.',
    },
  },
  {
    period: 'NOV 2022 - JAN 2023',
    company: { en: 'Khlel Platform', ar: 'منصة خليل' },
    role: { en: 'Laravel Developer', ar: 'مطوّر Laravel' },
    desc: {
      en: 'Built, debugged and tested features on a Laravel platform for Quran study circles, with React via Inertia.js for interactive features and deployments through Laravel Forge.',
      ar: 'بناء ميزات وتصحيحها واختبارها في منصة Laravel لحلقات القرآن، مع React عبر Inertia.js للواجهات التفاعلية والنشر عبر Laravel Forge.',
    },
  },
  {
    period: 'OCT 2021 - NOV 2022',
    company: { en: 'Freelance (Fiverr)', ar: 'عمل حر (Fiverr)' },
    role: { en: 'Freelance Web Developer', ar: 'مطوّر ويب مستقل' },
    desc: {
      en: 'Customized Moodle platforms and Moodle mobile apps for educational institutions, and delivered Laravel features for client web applications, from requirements to deployment and support.',
      ar: 'تخصيص منصات Moodle وتطبيقاتها للجوال لمؤسسات تعليمية، وتطوير ميزات Laravel لتطبيقات العملاء من المتطلبات حتى النشر والدعم.',
    },
  },
  {
    period: 'JUL 2021 - OCT 2021',
    company: { en: 'Intelligent Projects · Khartoum', ar: 'المشاريع الذكية · الخرطوم' },
    role: { en: 'Web Developer', ar: 'مطوّر ويب' },
    desc: {
      en: "Developed client web applications with Laravel, Livewire and WordPress, and maintained the company's portfolio of web applications.",
      ar: 'تطوير تطبيقات ويب للعملاء باستخدام Laravel و Livewire و WordPress، وصيانة تطبيقات الشركة.',
    },
  },
  {
    period: 'MAR 2021 - JUL 2021',
    company: {
      en: 'MSC For Information Technology · Khartoum',
      ar: 'MSC لتقنية المعلومات · الخرطوم',
    },
    role: { en: 'Software Engineer', ar: 'مهندس برمجيات' },
    desc: {
      en: "Laravel back-end developer on projects for clients outside Sudan, including parts of a client's admin dashboard.",
      ar: 'مطوّر واجهات خلفية بـ Laravel في مشاريع لعملاء خارج السودان، منها أجزاء من لوحة تحكم لأحد العملاء.',
    },
  },
  {
    period: 'NOV 2020 - MAR 2021',
    company: { en: 'Career break', ar: 'استراحة مهنية' },
    role: { en: 'PHP and Laravel focus', ar: 'تركيز على PHP و Laravel' },
    desc: {
      en: 'Worked on open-source projects and freelance Laravel projects for external clients.',
      ar: 'العمل على مشاريع مفتوحة المصدر ومشاريع Laravel حرة لعملاء خارجيين.',
    },
  },
  {
    period: 'OCT 2019 - NOV 2020',
    company: { en: 'Innovative Solutions · Khartoum', ar: 'الحلول المبتكرة · الخرطوم' },
    role: { en: 'Moodle Developer', ar: 'مطوّر Moodle' },
    desc: {
      en: 'Continued the D2EL Moodle platform and its iOS and Android apps, built a Sudani mobile-payment enrolment plugin, and built the Ivory Private School platform used for remote teaching during the COVID-19 closures, with staff workshops.',
      ar: 'متابعة تطوير منصة D2EL على Moodle وتطبيقاتها لـ iOS و Android، وبناء إضافة تسجيل بالدفع عبر سوداني، وبناء منصة مدرسة آيفوري الخاصة التي اعتمدت عليها في التعليم عن بُعد خلال إغلاق كورونا، مع ورش لكادر المدرسة.',
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
    role: { en: 'Junior Software Engineer', ar: 'مهندس برمجيات مبتدئ' },
    desc: {
      en: 'Built the University of Science and Technology, Omdurman learning system and trained its faculty, then worked on D2EL, a paid Moodle platform for secondary-certificate students: built its Moodle App for both stores and an MBok payment-enrolment plugin.',
      ar: 'بناء نظام التعلم لجامعة العلوم والتقانة بأم درمان وتدريب أعضاء هيئة التدريس، ثم العمل على D2EL، منصة Moodle مدفوعة لطلاب الشهادة السودانية: بناء تطبيقها على المتجرين وإضافة تسجيل بالدفع عبر بنكك.',
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
      en: 'Master of Computer Science, Information Security (studied up to the final semester, not completed)',
      ar: 'ماجستير علوم الحاسوب، أمن المعلومات (درست حتى الفصل الأخير ولم أكمله)',
    },
    period: '2017 - 2018',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'E-Learning', ar: 'التعليم الإلكتروني' },
    items: ['Moodle Development', 'Custom Plugins', 'Web Services', 'Moodle App', 'H5P', 'Edwiser RemUI'],
  },
  {
    label: { en: 'Backend', ar: 'الواجهة الخلفية' },
    items: ['PHP', 'Laravel', 'Livewire', 'Inertia.js', 'MySQL / MariaDB', 'Redis', 'REST APIs', 'Behat'],
  },
  {
    label: { en: 'Frontend', ar: 'الواجهة الأمامية' },
    items: ['JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Ionic', 'WordPress'],
  },
  {
    label: { en: 'DevOps', ar: 'التشغيل' },
    items: ['Linux', 'Nginx', 'PHP-FPM', 'Docker', 'GitHub Actions', 'Cloudflare', 'DigitalOcean', 'Contabo', 'Git'],
  },
  {
    label: { en: 'Security', ar: 'الأمان' },
    items: ['Server Hardening', 'Incident Response', 'WebAuthn Passkeys', 'OAuth'],
  },
];
