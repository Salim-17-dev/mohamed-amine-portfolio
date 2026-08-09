import { useState } from 'react';
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
  const list = project.roles ?? project.categories;
  const listLabel = project.roles ? "Rôles utilisateurs" : 'Catégories';
  const gallery = project.images ?? (project.image ? [{ label: 'Aperçu', src: project.image }] : []);
  const activeImage = gallery[activeImageIndex];
  const showPreviousImage = () =>
    setActiveImageIndex((index) => (index - 1 + gallery.length) % gallery.length);
  const showNextImage = () => setActiveImageIndex((index) => (index + 1) % gallery.length);

  return (
    <article className={`group rounded-sm border border-ink-800 bg-ink-900/30 transition-colors ${accent.ring}`}>
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
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-1.5" role="tablist" aria-label={`Captures de ${project.name}`}>
              {gallery.map((image, index) => (
                <button
                  key={image.label}
                  type="button"
                  role="tab"
                  aria-selected={activeImageIndex === index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-wide backdrop-blur transition-colors ${
                    activeImageIndex === index
                      ? 'border-ink-300 bg-ink-950/90 text-paper'
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
            {project.stack.slice(0, 6).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
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
        {isGalleryOpen && activeImage?.src && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie ${project.name}`}
            onClick={() => setIsGalleryOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22 }}
              className="relative flex max-h-full w-full max-w-6xl items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={`${activeImage.label} — ${project.name}`}
                className="max-h-[82vh] max-w-full rounded-sm border border-ink-700 object-contain shadow-2xl"
              />

              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="absolute right-0 top-0 -translate-y-12 rounded-sm border border-ink-700 bg-ink-950/90 p-2 text-ink-200 transition-colors hover:border-ink-500 hover:text-paper"
                aria-label="Fermer la galerie"
              >
                <X size={18} />
              </button>

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-0 -translate-x-1/2 rounded-full border border-ink-700 bg-ink-950/90 p-3 text-ink-200 transition-colors hover:border-ink-500 hover:text-paper md:-translate-x-16"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-0 translate-x-1/2 rounded-full border border-ink-700 bg-ink-950/90 p-3 text-ink-200 transition-colors hover:border-ink-500 hover:text-paper md:translate-x-16"
                    aria-label="Image suivante"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              <p className="absolute bottom-0 translate-y-9 font-mono text-xs uppercase tracking-[0.16em] text-ink-300">
                {activeImage.label} · {activeImageIndex + 1} / {gallery.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
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
