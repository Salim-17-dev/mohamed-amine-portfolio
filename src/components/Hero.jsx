import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';
import { profile, links, cv } from '../data/config.js';
import profilePhoto from './image/PHOTO.jpeg';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent" />

      <div className="container-content relative">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span>Casablanca, MA · 33.5731°N</span>
          <span className="text-ink-600">/</span>
          <span>{profile.status}</span>
        </motion.p>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-paper"
            >
              Mohamed Amine
              <br />
              <span className="text-ink-400">Salim</span>
            </motion.h1>

            <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-brass" />
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-brass">
            {profile.title}
          </p>
            </motion.div>

            <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-300"
        >
          {profile.taglineFr}
            </motion.p>

            <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary group !px-5 sm:!px-6">
              Découvrir mes projets
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {cv.url ? (
              <a href={cv.url} download className="btn-secondary !px-5 sm:!px-6">
                <Download size={15} />
                Télecharger le CV
              </a>
            ) : (
              <span
                className="btn-secondary cursor-not-allowed opacity-60"
                title="CV disponible prochainement"
              >
                CV — bientôt disponible
              </span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-ink-800 pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">Me retrouver</span>
            <div className="flex items-center gap-2">
              <SocialLink href={links.githubUrl} label="GitHub" hoverClass="hover:border-ink-300 hover:text-paper">
                <Github size={16} />
              </SocialLink>
              <SocialLink href={links.linkedinUrl} label="LinkedIn" hoverClass="hover:border-[#0A66C2]/60 hover:text-[#0A66C2]">
                <Linkedin size={16} />
              </SocialLink>
              <SocialLink href={links.emailHref} label="Email" hoverClass="hover:border-brass hover:text-brass">
                <Mail size={16} />
              </SocialLink>
              <SocialLink href={links.whatsappHref} label="WhatsApp" hoverClass="hover:border-[#25D366]/60 hover:text-[#25D366]">
                <MessageCircle size={16} />
              </SocialLink>
              <SocialLink href={links.youtubeUrl} label="YouTube" hoverClass="hover:border-[#FF0000]/60 hover:text-[#FF0000]">
                <Youtube size={16} />
              </SocialLink>
            </div>
          </div>
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[18rem] lg:mx-0"
          >
            <div className="absolute -inset-3 border border-ink-700" aria-hidden="true" />
            <img
              src={profilePhoto}
              alt="Mohamed Amine Salim"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.aside>
        </div>

      </div>

      <a
        href="#about"
        aria-label="Défiler vers la section suivante"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-500 transition-colors hover:text-brass md:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

function SocialLink({ href, label, children, hoverClass }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className={`flex h-9 w-9 items-center justify-center rounded-sm border border-ink-700 text-ink-400 transition-colors duration-200 ${hoverClass}`}
    >
      {children}
    </a>
  );
}
