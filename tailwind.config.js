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
        // Red scale (Primary & Secondary accents: Deep Crimson to Bright Red)
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#E63946', // Bright controlled red
          700: '#C1121F', // Deep crimson red
          800: '#8B0000', // Deepest dark crimson
          900: '#7f1d1d',
          950: '#450a0a',
        },
        crimson: {
          bright: '#E63946',
          deep: '#C1121F',
          dark: '#8B0000',
        },
        // Dark & Layered Black surfaces
        dark: {
          bg: '#080808', // Main near-black background
          surface: '#0D0D0D', // Layer 1
          section: '#111111', // Layer 2
          card: '#171717', // Layer 3 (Cards)
          cardHover: '#1c1c1c',
          elevated: '#212121',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(230, 57, 70, 0.45)',
          muted: '#a3a3a3',
        },
        // Brand mapped directly to red/crimson
        brand: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#E63946',
          700: '#C1121F',
          800: '#8B0000',
          900: '#7f1d1d',
          950: '#450a0a',
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
        'tech-glow': 'radial-gradient(circle at 50% 0%, rgba(193, 18, 31, 0.18) 0%, transparent 65%)',
        'subtle-grid': 'linear-gradient(to right, rgba(230, 57, 70, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(230, 57, 70, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
