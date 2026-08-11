import {
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Code2,
  FolderKanban,
  Globe2,
  GraduationCap,
  LayoutTemplate,
  Rocket,
  Search,
  TestTube2,
  Youtube,
  Zap,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience, links } from '../data/config.js';
import { projects } from '../data/projects.js';
import { competencies } from '../data/skills.js';
import { Linkedin } from 'lucide-react';

const profileStats = [
  { value: projects.length,     label: 'Projets réalisés',       icon: FolderKanban,    badge: null,    color: '#60A5FA' },
  { value: competencies.length, label: 'Technologies maîtrisées', icon: Code2,           badge: null,    color: '#A78BFA' },
  { value: experience.length,   label: 'Expérience en entreprise',icon: BriefcaseBusiness,badge: null,   color: '#34D399' },
  { value: null,                label: 'Méthode de travail',      icon: Zap,             badge: 'Agile', color: '#FBBF24' },
  { value: null,                label: 'Diplômé',                 icon: GraduationCap,   badge: '2026',  color: '#F472B6' },
  { value: null,                label: 'Délai de réponse',        icon: Clock,           badge: '< 24h', color: '#2DD4BF' },
];

const approach = [
  { number: '01', title: 'Analyse du besoin',  text: 'Recueillir les besoins, identifier les utilisateurs cibles et définir les fonctionnalités prioritaires.', icon: Search },
  { number: '02', title: 'Conception UI/UX',   text: 'Concevoir les interfaces, structurer la navigation et modéliser les données avec UML/MCD.', icon: LayoutTemplate },
  { number: '03', title: 'Développement',      text: 'Construire le frontend avec React.js et le backend avec Laravel, reliés par des API REST.', icon: Code2 },
  { number: '04', title: 'Tests & intégration',text: "Tester les fonctionnalités, corriger les bugs et valider l'intégration Frontend/Backend.", icon: TestTube2 },
  { number: '05', title: 'Livraison',          text: 'Déployer une solution propre, maintenable et documentée, prête à être utilisée.', icon: Rocket },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const ref        = useRef(null);
  const inView     = useInView(ref, { once: true, margin: '-80px' });
  const approachRef    = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="relative border-t border-ink-800 py-10 md:py-14 overflow-hidden">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(ellipse at center, #E5E7EB 0%, transparent 70%)' }}
      />

      <div className="container-content" ref={ref}>
        <div className="grid gap-12 xl:grid-cols-12 xl:gap-16">

          {/* ── Left: text content ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="xl:col-span-6"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <motion.span
                className="block shrink-0 bg-brass"
                style={{ height: '1px' }}
                initial={{ width: 0 }}
                animate={inView ? { width: 36 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="eyebrow">00 — Profil</p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] text-paper md:text-6xl"
            >
              Des applications web{' '}
              <span className="relative inline-block text-brass">
                complètes et fiables.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-brass to-transparent"
                />
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-8 font-display text-xl text-ink-200 md:text-2xl">
              Technicien Spécialisé · Développement Digital
            </motion.p>

            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-300">
              Technicien Spécialisé en <strong className="text-paper font-medium">développement Full-Stack</strong>, je conçois et livre des applications web complètes — interface, API, base de données — adaptées aux besoins réels de chaque projet.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl leading-relaxed text-ink-400">
              Habitué à travailler selon la <strong className="text-ink-300 font-medium">méthode Agile</strong>, je livre des solutions fonctionnelles par itérations, avec une communication claire et un respect des délais. Que ce soit une plateforme de gestion, un site vitrine, une application métier ou un produit <strong className="text-ink-300 font-medium">SaaS</strong> — je m'adapte à votre contexte et à vos objectifs.
            </motion.p>

            {/* YouTube card — bientôt */}
            {/* <motion.a
              variants={fadeUp}
              href={links.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, transition: { duration: 0.22 } }}
              className="group mt-9 inline-flex w-full max-w-sm items-center gap-4 rounded-2xl border border-[#FF0000]/30 bg-[#FF0000]/[0.07] px-5 py-4 transition-colors hover:border-[#FF0000]/60 hover:bg-[#FF0000]/[0.11]"
            >
              <motion.div animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                <Youtube size={23} className="shrink-0 text-[#FF0000]" />
              </motion.div>
              <span className="flex-1">
                <span className="block font-medium text-paper">Mohamed Amine Salim</span>
                <span className="mt-0.5 block text-sm text-ink-400">Tutoriels, projets &amp; démonstrations</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-[#FF0000]/30 bg-[#FF0000]/10 px-2.5 py-1">
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#FF0000]"
              />
            </motion.a> */}
            <motion.div
              variants={fadeUp}
              className="group mt-9 inline-flex w-full max-w-sm cursor-default items-center gap-4 rounded-2xl border border-[#FF0000]/20 bg-[#FF0000]/[0.04] px-5 py-4 opacity-70 select-none"
            >
              <Youtube size={23} className="shrink-0 text-[#FF0000]/60" />
              <span className="flex-1">
                <span className="block font-medium text-paper/60">Mohamed Amine Salim</span>
                <span className="mt-0.5 block text-sm text-ink-500">Tutoriels, projets &amp; démonstrations</span>
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-[#FF0000]/30 bg-[#FF0000]/10 px-2.5 py-1">
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-[#FF0000]"
                />
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF0000]">Bientôt</span>
              </span>
            </motion.div>

            {/* Badges */}
            <motion.div variants={fadeUp} className="mt-8 grid gap-x-8 gap-y-4 text-ink-300 sm:grid-cols-2">
              {[
                { icon: Globe2,        text: 'Arabe · Français · Anglais' },
                { icon: CheckCircle2,  text: 'Ouvert aux opportunités' },
                { icon: CheckCircle2,  text: 'Créateur de contenu' },
              ].map(({ icon: Icon, text }) => (
                <motion.p
                  key={text}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2.5 cursor-default"
                >
                  <Icon size={17} className="shrink-0 text-brass" />
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: stat cards ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid gap-4 grid-cols-2 xl:col-span-6 content-center mx-auto w-full"
          >
            {profileStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="group relative min-h-52 overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 p-9 transition-colors hover:border-brass/40"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `inset 0 0 0 1px ${stat.color}33, 0 0 28px ${stat.color}0f` }}
                  />
                  {/* Shimmer top */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute top-0 left-0 h-px w-full origin-left"
                    style={{ background: `linear-gradient(to right, ${stat.color}, transparent)` }}
                  />

                  {/* Icon with pulse */}
                  <div className="relative flex h-[19px] w-[19px] items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: stat.color }}
                    />
                    <Icon size={19} className="relative text-ink-500 transition-colors group-hover:text-brass" />
                  </div>

                  {/* Value */}
                  {stat.badge ? (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 200 }}
                      className="mt-7 font-display text-4xl font-semibold leading-none tracking-tight text-paper"
                    >
                      {stat.badge}
                    </motion.p>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.35, type: 'spring', stiffness: 200 }}
                      className="mt-7 font-display text-6xl font-semibold leading-none tracking-tight text-paper"
                    >
                      {String(stat.value).padStart(2, '0')}
                    </motion.p>
                  )}
                  <p className="mt-3 text-sm text-ink-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Approach section ── */}
        <div className="mt-12 border-t border-ink-800 pt-10" ref={approachRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mt-5 font-display text-5xl font-semibold leading-none tracking-tight text-paper"
          >
            <p className="eyebrow">Ma méthode</p>
            <h3 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
              Comment je réalise un projet
            </h3>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={approachInView ? 'visible' : 'hidden'}
            className="mt-12 grid gap-3 md:grid-cols-5"
          >
            {approach.map((step) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.number}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  className="group relative min-h-40 overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 p-7 transition-colors hover:border-brass/40"
                >
                  {/* Shimmer top */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute top-0 left-0 h-px w-full origin-left bg-gradient-to-r from-brass to-transparent"
                  />

                  <span className="absolute right-4 top-3 font-display text-3xl font-semibold text-ink-800 transition-colors group-hover:text-ink-700">
                    {step.number}
                  </span>

                  {/* Icon with pulse */}
                  <div className="relative flex h-10 w-10 items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.7, 1], opacity: [0.15, 0, 0.15] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full bg-brass"
                    />
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-sm border border-ink-700 bg-ink-950 text-brass">
                      <Icon size={18} />
                    </span>
                  </div>

                  <h4 className="mt-6 text-base font-medium text-paper">{step.title}</h4>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-400">{step.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
