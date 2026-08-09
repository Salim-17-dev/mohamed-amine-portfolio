import { profile } from '../data/config.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-800 py-8">
      <div className="container-content flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-ink-600">
          © {year} {profile.name}. Tous droits réservés.
        </p>
        <p className="font-mono text-xs text-ink-600">Casablanca, Maroc</p>
      </div>
    </footer>
  );
}
