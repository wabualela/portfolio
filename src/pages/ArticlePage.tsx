import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import { ui } from '@/content/site';
import { posts, postTypeLabel, type PostBlock } from '@/content/posts';
import { Reveal } from '@/components/Reveal';

const Block: React.FC<{ block: PostBlock }> = ({ block }) => {
  const { t, isRtl } = useLang();

  switch (block.kind) {
    case 'h2':
      return (
        <h2
          className={`mt-5 text-2xl font-bold text-ink md:text-3xl ${
            isRtl ? '' : 'tracking-tight'
          }`}
        >
          {block.text ? t(block.text) : null}
        </h2>
      );
    case 'code':
      return (
        <pre
          dir="ltr"
          className="overflow-x-auto border border-line bg-surface px-7 py-6 font-mono text-[13px] leading-loose text-ink"
        >
          {block.code}
        </pre>
      );
    case 'quote':
      return (
        <blockquote className="max-w-[60ch] border-s-2 border-accent-ink ps-6 text-lg leading-relaxed text-ink">
          {block.text ? t(block.text) : null}
        </blockquote>
      );
    default:
      return (
        <p className="max-w-[65ch] text-[17px] leading-loose text-body">
          {block.text ? t(block.text) : null}
        </p>
      );
  }
};

export const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const { t } = useLang();

  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/writing" replace />;

  const post = posts[index];
  const prev = posts[index + 1];
  const next = posts[index - 1];

  return (
    <main className="px-6 pt-36 pb-28 md:px-10">
      <div className="mx-auto max-w-[860px]">
        <Reveal>
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-dim transition-colors hover:text-accent-ink"
          >
            <ArrowLeft size={13} className="rtl:-scale-x-100" />
            {t(ui.writing.back)}
          </Link>

          <div className="mt-9 flex flex-wrap gap-6 font-mono text-xs tracking-[0.1em]">
            <span
              className={post.type === 'tutorial' ? 'text-accent-ink' : 'text-dim'}
            >
              {t(postTypeLabel[post.type])}
            </span>
            <span className="text-dim">{t(post.date)}</span>
            <span className="text-dim">
              {post.readMin} {t(ui.writing.minReadLong)}
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-ink md:text-6xl">
            {t(post.title)}
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-dim">
            {t(post.excerpt)}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                dir="ltr"
                className="border border-line px-2.5 py-1 font-mono text-[11px] uppercase text-dim"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          {/* TODO: real cover image replaces the placeholder */}
          <div className="ph-media flex aspect-[21/9] items-center justify-center border border-line font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
            {post.coverLabel}
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-7">
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-line pt-7 md:grid-cols-2">
          {prev ? (
            <Link to={`/writing/${prev.slug}`} className="group">
              <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
                ← {t(ui.writing.prev)}
              </span>
              <span className="mt-2 block text-xl font-semibold text-ink transition-colors group-hover:text-accent-ink">
                {t(prev.title)}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/writing/${next.slug}`} className="group md:text-end">
              <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-dim">
                {t(ui.writing.next)} →
              </span>
              <span className="mt-2 block text-xl font-semibold text-ink transition-colors group-hover:text-accent-ink">
                {t(next.title)}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </main>
  );
};
