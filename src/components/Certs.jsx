import { Award, Download, ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import pythonCertificate from '../data/certificate_pythone.pdf';

export default function Certs() {
  return (
    <section id="certs" className="relative border-t border-ink-800 py-24 md:py-32">
      <div className="container-content">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">05 — Certifications</p>
            <h2 className="mt-4 text-3xl font-semibold text-paper md:text-4xl">
              Formations & acquis validés
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-500">
            Une sélection de certifications qui accompagne mon parcours de développeur.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="group mt-12 grid overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 md:grid-cols-12"
        >
          <div className="relative flex min-h-56 flex-col justify-between border-b border-ink-800 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.09),transparent_45%)] p-7 md:col-span-4 md:border-b-0 md:border-r">
            <span className="flex h-12 w-12 items-center justify-center rounded-sm border border-ink-700 bg-ink-950 text-brass">
              <Award size={23} />
            </span>
            <div className="mt-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500">Certification</p>
              <p className="mt-2 font-display text-2xl font-semibold text-paper">Python</p>
            </div>
          </div>

          <div className="flex flex-col justify-between p-7 md:col-span-8 md:p-9">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-brass">
                <FileText size={14} /> Certificat disponible
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-paper">Certification Python</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-400">
                Attestation ajoutée à mon portfolio pour présenter mes acquis en programmation Python.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={pythonCertificate} target="_blank" rel="noreferrer" className="btn-secondary !px-4 !py-2.5 text-xs">
                Voir le certificat <ExternalLink size={14} />
              </a>
              <a href={pythonCertificate} download="certificate_pythone.pdf" className="btn-secondary !px-4 !py-2.5 text-xs">
                Télécharger <Download size={14} />
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
