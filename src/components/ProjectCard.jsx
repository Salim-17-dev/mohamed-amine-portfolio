import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink, Github, ImageOff, X } from 'lucide-react';

const ACCENTS = {
  brass: {
    text: 'text-brass',
    border: 'border-brass/40',
    ring: 'hover:border-brass',
  },
  teal: {
    text: 'text-teal',
    border: 'border-teal/40',
    ring: 'hover:border-teal',
  },
};

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const accent = ACCENTS[project.accent] ?? ACCENTS.brass;
  const accentColor = project.accent === 'teal' ? '#9CA3AF' : '#E5E7EB';
  const list = project.roles ?? project.categories;
  const listLabel = project.roles ? "Rôles utilisateurs" : 'Catégories';
  const gallery = project.images ?? (project.image ? [{ label: 'Aperçu', src: project.image }] : []);
  const activeImage = gallery[activeImageIndex];
  const showPreviousImage = () =>
    setActiveImageIndex((index) => (index - 1 + gallery.length) % gallery.length);
  const showNextImage = () => setActiveImageIndex((index) => (index + 1) % gallery.length);

  useEffect(() => {
    if (!isGalleryOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsGalleryOpen(false);
      if (e.key === 'ArrowLeft') showPreviousImage();
      if (e.key === 'ArrowRight') showNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen, gallery.length]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.28 } }}
      className={`group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/30 transition-colors ${accent.ring}`}
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ boxShadow: `inset 0 0 0 1px ${accentColor}22, 0 0 40px ${accentColor}08` }}
      />
      {/* Shimmer top line */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="absolute top-0 left-0 z-10 h-px w-full origin-left"
        style={{ background: `linear-gradient(to right, ${accentColor}cc, transparent)` }}
      />
      <div className="grid gap-0 lg:grid-cols-12">
        {/* Visual placeholder */}
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden border-b border-ink-800 lg:border-b-0 lg:border-r bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.04),transparent_60%)]">
          {activeImage?.src ? (
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="block h-full w-full cursor-zoom-in"
              aria-label={`Ouvrir l’image ${activeImage.label} de ${project.name}`}
            >
              <img
                src={activeImage.src}
                alt={`${activeImage.label} — ${project.name}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </button>
          ) : (
            <div className="flex h-full min-h-[220px] w-full flex-col items-center justify-center gap-3 bg-grid-fade">
              <ImageOff size={22} className="text-ink-600" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-600">
                {activeImage ? `${activeImage.label} — aperçu à ajouter` : 'Aperçu à venir'}
              </span>
            </div>
          )}
          <span className={`absolute top-4 left-4 font-mono text-xs ${accent.text}`}>
            CASE {project.caseNumber}
          </span>
          {gallery.length > 1 && (
            <div
              className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 max-h-24 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label={`Captures de ${project.name}`}
            >
              {gallery.map((image, index) => (
                <button
                  key={`${image.label}-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeImageIndex === index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-wide backdrop-blur transition-colors ${
                    activeImageIndex === index
                      ? 'border-ink-300 bg-ink-950/90 text-paper shadow-sm'
                      : 'border-ink-700 bg-ink-950/70 text-ink-400 hover:border-ink-500 hover:text-ink-200'
                  }`}
                >
                  {image.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:col-span-7 p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-500">{project.type}</p>
          <h3 className="mt-2 text-2xl font-semibold text-paper md:text-3xl">{project.name}</h3>
          <p className="mt-4 leading-relaxed text-ink-300">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 6).map((t, ti) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: ti * 0.05 }}
                className="tag hover:border-current hover:text-brass transition-colors"
              >
                {t}
              </motion.span>
            ))}
            {project.stack.length > 6 && (
              <span className="tag">+{project.stack.length - 6}</span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${accent.text}`}
            >
              {open ? 'Masquer le détail' : 'Voir le dossier complet'}
              <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            <ProjectLink href={project.github} icon={<Github size={14} />} label="Code source" />
            <ProjectLink href={project.demo} icon={<ExternalLink size={14} />} label="Démo live" />
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 border-t border-ink-800 pt-6 space-y-6">
                  <p className="leading-relaxed text-ink-300">{project.longDescription}</p>

                  {list && (
                    <div>
                      <p className="eyebrow mb-2">{listLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {list.map((r) => (
                          <span key={r} className="tag">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="eyebrow mb-2">Fonctionnalités principales</p>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-ink-300">
                          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.text} bg-current`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="eyebrow mb-2">Stack technique complète</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {/* ── IMAGE LIGHTBOX / GALLERY MODAL ── */}
        {isGalleryOpen && activeImage?.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie ${project.name}`}
            onClick={() => setIsGalleryOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative flex flex-col max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-md border border-ink-800 bg-ink-900/95 p-4 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal Top Header Bar */}
              <div className="flex w-full items-center justify-between border-b border-ink-800 pb-3 mb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brass">
                    {project.name}
                  </span>
                  <span className="text-ink-600" aria-hidden="true">•</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-300">
                    {activeImage.label}
                  </span>
                  <span className="rounded-full bg-ink-800 px-2 py-0.5 font-mono text-[10px] text-ink-400">
                    {activeImageIndex + 1} / {gallery.length}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(false)}
                  className="rounded-sm border border-ink-700 bg-ink-800/80 p-1.5 text-ink-300 transition-colors hover:border-ink-500 hover:bg-ink-700 hover:text-paper"
                  aria-label="Fermer la galerie"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden py-2">
                <img
                  src={activeImage.src}
                  alt={`${activeImage.label} — ${project.name}`}
                  className="max-h-[76vh] w-auto max-w-full rounded-sm border border-ink-800 object-contain shadow-xl"
                />

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-ink-700 bg-ink-950/80 p-2.5 text-paper transition-all hover:border-brass hover:bg-brass hover:text-ink-950 shadow-lg"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-ink-700 bg-ink-950/80 p-2.5 text-paper transition-all hover:border-brass hover:bg-brass hover:text-ink-950 shadow-lg"
                      aria-label="Image suivante"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function ProjectLink({ href, icon, label }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-600 cursor-not-allowed">
        {icon}
        {label} — à venir
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-300 hover:text-paper"
    >
      {icon}
      {label}
    </a>
  );
}
