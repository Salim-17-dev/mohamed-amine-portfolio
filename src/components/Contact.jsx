import { Github, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { contact, links } from '../data/config.js';
import profilePhoto from './image/PHOTO.jpeg';

const contactItems = [
  {
    label: 'Email professionnel', value: contact.emailPro, href: links.emailHref, icon: Mail,
    hover: 'hover:border-brass/60 hover:bg-brass/[0.035]', iconHover: 'group-hover:border-brass/60 group-hover:text-brass',
  },
  {
    label: 'LinkedIn', value: 'Mohamed Amine Salim', href: links.linkedinUrl, icon: Linkedin,
    hover: 'hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/[0.035]', iconHover: 'group-hover:border-[#0A66C2]/60 group-hover:text-[#0A66C2]',
  },
  {
    label: 'GitHub', value: 'Salim-17-dev', href: links.githubUrl, icon: Github,
    hover: 'hover:border-ink-300 hover:bg-ink-100/[0.025]', iconHover: 'group-hover:border-ink-300 group-hover:text-paper',
  },
  {
    label: 'WhatsApp', value: contact.whatsappDisplay, href: links.whatsappHref, icon: MessageCircle,
    hover: 'hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.035]', iconHover: 'group-hover:border-[#25D366]/60 group-hover:text-[#25D366]',
  },
  {
    label: 'YouTube', value: 'Mohamed Amine Salim', href: links.youtubeUrl, icon: Youtube,
    hover: 'hover:border-[#FF0000]/60 hover:bg-[#FF0000]/[0.035]', iconHover: 'group-hover:border-[#FF0000]/60 group-hover:text-[#FF0000]',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-ink-800 py-24 md:py-32">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">06 — Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-paper md:text-5xl">Restons en contact</h2>
          <p className="mt-4 leading-relaxed text-ink-400">
            Disponible pour échanger autour d’une opportunité, d’un projet ou d’une collaboration.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-3">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-ink-700 bg-ink-950 text-brass transition-all duration-200 group-hover:scale-105 ${item.iconHover}`}>
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">{item.label}</span>
                    <span className="mt-1 block truncate text-sm font-medium text-ink-100 sm:text-base">{item.value}</span>
                  </span>
                </>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className={`group flex items-center gap-4 rounded-sm border border-ink-800 bg-ink-900/30 p-4 transition-all duration-200 ${item.hover}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-sm border border-ink-800 bg-ink-900/30 p-4">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 border border-ink-800" aria-hidden="true" />
            <img
              src={profilePhoto}
              alt="Mohamed Amine Salim"
              className="relative aspect-[4/5] w-full rounded-sm border border-ink-700 object-cover object-top"
            />
            
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
