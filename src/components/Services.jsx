import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Blocks, Database, Layout, MonitorSmartphone, Server, ShieldCheck } from 'lucide-react';

const SERVICES = [
  {
    icon: Layout,
    title: 'Interfaces React',
    desc: 'UIs réactives, soignées et responsives — pensées pour chaque type d\'écran et chaque utilisateur.',
    color: '#60A5FA',
  },
  {
    icon: Server,
    title: 'Backend & API REST',
    desc: 'APIs REST robustes avec Laravel — logique métier claire, sécurisée et prête à évoluer.',
    color: '#A78BFA',
  },
  {
    icon: Database,
    title: 'Bases de données',
    desc: 'Modélisation et gestion de données fiables avec MySQL, PostgreSQL ou Supabase.',
    color: '#34D399',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    desc: 'Applications parfaitement adaptées mobile, tablette et desktop dès la première ligne.',
    color: '#FBBF24',
  },
  {
    icon: Blocks,
    title: 'Intégration Full-Stack',
    desc: 'Frontend et backend connectés proprement — un seul projet cohérent de bout en bout.',
    color: '#F87171',
  },
  {
    icon: ShieldCheck,
    title: 'Auth & Sécurité',
    desc: 'Authentification sécurisée (JWT, Sanctum, Supabase Auth) et protection des données.',
    color: '#38BDF8',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative border-t border-ink-800 py-12 md:py-16 overflow-hidden">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[420px] w-[700px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse at center, #60A5FA 0%, transparent 70%)' }}
      />

      <div className="container-content">

        {/* Header */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          {/* Animated line + eyebrow */}
          <div className="flex items-center gap-4">
            <motion.span
              className="block shrink-0 bg-brass"
              style={{ height: '1px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: 36 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="eyebrow">05 — Services</p>
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
            Ce que je peux{' '}
            <span className="relative inline-block">
              faire pour vous
              {/* animated underline */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-brass to-transparent"
              />
            </span>
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-ink-400">
            Du premier commit à la mise en ligne — des solutions web complètes, adaptées à vos besoins et livrées avec méthode.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 p-6 cursor-default"
                style={{ '--service-color': s.color }}
              >
                {/* hover glow border */}
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `inset 0 0 0 1px ${s.color}55, 0 0 28px ${s.color}18`,
                  }}
                />

                {/* top shimmer line */}
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-px w-full origin-left"
                  style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }}
                />

                {/* Icon with pulse ring */}
                <div className="relative mb-5 flex h-11 w-11 items-center justify-center">
                  <motion.div
                    aria-hidden="true"
                    animate={{ scale: [1, 1.55, 1], opacity: [0.18, 0, 0.18] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: s.color }}
                  />
                  <div
                    className="relative flex h-11 w-11 items-center justify-center rounded-sm border border-ink-700 bg-ink-950"
                  >
                    <Icon size={19} style={{ color: s.color }} />
                  </div>
                </div>

                <p className="font-medium text-paper">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
