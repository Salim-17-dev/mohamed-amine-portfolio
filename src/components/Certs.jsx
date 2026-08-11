import { Award, Download, ExternalLink, FileText, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import pythonCertificate from '../data/certificate_pythone.pdf';

const CERTS = [
  {
    id: 'python',
    label: 'Certification',
    title: 'Python',
    subtitle: 'Programmation Python',
    desc: 'Attestation couvrant les fondamentaux de Python : syntaxe, structures de données, fonctions, POO et manipulation de fichiers.',
    file: pythonCertificate,
    filename: 'certificate_python.pdf',
    color: '#3B82F6',
    year: '2025',
  },
];

export default function Certs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certs" className="relative border-t border-ink-800 py-12 md:py-16 overflow-hidden">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse at center, #F59E0B 0%, transparent 70%)' }}
      />

      <div className="container-content" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-4">
              <motion.span
                className="block shrink-0 bg-brass"
                style={{ height: '1px' }}
                initial={{ width: 0 }}
                animate={inView ? { width: 36 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="eyebrow">04 — Certifications</p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
              Formations &amp;{' '}
              <span className="relative inline-block">
                acquis validés
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-[#F59E0B] to-transparent"
                />
              </span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-500">
            Une sélection de certifications qui accompagne mon parcours de développeur.
          </p>
        </motion.div>

        {/* Certs list */}
        <div className="mt-12 space-y-5">
          {CERTS.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 md:grid md:grid-cols-12"
            >
              {/* Hover glow border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ boxShadow: `inset 0 0 0 1px ${cert.color}44, 0 0 32px ${cert.color}12` }}
              />

              {/* Top shimmer on hover */}
              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute top-0 left-0 h-px w-full origin-left"
                style={{ background: `linear-gradient(to right, ${cert.color}, transparent)` }}
              />

              {/* Left panel */}
              <div
                className="relative flex min-h-52 flex-col justify-between border-b border-ink-800 p-7 md:col-span-4 md:border-b-0 md:border-r"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${cert.color}14, transparent 55%)`,
                }}
              >
                {/* Floating sparkle */}
                <motion.div
                  animate={{ rotate: [0, 15, -10, 0], y: [0, -4, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-5 right-5 opacity-20"
                >
                  <Sparkles size={18} style={{ color: cert.color }} />
                </motion.div>

                {/* Award icon with pulse */}
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.6, 1], opacity: [0.15, 0, 0.15] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: cert.color }}
                  />
                  <span
                    className="relative flex h-12 w-12 items-center justify-center rounded-sm border border-ink-700 bg-ink-950"
                  >
                    <Award size={22} style={{ color: cert.color }} />
                  </span>
                </div>

                <div className="mt-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">
                    {cert.label}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-paper">
                    {cert.title}
                  </p>
                  {/* Year badge */}
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="mt-3 inline-block rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-widest"
                    style={{ borderColor: `${cert.color}55`, color: cert.color }}
                  >
                    {cert.year}
                  </motion.span>
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col justify-between p-7 md:col-span-8 md:p-9">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide"
                    style={{ color: cert.color }}
                  >
                    <FileText size={13} />
                    Certificat disponible
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                    className="mt-5 text-2xl font-semibold text-paper"
                  >
                    {cert.subtitle}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.42 + i * 0.1 }}
                    className="mt-3 max-w-xl leading-relaxed text-ink-400"
                  >
                    {cert.desc}
                  </motion.p>
                </div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary group/btn !px-4 !py-2.5 text-xs inline-flex items-center gap-2"
                  >
                    Voir le certificat
                    <ExternalLink size={13} className="transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </a>
                  <a
                    href={cert.file}
                    download={cert.filename}
                    className="btn-secondary group/btn !px-4 !py-2.5 text-xs inline-flex items-center gap-2"
                  >
                    Télécharger
                    <Download size={13} className="transition-transform duration-200 group-hover/btn:translate-y-0.5" />
                  </a>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
