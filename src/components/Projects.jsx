import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-ink-800 py-24 md:py-32">
      <div className="container-content">
        <p className="eyebrow">02 — Projets</p>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold text-paper md:text-4xl">
          Deux produits, deux problèmes réels
        </h2>
        <p className="mt-4 max-w-xl text-ink-400">
          Conçus et développés de bout en bout — architecture, interface et logique métier.
        </p>

        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
