// // ─────────────────────────────────────────────────────────────
// // PROJECTS — add newest project at the TOP of the array.
// // It will automatically appear first in the portfolio.
// // Add screenshots to /src/data/ and reference them in `images`.
// // ─────────────────────────────────────────────────────────────

// import homeImage from './Home.jpeg';
// import aboutImage from './About.jpeg';
// import featuresImage from './features.jpeg';
// import solutionsImage from './solution.jpeg';
// import conseilsImage from './conseils.jpeg';
// import contactImage from './contact.jpeg';
// import dashboardImage from './dashboard_Admin.png';


// export const projects = [
//   {
//     slug: 'residenspace',
//     caseNumber: '01',
//     name: 'ResidenSpace',
//     type: 'Plateforme de gestion de copropriétés',
//     role: 'Full-Stack Developer',
//     description:
//       "Une plateforme web dédiée à la digitalisation de la gestion des résidences : copropriétaires, appartements, finances et communication centralisés dans un seul outil.",
//     longDescription:
//       "ResidenSpace centralise l'ensemble du cycle de gestion résidentielle — des appartements et propriétaires jusqu'à la trésorerie, les charges, les paiements et les assemblées. Trois niveaux d'accès (Administrateur, Syndic, Propriétaire) permettent à chaque utilisateur d'agir uniquement sur ce qui le concerne, avec un journal d'activité pour la traçabilité.",
//     roles: ['Administrateur', 'Syndic', 'Propriétaire'],
//     features: [
//       'Gestion des utilisateurs & des rôles',
//       'Gestion des appartements et propriétaires',
//       'Charges, factures et paiements',
//       'Réclamations et assemblées',
//       'Trésorerie et rapports mensuels',
//       'Documents et annonces',
//       "Journal d'activité",
//       'Tableaux de bord par rôle',
//     ],
//     stack: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Axios', 'Redux Toolkit', 'Laravel Sanctum', 'Docker'],
//     github: 'https://github.com/Salim-17-dev/ResidenSpace.git',
//     demo: null,
//     images: [
//       { label: 'Accueil', src: homeImage },
//       { label: 'About', src: aboutImage },
//       { label: 'Features', src: featuresImage },
//       { label: 'Solutions', src: solutionsImage },
//       { label: 'Conseils', src: conseilsImage },
//       { label: 'Contact', src: contactImage },
//     ],
//     accent: 'brass',
//   },
//   {
//     slug: 'gestion-rh',
//     caseNumber: '02',
//     name: 'GestionRH',
//     type: "Application de gestion des ressources humaines",
//     role: 'Full-Stack Developer — Stage SPS Technologie',
//     description:
//       "Application web RH qui digitalise les processus internes d'une entreprise : gestion des employés, absences, demandes et données RH centralisées via une interface moderne connectée à une API Laravel & React.",
//     longDescription:
//       "GestionRH centralise les opérations RH — fiches employés, suivi des absences, gestion des demandes et tableau de bord analytique. Développée dans le cadre du stage chez SPS Technologie (Avril 2026), l'application repose sur une architecture API REST (Laravel) consommée par un frontend React.js, avec persistance MySQL.",
//     features: [
//       'Gestion des employés (CRUD complet)',
//       "Suivi des absences et congés",
//       "Gestion des demandes RH",
//       "Tableau de bord analytique",
//       "API REST Laravel sécurisée",
//       "Interface responsive Bootstrap",
//     ],
//     stack: ['React.js', 'Laravel', 'MySQL', 'Bootstrap', 'Git', 'GitHub', 'VS Code'],
//     github: 'https://github.com/Salim-17-dev/GestionRH.git',
//     demo: null,
//     images: [],
//     accent: 'indigo',
//   },
//   {
//     slug: 'luxe-by-salim',
//     caseNumber: '03',
//     name: 'Luxe by Salim',
//     type: 'Plateforme e-commerce — mode & accessoires',
//     role: 'Full-Stack Developer',
//     description:
//       "Une boutique en ligne élégante dédiée aux accessoires de mode, pensée pour la découverte produit et une expérience d'achat fluide, jusqu'à la commande via WhatsApp.",
//     longDescription:
//       "Luxe by Salim couvre l'expérience boutique complète : recherche et filtres produits, guest checkout sans compte, reçus PDF par email, paiement à la livraison et commande directe par WhatsApp. Le tableau de bord admin intègre la gestion des produits, catégories, commandes, stocks et authentification sécurisée. Dark / Light Mode inclus.",
//     architecture: 'React + Vite → Supabase → PostgreSQL',
//     roles: null,
//     categories: [
//       'Bijoux', 'Sacs', 'Montres', 'Lunettes', 'Accessoires cheveux',
//       'Portefeuilles', 'Ceintures', 'Foulards & Écharpes', 'Porte-clés',
//       'Coffrets cadeaux', 'Valises',
//     ],
//     features: [
//       'Guest Checkout — commande sans compte',
//       'Admin Dashboard complet',
//       'Gestion produits / catégories / commandes',
//       'Authentification Admin sécurisée',
//       'Gestion des stocks',
//       'Filtres et catégories produits',
//       'Commande & contact via WhatsApp',
//       'Reçu PDF envoyé par email (Resend)',
//       'Responsive Design',
//       'Dark / Light Mode',
//     ],
//     stack: [
//       'React.js', 'Vite', 'CSS', 'React Router', 'Lucide React',
//       'Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage',
//       'Supabase Data API', 'Supabase Edge Functions',
//       'Resend', 'PDF', 'WhatsApp',
//       'Git', 'GitHub', 'VS Code', 'Vercel',
//     ],
//     github: 'https://github.com/Salim-17-dev/Luxe-by-Salim.git',
//     demo: null,
//     images: null,
//     accent: 'teal',
//   },
//   {
//     slug: 'compta-web',
//     caseNumber: '04',
//     name: 'Compta-Web',
//     type: 'Application web de comptabilité & gestion financière',
//     role: 'Développeur Full-Stack',
//     description:
//       "Application web de gestion comptable et financière permettant la saisie d'écritures, le suivi de la trésorerie et l'édition de bilans et rapports financiers.",
//     longDescription:
//       "ConmptaWeb est une solution dédiée à la digitalisation des opérations comptables. Elle offre la saisie et le classement des pièces comptables, la gestion du plan comptable, le suivi des comptes clients et fournisseurs, ainsi que la génération automatique de rapports financiers.",
//     features: [
//       'Saisie et journal des écritures comptables',
//       'Gestion des comptes clients & fournisseurs',
//       'Suivi de trésorerie et comptes bancaires',
//       'Génération de bilans et rapports financiers',
//       'Interface responsive et sécurisée',
//     ],
//     stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
//     github: 'https://github.com/Salim-17-dev/ConmptaWeb.git',
//     demo: null,
//     images: [],
//     accent: 'purple',
//   },
//   {
//     slug: 'gestion-etudiants',
//     caseNumber: '05',
//     name: 'Gestion Étudiants',
//     type: 'Application CRUD de gestion des étudiants',
//     role: 'Développeur Web',
//     description:
//       "Application web de gestion des étudiants permettant d'ajouter, modifier, supprimer et afficher les étudiants. Inclut une recherche rapide et un système de pagination pour optimiser l'affichage des données.",
//     longDescription:
//       "Développée avec PHP natif et MySQL, cette application illustre la maîtrise des fondamentaux du développement web backend — opérations CRUD, recherche dynamique, pagination côté serveur et interface responsive Bootstrap.",
//     features: [
//       'CRUD complet (Ajouter, Modifier, Supprimer)',
//       'Recherche rapide des étudiants',
//       'Pagination des résultats',
//       'Interface responsive Bootstrap',
//     ],
//     stack: ['PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Salim-17-dev/gestion.etudiants.git',
//     demo: null,
//     images: [],
//     accent: 'emerald',
//   },
//   {
//     slug: 'todo-list',
//     caseNumber: '06',
//     name: 'Mini Todo List',
//     type: 'Application de gestion de tâches — Frontend',
//     role: 'Développeur Frontend',
//     description:
//       "Application To-Do List simple et intuitive développée dans le cadre de l'apprentissage du développement web frontend. Permet d'ajouter, supprimer et marquer des tâches comme terminées.",
//     longDescription:
//       "Projet d'initiation au frontend — manipulation du DOM, gestion des événements et persistance locale. Interface épurée, interactions fluides et code vanilla HTML/CSS/JS sans dépendances.",
//     features: [
//       'Ajout de tâches',
//       'Suppression de tâches',
//       'Marquage comme terminée',
//       'Interface intuitive',
//     ],
//     stack: ['HTML', 'CSS', 'JavaScript'],
//     github: 'https://github.com/Salim-17-dev/mini_projet_todo.git',
//     demo: null,
//     images: [],
//     accent: 'amber',
//   },
// ];

