// ─────────────────────────────────────────────────────────────
// PROJECTS — add screenshots to /public/projects/<slug>/ and
// reference them in `images`. Set `github` / `demo` once live.
// ─────────────────────────────────────────────────────────────

import homeImage from './Home.jpeg';
import aboutImage from './About.jpeg';
import featuresImage from './features.jpeg';
import solutionsImage from './solution.jpeg';
import conseilsImage from './conseils.jpeg';
import contactImage from './contact.jpeg';

export const projects = [
  {
    slug: 'residenspace',
    caseNumber: '01',
    name: 'ResidenSpace',
    type: 'Plateforme de gestion de copropriétés',
    role: 'Full-Stack Developer',
    description:
      "Une plateforme web dédiée à la digitalisation de la gestion des résidences : copropriétaires, appartements, finances et communication centralisés dans un seul outil.",
    longDescription:
      "ResidenSpace centralise l'ensemble du cycle de gestion résidentielle — des appartements et propriétaires jusqu'à la trésorerie, les charges, les paiements et les assemblées. Trois niveaux d'accès (Administrateur, Syndic, Propriétaire) permettent à chaque utilisateur d'agir uniquement sur ce qui le concerne, avec un journal d'activité pour la traçabilité.",
    roles: ['Administrateur', 'Syndic', 'Propriétaire'],
    features: [
      'Gestion des utilisateurs & des rôles',
      'Gestion des appartements et propriétaires',
      'Charges, factures et paiements',
      'Réclamations et assemblées',
      'Trésorerie et rapports mensuels',
      'Documents et annonces',
      "Journal d'activité",
      'Tableaux de bord par rôle',
    ],
    stack: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Axios', 'Redux Toolkit', 'Laravel Sanctum', 'Docker'],
    github: 'https://github.com/Salim-17-dev/ResidenSpace.git',
    demo: null,
    images: [
      { label: 'Aperçu', src: null },
      { label: 'Accueil', src: homeImage },
      { label: 'About', src: aboutImage },
      { label: 'Features', src: featuresImage },
      { label: 'Solutions', src: solutionsImage },
      { label: 'Conseils', src: conseilsImage },
      { label: 'Contact', src: contactImage },
    ],
    accent: 'brass',
  },
  {
    slug: 'luxe-by-salim',
    caseNumber: '02',
    name: 'Luxe by Salim',
    type: 'Plateforme e-commerce — mode & accessoires',
    role: 'Full-Stack Developer',
    description:
      'Une boutique en ligne élégante dédiée aux accessoires de mode, pensée pour la découverte produit et une expérience d\'achat fluide, jusqu\'à la commande via WhatsApp.',
    longDescription:
      "Luxe by Salim couvre l'expérience boutique complète : recherche et filtres produits, recommandations et ventes croisées, alertes de stock faible, estimation de livraison, et un tunnel de commande flexible incluant le paiement à la livraison et la commande directe par WhatsApp. Le tableau de bord admin garde une trace de chaque action via un journal d'activité.",
    roles: null,
    categories: [
      'Bijoux', 'Sacs', 'Montres', 'Lunettes', 'Accessoires cheveux',
      'Portefeuilles', 'Ceintures', 'Foulards & Écharpes', 'Porte-clés',
      'Coffrets cadeaux', 'Valises',
    ],
    features: [
      'Boutique en ligne & recherche produit',
      'Filtres et catégories',
      'Recommandations & cross-selling',
      'Produits récemment consultés / tendances',
      'Alerte stock faible',
      'Estimation de livraison',
      'Commande invité & paiement à la livraison',
      'Commande via WhatsApp',
      'Tableau de bord admin & journal d\'activité',
      'Support Arabe / Français',
    ],
    stack: ['React', 'Laravel', 'MySQL', 'Tailwind CSS', 'REST API', 'Docker'],
    github: 'https://github.com/Salim-17-dev/Luxe-by-Salim.git',
    demo: null,
    image: null,
    accent: 'teal',
  },
];
