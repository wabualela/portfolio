
export type Language = 'en' | 'ar';

export const translations = {
  en: {
    name: "Wail Abualela Osman",
    title: "Full Stack PHP Developer | Moodle Specialist",
    profileTitle: "PROFILE",
    experienceTitle: "PROFESSIONAL EXPERIENCE",
    skillsTitle: "TECHNICAL SKILLS",
    projectsTitle: "PROJECTS",
    contactTitle: "CONTACT",
    educationTitle: "EDUCATION",
    languagesTitle: "LANGUAGES",
    interestsTitle: "INTERESTS",
    switchLang: "عربي",
    location: "Riyadh, Saudi Arabia",
    email: "wailabualela@gmail.com",
    phone: "+966 50 259 2707",
    website: "wailbox.com",
    ramadanGreeting: "Ramadan Kareem",
    about: "Experienced PHP Developer skilled in designing and deploying scalable web applications with a focus on e-learning solutions and client-based projects. Expert in the LEMP stack, using Nginx to deliver optimized, secure, and high-performance applications. Proficient in both front-end (HTML, CSS, JavaScript, Bootstrap, jQuery) and back-end development, with advanced skills in Laravel for building complex systems.",
    aboutExtended: "Known for customizing Moodle platforms to meet diverse client needs and deploying seamless, user-friendly e-learning environments. Collaborative and adaptable, I work effectively with cross-functional teams to manage hosting solutions, implement custom plugins, and create responsive applications that meet client objectives.",
    viewGitHub: "View GitHub",
    viewLinkedIn: "View LinkedIn"
  },
  ar: {
    name: "وائل أبوالعلا عثمان",
    title: "مطور PHP متكامل | أخصائي مودل (Moodle)",
    profileTitle: "الملف الشخصي",
    experienceTitle: "الخبرة المهنية",
    skillsTitle: "المهارات التقنية",
    projectsTitle: "المشاريع",
    contactTitle: "تواصل معي",
    educationTitle: "التعليم",
    languagesTitle: "اللغات",
    interestsTitle: "الاهتمامات",
    switchLang: "English",
    location: "الرياض، المملكة العربية السعودية",
    email: "wailabualela@gmail.com",
    phone: "+966 50 259 2707",
    website: "wailbox.com",
    ramadanGreeting: "رمضان كريم",
    about: "مطور PHP متمرس ماهر في تصميم ونشر تطبيقات الويب القابلة للتطوير مع التركيز على حلول التعليم الإلكتروني والمشاريع القائمة على العملاء. خبير في حزمة LEMP، باستخدام Nginx لتقديم تطبيقات محسنة وآمنة وعالية الأداء. محترف في كل من التطوير الأمامي (HTML، CSS، JavaScript، Bootstrap، jQuery) والتطوير الخلفي، مع مهارات متقدمة في Laravel لبناء أنظمة معقدة.",
    aboutExtended: "معروف بتخصيص منصات Moodle لتلبية احتياجات العملاء المتنوعة ونشر بيئات تعليم إلكتروني سلسة وسهلة الاستخدام. متعاون وقابل للتكيف، أعمل بفعالية مع فرق العمل المشتركة لإدارة حلول الاستضافة، وتنفيذ الإضافات المخصصة، وإنشاء تطبيقات متجاوبة تلبي أهداف العملاء.",
    viewGitHub: "مشاهدة GitHub",
    viewLinkedIn: "مشاهدة LinkedIn"
  }
};

export const experienceData = [
  {
    period: "2024 Dec – Present",
    company: "Crystal International Technology",
    role: "Senior PHP & Moodle Developer",
    descEn: "Assigned to work on Princess Nourah University (PNU) e-learning platform. Collaborating directly with university staff to manage, administer, and develop the platform.",
    descAr: "مكلف بالعمل على منصة التعليم الإلكتروني لجامعة الأميرة نورة (PNU). التعاون مباشرة مع موظفي الجامعة لإدارة والإشراف وتطوير المنصة."
  },
  {
    period: "2024 Oct – Present",
    company: "Alborhan Organization",
    role: "PHP & Moodle Developer (Part-time)",
    descEn: "Responsible for upgrading, customizing, and administering e-learning platforms: Alborhan Academy and Moddaker. Handling infrastructure and scalability.",
    descAr: "مسؤول عن ترقية وتخصيص وإدارة منصات التعليم الإلكتروني: أكاديمية البرهان ومدكر. التعامل مع البنية التحتية وقابلية التطوير."
  },
  {
    period: "2023 Jan – 2024 Oct",
    company: "Izdiad for Integrated Services",
    role: "Full-Stack Developer",
    descEn: "Contributed to maintenance and development of Moodle-based platforms. Managed hosting on DigitalOcean and developed WordPress front-ends.",
    descAr: "ساهمت في صيانة وتطوير المنصات القائمة على Moodle. إدارة الاستضافة على DigitalOcean وتطوير واجهات WordPress الأمامية."
  },
  {
    period: "2022 Nov – 2023 Jan",
    company: "Khlel Platform",
    role: "Web Developer",
    descEn: "Enhanced platform functionality using Laravel and InertiaJS for backend. Developed UI components with ReactJS and managed Laravel Forge deployments.",
    descAr: "تحسين وظائف المنصة باستخدام Laravel و InertiaJS للخلفية. تطوير مكونات واجهة المستخدم باستخدام ReactJS وإدارة عمليات النشر عبر Laravel Forge."
  },
  {
    period: "2021 Oct – 2022 Nov",
    company: "Freelance",
    role: "Web Developer",
    descEn: "Specialized in building robust online platforms and mobile apps using Moodle, Laravel, and Moodle App technologies for diverse clients.",
    descAr: "متخصص في بناء منصات إلكترونية قوية وتطبيقات جوال باستخدام تقنيات Moodle و Laravel و Moodle App لعملاء متنوعين."
  }
];

export const skillsData = {
  backend: ["PHP", "Laravel", "Laravel Livewire", "MySQL", "LEMP Stack"],
  frontend: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "ReactJS", "Vue.js", "InertiaJS"],
  cms: ["Moodle Development", "Custom Plugins", "WordPress"],
  tools: ["Git & GitHub", "Docker", "Nginx", "Laravel Forge", "DigitalOcean"]
};
