import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import profilePhoto from './image/PHOTO.jpeg';
import profilePhoto_1 from './image/PHOTO_1.jpeg';

const NAV_ITEMS = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'Profil' },
  { href: '#stack', label: 'Skills' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#certs', label: 'Certs' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#top');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const section = [...NAV_ITEMS]
        .reverse()
        .find(({ href }) => {
          const element = document.querySelector(href);
          return element && element.getBoundingClientRect().top <= window.innerHeight * 0.38;
        });

      setActiveHref(section?.href ?? '#top');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur border-b border-ink-800' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-paper">
          <img
            src={profilePhoto_1}
            alt="Mohamed Amine Salim"
            className="h-9 w-9 rounded-full border border-ink-500 object-cover"
          />
          <span className="hidden sm:inline">Mohamed Amine Salim</span>
          <span className="text-brass">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`relative py-6 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:text-brass ${
                  activeHref === item.href ? 'text-brass after:absolute after:bottom-3 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-brass' : 'text-ink-300'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>



        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="md:hidden text-ink-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur">
          <ul className="container-content flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-mono text-sm uppercase tracking-wide hover:text-brass ${
                    activeHref === item.href ? 'text-brass' : 'text-ink-200'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
