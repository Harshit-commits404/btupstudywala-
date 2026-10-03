/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Semantic CSS-variable-backed tokens
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
        },
        card: {
          DEFAULT: 'var(--surface)',
          foreground: 'var(--text-primary)',
          elevated: 'var(--surface-elevated)',
        },
        popover: {
          DEFAULT: 'var(--surface-elevated)',
          foreground: 'var(--text-primary)',
        },
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        input: 'var(--input-border)',
        ring: 'var(--accent)',
        
        // Semantic text tokens
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',

        // Authentic BTEUP Red & Crimson Identity
        red: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        crimson: {
          bright: '#ef4444',
          deep: '#dc2626',
          dark: '#b91c1c',
        },
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        primary: {
          DEFAULT: 'var(--accent)',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: 'var(--bg-secondary)',
          foreground: 'var(--text-secondary)',
        },
        muted: {
          DEFAULT: 'var(--bg-secondary)',
          foreground: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          soft: 'var(--accent-soft)',
          foreground: 'var(--accent)',
          brand: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        success: '#10b981',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"STIX Two Text"', 'Cambria', 'Georgia', 'serif'],
        math: ['"STIX Two Text"', 'Cambria', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        'card-light': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card-hover-light': '0 12px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(220, 38, 38, 0.1)',
        'card-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover-dark': '0 14px 35px -8px rgba(0, 0, 0, 0.7), 0 0 20px -4px rgba(239, 68, 68, 0.25)',
        'glow-red': '0 0 25px -4px rgba(239, 68, 68, 0.35)',
      },
    },
  },
  plugins: [],
}
