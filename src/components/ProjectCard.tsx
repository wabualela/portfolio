import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { useLang } from '@/lib/useLang';
import type { Project } from '@/content/site';
import { Reveal } from './Reveal';

interface ProjectCardProps {
  project: Project;
  className?: string;
  /** Tailwind aspect-ratio utility for the media block; varies per grid slot */
  aspect: string;
  delay?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = '',
  aspect,
  delay = 0,
}) => {
  const { t } = useLang();

  const media = (
    <div className={`overflow-hidden border border-line bg-surface ${aspect}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      ) : (
        <div className="ph-media flex h-full w-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.2em] text-dim transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          {project.phLabel}
        </div>
      )}
    </div>
  );

  const body = (
    <>
      {media}
      <div className="mt-6">
        <h3 className="flex items-center gap-3 text-2xl font-semibold text-ink md:text-3xl">
          {project.title}
          <ArrowUpRight
            size={22}
            className="translate-y-1 text-accent-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 rtl:-scale-x-100 motion-reduce:translate-y-0"
          />
        </h3>
        <p className="mt-3 max-w-[55ch] leading-relaxed text-dim">
          {t(project.desc)}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              dir="ltr"
              className="border border-line px-2.5 py-1 font-mono text-[11px] uppercase text-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <Reveal delay={delay} className={className}>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {body}
        </a>
      ) : (
        <Link to="/writing" className="group block">
          {body}
        </Link>
      )}
    </Reveal>
  );
};
