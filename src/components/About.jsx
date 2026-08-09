import { BriefcaseBusiness, CheckCircle2, Code2, FolderKanban, Globe2, Layers3, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience, links } from '../data/config.js';
import { projects } from '../data/projects.js';
import { competencies } from '../data/skills.js';

const profileStats = [
  { value: projects.length, label: 'Projets livrés', icon: FolderKanban },
  { value: competencies.length, label: 'Technologies', icon: Code2 },
  { value: experience.length, label: 'Expérience', icon: BriefcaseBusiness },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-ink-800 py-20 md:py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30"
        >
          <span className="pointer-events-none absolute -right-4 -top-12 font-display text-[13rem] font-semibold leading-none text-ink-800/50 md:text-[18rem]" aria-hidden="true">01</span>

          <div className="relative grid gap-10 p-7 md:grid-cols-12 md:p-10 lg:p-12">
            <div className="flex flex-col justify-between md:col-span-5">
              <div>
                <p className="eyebrow">00 — Profil</p>
                <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.02] text-paper md:text-5xl">
                  Du besoin métier au produit utile.
                </h2>
              </div>
              <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                <span className="h-px w-9 bg-brass" />
                Full-stack web developer
              </div>
            </div>

            <div className="md:col-span-7 md:border-l md:border-ink-800 md:pl-10">
              <p className="max-w-2xl text-xl leading-relaxed text-ink-100 md:text-2xl">
                Je conçois des applications web qui rendent les processus plus simples, plus clairs et plus efficaces.
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-ink-400">
                Mon approche relie l’interface, la logique métier et la donnée : React.js pour des expériences fluides,
                Laravel pour des API solides, et des bases de données pensées pour durer.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {['React.js', 'Laravel', 'REST API', 'MySQL', 'PostgreSQL'].map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>

              <div className="mt-10 flex items-start gap-3 border-t border-ink-800 pt-5">
                <Layers3 size={18} className="mt-0.5 shrink-0 text-brass" />
                <p className="max-w-lg text-sm leading-relaxed text-ink-300">
                  De la première idée au déploiement, je privilégie des solutions lisibles, fiables et agréables à utiliser.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 grid gap-px overflow-hidden rounded-sm border border-ink-800 bg-ink-800 sm:grid-cols-3">
          {profileStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group bg-ink-950 px-6 py-5 transition-colors hover:bg-ink-900"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-4xl font-semibold text-paper">{String(stat.value).padStart(2, '0')}</p>
                  <Icon size={17} className="text-ink-500 transition-colors group-hover:text-brass" />
                </div>
                <p className="mt-2 text-sm text-ink-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-10"
        >
          <a href={links.youtubeUrl} target="_blank" rel="noreferrer" className="group inline-flex w-full max-w-sm items-center gap-4 rounded-2xl border border-[#FF0000]/30 bg-[#FF0000]/[0.07] px-5 py-4 transition-colors hover:border-[#FF0000]/60 hover:bg-[#FF0000]/[0.11]">
            <Youtube size={23} className="shrink-0 text-[#FF0000]" />
            <span>
              <span className="block font-medium text-paper">Mohamed Amine Salim</span>
              <span className="mt-0.5 block text-sm text-ink-400">Tutoriels, projets & démonstrations</span>
            </span>
          </a>
          <div className="mt-7 grid gap-x-8 gap-y-4 text-ink-300 sm:grid-cols-2">
            <p className="flex items-center gap-2.5"><Globe2 size={17} className="shrink-0 text-brass" />Arabic · French · English</p>
            <p className="flex items-center gap-2.5"><CheckCircle2 size={17} className="shrink-0 text-brass" />Open to opportunities</p>
            <p className="flex items-center gap-2.5"><CheckCircle2 size={17} className="shrink-0 text-brass" />Content Creator</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
