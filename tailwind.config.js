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
        // Deep Navy / Midnight Blue scale (Primary dark background and surfaces)
        navy: {
          50: '#f0f5fa',
          100: '#e2ebf5',
          200: '#c5d8ec',
          300: '#99bcdd',
          400: '#649bc9',
          500: '#3f7eb2',
          600: '#2d6495',
          700: '#245179',
          800: '#1b3a57',
          850: '#12263d',
          900: '#0c1a2d',
          950: '#070f1c',
        },
        // Electric Cyan / Aqua (Secondary & Accent highlight)
        cyan: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // Warm Amber / Gold (Accent for highlights and Coming Soon states)
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: {
          bg: '#070f1c', // Deepest midnight navy
          surface: '#0c1a2d', // Midnight surface
          card: '#0f2037', // Card surface
          cardHover: '#142946', // Card hover state
          elevated: '#172f4f',
          border: 'rgba(56, 189, 248, 0.12)',
          borderHover: 'rgba(56, 189, 248, 0.35)',
          muted: '#8ca2bc',
        },
        // Brand mapped to Electric Cyan & Deep Navy
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8', // Electric cyan
          500: '#0ea5e9', // Core cyan
          600: '#0284c7', // Deep cyan
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"STIX Two Text"', 'Cambria', 'Georgia', 'serif'],
        math: ['"STIX Two Text"', 'Cambria', '"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-glow': 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, transparent 65%)',
        'subtle-grid': 'linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
