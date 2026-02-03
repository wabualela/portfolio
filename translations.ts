
export type Language = 'en' | 'ar';

export const INITIAL_EXPERIENCE_DATA = [
  {
    period: "2024 Dec – Present",
    company: "Crystal International Technology",
    role: "Senior PHP & Moodle Developer",
    descEn: "Currently assigned to the Princess Nourah University (PNU) e-learning platform. Collaborating directly with university staff to manage, administer, and develop the platform. Key responsibilities include implementing custom Moodle features, optimizing core system performance, and managing large-scale data migrations.",
    descAr: "مكلف حالياً بالعمل على منصة التعليم الإلكتروني لجامعة الأميرة نورة (PNU). التعاون مباشرة مع موظفي الجامعة لإدارة والإشراف وتطوير المنصة. تشمل المسؤوليات الرئيسية تنفيذ ميزات Moodle المخصصة، وتحسين أداء النظام الأساسي."
  },
  {
    period: "2024 Oct – Present",
    company: "Alborhan Organization",
    role: "PHP & Moodle Developer (Part-time)",
    descEn: "Responsible for upgrading, customizing, and administering major e-learning platforms: Alborhan Academy and Moddaker. Managing infrastructure and scalability using Docker containers and Nginx optimization.",
    descAr: "مسؤول عن ترقية وتخصيص وإدارة منصات التعليم الإلكتروني الكبرى: أكاديمية البرهان ومدكر. إدارة البنية التحتية وقابلية التطوير باستخدام حاويات Docker وتحسينات Nginx."
  }
];

export const INITIAL_EDUCATION_DATA = [
  {
    institution: "National Ribat University",
    degreeEn: "Bachelor's Degree in Computer Science (Honours)",
    degreeAr: "بكالوريوس علوم الحاسوب (مرتبة الشرف)",
    period: "2010 – 2014"
  },
  {
    institution: "University of Khartoum",
    degreeEn: "Master of Computer Science (Incomplete)",
    degreeAr: "ماجستير علوم الحاسب (غير مكتمل)",
    period: "2017"
  }
];

export const skillsData = {
  backend: ["PHP", "Laravel", "MySQL", "LEMP Stack"],
  frontend: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Vue.js"],
  cms: ["Moodle Development", "Custom Plugins", "WordPress"],
  tools: ["Git", "Docker", "Nginx", "Laravel Forge"]
};

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
    navHero: "Home",
    navProfile: "Profile",
    navExperience: "History",
    navProjects: "Work",
    navEducation: "Education",
    about: "Experienced PHP Developer skilled in designing and deploying scalable web applications with a focus on e-learning solutions and client-based projects. Expert in the LEMP stack, using Nginx to deliver optimized, secure, and high-performance applications.",
    aboutExtended: "Known for customizing Moodle platforms to meet diverse client needs and deploying seamless, user-friendly e-learning environments. Collaborative and adaptable, I work effectively with cross-functional teams to manage hosting solutions.",
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
    navHero: "البداية",
    navProfile: "الملف",
    navExperience: "الخبرة",
    navProjects: "الأعمال",
    navEducation: "التعليم",
    about: "مطور PHP متمرس ماهر في تصميم ونشر تطبيقات الويب القابلة للتطوير مع التركيز على حلول التعليم الإلكتروني والمشاريع القائمة على العملاء. خبير في حزمة LEMP.",
    aboutExtended: "معروف بتخصيص منصات Moodle لتلبية احتياجات العملاء المتنوعة ونشر بيئات تعليم إلكتروني سلسة وسهلة الاستخدام. متعاون وقابل للتكيف.",
  }
};
