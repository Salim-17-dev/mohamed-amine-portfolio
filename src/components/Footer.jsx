import { Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, links } from '../data/config.js';
import profilePhoto from './image/PHOTO.jpeg';

const socials = [
  { href: links.githubUrl,   icon: Github,   label: 'GitHub',   hover: 'hover:border-ink-300 hover:text-paper' },
  { href: links.linkedinUrl, icon: Linkedin, label: 'LinkedIn', hover: 'hover:border-[#0A66C2]/60 hover:text-[#0A66C2]' },
  { href: null,              icon: Youtube,  label: 'YouTube',  hover: '', disabled: true },
  { href: links.emailHref,   icon: Mail,     label: 'Email',    hover: 'hover:border-brass hover:text-brass' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950/60 backdrop-blur-sm">
      <div className="container-content">
        <div className="flex flex-col items-center justify-between gap-5 py-4 sm:flex-row sm:gap-4">

          {/* ── Left: avatar + name + title ── */}
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-ink-700">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Name */}
            <span className="font-medium text-sm text-ink-100 whitespace-nowrap">
              {profile.name}
            </span>

            {/* Separator */}
            <span className="hidden h-4 w-px bg-ink-700 sm:block" aria-hidden="true" />

            {/* Title */}
            <span className="hidden font-mono text-[11px] text-ink-500 sm:block whitespace-nowrap">
              {profile.title}
            </span>
          </div>

          {/* ── Center: copyright ── */}
          <p className="order-last font-mono text-[11px] text-ink-600 sm:order-none whitespace-nowrap">
            © {year} {profile.name}. Tous droits réservés.
          </p>

          {/* ── Right: social icons ── */}
          <div className="flex items-center gap-2">
            {socials.map((s) => {
              const Icon = s.icon;

              /* Disabled (YouTube — Bientôt) */
              if (s.disabled) {
                return (
                  <div key={s.label} className="group relative">
                    <span
                      className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-sm border border-ink-800 text-ink-700"
                      aria-label={`${s.label} — Bientôt`}
                    >
                      <Icon size={15} />
                    </span>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-ink-700 bg-ink-950 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-ink-400 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                      Bientôt
                    </span>
                  </div>
                );
              }

              /* Normal */
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.1, transition: { duration: 0.15 } }}
                  className={`flex h-8 w-8 items-center justify-center rounded-sm border border-ink-800 text-ink-500 transition-colors duration-200 ${s.hover}`}
                >
                  <Icon size={15} />
                </motion.a>
              );
            })}
          </div>

        </div>
      </div>
    </footer>
  );
}
