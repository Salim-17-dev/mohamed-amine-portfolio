import { ArrowUpRight, BriefcaseBusiness, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../data/config.js';

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-ink-800 py-24 md:py-32">
      <div className="container-content">
        <p className="eyebrow">03 — Parcours</p>
        <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">Expérience</h2>

        <div className="relative mt-12">
          <div
            className="absolute bottom-0 left-[15px] top-0 w-px bg-ink-800 md:left-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {experience.map((job, i) => (
              <div
                key={job.company}
                className="relative grid grid-cols-1 pl-10 md:grid-cols-2 md:gap-x-6 md:pl-0"
              >
                <span
                  className="absolute left-[9px] top-7 z-10 h-[13px] w-[13px] rounded-full border-2 border-brass bg-ink-950 md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />

                <motion.article
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-sm border border-ink-800 bg-ink-900/30 p-6 md:p-8 ${
                  i % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'
                }`}
                >
                <span className="inline-flex items-center gap-2 rounded-sm border border-brass/40 bg-brass/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-brass">
                  <BriefcaseBusiness size={12} /> Stage
                </span>

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
                      {job.missions.map((m) => (
                        <li key={m} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-300">
                          <ArrowUpRight size={15} className="mt-1 shrink-0 text-brass" />
                          {m}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                {job.technologies?.length ? (
                  <div className="mt-6 border-t border-ink-800 pt-5">
                    <p className="eyebrow mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((technology) => (
                        <span key={technology} className="tag">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {job.methodology ? (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wide text-ink-400">
                      Méthodologie :
                    </span>
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
