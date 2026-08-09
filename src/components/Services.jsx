import { motion } from 'framer-motion';
import { Blocks, Database, Layout } from 'lucide-react';

const FACETS = [
  {
    icon: Layout,
    title: 'Interfaces',
    desc: 'Interfaces React réactives, soignées et pensées pour chaque type d\'écran.',
  },
  {
    icon: Blocks,
    title: 'Logique & API',
    desc: 'APIs REST et logique métier construites avec Laravel, prêtes à évoluer.',
  },
  {
    icon: Database,
    title: 'Données',
    desc: 'Modélisation et gestion de bases de données MySQL / PostgreSQL fiables.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative border-t border-ink-800 py-24 md:py-32">
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow">04 — Service</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
              Développement Web Full-Stack
            </h2>
            <p className="mt-5 leading-relaxed text-ink-400">
              De la conception à la mise en ligne : une application web complète, cohérente entre
              son interface, sa logique métier et sa base de données.
            </p>
          </div>

          <div className="md:col-span-7 grid gap-4 sm:grid-cols-3">
            {FACETS.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-sm border border-ink-800 bg-ink-900/30 p-6"
              >
                <f.icon size={20} className="text-brass" />
                <p className="mt-4 font-medium text-paper">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-400">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
