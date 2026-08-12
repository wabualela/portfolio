import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { ui } from '@/content/site';
import { posts, postTypeLabel, type PostType } from '@/content/posts';
import { Reveal } from '@/components/Reveal';

type Filter = 'all' | PostType;

const FILTERS: { key: Filter; label: keyof typeof ui.writing }[] = [
  { key: 'all', label: 'filterAll' },
  { key: 'tutorial', label: 'filterTutorials' },
  { key: 'note', label: 'filterNotes' },
];

export const WritingPage: React.FC = () => {
  const { t, isRtl } = useLang();
  const [filter, setFilter] = useState<Filter>('all');

  const visible = posts.filter((p) => filter === 'all' || p.type === filter);

  return (
    <main className="px-6 pt-40 pb-28 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h1
            className={`text-5xl font-bold text-ink md:text-7xl ${
              isRtl ? '' : 'tracking-tight'
            }`}
          >
            {t(ui.sections.writing)}
          </h1>
          <p className="mt-5 max-w-[55ch] text-lg leading-relaxed text-dim">
            {t(ui.writing.pageIntro)}
          </p>

          <div className="mt-9 flex gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors active:scale-[0.98] ${
                  filter === f.key
                    ? 'border border-accent bg-accent font-bold text-black'
                    : 'border border-line text-dim hover:border-ink hover:text-ink'
                }`}
              >
                {t(ui.writing[f.label])}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col">
          {visible.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i * 0.04, 0.2)}>
              <Link
                to={`/writing/${post.slug}`}
                className={`group grid items-baseline gap-3 border-t border-line py-8 md:grid-cols-[180px_1fr_110px] md:gap-8 ${
                  i === visible.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-mono text-xs leading-loose tracking-[0.1em] text-dim">
                  {t(post.date)}
                  <br />
                  <span
                    className={
                      post.type === 'tutorial' ? 'text-accent-ink' : 'text-dim'
                    }
                  >
                    {t(postTypeLabel[post.type])}
                  </span>
                </span>

                <span>
                  <span className="block text-2xl font-semibold text-ink transition-colors group-hover:text-accent-ink md:text-3xl">
                    {t(post.title)}
                  </span>
                  <span className="mt-2 block max-w-[60ch] text-[15px] leading-relaxed text-dim">
                    {t(post.excerpt)}
                  </span>
                </span>

                <span className="flex items-center gap-1.5 font-mono text-xs tracking-[0.1em] text-dim md:justify-end">
                  <span>
                    {post.readMin} {t(ui.writing.minRead)}
                  </span>
                  <ArrowUpRight size={13} className="rtl:-scale-x-100" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
};
