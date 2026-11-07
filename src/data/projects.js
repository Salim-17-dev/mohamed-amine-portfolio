// ─────────────────────────────────────────────────────────────
// PROJECTS — add newest project at the TOP of the array.
// It will automatically appear first in the portfolio.
// Add screenshots to /src/data/ and reference them in `images`.
// ─────────────────────────────────────────────────────────────

// ResidenSpace images
import homeImage from './Home.jpeg';
import aboutImage from './About.jpeg';
import featuresImage from './features.jpeg';
import solutionsImage from './solution.jpeg';
import conseilsImage from './conseils.jpeg';
import blogImage from './blog.jpeg';
import contactImage from './contact.jpeg';
import dashboardImage from './dashboard_Admin.png';

// GestionRH images
import accueilRhImage from './Accueil_RH.jpeg';
import affectationsEquipementsRhImage from './Affectations_des_equipements_RH.jpeg';
import bienEtreImage from './Bien-etre.jpeg';
import catalogueEquipementsRhImage from './Catalogue_des_equipements_RH.jpeg';
import demandesAttestationImage from "./Demandes_d'attestation.jpeg";
import demandesMaterielRhImage from './Demandes_de_materiel_RH.jpeg';
import evenementsImage from './Evenements.jpeg';
import formationImage from './Formation.jpeg';
import gestionEmployesRhImage from './Gestion_des_employés_RH.jpeg';
import historiqueEmployesRhImage from './Historique_des_employés_RH.jpeg';
import demandesAdministrativesImage from './Liste_des_demandes_administratives.jpeg';
import reclamationsSalaireImage from './Liste_des_reclamations_salaire.jpeg';
import societesRhImage from './Liste_des_sociétés_RH.jpeg';
import restitutionsTransfertsRhImage from './Restitutions_et_transferts_RH.jpeg';

// Luxe by Salim images
import luxeBoutique from './Boutique.jpeg';
import luxeBoutique1 from './Boutique_1.jpeg';
import luxeBoutique2 from './Boutique_2.jpeg';
import luxeDetails from './Détails.jpeg';
import luxePanier from './Panier.jpeg';
import luxeFavoris from './Favoris.jpeg';
import luxeNouveautes from './Nouveautés.jpeg';
import luxePromotions from './Promotions.jpeg';
import luxeDetailsPromotions from './Détails_Promotions.jpeg';
import luxeContact from './Contact_luxe.jpeg';
import luxeAuthFr from './Auto_fr.jpeg';
import luxeAuthAr from './Auto_ar.jpeg';
import luxeDashboard from './Tableau_de_bord.jpeg';
import luxeDashboard1 from './Tableau_de_bord_1.jpeg';
import luxeProduits from './Produits.jpeg';
import luxeProduits1 from './Produits_1.jpeg';
import luxeNouveauProduit from './Nouveau_produit.jpeg';
import luxeCategories from './Catégories.jpeg';
import luxeCommandes from './Commandes.jpeg';
import luxeDetailsCommandes from './Détails_Commandes.jpeg';
import luxeNouveauCommandes from './Nouveau_Commandes.jpeg';
import luxeCodesPromo from './Codes_Promo.jpeg';
import luxeBannieres from './Bannières.jpeg';
import luxeClients from './Clients.jpeg';
import luxeMessages from './Messages.jpeg';
import luxeParametres from './Paramètres.jpeg';

// ComptaWeb images
import comptaDashboard from './Tableau_de_bord_compta_admin.jpeg';
import comptaClients from './Clients_compta.jpeg';
import comptaNouveauClient from './Nouveau_client.jpeg';
import comptaDetailsClients from './Détails_Clients.jpeg';
import comptaFacturesExports from './Tableau_Factures_avec_pdfFactures_Tableau_Excel.jpeg';
import comptaNouvelleFacture from './Nouvelle_facture.jpeg';
import comptaModifierFacture from './Modifier_la_facture.jpeg';
import comptaDepenses from './Dépenses.jpeg';
import comptaTableauDepenses from './Tableau_Dépenses.jpeg';
import comptaNouvelleDepense from './Nouvelle_dépense.jpeg';
import comptaModifierDepense from './Modifier_dépense.jpeg';
import comptaScan from './SmartComptaScan.jpeg';
import comptaScan1 from './SmartComptaScan_1.jpeg';
import comptaProfilAdmin from './Mon_profil_admin.jpeg';
import comptaConnexion from './Se_connecter.jpeg';
import comptaInscription from './Créer_un_compte.jpeg';

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
      { label: 'Accueil', src: homeImage },
      { label: 'About', src: aboutImage },
      { label: 'Features', src: featuresImage },
      { label: 'Solutions', src: solutionsImage },
      { label: 'Conseils', src: conseilsImage },
      { label: 'Blog', src: blogImage },
      { label: 'Contact', src: contactImage },
    ],
    accent: 'brass',
  },
  {
    slug: 'gestion-rh',
    caseNumber: '02',
    name: 'GestionRH',
    type: "Application de gestion des ressources humaines",
    role: 'Full-Stack Developer — Stage SPS Technologie',
    description:
      "Application web RH qui digitalise les processus internes d'une entreprise : gestion des employés, absences, demandes et données RH centralisées via une interface moderne connectée à une API Laravel & React.",
    longDescription:
      "GestionRH centralise les opérations RH — fiches employés, suivi des absences, gestion des demandes et tableau de bord analytique. Développée dans le cadre du stage chez SPS Technologie (Avril 2026), l'application repose sur une architecture API REST (Laravel) consommée par un frontend React.js, avec persistance MySQL.",
    features: [
      'Gestion des employés (CRUD complet)',
      "Suivi des absences et congés",
      "Gestion des demandes RH",
      "Tableau de bord analytique",
      "API REST Laravel sécurisée",
      "Interface responsive Bootstrap",
    ],
    stack: ['React.js', 'Laravel', 'MySQL', 'Bootstrap', 'Git', 'GitHub', 'VS Code'],
    github: 'https://github.com/Salim-17-dev/GestionRH.git',
    demo: null,
    images: [
      { label: 'Accueil', src: accueilRhImage },
      { label: 'Employés', src: gestionEmployesRhImage },
      { label: 'Historique', src: historiqueEmployesRhImage },
      { label: 'Sociétés', src: societesRhImage },
      { label: 'Catalogue', src: catalogueEquipementsRhImage },
      { label: 'Affectations', src: affectationsEquipementsRhImage },
      { label: 'Transferts', src: restitutionsTransfertsRhImage },
      { label: 'Matériel', src: demandesMaterielRhImage },
      { label: "Attestations", src: demandesAttestationImage },
      { label: 'Demandes', src: demandesAdministrativesImage },
      { label: 'Réclamations', src: reclamationsSalaireImage },
      { label: 'Bien-être', src: bienEtreImage },
      { label: 'Formation', src: formationImage },
      { label: 'Événements', src: evenementsImage },
    ],
    accent: 'indigo',
  },
  {
    slug: 'luxe-by-salim',
    caseNumber: '03',
    name: 'Luxe by Salim',
    type: 'Plateforme e-commerce — mode & accessoires',
    role: 'Full-Stack Developer',
    description:
      "Une boutique en ligne élégante dédiée aux accessoires de mode, pensée pour la découverte produit et une expérience d'achat fluide, jusqu'à la commande via WhatsApp.",
    longDescription:
      "Luxe by Salim couvre l'expérience boutique complète : recherche et filtres produits, guest checkout sans compte, reçus PDF par email, paiement à la livraison et commande directe par WhatsApp. Le tableau de bord admin intègre la gestion des produits, catégories, commandes, stocks et authentification sécurisée. Dark / Light Mode inclus.",
    architecture: 'React + Vite → Supabase → PostgreSQL',
    roles: null,
    categories: [
      'Bijoux', 'Sacs', 'Montres', 'Lunettes', 'Accessoires cheveux',
      'Portefeuilles', 'Ceintures', 'Foulards & Écharpes', 'Porte-clés',
      'Coffrets cadeaux', 'Valises',
    ],
    features: [
      'Guest Checkout — commande sans compte',
      'Admin Dashboard complet',
      'Gestion produits / catégories / commandes',
      'Authentification Admin sécurisée',
      'Gestion des stocks',
      'Filtres et catégories produits',
      'Commande & contact via WhatsApp',
      'Reçu PDF envoyé par email (Resend)',
      'Responsive Design',
      'Dark / Light Mode',
    ],
    stack: [
      'React.js', 'Vite', 'CSS', 'React Router', 'Lucide React',
      'Supabase', 'PostgreSQL', 'Supabase Auth', 'Supabase Storage',
      'Supabase Data API', 'Supabase Edge Functions',
      'Resend', 'PDF', 'WhatsApp',
      'Git', 'GitHub', 'VS Code', 'Vercel',
    ],
    github: 'https://github.com/Salim-17-dev/Luxe-by-Salim.git',
    demo: null,
    images: [
      { label: 'Boutique', src: luxeBoutique },
      { label: 'Catalogue', src: luxeBoutique1 },
      { label: 'Filtres', src: luxeBoutique2 },
      { label: 'Détails Produit', src: luxeDetails },
      { label: 'Panier', src: luxePanier },
      { label: 'Favoris', src: luxeFavoris },
      { label: 'Nouveautés', src: luxeNouveautes },
      { label: 'Promotions', src: luxePromotions },
      { label: 'Offres Promo', src: luxeDetailsPromotions },
      { label: 'Contact', src: luxeContact },
      { label: 'Auth (FR)', src: luxeAuthFr },
      { label: 'Auth (AR)', src: luxeAuthAr },
      { label: 'Dashboard Admin', src: luxeDashboard },
      { label: 'Statistiques', src: luxeDashboard1 },
      { label: 'Produits', src: luxeProduits },
      { label: 'Catalogue Admin', src: luxeProduits1 },
      { label: 'Ajout Produit', src: luxeNouveauProduit },
      { label: 'Catégories', src: luxeCategories },
      { label: 'Commandes', src: luxeCommandes },
      { label: 'Détails Commande', src: luxeDetailsCommandes },
      { label: 'Nouvelle Commande', src: luxeNouveauCommandes },
      { label: 'Codes Promo', src: luxeCodesPromo },
      { label: 'Bannières', src: luxeBannieres },
      { label: 'Clients', src: luxeClients },
      { label: 'Messages', src: luxeMessages },
      { label: 'Paramètres', src: luxeParametres },
    ],
    accent: 'teal',
  },
  {
    slug: 'comptaweb',
    caseNumber: '04',
    name: 'ComptaWeb',
    type: 'Application web de comptabilité & gestion financière',
    role: 'Développeur Full-Stack',
    description:
      "Application web de gestion comptable et financière permettant la saisie d'écritures, le suivi de la trésorerie et l'édition de bilans et rapports financiers.",
    longDescription:
      "Compta-Web est une solution dédiée à la digitalisation des opérations comptables. Elle offre la saisie et le classement des pièces comptables, la facturation avec exports PDF/Excel, le suivi des dépenses, la gestion des clients, ainsi que le scan intelligent de pièces justificatives (SmartComptaScan).",
    features: [
      'Tableau de bord financier analytique',
      'Gestion des clients (CRUD, détails & historique)',
      'Facturation complète avec exports PDF & Excel',
      'Gestion et suivi des dépenses par catégorie',
      'SmartComptaScan — scan et traitement de pièces comptables',
      'Gestion de profil administrateur & authentification sécurisée',
      'Interface responsive et sécurisée',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Salim-17-dev/ConmptaWeb.git',
    demo: null,
    images: [
      { label: 'Tableau de bord', src: comptaDashboard },
      { label: 'Clients', src: comptaClients },
      { label: 'Nouveau Client', src: comptaNouveauClient },
      { label: 'Détails Client', src: comptaDetailsClients },
      { label: 'Factures & Exports', src: comptaFacturesExports },
      { label: 'Nouvelle Facture', src: comptaNouvelleFacture },
      { label: 'Modifier Facture', src: comptaModifierFacture },
      { label: 'Dépenses', src: comptaDepenses },
      { label: 'Tableau Dépenses', src: comptaTableauDepenses },
      { label: 'Nouvelle Dépense', src: comptaNouvelleDepense },
      { label: 'Modifier Dépense', src: comptaModifierDepense },
      { label: 'SmartComptaScan', src: comptaScan },
      { label: 'Scan & OCR', src: comptaScan1 },
      { label: 'Profil Admin', src: comptaProfilAdmin },
      { label: 'Connexion', src: comptaConnexion },
      { label: 'Inscription', src: comptaInscription },
    ],
    accent: 'purple',
  },
  {
    slug: 'gestion-etudiants',
    caseNumber: '05',
    name: 'Gestion Étudiants',
    type: 'Application CRUD de gestion des étudiants',
    role: 'Développeur Web',
    description:
      "Application web de gestion des étudiants permettant d'ajouter, modifier, supprimer et afficher les étudiants. Inclut une recherche rapide et un système de pagination pour optimiser l'affichage des données.",
    longDescription:
      "Développée avec PHP natif et MySQL, cette application illustre la maîtrise des fondamentaux du développement web backend — opérations CRUD, recherche dynamique, pagination côté serveur et interface responsive Bootstrap.",
    features: [
      'CRUD complet (Ajouter, Modifier, Supprimer)',
      'Recherche rapide des étudiants',
      'Pagination des résultats',
      'Interface responsive Bootstrap',
    ],
    stack: ['PHP', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Salim-17-dev/gestion.etudiants.git',
    demo: null,
    images: [],
    accent: 'emerald',
  },
  {
    slug: 'todo-list',
    caseNumber: '06',
    name: 'Mini Todo List',
    type: 'Application de gestion de tâches — Frontend',
    role: 'Développeur Frontend',
    description:
      "Application To-Do List simple et intuitive développée dans le cadre de l'apprentissage du développement web frontend. Permet d'ajouter, supprimer et marquer des tâches comme terminées.",
    longDescription:
      "Projet d'initiation au frontend — manipulation du DOM, gestion des événements et persistance locale. Interface épurée, interactions fluides et code vanilla HTML/CSS/JS sans dépendances.",
    features: [
      'Ajout de tâches',
      'Suppression de tâches',
      'Marquage comme terminée',
      'Interface intuitive',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Salim-17-dev/mini_projet_todo.git',
    demo: null,
    images: [],
    accent: 'amber',
  },
];
