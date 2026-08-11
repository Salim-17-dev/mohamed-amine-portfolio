import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ArrowUpRight, FolderOpen } from 'lucide-react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

const MAX_VISIBLE = 4;

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Newest first (first in array), max 4 shown
  const visible = projects.slice(0, MAX_VISIBLE);
  const total   = projects.length;

  return (
    <section id="projects" className="relative border-t border-ink-800 py-12 md:py-16 overflow-hidden">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at top right, #60A5FA 0%, transparent 70%)' }}
      />

      <div className="container-content" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <motion.span
              className="block shrink-0 bg-brass"
              style={{ height: '1px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: 36 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="eyebrow">02 — Projets</p>
          </div>

          {/* Heading + counter badge */}
          <div className="mt-4 flex flex-wrap items-end gap-4">
            <h2 className="max-w-xl text-3xl font-semibold text-paper md:text-4xl">
              <span className="relative inline-block">
                Projets réalisés
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-[#60A5FA] to-transparent"
                />
              </span>
            </h2>

            {/* Project count badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5, ease: 'backOut' }}
              className="mb-1 flex items-center gap-1.5 rounded-sm border border-[#60A5FA]/30 bg-[#60A5FA]/[0.07] px-2.5 py-1"
            >
              <FolderOpen size={12} className="text-[#60A5FA]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#60A5FA]">
                {total}+ projets
              </span>
            </motion.span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-2xl leading-relaxed text-ink-400"
          >
            Une sélection de projets web livrés de A à Z — plateformes métier, e-commerce
            et outils digitaux conçus pour répondre à des besoins réels, avec une attention
            particulière à l'architecture, la performance et l'expérience utilisateur.
          </motion.p>
        </motion.div>

        {/* ── Project cards — newest first, max 3 ── */}
        <div className="mt-14 space-y-8">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* ── CTA row ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
        >
          {/* Total count hint */}
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-600">
            Affichage {Math.min(MAX_VISIBLE, total)} sur {total} projets
          </p>

          {/* GitHub CTA */}
          <motion.a
            href="https://github.com/Salim-17-dev"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary group inline-flex items-center gap-2.5 !px-6 !py-3 hover:border-[#60A5FA]/50 hover:text-[#60A5FA]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Github size={16} className="shrink-0" />
            Voir tous les projets sur GitHub
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
