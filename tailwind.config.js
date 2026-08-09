/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1020',
          50: '#F8FAFC',
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',
          600: '#334155',
          700: '#1E293B',
          800: '#172033',
          900: '#111827',
          950: '#080D1A',
        },
        paper: '#F8FAFC',
        brass: {
          DEFAULT: '#E5E7EB',
          light: '#FFFFFF',
          dark: '#9CA3AF',
        },
        teal: {
          DEFAULT: '#9CA3AF',
          light: '#D1D5DB',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(148,163,184,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.055) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
        'grid-sm': '24px 24px',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
};
