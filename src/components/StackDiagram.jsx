import { Braces, Code2, Database, Layers3, Palette, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { competencies, skillGroups } from '../data/skills.js';

const LAYER_META = {
  frontend: { desc: 'Interface & expérience utilisateur', icon: Code2 },
  backend: { desc: 'Logique métier & API', icon: Braces },
  database: { desc: 'Persistance des données', icon: Database },
  ui: { desc: "Système visuel de l'interface", icon: Palette },
  tools: { desc: 'Environnement & collaboration', icon: Wrench },
};

export default function StackDiagram() {
  return (
    <section id="stack" className="relative border-t border-ink-800 py-24 md:py-32">
      <div className="container-content">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">01 — Expertise</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
            Skills & Compétences
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-500">
            Un ensemble de compétences pour concevoir des applications web modernes, du frontend
            au backend et à la base de données.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {skillGroups.map((group, i) => {
            const meta = LAYER_META[group.id];
            const Icon = meta?.icon ?? Layers3;
            const cardLayout = {
              frontend: 'xl:col-span-5',
              backend: 'xl:col-span-4',
              database: 'xl:col-span-3',
              ui: 'xl:col-span-4',
              tools: 'xl:col-span-8',
            };

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 p-6 transition-colors hover:border-ink-700 ${
                  cardLayout[group.id] ?? ''
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-ink-700 bg-ink-950 text-brass">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-display text-lg font-medium text-paper">{group.label}</p>
                      <p className="mt-1 text-sm text-ink-400">{meta?.desc}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-ink-600">{group.coordinate}</span>
                </div>

                <div className="mt-6 border-t border-ink-800 pt-5">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-14 border-t border-ink-800 pt-10">
          <p className="eyebrow text-center">Technologies I Work With</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {competencies.map((competency) => (
              <motion.span
                key={competency.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{ '--competency-color': competency.color }}
                className="competency-card inline-flex w-[132px] flex-col items-center gap-2.5 rounded-sm border border-ink-700 bg-ink-900/30 px-4 py-5 font-mono text-sm text-ink-200"
              >
                <img src={competency.icon} alt="" className="competency-logo h-7 w-7" loading="lazy" />
                {competency.name}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
