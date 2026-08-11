import { Braces, Code2, Database, Layers3, Palette, Wrench } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { competencies, skillGroups } from '../data/skills.js';

const LAYER_META = {
  frontend: { desc: 'Interface & expérience utilisateur', icon: Code2, color: '#60A5FA' },
  backend:  { desc: 'Logique métier & API',               icon: Braces,  color: '#A78BFA' },
  database: { desc: 'Persistance des données',            icon: Database,color: '#34D399' },
  ui:       { desc: "Système visuel de l'interface",      icon: Palette, color: '#FBBF24' },
  tools:    { desc: 'Environnement & collaboration',      icon: Wrench,  color: '#F87171' },
};

const cardLayout = {
  frontend: 'xl:col-span-5',
  backend:  'xl:col-span-4',
  database: 'xl:col-span-3',
  ui:       'xl:col-span-4',
  tools:    'xl:col-span-8',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: (i) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.32, delay: i * 0.045, ease: 'backOut' },
  }),
};

export default function StackDiagram() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const logoRef    = useRef(null);
  const logoInView = useInView(logoRef, { once: true, margin: '-60px' });

  return (
    <section id="stack" className="relative border-t border-ink-800 py-12 md:py-16 overflow-hidden">

      {/* Ambient glow top-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 h-[450px] w-[450px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse at center, #A78BFA 0%, transparent 70%)' }}
      />

      <div className="container-content" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="eyebrow">01 — Expertise</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
              Skills &amp;{' '}
              <span className="relative inline-block">
                Compétences
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-[#A78BFA] to-transparent"
                />
              </span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xs text-sm leading-relaxed text-ink-500"
          >
            Un ensemble de compétences pour concevoir des applications web modernes, du frontend
            au backend et à la base de données.
          </motion.p>
        </motion.div>

        {/* ── Skill cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-12"
        >
          {skillGroups.map((group) => {
            const meta  = LAYER_META[group.id];
            const Icon  = meta?.icon ?? Layers3;
            const color = meta?.color ?? '#E5E7EB';

            return (
              <motion.article
                key={group.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 p-6 transition-colors ${cardLayout[group.id] ?? ''}`}
              >
                {/* Hover glow border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `inset 0 0 0 1px ${color}44, 0 0 28px ${color}10` }}
                />

                {/* Shimmer top line */}
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="absolute top-0 left-0 h-px w-full origin-left"
                  style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
                />

                {/* Card header */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {/* Icon with pulse */}
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.7, 1], opacity: [0.15, 0, 0.15] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-sm border border-ink-700 bg-ink-950">
                        <Icon size={20} style={{ color }} />
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-lg font-medium text-paper">{group.label}</p>
                      <p className="mt-1 text-sm text-ink-400">{meta?.desc}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-ink-600">{group.coordinate}</span>
                </div>

                {/* Tags */}
                <div className="mt-6 border-t border-ink-800 pt-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <motion.span
                        key={item}
                        custom={ii}
                        variants={badgeVariants}
                        className="tag transition-colors hover:border-current"
                        style={{ '--tw-ring-color': color }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Logo strip ── */}
        <div className="mt-14 border-t border-ink-800 pt-10" ref={logoRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={logoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow text-center"
          >
            Technologies I Work With
          </motion.p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {competencies.map((competency, ci) => (
              <motion.span
                key={competency.name}
                initial={{ opacity: 0, y: 12, scale: 0.88 }}
                animate={logoInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: ci * 0.05, ease: 'backOut' }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                style={{ '--competency-color': competency.color }}
                className="competency-card inline-flex w-[132px] flex-col items-center gap-2.5 rounded-sm border border-ink-700 bg-ink-900/30 px-4 py-5 font-mono text-sm text-ink-200 cursor-default"
              >
                <motion.img
                  src={competency.icon}
                  alt=""
                  className="competency-logo h-7 w-7"
                  loading="lazy"
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                />
                {competency.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
