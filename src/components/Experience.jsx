import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '../data/config.js';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative border-t border-ink-800 py-12 md:py-16 overflow-hidden">

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse at center, #E5E7EB 0%, transparent 70%)' }}
      />

      <div className="container-content" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4">
            <motion.span
              className="block shrink-0 bg-brass"
              style={{ height: '1px' }}
              initial={{ width: 0 }}
              animate={inView ? { width: 36 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className="eyebrow">03 — Expérience</p>
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
            Expérience
            <motion.span
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="ml-3 inline-block h-px w-16 origin-left bg-gradient-to-r from-brass to-transparent align-middle"
            />
          </h2>
        </motion.div>

        <div className="relative mt-12">

          {/* Animated timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-gradient-to-b from-brass/60 via-ink-700 to-transparent md:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className="relative grid grid-cols-1 pl-10 md:grid-cols-2 md:gap-x-6 md:pl-0"
              >
                {/* Timeline dot with pulse */}
                <div className="absolute left-[9px] top-7 z-10 md:left-1/2 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.15, ease: 'backOut' }}
                    className="relative h-[13px] w-[13px]"
                  >
                    <motion.div
                      animate={{ scale: [1, 2.2, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                      className="absolute inset-0 rounded-full bg-brass"
                    />
                    <span className="relative block h-full w-full rounded-full border-2 border-brass bg-ink-950" aria-hidden="true" />
                  </motion.div>
                </div>

                <motion.article
                  initial={{ opacity: 0, x: i % 2 === 0 ? 28 : -28, y: 12 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                  className={`group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 p-6 md:p-8 transition-colors hover:border-brass/40 ${
                    i % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                  }`}
                >
                  {/* Top shimmer on hover */}
                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute top-0 left-0 h-px w-full origin-left bg-gradient-to-r from-brass to-transparent"
                  />

                  {/* Corner glow on hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-sm"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(229,231,235,0.12), 0 0 28px rgba(229,231,235,0.04)' }}
                  />

                  {/* Experience type badge */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.15 }}
                    className="inline-flex items-center gap-2 rounded-sm border border-brass/40 bg-brass/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-brass"
                  >
                    <BriefcaseBusiness size={12} /> {job.badge || 'Expérience'}
                  </motion.span>

                  <div className="mt-5">
                    <p className="text-xl font-medium text-paper">{job.role}</p>
                    <p className="mt-1 text-ink-400">{job.company}</p>
                  </div>

                  <p className="mt-4 flex items-center gap-2 font-mono text-xs text-brass">
                    <CalendarDays size={14} />
                    {job.period ?? job.duration}
                  </p>

                  {job.missions?.length ? (
                    <ul className="mt-6 space-y-3 border-t border-ink-800 pt-5">
                      {job.missions.map((m, mi) => (
                        <motion.li
                          key={m}
                          initial={{ opacity: 0, x: -8 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.5 + i * 0.1 + mi * 0.04 }}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-300"
                        >
                          <ArrowUpRight size={15} className="mt-1 shrink-0 text-brass" />
                          {m}
                        </motion.li>
                      ))}
                    </ul>
                  ) : null}

                  {job.technologies?.length ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                      className="mt-6 border-t border-ink-800 pt-5"
                    >
                      <p className="eyebrow mb-3">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((technology) => (
                          <span key={technology} className="tag transition-colors hover:border-brass/50 hover:text-brass">
                            {technology}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}

                  {job.methodology ? (
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-wide text-ink-400">Méthodologie :</span>
                      <span className="tag">{job.methodology}</span>
                    </div>
                  ) : null}
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
