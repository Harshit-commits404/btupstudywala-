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
        red: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        crimson: {
          bright: '#8b5cf6',
          deep: '#6d28d9',
          dark: '#5b21b6',
        },
        dark: {
          bg: '#060914',
          surface: '#0d1424',
          section: '#0d1424',
          card: '#111b2e',
          cardHover: '#17243d',
          elevated: '#111b2e',
          border: '#22304a',
          borderHover: '#8b5cf6',
          muted: '#94a3b8',
        },
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        success: '#34d399',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"STIX Two Text"', 'Cambria', 'Georgia', 'serif'],
        math: ['"STIX Two Text"', 'Cambria', '"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-glow': 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 65%)',
        'subtle-grid': 'linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
