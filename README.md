# Mohamed Amine Salim — Portfolio

Portfolio personnel de développeur web full-stack. Site 100% statique (React + Vite +
Tailwind CSS + Framer Motion), sans backend, sans base de données, déployable gratuitement.

## Direction créative

- **Identité :** "dossier technique / blueprint" — fond encre profonde, grille technique en
  filigrane, accents laiton (`#D8A94B`) et sarcelle (`#3FB8A6`), typographie Space Grotesk
  (display) + Inter (texte) + IBM Plex Mono (labels techniques).
- **Élément signature :** le diagramme "La stack, couche par couche" (`StackDiagram.jsx`) —
  visualise littéralement le parcours d'une requête à travers les couches Frontend → Backend →
  Base de données → UI → Outils, en écho direct au métier de développeur full-stack.
- **Projets :** présentés comme des "dossiers de cas" (case files) dépliables, avec fiche
  technique complète plutôt que de simples cartes identiques.

## Stack technique du site

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (animations, apparitions au scroll)
- lucide-react (icônes)

## Structure du projet

```
src/
  data/
    config.js      → infos personnelles, liens, CV, formation, expérience
    projects.js     → contenu des projets (ResidenSpace, Luxe by Salim)
    skills.js       → compétences groupées par couche
  components/
    Navbar, Hero, About, StackDiagram, Projects, ProjectCard,
    Services, Experience, Contact, Footer
public/
  favicon.svg
  projects/        → déposer les captures d'écran des projets ici
  cv/               → déposer le CV (PDF) ici
```

Toute l'information modifiable (liens, textes, statut des projets) est centralisée dans
`src/data/` — aucun composant ne contient de texte codé en dur qui devrait être répété ailleurs.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvre le site sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Génère le dossier `dist/` prêt à être déployé. Vérifier avant mise en ligne avec :

```bash
npm run preview
```

## Déploiement sur Vercel (gratuit)

1. Pousser ce dossier sur un dépôt GitHub (`git init`, `git add .`, `git commit`, puis créer
   un repo sur GitHub et `git push`).
2. Aller sur [vercel.com](https://vercel.com), se connecter avec GitHub.
3. "Add New… → Project", sélectionner le dépôt.
4. Vercel détecte automatiquement Vite : Build Command `npm run build`, Output Directory `dist`.
5. Cliquer sur "Deploy". Le site est en ligne sur une URL `*.vercel.app` gratuite.

## Connecter le domaine `mohamedaminesalim.com`

1. Sur Vercel : Project → Settings → Domains → ajouter `mohamedaminesalim.com` (et
   `www.mohamedaminesalim.com` si souhaité, avec redirection automatique).
2. Chez le registrar du domaine, mettre à jour les enregistrements DNS avec les valeurs que
   Vercel affiche (généralement un enregistrement `A` vers `76.76.21.21` pour le domaine racine,
   et un `CNAME` vers `cname.vercel-dns.com` pour `www`).
3. La propagation DNS et le certificat HTTPS (automatique, gratuit) prennent généralement de
   quelques minutes à 24h.

Seul le nom de domaine est payant (renouvellement annuel chez le registrar) — l'hébergement
Vercel reste gratuit pour ce type de site statique.

## Compléter le contenu plus tard

Tout est centralisé pour que ces ajouts soient rapides, sans toucher au design :

| Élément | Où le modifier |
|---|---|
| Lien GitHub / démo de ResidenSpace | `src/data/projects.js` → `github` / `demo` |
| Lien GitHub / démo de Luxe by Salim | `src/data/projects.js` → `github` / `demo` |
| Captures d'écran des projets | déposer l'image dans `public/projects/`, puis renseigner `image: '/projects/mon-fichier.jpg'` dans `src/data/projects.js` |
| Période et missions du stage SPS Technologies | `src/data/config.js` → `experience[0].period` et `.missions` (tableau de chaînes) |
| CV (PDF) | déposer le fichier dans `public/cv/`, puis renseigner `cv.url` dans `src/data/config.js` (ex. `/cv/mohamed-amine-salim-cv.pdf`) |

Tant qu'une valeur reste `null`, l'interface l'indique proprement ("à venir",
"à compléter") au lieu d'afficher une information inventée.

## Formulaire de contact

Le formulaire ouvre le client mail de l'utilisateur avec le message pré-rempli, adressé à
`contact@mohamedaminesalim.com` — aucune API ni service payant nécessaire. Pour une réception
plus robuste, il est possible de brancher gratuitement un service comme Formspree ou Web3Forms
en remplaçant la fonction `handleSubmit` dans `src/components/Contact.jsx`.
