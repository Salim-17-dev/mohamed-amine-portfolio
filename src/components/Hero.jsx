import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';
import { profile, links, cv } from '../data/config.js';
import profilePhoto from './image/PHOTO.jpeg';

/* ─── animation variants ─── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: 'blur(4px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const socialItem = {
  hidden: { opacity: 0, scale: 0.7 },
  show:   { opacity: 1, scale: 1,  transition: { duration: 0.35, ease: 'backOut' } },
};

/* ─── 3-D tilt hook for the photo card ─── */
function useTilt(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22 });
  const sy = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      x.set((e.clientX - left) / width - 0.5);
      y.set((e.clientY - top)  / height - 0.5);
    };
    const onLeave = () => { x.set(0); y.set(0); };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, [ref, x, y]);

  return { rotateX, rotateY };
}

/* ─── floating particles ─── */
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: `${10 + Math.random() * 80}%`,
  y: `${10 + Math.random() * 80}%`,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 4,
  dur:   3 + Math.random() * 4,
}));

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

const TITLES = [
  'Developpeur Web Full-Stack',
  'Agile Project Manager',
  'Createur d Applications Web',
  'Integrateur Frontend & Backend',
];

function useRotatingScramble(titles, pause = 4000, speed = 15) {
  const [display, setDisplay] = useState(titles[0]);
  const timerRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const runNext = () => {
      const target = titles[indexRef.current];
      let iteration = 0;
      const totalFrames = target.length * 2;

      const tick = () => {
        setDisplay(
          target.split('').map((ch, i) => {
            if (ch === ' ') return ' ';
            if (i < Math.floor(iteration / 2)) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join(''),
        );
        iteration++;
        if (iteration <= totalFrames) {
          timerRef.current = setTimeout(tick, speed);
        } else {
          setDisplay(target);
          timerRef.current = setTimeout(() => {
            indexRef.current = (indexRef.current + 1) % titles.length;
            runNext();
          }, pause);
        }
      };
      tick();
    };

    runNext();
    return () => clearTimeout(timerRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return display;
}

export default function Hero() {
  const photoRef = useRef(null);
  const { rotateX, rotateY } = useTilt(photoRef);
  const scrambled = useRotatingScramble(TITLES);

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-10 md:pt-32 md:pb-12">

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-fade" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent" />

      {/* Animated ambient orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #6366F1 0%, transparent 70%)' }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -25, 0], y: [0, 18, 0], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="pointer-events-none absolute -right-32 bottom-10 h-[400px] w-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #E5E7EB 0%, transparent 70%)' }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-brass/30"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ y: [0, -12, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container-content relative">
        {/* ── Top eyebrow ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          {/* Availability badge */}
          <span className="flex items-center gap-2 rounded-sm border border-[#3DAF7B]/30 bg-[#3DAF7B]/[0.07] px-3 py-1.5">
            <motion.span
              className="h-[7px] w-[7px] rounded-full bg-[#3DAF7B]"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3DAF7B]">Disponible</span>
          </span>

          <span className="text-ink-700">·</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">Casablanca, Maroc</span>
          <span className="text-ink-700">·</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">Réponse &lt; 24h</span>
        </motion.div>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-16">

          {/* ── Left content ── */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-last lg:order-first">

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-[10vw] leading-[1] sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold tracking-tight text-paper whitespace-nowrap"
            >
              Mohamed Amine
              <br />
              <motion.span
                className="text-ink-400"
                animate={{ color: ['#64748B', '#94A3B8', '#64748B'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                Salim
              </motion.span>
            </motion.h1>

            {/* Diplôme badge — sous le nom */}
            <motion.div variants={fadeUp} className="mt-4">
              <span className="inline-flex items-center gap-2 rounded-sm border border-ink-700 bg-ink-900/50 px-3 py-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
                  {profile.status}
                </span>
              </span>
            </motion.div>

            {/* Scramble title */}
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3">
              <motion.span
                className="h-px shrink-0 bg-brass"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-brass min-w-[280px]">
                {scrambled}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-relaxed text-ink-300">
              {profile.taglineFr}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10">
              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  href="#projects"
                  className="btn-primary group !px-5 sm:!px-6"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                >
                  Découvrir mes projets
                  <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>

                {cv.url ? (
                  <motion.a
                    href={cv.url}
                    download
                    className="btn-secondary !px-5 sm:!px-6"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Download size={15} />
                    Télécharger le CV
                  </motion.a>
                ) : (
                  <span className="btn-secondary cursor-not-allowed opacity-60" title="CV disponible prochainement">
                    CV — bientôt disponible
                  </span>
                )}
              </div>

              {/* Social links */}
              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-ink-800 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">Me retrouver</span>
                <motion.div
                  className="flex items-center gap-2"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.55 } } }}
                  initial="hidden"
                  animate="show"
                >
                  {[
                    { href: links.githubUrl,    label: 'GitHub',    hover: 'hover:border-ink-300 hover:text-paper',        icon: <Github size={16} /> },
                    { href: links.linkedinUrl,  label: 'LinkedIn',  hover: 'hover:border-[#0A66C2]/60 hover:text-[#0A66C2]',icon: <Linkedin size={16} /> },
                    { href: links.emailHref,    label: 'Email',     hover: 'hover:border-brass hover:text-brass',           icon: <Mail size={16} /> },
                    { href: links.whatsappHref, label: 'WhatsApp',  hover: 'hover:border-[#25D366]/60 hover:text-[#25D366]',icon: <MessageCircle size={16} /> },
                    { href: links.youtubeUrl,   label: 'YouTube',   hover: 'hover:border-[#FF0000]/60 hover:text-[#FF0000]',icon: <Youtube size={16} /> },
                  ].map((s) => (
                    <motion.a
                      key={s.label}
                      variants={socialItem}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                      aria-label={s.label}
                      whileHover={{ y: -3, scale: 1.1, transition: { duration: 0.18 } }}
                      className={`flex h-9 w-9 items-center justify-center rounded-sm border border-ink-700 text-ink-400 transition-colors duration-200 ${s.hover}`}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Photo card with 3-D tilt ── */}
          <motion.aside
            ref={photoRef}
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className="relative mx-auto w-full max-w-[260px] cursor-pointer order-first lg:order-last"
          >
            {/* Animated corner frame */}
            <motion.div
              aria-hidden="true"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-3 border border-brass/40"
            />
            {/* Inner glow on hover */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100"
              style={{ boxShadow: 'inset 0 0 40px rgba(229,231,235,0.08)' }}
            />

            <img
              src={profilePhoto}
              alt="Mohamed Amine Salim"
              className="relative aspect-[3/4] w-full object-cover object-top"
            />

          </motion.aside>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Défiler vers la section suivante"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink-500 transition-colors hover:text-brass md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
