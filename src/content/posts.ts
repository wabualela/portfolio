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

/* Real articles only. coverLabel stays empty until a cover image exists. */
export const posts: Post[] = [
  {
    slug: 'alborhan-academy-performance',
    date: { en: 'AUG 2026', ar: 'أغسطس 2026' },
    type: 'note',
    title: {
      en: 'Fixing a slow Moodle 4.5 site: 11 s to 4.4 s at 300 users',
      ar: 'إصلاح بطء منصة Moodle 4.5: من 11 ثانية إلى 4.4 عند 300 مستخدم',
    },
    excerpt: {
      en: 'What made Alborhan Academy slow for 8,000+ learners, what I changed, and how I measured it before and after.',
      ar: 'ما الذي أبطأ أكاديمية البرهان لأكثر من 8,000 دارس، وما الذي غيرته، وكيف قست النتيجة قبل وبعد.',
    },
    readMin: 3,
    tags: ['Moodle', 'Performance', 'PHP-FPM'],
    coverLabel: '',
    body: [
      {
        kind: 'p',
        text: {
          en: 'Alborhan Academy runs Moodle 4.5 with the Edwiser RemUI theme for more than 8,000 learners. Pages were slow on normal days and stalled under load. A load test aimed at 300 concurrent users stalled at 104 users, with a p95 of 11.0 seconds.',
          ar: 'تعمل أكاديمية البرهان على Moodle 4.5 بقالب Edwiser RemUI لأكثر من 8,000 دارس. كانت الصفحات بطيئة في الأيام العادية وتتوقف تحت الضغط. وفي اختبار حمل يستهدف 300 مستخدم متزامن توقف الموقع عند 104 مستخدمين، وبلغ زمن الاستجابة p95 نحو 11.0 ثانية.',
        },
      },
      { kind: 'h2', text: { en: 'What I found', ar: 'ما الذي وجدته' } },
      {
        kind: 'p',
        text: {
          en: 'PHP-FPM had only 5 workers, so requests queued long before the database was busy. Moodle caching (MUC) was disabled, so every page rebuilt what it could have read from cache.',
          ar: 'كان لدى PHP-FPM خمسة عمال فقط، فتصطف الطلبات قبل أن تنشغل قاعدة البيانات أصلا. وكانت ذاكرة Moodle المؤقتة (MUC) معطلة، فتعيد كل صفحة بناء ما كان يمكن قراءته من الذاكرة المؤقتة.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The sessions table held 1.6 million stale records, and a crawler was sending more than 2,300 requests a day. The home page listed two courses with 9,445 and 4,733 enrolments, which cost 853 database queries per load. A cron task was stuck, and the www certificate was broken.',
          ar: 'وكان جدول الجلسات يحمل 1.6 مليون سجل قديم، وزاحف ويب يرسل أكثر من 2,300 طلب يوميا. وكانت الصفحة الرئيسية تعرض مقررين فيهما 9,445 و4,733 تسجيلا، فيكلف كل تحميل لها 853 استعلاما. وكانت مهمة cron عالقة، وشهادة www معطلة.',
        },
      },
      { kind: 'h2', text: { en: 'What I changed', ar: 'ما الذي غيرته' } },
      {
        kind: 'p',
        text: {
          en: 'I raised PHP-FPM capacity from 5 to 60 workers, re-enabled MUC caching, and purged the stale sessions without logging anyone out. I blocked the crawler, fixed the cron task and the certificate, and took the two heavy courses off the front page.',
          ar: 'رفعت سعة PHP-FPM من 5 إلى 60 عاملا، وأعدت تفعيل MUC، وحذفت الجلسات القديمة دون تسجيل خروج أي مستخدم. وحجبت الزاحف، وأصلحت مهمة cron والشهادة، وأزلت المقررين الثقيلين من الصفحة الرئيسية.',
        },
      },
      {
        kind: 'code',
        code: '; PHP-FPM pool\npm.max_children = 60',
      },
      { kind: 'h2', text: { en: 'Results', ar: 'النتيجة' } },
      {
        kind: 'p',
        text: {
          en: 'Home-page database queries dropped from 853 to 219, and database time from 0.84 s to 0.12 s. The same 300-user load test then served 21,294 requests at 43.7 requests per second, with a p95 of 4.4 s and zero errors.',
          ar: 'انخفضت استعلامات الصفحة الرئيسية من 853 إلى 219، وزمن قاعدة البيانات من 0.84 إلى 0.12 ثانية. وفي اختبار الحمل نفسه عند 300 مستخدم خدم الموقع 21,294 طلبا بمعدل 43.7 طلبا في الثانية، وبلغ p95 نحو 4.4 ثانية دون أي خطأ.',
        },
      },
      {
        kind: 'quote',
        text: {
          en: 'Measure first: the load test before the change is what gives the result after it meaning.',
          ar: 'قس أولا: اختبار الحمل قبل التغيير هو ما يعطي النتيجة بعده معناها.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'I also added permanent slow-page monitoring, so the next regression shows up before learners report it.',
          ar: 'وأضفت مراقبة دائمة للصفحات البطيئة، حتى يظهر أي تراجع قبل أن يبلغ عنه الدارسون.',
        },
      },
    ],
  },
];
