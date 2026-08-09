// ─────────────────────────────────────────────────────────────
// SKILLS — grouped by layer so the same data can power both the
// system diagram and the detailed skills grid.
// ─────────────────────────────────────────────────────────────

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    coordinate: 'L.01',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vite', 'Redux Toolkit', 'React Router', 'Axios'],
  },
  {
    id: 'backend',
    label: 'Backend',
    coordinate: 'L.02',
    items: ['PHP', 'Laravel', 'REST API', 'Laravel Sanctum'],
  },
  {
    id: 'database',
    label: 'Bases de données',
    coordinate: 'L.03',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'ui',
    label: 'UI / Styling',
    coordinate: 'L.04',
    items: ['Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    id: 'tools',
    label: 'Outils',
    coordinate: 'L.05',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
  },
];

export const competencies = [
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4', color: '#777BB4' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3', color: '#7952B3' },
  { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20', color: '#FF2D20' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
  { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB',
  },
];
