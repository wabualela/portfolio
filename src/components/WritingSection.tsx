import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { ui } from '@/content/site';
import { posts, postTypeLabel } from '@/content/posts';
import { Reveal } from './Reveal';

/** Home teaser: the three latest posts as quiet rows, per mockup 2b. */
export const WritingSection: React.FC = () => {
  const { t, isRtl } = useLang();
  const latest = posts.slice(0, 3);

  return (
    <section className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-6">
            <h2
              className={`text-4xl font-bold text-ink md:text-6xl ${
                isRtl ? '' : 'tracking-tight'
              }`}
            >
              {t(ui.sections.writing)}
            </h2>
            <Link
              to="/writing"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-dim transition-colors hover:text-accent-ink"
            >
              {t(ui.writing.allPosts)}
              <ArrowUpRight size={13} className="rtl:-scale-x-100" />
            </Link>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                to={`/writing/${post.slug}`}
                className={`group grid items-baseline gap-2 border-t border-line py-6 md:grid-cols-[180px_1fr_110px] md:gap-8 ${
                  i === latest.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="font-mono text-xs tracking-[0.1em] text-dim">
                  {t(post.date)}
                </span>
                <span className="text-xl font-semibold text-ink transition-colors group-hover:text-accent-ink md:text-2xl">
                  {t(post.title)}
                </span>
                <span
                  className={`font-mono text-xs tracking-[0.1em] md:text-end ${
                    post.type === 'tutorial' ? 'text-accent-ink' : 'text-dim'
                  }`}
                >
                  {t(postTypeLabel[post.type])}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
