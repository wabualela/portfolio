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
    slug: 'moodle-telegram-login',
    date: { en: 'SEP 2026', ar: 'سبتمبر 2026' },
    type: 'note',
    title: {
      en: 'Telegram login for Moodle: one auth plugin, two and a half years',
      ar: 'تسجيل الدخول بتيليجرام في Moodle: إضافة واحدة على مدى سنتين ونصف',
    },
    excerpt: {
      en: "How one Moodle auth plugin moved from Telegram's legacy widget to OpenID Connect, into the mobile app, and to verifying every email.",
      ar: 'كيف انتقلت إضافة دخول واحدة في Moodle من Widget تيليجرام القديم إلى OpenID Connect، ثم إلى تطبيق الجوال، ثم إلى تأكيد كل بريد.',
    },
    readMin: 5,
    tags: ['Moodle', 'OpenID Connect', 'Telegram'],
    coverLabel: '',
    body: [
      {
        kind: 'p',
        text: {
          en: 'The first commit in auth_telegram is dated 27 March 2024. The last one, release 3.5.1, is dated 27 September 2026. There are 65 commits in between. In that time Telegram changed how its login works, the plugin moved into the mobile app, and I changed my mind about email verification.',
          ar: 'أول commit في مستودع auth_telegram بتاريخ 27 مارس 2024، وآخر commit بتاريخ 27 سبتمبر 2026 مع الإصدار 3.5.1. بينهما 65 commit. وفي هذه المدة غيرت تيليجرام طريقة الدخول نفسها، ودخلت الإضافة تطبيق الجوال، وغيرت أنا رأيي في التحقق من البريد.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "Today it runs on Africa Academy's platforms, next to Google and WhatsApp login. Moddaker used it for a while, then stopped.",
          ar: 'اليوم تعمل الإضافة على منصات أكاديمية أفريقيا إلى جانب الدخول بـ Google وواتساب، واستخدمتها منصة مدكر فترة ثم توقفت عنها.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'What it does',
          ar: 'ماذا تفعل الإضافة',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'It adds a "Continue with Telegram" button to the Moodle login page. A user with a linked account logs in without a password. A logged-in user can link a Telegram identity from a profile page. A new user types an email once to finish the account.',
          ar: 'تضيف زر "المتابعة عبر تيليجرام" إلى صفحة الدخول. صاحب الحساب المربوط يدخل مباشرة بلا كلمة مرور، ومن هو داخل حسابه يربط هوية تيليجرام من صفحة في ملفه، والمستخدم الجديد يكتب بريده مرة واحدة ليكتمل حسابه.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "With notifications enabled, the plugin writes the verified Telegram ID straight into message_telegram's settings, so Moodle notifications reach Telegram without a separate \"connect the bot\" step. It can also send a one-time welcome message after the first login.",
          ar: 'وإذا فعل المشرف الإشعارات، تكتب الإضافة معرف تيليجرام الموثق في إعدادات message_telegram مباشرة، فتصل إشعارات Moodle إلى تيليجرام دون أن يربط المستخدم البوت بنفسه. ويمكن أيضا إرسال رسالة ترحيب مرة واحدة بعد أول دخول.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'From the widget to OpenID Connect',
          ar: 'من الـ Widget إلى OpenID Connect',
        },
      },
      {
        kind: 'p',
        text: {
          en: "Up to 2.x, the plugin used Telegram's old Login Widget, checked with an HMAC built from the bot token. Telegram now offers an OpenID Connect login and lists the widget as legacy, with its docs archived (core.telegram.org/bots/telegram-login).",
          ar: 'حتى الإصدار 2.x كانت الإضافة تعتمد على Login Widget القديم، والتحقق فيه بتوقيع HMAC مبني على توكن البوت. ثم أتاحت تيليجرام الدخول عبر OpenID Connect، وصارت تصف الـ Widget بأنه legacy ووثائقه في الأرشيف (core.telegram.org/bots/telegram-login).',
        },
      },
      {
        kind: 'p',
        text: {
          en: "On 3 June 2026 I moved the plugin to 3.0: the Authorization Code Flow with PKCE against oauth.telegram.org, then a signature check of the ID token against Telegram's JWKS, plus iss, aud, exp and nonce checks. The keys are cached in MUC for a day, and the JWT check uses the Firebase JWT library that Moodle already ships, so the plugin needs neither auth_oauth2 nor an outside library.",
          ar: 'في 3 يونيو 2026 نقلت الإضافة إلى الإصدار 3.0: Authorization Code Flow مع PKCE على oauth.telegram.org، ثم فحص توقيع الـ ID token بمفاتيح JWKS مع التحقق من iss وaud وexp وnonce. المفاتيح محفوظة في MUC ليوم كامل، والتحقق يستخدم مكتبة Firebase JWT الموجودة أصلا في Moodle، فلا تحتاج الإضافة auth_oauth2 ولا أي مكتبة خارجية.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "The next day I switched the identity source from the sub claim to id. Telegram's sub is opaque, and message_telegram needs the real chat ID to deliver anything.",
          ar: 'وفي اليوم التالي غيرت مصدر الهوية من الـ claim المسمى sub إلى id. قيمة sub عند تيليجرام غير شفافة، وmessage_telegram يحتاج رقم المحادثة الحقيقي ليرسل أي إشعار.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Inside the mobile app',
          ar: 'داخل تطبيق الجوال',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The official Moodle app only lists auth_oauth2 providers on its native login screen, so a Telegram button has no place there. The first route needs no app change: set the app to log in through a browser window, and the plugin carries wantsurl through every step, the new-user email form included, until the app gets its token.',
          ar: 'شاشة الدخول في تطبيق Moodle الرسمي لا تعرض إلا مزودي auth_oauth2، فلا مكان فيها لزر تيليجرام. الحل الأول لا يحتاج تعديل التطبيق: نضبط الدخول ليكون عبر نافذة المتصفح، والإضافة تحمل wantsurl في كل خطوة حتى يعود التطبيق بالتوكن، بما فيها نموذج البريد للمستخدم الجديد.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "The second route is for custom app builds, like the Africa Academy app for its Amharic platform, and arrived in 3.2, in August 2026. When the app starts a login for an unknown Telegram identity, the plugin issues a single-use signup token valid for 15 minutes and sends the user back to the app through a URL scheme set in the admin settings. The app then finishes the signup through web services that need no login. The scheme only ever comes from the settings, never from the request, so the endpoint can't become an open redirect.",
          ar: 'الحل الثاني لنسخ التطبيق المخصصة، مثل تطبيق المنصة الأمهرية في أكاديمية أفريقيا، ووصل في الإصدار 3.2 في أغسطس 2026. عندما يبدأ الدخول من التطبيق بهوية تيليجرام غير معروفة، تصدر الإضافة توكن تسجيل لمرة واحدة صالحا 15 دقيقة، وتعيد المستخدم إلى التطبيق عبر URL scheme محدد في الإعدادات، ثم يكمل التطبيق التسجيل عبر web services لا تحتاج دخولا. والـ scheme يؤخذ من الإعدادات فقط، لا من الطلب، حتى لا تصبح الصفحة open redirect.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Why every email now needs confirming',
          ar: 'لماذا صار كل بريد يحتاج تأكيدا',
        },
      },
      {
        kind: 'p',
        text: {
          en: "Up to 3.4, a new email created the account on the spot, unverified. In one signup started from the app, a no-login web-service request, the plugin tried to download the Telegram photo with download_file_content(), but lib/filelib.php isn't loaded in that kind of request. The request died before the token was issued. On retry, the plugin found the account and took the existing-email path. The result: one account, two duplicate link rows, and no token.",
          ar: 'حتى الإصدار 3.4 كان البريد الجديد ينشئ الحساب فورا دون تأكيد. في تسجيل بدأ من التطبيق، أي داخل طلب web service بلا دخول، حاولت الإضافة تنزيل صورة تيليجرام بالدالة download_file_content، لكن lib/filelib.php لا يكون محملا في هذا النوع من الطلبات. توقف الطلب قبل إصدار التوكن، وعند إعادة المحاولة وجدت الإضافة الحساب موجودا فسلكت مسار البريد الموجود. النتيجة: حساب، وسطران مكرران في جدول الربط، ولا توكن.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'I fixed the direct cause: the photo now downloads after the account is saved, and a failed download never stops the signup. Then I went further. Since 3.5, released on 27 September 2026, no account is created or linked until the user opens a confirmation link sent by email. The link is valid for 30 minutes and stored as a sha256 hash, not as text. A resend waits 60 seconds, with at most 5 emails per signup and 10 per IP per minute. The link follows where the signup started: a web page that logs the browser in, or an App Link that opens the app.',
          ar: 'أصلحت السبب المباشر، فصارت الصورة تنزل بعد حفظ الحساب ولا يوقف فشلها التسجيل. ثم ذهبت أبعد: من الإصدار 3.5 في 27 سبتمبر 2026 لا ينشأ حساب ولا يربط قبل أن يفتح المستخدم رابط تأكيد يصله بالبريد. الرابط صالح 30 دقيقة، وأحفظه في قاعدة البيانات كبصمة sha256 لا كنص. إعادة الإرسال بعد 60 ثانية، وبحد 5 رسائل لكل تسجيل و10 لكل IP في الدقيقة. والرابط يتبع المكان الذي بدأ منه التسجيل: صفحة ويب تسجل دخول المتصفح، أو App Link يفتح التطبيق.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'Where it stands',
          ar: 'أين وصلت',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The repo has 14 PHPUnit test files, and the plugin runs on Moodle 4.2 and later with PHP 8.2. In 3.5.1 I fixed how Telegram photos are stored, through process_new_icon(), after about 5,500 production accounts had shown the default avatar. I left those older accounts as they are. The repository is private for now.',
          ar: 'في المستودع 14 ملف اختبار PHPUnit، والإضافة تعمل على Moodle 4.2 وما بعده مع PHP 8.2. وفي الإصدار 3.5.1 أصلحت حفظ صور تيليجرام عبر process_new_icon، بعد أن ظهر نحو 5,500 حساب في الإنتاج بالصورة الافتراضية، وتركت تلك الحسابات القديمة كما هي. المستودع خاص حاليا.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "The question I'm left with: how many steps will a new user accept in exchange for an account you can trust? After 3.4, my answer is at least one email.",
          ar: 'السؤال الذي بقي معي: كم خطوة يقبلها المستخدم الجديد مقابل حساب يمكن الوثوق به؟ بعد ما حدث في 3.4 صار جوابي خطوة بريد واحدة على الأقل.',
        },
      },
    ],
  },
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
  {
    slug: 'moodle-bulk-notifications',
    date: { en: 'FEB 2026', ar: 'فبراير 2026' },
    type: 'note',
    title: {
      en: 'Bulk notifications in Moodle 5.0 without making the browser wait',
      ar: 'إشعارات جماعية في Moodle 5.0 دون أن ينتظر المتصفح',
    },
    excerpt: {
      en: 'An admin tool that sends Moodle notifications in background batches, with live progress, a history, and a way to stop a send.',
      ar: 'أداة إدارية ترسل إشعارات Moodle على دفعات في الخلفية، مع تقدم مباشر وسجل وإمكانية إيقاف الإرسال.',
    },
    readMin: 4,
    tags: ['Moodle 5.0', 'Adhoc tasks', 'Messaging'],
    coverLabel: '',
    body: [
      {
        kind: 'p',
        text: {
          en: "Moodle 5.0 already lets you message a group of users from Bulk user actions. It loops over them and calls message_post_message() inside the same request (admin/user/user_bulk_message.php in Moodle 5.0). The admin waits on the page until the last user is done, and each message arrives as a conversation from the admin's own account.",
          ar: 'في Moodle 5.0 إجراء جاهز لإرسال رسالة إلى مجموعة مستخدمين من Bulk user actions، لكنه يمر على المستخدمين واحدا تلو الآخر ويستدعي message_post_message داخل الطلب نفسه (admin/user/user_bulk_message.php في Moodle 5.0). يعني ذلك أن المشرف ينتظر الصفحة حتى ينتهي آخر مستخدم، وأن الرسالة تصل كمحادثة من حسابه الشخصي.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'So in February 2026 I wrote tool_bulkmessaging for Moddaker: an admin tool that sends the notification in the background, in batches, shows progress, and keeps a record of every message.',
          ar: 'لذلك كتبت tool_bulkmessaging لمنصة مدكر في فبراير 2026: أداة إدارية ترسل الإشعار في الخلفية على دفعات، وتعرض التقدم، وتحفظ سجلا لكل رسالة.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'What it does',
          ar: 'ماذا تفعل',
        },
      },
      {
        kind: 'p',
        text: {
          en: "Under Site administration > Users > Accounts > Bulk messaging, the admin picks recipients with Moodle's standard user filters (name, email, role, cohort and the rest), sends to every active user, or uploads a CSV with an email column. The message is written in the HTML editor, and {fullname}, {firstname}, {lastname}, {email} or {username} in the subject or body change per user.",
          ar: 'من Site administration ثم Users ثم Accounts ثم Bulk messaging يختار المشرف المستلمين بفلاتر المستخدمين المعروفة في Moodle (الاسم والبريد والدور والـ cohort وغيرها)، أو يرسل إلى كل المستخدمين النشطين، أو يرفع ملف CSV فيه عمود email. يكتب الرسالة في محرر HTML، ويضع في العنوان أو النص {fullname} أو {firstname} أو {lastname} أو {email} أو {username} لتتغير مع كل مستخدم.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "It arrives as a notification from the noreply user through the plugin's own message provider, enabled by default for the site popup, email and the mobile app (airnotifier). Because it is a normal notification, each user controls it from their notification preferences.",
          ar: 'الرسالة تصل كإشعار من مستخدم noreply عبر message provider خاص بالإضافة، مفعل افتراضيا داخل الموقع وبالبريد وبإشعارات التطبيق (airnotifier). ولأنها إشعار عادي، يتحكم كل مستخدم فيها من تفضيلات الإشعارات.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'How it works',
          ar: 'كيف تعمل',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'On confirm, the plugin writes a row to tool_bulkmessaging_log, splits recipients into batches of 50 by default, and queues one adhoc task per batch. Cron does the sending. Each task first checks the message status and skips its batch if the admin cancelled or stopped it. After sending, it bumps the sent and failed counters in one UPDATE (sentcount = sentcount + :sent), so the numbers stay right when two batches run at once.',
          ar: 'عند التأكيد تنشئ الإضافة سجلا في جدول tool_bulkmessaging_log، وتقسم المستلمين إلى دفعات من 50 مستخدما افتراضيا، وتضع لكل دفعة adhoc task. بعدها يتولى cron الإرسال. كل task يتحقق أولا من حالة الرسالة، فإن ألغاها المشرف أو أوقفها تجاوز دفعته. وبعد الإرسال يزيد عدادي النجاح والفشل بجملة UPDATE واحدة (sentcount = sentcount + :sent) حتى لا تضيع الأرقام إذا عملت دفعتان في الوقت نفسه.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "A message has six states: queued, processing, completed, failed, cancelled, stopped. From the history page the admin can cancel a message that hasn't started, stop one mid-send (what was sent stays sent), or restart one that failed. Progress refreshes on the page every 3 seconds through a small web service.",
          ar: 'للرسالة ست حالات: في الانتظار، قيد الإرسال، اكتملت، فشلت، ألغيت، أوقفت. من صفحة السجل يلغي المشرف رسالة لم تبدأ، أو يوقف رسالة أثناء الإرسال وما أرسل يبقى مرسلا، أو يعيد تشغيل رسالة فشلت. والتقدم يتحدث في الصفحة كل 3 ثوان عبر web service صغير.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The capability, tool/bulkmessaging:sendmessage, is flagged RISK_SPAM, and only the Manager role has it by default. Settings cover the batch size and a cap on recipients.',
          ar: 'الصلاحية tool/bulkmessaging:sendmessage مصنفة RISK_SPAM وتعطى لدور Manager فقط افتراضيا، وفي الإعدادات حجم الدفعة وحد أقصى لعدد المستلمين.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'History',
          ar: 'التاريخ',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The repo has three commits between 14 and 16 February 2026: the first holds the whole plugin, the second adds CSV upload, the third the README. So the history shows when I published it, not how long the work took. The release is 0.2.0, it requires Moodle 5.0, and the repository is public: github.com/wabualela/moodle-tool_bulkmessaging.',
          ar: 'في المستودع ثلاثة commits بين 14 و16 فبراير 2026: الأول فيه الإضافة كاملة، والثاني أضاف رفع CSV، والثالث ملف README. أي أن السجل يبين متى نشرت الإضافة، لا كم استغرق العمل عليها. الإصدار 0.2.0 ويتطلب Moodle 5.0، والمستودع عام: github.com/wabualela/moodle-tool_bulkmessaging.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'What I would change',
          ar: 'ما سأغيره',
        },
      },
      {
        kind: 'p',
        text: {
          en: "To find the last batch, each task counts the remaining tasks in task_adhoc with a LIKE search for \"logid\":N inside customdata. That search can't tell message 12 from message 123, and if two batches finish at the same moment, each can still see the other, so the message stays \"processing\" even though everything went out. Completion should come from the counters themselves: the message is done when sentcount plus failedcount equals the recipient count, checked in the same UPDATE.",
          ar: 'لمعرفة الدفعة الأخيرة، يعد كل task المهام الباقية في جدول task_adhoc بالبحث عن "logid":رقم داخل customdata باستخدام LIKE. هذا البحث يخلط بين الرسالة 12 والرسالة 123، وإذا انتهت دفعتان في اللحظة نفسها قد ترى كل واحدة الأخرى ما زالت موجودة، فتبقى الرسالة "قيد الإرسال" مع أن كل شيء أرسل. الأصح أن يأتي الاكتمال من العدادات نفسها: تكتمل الرسالة عندما يساوي مجموع sentcount وfailedcount عدد المستلمين، داخل جملة UPDATE واحدة.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The idea I took from this plugin is simple: anything that walks over thousands of users belongs in a background task, not in a web request an admin has to wait on.',
          ar: 'الفكرة التي خرجت بها من هذه الإضافة بسيطة: أي إجراء يمر على آلاف المستخدمين مكانه task في الخلفية، لا طلب ويب ينتظره المشرف.',
        },
      },
    ],
  },
  {
    slug: 'moodle-sudani-payment-2019',
    date: { en: 'DEC 2019', ar: 'ديسمبر 2019' },
    type: 'note',
    title: {
      en: 'My first Moodle payment plugin: subscribing with a Sudani number, 2019',
      ar: 'أول إضافة دفع كتبتها لـ Moodle: الاشتراك برقم سوداني في 2019',
    },
    excerpt: {
      en: 'A 2019 enrolment plugin that let students subscribe with a Sudani phone number, and what its repository shows today.',
      ar: 'إضافة تسجيل من 2019 تتيح للطالب الاشتراك برقم سوداني، وما يظهره مستودعها اليوم.',
    },
    readMin: 3,
    tags: ['Moodle 3.8', 'Payments', 'Enrolment'],
    coverLabel: '',
    body: [
      {
        kind: 'p',
        text: {
          en: "In December 2019, at Innovative Solutions, I was working on D2EL, a paid Moodle platform for Sudanese secondary-certificate students. Students had to be able to subscribe on their own and pay from their Sudani phone number. That's why I wrote enrol_spay.",
          ar: 'في ديسمبر 2019 كنت أعمل في شركة الحلول المبتكرة على D2EL، منصة Moodle مدفوعة لطلاب الشهادة السودانية، وكان المطلوب أن يشترك الطالب بنفسه ويدفع من رقم هاتفه في سوداني. لهذا كتبت enrol_spay.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'How it worked',
          ar: 'كيف كانت تعمل',
        },
      },
      {
        kind: 'p',
        text: {
          en: "I built it on Moodle's own enrol_self and added two payment steps. In the first, the student picks a package and enters a phone number, which must be 12 digits. The plugin asks the Sudani gateway to start the payment (InitPay) and stores the returned requestId in its own table. In the second, the student enters the PIN, and the plugin sends it with the requestId to complete the payment. On success it enrols the student for the enrolment period set on the instance.",
          ar: 'بنيت الإضافة على enrol_self الموجودة في Moodle، وأضفت إليها خطوتين للدفع. في الأولى يختار الطالب الباقة ويكتب رقمه، والإضافة تتحقق أنه 12 رقما، ثم تطلب من بوابة سوداني بدء العملية (InitPay) وتحفظ requestId في جدول خاص. في الثانية يكتب الطالب الرمز السري (PIN)، فترسل الإضافة الرمز مع requestId لإتمام الدفع. إذا نجح الدفع تسجله في المقرر لمدة الاشتراك المحددة في طريقة التسجيل.',
        },
      },
      {
        kind: 'p',
        text: {
          en: "Packages live in the settings, one per line as name|code|cost, so an admin can add one without touching code. Before each call to the gateway the plugin logs in: it fetches a public key from the gateway, encrypts the password with it through openssl_public_encrypt, and gets a token back. The code can also check a subscription's status (CheckSubscription) and cancel it (UnSubscribe).",
          ar: 'الباقات تكتب في الإعدادات، سطر لكل باقة بالشكل name|code|cost، فيضيف المشرف باقة دون تعديل الكود. وقبل كل طلب للبوابة تسجل الإضافة دخولها: تجلب مفتاحا عاما من البوابة، وتشفر كلمة المرور به عبر openssl_public_encrypt، ثم تستلم توكن. وفي الكود أيضا استعلام عن حالة الاشتراك (CheckSubscription) وإلغاؤه (UnSubscribe).',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'If a student leaves after the first step, the PIN field is waiting when they come back, because the requestId is already saved.',
          ar: 'وإذا خرج الطالب بعد الخطوة الأولى يجد حقل الرمز في انتظاره عند عودته، لأن requestId محفوظ مسبقا.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'History',
          ar: 'التاريخ',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'The repo has 15 commits between 10 and 30 December 2019, written for Moodle 3.8. I made two of them directly on the server as root on 14 December, and one of those completed the payment-then-enrol flow.',
          ar: 'في المستودع 15 commit بين 10 و30 ديسمبر 2019، والإضافة مكتوبة لـ Moodle 3.8. اثنان منها كتبتهما مباشرة على الخادم بالمستخدم root في 14 ديسمبر، وأحدهما أكمل مسار الدفع ثم التسجيل.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: 'What the repo shows today',
          ar: 'ما يظهره المستودع اليوم',
        },
      },
      {
        kind: 'p',
        text: {
          en: "The copy on GitHub still has unresolved merge-conflict markers (<<<<<<< HEAD) in lib.php and locallib.php, so it doesn't run as is. There are leftovers from the plugin it started from, too: enrol_self's Behat tests, and a language string carried over from the PayPal plugin.",
          ar: 'النسخة على GitHub ما زالت تحمل علامات تعارض merge لم تحل (<<<<<<< HEAD) في lib.php وlocallib.php، فهي لا تعمل كما هي. وفي الكود بقايا من الإضافة التي بدأت منها: اختبارات Behat الخاصة بالتسجيل الذاتي، ونص في ملف اللغة منقول من إضافة PayPal.',
        },
      },
      {
        kind: 'h2',
        text: {
          en: "What I'd do today",
          ar: 'ما سأفعله اليوم',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'Since Moodle 3.10, Moodle has its own payment system: payment gateways that work with the Enrolment on payment method. Written today, this would be a Sudani payment gateway with enrolment left to Moodle, and nothing would be edited on the production server.',
          ar: 'منذ Moodle 3.10 صار في Moodle نظام دفع داخلي: بوابات دفع تعمل مع طريقة التسجيل Enrolment on payment. لو كتبتها اليوم لكتبت بوابة دفع لسوداني وتركت التسجيل لـ Moodle، ولما عدلت شيئا على خادم الإنتاج مباشرة.',
        },
      },
      {
        kind: 'p',
        text: {
          en: 'It was a small plugin, and the repo keeps exactly how I worked in 2019, conflict markers included.',
          ar: 'كانت إضافة صغيرة، والمستودع يحفظ طريقة عملي في 2019 كما هي، بعلامات التعارض أيضا.',
        },
      },
    ],
  },
];
