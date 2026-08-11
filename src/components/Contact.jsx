import { Github, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { contact, links } from '../data/config.js';
import profilePhoto from './image/PHOTO.jpeg';

/* ──────────────────────────────────────────────
   Contact items — each with its accent colour
────────────────────────────────────────────── */
const contactItems = [
  {
    label: 'Email',
    value: contact.emailPro,
    href: links.emailHref,
    icon: Mail,
    accent: '#C9A84C',          // brass/gold
    index: 0,
  },
  {
    label: 'LinkedIn',
    value: 'Mohamed Amine Salim',
    href: links.linkedinUrl,
    icon: Linkedin,
    accent: '#4A8CC9',          // professional blue
    index: 1,
  },
  {
    label: 'GitHub',
    value: 'Salim-17-dev',
    href: links.githubUrl,
    icon: Github,
    accent: '#A8B2C8',          // cool slate
    index: 2,
  },
  {
    label: 'Téléphone',
    value: contact.whatsappDisplay,
    href: `tel:${contact.whatsapp}`,
    icon: Phone,
    accent: '#3DAF7B',          // green
    index: 3,
  },
  {
    label: 'YouTube',
    value: 'Mohamed Amine Salim',
    href: links.youtubeUrl,
    icon: Youtube,
    accent: '#C94A4A',          // red — softer than #FF0000
    index: 4,
    disabled: true,
  },
];

/* ── 3-D tilt hook ── */
function useTilt(ref) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 18 });
  const sy = useSpring(y, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      x.set((e.clientX - left) / width - 0.5);
      y.set((e.clientY - top) / height - 0.5);
    };
    const leave = () => { x.set(0); y.set(0); };
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
  }, [ref, x, y]);

  return { rotateX, rotateY };
}

/* ── Animated heading — word by word ── */
function SplitHeading({ text, inView }) {
  const words = text.split(' ');
  return (
    <span aria-label={text} className="block">
      {words.map((word, wi) => (
        <motion.span
          key={wi}
          className="inline-block mr-[0.35em] last:mr-0"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.6, delay: wi * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ── One contact row ── */
function ContactRow({ item }) {
  const Icon = item.icon;

  /* ── Disabled variant (e.g. YouTube — Bientôt) ── */
  if (item.disabled) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: item.index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex cursor-not-allowed select-none items-center gap-5 border-b border-ink-800 py-4 md:py-5">
          {/* Index number */}
          <span className="hidden shrink-0 font-mono text-[11px] tracking-[0.18em] text-ink-700 sm:block">
            {String(item.index + 1).padStart(2, '0')}
          </span>

          {/* Icon — dimmed */}
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ink-800 bg-ink-900/40"
            style={{ color: `${item.accent}50` }}
          >
            <Icon size={17} />
          </span>

          {/* Text — dimmed */}
          <span className="flex-1 min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-600">
              {item.label}
            </span>
            <span className="mt-0.5 block truncate text-[0.95rem] font-medium text-ink-600">
              {item.value}
            </span>
          </span>

          {/* Bientôt badge */}
          <span className="flex items-center gap-1.5 rounded-sm border border-[#C94A4A]/25 bg-[#C94A4A]/[0.08] px-2.5 py-1">
            <motion.span
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1.5 rounded-full bg-[#C94A4A]"
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#C94A4A]/80">
              Bientôt
            </span>
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: item.index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
        className="group relative flex items-center gap-5 border-b border-ink-800 py-4 md:py-5 transition-colors duration-200"
        whileHover="hovered"
      >
        {/* Animated background fill on hover */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 rounded-sm"
          variants={{
            hovered: { opacity: 1, scaleX: 1 },
          }}
          initial={{ opacity: 0, scaleX: 0.96, originX: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: `linear-gradient(90deg, ${item.accent}0C 0%, transparent 80%)` }}
        />

        {/* Accent left border that slides in */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-[2.5px] rounded-r-full"
          style={{ background: item.accent }}
          variants={{ hovered: { scaleY: 1, opacity: 1 } }}
          initial={{ scaleY: 0, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Index number */}
        <span className="relative z-10 hidden shrink-0 font-mono text-[11px] tracking-[0.18em] text-ink-600 sm:block">
          {String(item.index + 1).padStart(2, '0')}
        </span>

        {/* Icon */}
        <motion.span
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ink-700 bg-ink-900/60"
          style={{ color: '#64748B' }}
          variants={{ hovered: { borderColor: `${item.accent}66`, color: item.accent, scale: 1.08 } }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={17} />
        </motion.span>

        {/* Text */}
        <span className="relative z-10 flex-1 min-w-0">
          <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500">
            {item.label}
          </span>
          <motion.span
            className="mt-0.5 block truncate text-[0.95rem] font-medium text-ink-200"
            variants={{ hovered: { color: '#F8FAFC' } }}
            transition={{ duration: 0.2 }}
          >
            {item.value}
          </motion.span>
        </span>

        {/* Arrow that animates on hover */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 shrink-0 text-ink-700"
          variants={{ hovered: { x: 3, y: -3, color: '#94A3B8' } }}
          transition={{ duration: 0.2 }}
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </motion.svg>
      </motion.a>
    </motion.div>
  );
}

/* ── Main component ── */
export default function Contact() {
  const photoRef  = useRef(null);
  const sectionRef = useRef(null);
  const inView    = useInView(sectionRef, { once: true, margin: '-80px' });
  const { rotateX, rotateY } = useTilt(photoRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-ink-800 py-20 md:py-28"
    >

      {/* ── Ambient orb — warm gold, top-left ── */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-56 -top-20 h-[600px] w-[600px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 65%)' }}
      />

      {/* ── Ambient orb — cool slate, bottom-right ── */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -18, 0], y: [0, 18, 0], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="pointer-events-none absolute -bottom-24 -right-40 h-[480px] w-[480px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, #4A5568 0%, transparent 65%)' }}
      />

      {/* ── Subtle grid ── */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade opacity-25" aria-hidden="true" />

      {/* ── Decorative floating dots ── */}
      {[
        { size: 3, x: '8%',  y: '20%', delay: 0,   dur: 5 },
        { size: 2, x: '92%', y: '15%', delay: 1.2, dur: 6 },
        { size: 4, x: '15%', y: '75%', delay: 2.5, dur: 7 },
        { size: 2, x: '85%', y: '65%', delay: 0.8, dur: 5.5 },
        { size: 3, x: '50%', y: '10%', delay: 1.8, dur: 6.5 },
        { size: 2, x: '70%', y: '85%', delay: 3.2, dur: 4.5 },
      ].map((d, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-brass/20"
          style={{ left: d.x, top: d.y, width: d.size, height: d.size }}
          animate={{ y: [0, -12, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container-content relative">

        {/* ──────────── SECTION HEADER ──────────── */}
        <div className="flex items-center gap-4">
          <motion.span
            className="h-px bg-brass"
            initial={{ width: 0 }}
            animate={inView ? { width: 36 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            06 — Contact
          </motion.p>
        </div>

        <h2 className="mt-6 text-4xl font-semibold text-paper md:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight">
          <span className="relative inline-block">
            <SplitHeading text="Restons en contact" inView={inView} />
            {/* Animated underline */}
            <motion.span
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-px w-full origin-left bg-gradient-to-r from-brass via-brass/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </h2>

        <motion.p
          className="mt-4 max-w-md text-base leading-relaxed text-ink-400"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Disponible pour échanger autour d'une opportunité, d'un projet ou d'une collaboration.
        </motion.p>

        {/* ──────────── MAIN LAYOUT ──────────── */}
        <div className="mt-14 grid items-start gap-16 lg:grid-cols-[1fr_320px] xl:gap-24">

          {/* ── Contact rows ── */}
          <div>
            {/* Top divider */}
            <motion.div
              className="h-px bg-ink-800"
              initial={{ scaleX: 0, originX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />

            {contactItems.map((item) => (
              <ContactRow key={item.label} item={item} />
            ))}
          </div>

          {/* ── Photo card ── */}
          <div className="lg:sticky lg:top-28">
            <motion.figure
              ref={photoRef}
              initial={{ opacity: 0, scale: 0.9, y: 32 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ rotateX, rotateY, transformPerspective: 900 }}
              className="relative mx-auto w-full max-w-[310px] cursor-pointer lg:mx-0"
            >
              {/* Outer animated frame */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-[10px] rounded-sm border border-brass/30"
                animate={{ opacity: [0.3, 0.65, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Inner glow strip — top */}
              <motion.div
                aria-hidden="true"
                className="absolute -inset-[10px] rounded-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.07) 0%, transparent 50%, rgba(74,140,201,0.05) 100%)',
                }}
              />

              {/* Corner brackets */}
              {[
                { t: '-2px', l: '-2px', bt: 'border-t', bl: 'border-l' },
                { t: '-2px', r: '-2px', bt: 'border-t', bl: 'border-r' },
                { b: '-2px', l: '-2px', bt: 'border-b', bl: 'border-l' },
                { b: '-2px', r: '-2px', bt: 'border-b', bl: 'border-r' },
              ].map((c, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className={`absolute h-5 w-5 border-brass/80 ${c.bt} ${c.bl}`}
                  style={{ top: c.t, bottom: c.b, left: c.l, right: c.r }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07, ease: 'backOut' }}
                />
              ))}

              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Mohamed Amine Salim"
                className="relative aspect-[4/5] w-full rounded-sm border border-ink-700/80 object-cover object-top"
              />

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2"
              >
                <span className="flex items-center gap-2 whitespace-nowrap rounded-sm border border-ink-700 bg-ink-950/95 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 backdrop-blur-md shadow-xl">
                  <motion.span
                    className="h-[7px] w-[7px] rounded-full bg-[#3DAF7B]"
                    animate={{ opacity: [1, 0.2, 1], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  Disponible
                </span>
              </motion.div>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
