import React from 'react';
import {
  siPhp,
  siLaravel,
  siMysql,
  siMoodle,
  siDocker,
  siNginx,
  siReact,
  siVuedotjs,
  siGit,
  siWordpress,
} from 'simple-icons';

/* Named imports keep the bundle tree-shakeable; `import * as` pulls all ~3000 icons. */
const ICONS = [
  siPhp,
  siLaravel,
  siMysql,
  siMoodle,
  siDocker,
  siNginx,
  siReact,
  siVuedotjs,
  siGit,
  siWordpress,
];

/**
 * The single marquee on the page (see DESIGN.md). Real brand SVGs from
 * simple-icons; the track duplicates its content once so -50% loops seamlessly.
 * Animation lives in index.css and stops under prefers-reduced-motion.
 */
export const StackMarquee: React.FC = () => (
  <div
    dir="ltr"
    className="relative overflow-hidden border-y border-line py-8"
    aria-hidden="true"
  >
    <div className="marquee-track flex w-max items-center gap-20 pe-20 text-ink/35">
      {[...ICONS, ...ICONS].map((icon, i) => (
        <svg
          key={`${icon.slug}-${i}`}
          viewBox="0 0 24 24"
          className="h-8 w-8 shrink-0 fill-current"
          role="img"
        >
          <title>{icon.title}</title>
          <path d={icon.path} />
        </svg>
      ))}
    </div>
  </div>
);
