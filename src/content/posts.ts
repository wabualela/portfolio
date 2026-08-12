import type { Localized } from './site';

export type PostType = 'tutorial' | 'note';

export interface PostBlock {
  kind: 'p' | 'h2' | 'code' | 'quote';
  text?: Localized;
  /* code blocks are language-agnostic strings, always LTR */
  code?: string;
}

export interface Post {
  slug: string;
  /* display date, localized (e.g. "JUL 2026" / "يوليو 2026") */
  date: Localized;
  type: PostType;
  title: Localized;
  excerpt: Localized;
  readMin: number;
  tags: string[];
  coverLabel: string;
  body: PostBlock[];
}

export const postTypeLabel: Record<PostType, Localized> = {
  tutorial: { en: 'TUTORIAL', ar: 'شرح' },
  note: { en: 'NOTE', ar: 'ملاحظة' },
};

/* TODO: placeholder posts from the design mockups; real articles replace these */
export const posts: Post[] = [
  {
    slug: 'scaling-moodle-performance',
    date: { en: 'JUL 2026', ar: 'يوليو 2026' },
    type: 'tutorial',
    title: {
      en: 'Scaling Moodle: performance tuning notes',
      ar: 'توسيع Moodle: ملاحظات في ضبط الأداء',
    },
    excerpt: {
      en: 'Caching layers, MUC stores, and the queries that actually matter when a semester starts.',
      ar: 'طبقات الـ cache ومخازن MUC والاستعلامات التي تهمّ فعلًا عند بداية الفصل الدراسي.',
    },
    readMin: 12,
    tags: ['Moodle', 'Performance', 'MySQL'],
    coverLabel: 'Cover image 1720 × 740',
    body: [
      {
        kind: 'p',
        text: {
          en: "Placeholder body copy: every semester start is a load test you didn't schedule. This tutorial walks through the layers that keep a large Moodle instance responsive, in the order they pay off.",
          ar: 'نص مؤقت: كل بداية فصل دراسي هي اختبار حِمل لم تخطط له. هذا الشرح يمرّ على الطبقات التي تُبقي منصة Moodle كبيرة سريعة الاستجابة، بترتيب مردودها.',
        },
      },
      {
        kind: 'h2',
        text: { en: '1. Start with the cache stores', ar: '1. ابدأ بمخازن الـ cache' },
      },
      {
        kind: 'p',
        text: {
          en: 'Placeholder: map MUC application caches to Redis before touching anything else. The config is two lines; the win is every page load.',
          ar: 'نص مؤقت: وجِّه مخازن MUC التطبيقية إلى Redis قبل لمس أي شيء آخر. الإعداد سطران؛ والمكسب في كل تحميل صفحة.',
        },
      },
      {
        kind: 'code',
        code: "// config.php\n$CFG->session_handler_class = '\\core\\session\\redis';\n$CFG->session_redis_host    = '127.0.0.1';",
      },
      {
        kind: 'h2',
        text: { en: '2. Find the real queries', ar: '2. اعثر على الاستعلامات الحقيقية' },
      },
      {
        kind: 'p',
        text: {
          en: 'Placeholder: slow-query log for a week of real traffic beats any synthetic benchmark. Index what students actually hit.',
          ar: 'نص مؤقت: سجلّ الاستعلامات البطيئة لأسبوع من الاستخدام الحقيقي يتفوق على أي قياس اصطناعي. أنشئ الفهارس لما يستخدمه الطلاب فعلًا.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'Measure on the first Sunday of the semester, not in July.',
          ar: 'قِس في أول أحد من الفصل الدراسي، لا في الإجازة.',
        },
      },
    ],
  },
  {
    slug: 'arabic-first-moodle-themes',
    date: { en: 'JUN 2026', ar: 'يونيو 2026' },
    type: 'tutorial',
    title: {
      en: 'Building Arabic-first Moodle themes',
      ar: 'بناء قوالب Moodle عربية أولًا',
    },
    excerpt: {
      en: 'RTL layouts, Plex Arabic type, and Boost child themes that hold up in both directions.',
      ar: 'تخطيطات RTL وخط Plex Arabic وقوالب Boost فرعية تصمد في الاتجاهين.',
    },
    readMin: 9,
    tags: ['Moodle', 'RTL', 'SCSS'],
    coverLabel: 'Cover image 1720 × 740',
    body: [
      {
        kind: 'p',
        text: {
          en: 'Placeholder: article body arrives with the real content.',
          ar: 'نص مؤقت: يصل محتوى المقال الحقيقي لاحقًا.',
        },
      },
    ],
  },
  {
    slug: 'zero-downtime-migrations',
    date: { en: 'MAY 2026', ar: 'مايو 2026' },
    type: 'note',
    title: {
      en: 'Large-scale data migrations without downtime',
      ar: 'ترحيل بيانات واسع النطاق دون توقف',
    },
    excerpt: {
      en: 'Placeholder: chunked migrations, dry runs, and rollback plans from the PNU platform.',
      ar: 'نص مؤقت: ترحيل على دفعات وتجارب جافة وخطط تراجع من منصة جامعة الأميرة نورة.',
    },
    readMin: 6,
    tags: ['MySQL', 'Moodle'],
    coverLabel: 'Cover image 1720 × 740',
    body: [
      {
        kind: 'p',
        text: {
          en: 'Placeholder: article body arrives with the real content.',
          ar: 'نص مؤقت: يصل محتوى المقال الحقيقي لاحقًا.',
        },
      },
    ],
  },
  {
    slug: 'lti-integrations-guide',
    date: { en: 'APR 2026', ar: 'أبريل 2026' },
    type: 'tutorial',
    title: {
      en: 'LTI integrations: a practical guide',
      ar: 'تكاملات LTI: دليل عملي',
    },
    excerpt: {
      en: 'Placeholder: connecting external tools to Moodle with LTI 1.3, step by step.',
      ar: 'نص مؤقت: ربط الأدوات الخارجية بـ Moodle عبر LTI 1.3 خطوة بخطوة.',
    },
    readMin: 14,
    tags: ['Moodle', 'LTI'],
    coverLabel: 'Cover image 1720 × 740',
    body: [
      {
        kind: 'p',
        text: {
          en: 'Placeholder: article body arrives with the real content.',
          ar: 'نص مؤقت: يصل محتوى المقال الحقيقي لاحقًا.',
        },
      },
    ],
  },
  {
    slug: 'laravel-queues-lms',
    date: { en: 'MAR 2026', ar: 'مارس 2026' },
    type: 'note',
    title: {
      en: 'Laravel queues for LMS background jobs',
      ar: 'طوابير Laravel لمهام LMS الخلفية',
    },
    excerpt: {
      en: 'Placeholder: grading exports, enrolment syncs, and notifications off the request path.',
      ar: 'نص مؤقت: تصدير الدرجات ومزامنة التسجيل والإشعارات خارج مسار الطلب.',
    },
    readMin: 7,
    tags: ['Laravel', 'Redis'],
    coverLabel: 'Cover image 1720 × 740',
    body: [
      {
        kind: 'p',
        text: {
          en: 'Placeholder: article body arrives with the real content.',
          ar: 'نص مؤقت: يصل محتوى المقال الحقيقي لاحقًا.',
        },
      },
    ],
  },
];
