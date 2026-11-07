// ─────────────────────────────────────────────────────────────
// SITE CONFIG — edit personal info, links and the CV path here.
// Nothing else in the codebase should hardcode these values.
// ─────────────────────────────────────────────────────────────

import cvPdfUrl from './MOHAMED_AMINE_SALIM.pdf';

export const profile = {
  name: 'Mohamed Amine Salim',
  title: 'Développeur Web Full-Stack',
  location: 'Casablanca, Maroc',
  status: 'Jeune diplômé en Développement Digital · Option Web Full Stack',
  taglineFr:
    "Technicien Spécialisé en Développement Digital, option Web Full Stack. Je conçois et développe des applications web complètes — frontend, backend et base de données — avec React.js, Laravel et MySQL.",
  taglineEn:
    'Specialized Technician in Digital Development — Web Full Stack. I build complete web applications from frontend to backend.',
};

export const contact = {
  emailPro: 'contact@mohamedaminesalim.com',
  emailPersonal: 'mohamedaminesalim17@gmail.com',
  whatsapp: '+212777560642', // international format, no spaces, for wa.me
  whatsappDisplay: '+212 777-560642',
  github: 'https://github.com/Salim-17-dev',
  linkedin: 'https://www.linkedin.com/in/mohamed-amine-s-79a2b832a/',
  youtube: 'https://www.youtube.com/channel/UCMxDoNhZIosIX6itwtodPbw',
};

export const links = {
  githubUrl: contact.github,
  linkedinUrl: contact.linkedin,
  emailHref: `mailto:${contact.emailPro}`,
  whatsappHref: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`,
  youtubeUrl: contact.youtube,
};

export const cv = {
  url: cvPdfUrl,
  filename: 'MOHAMED_AMINE_SALIM.pdf',
  language: 'Français',
};

// export const education = [
//   {
//     degree: 'Technicien Spécialisé — Développement Digital',
//     detail: 'Option Web Full Stack',
//     institution: 'OFPPT',
//     period: '2024 — 2026',
//   },
//   {
//     degree: 'Baccalauréat — Sciences Physiques',
//     detail: null,
//     institution: 'Lycée Idriss El Harti',
//     period: '2024',
//   },
// ];

// Fill in period + missions once confirmed. Leaving a field null hides it
// gracefully in the UI rather than showing an invented value.
export const experience = [
  {
    company: 'SPS Technologie — Casablanca',
    role: 'Stagiaire Développeur Full Stack — GestionRH',
    badge: 'Stage PFE',
    period: 'Avril 2026',
    missions: [
      "Développement d'une application de gestion des ressources humaines (GestionRH).",
      'Conception du frontend avec React.js.',
      'Développement du backend avec Laravel.',
      "Création et consommation d'API REST.",
      'Intégration Frontend / Backend.',
      'Gestion de base de données MySQL.',
      'Implémentation des opérations CRUD.',
      "Participation au développement et aux tests de l'application.",
    ],
    technologies: ['React.js', 'Bootstrap', 'Laravel', 'MySQL', 'Git', 'GitHub', 'VS Code'],
    methodology: 'Agile',
  },
];
