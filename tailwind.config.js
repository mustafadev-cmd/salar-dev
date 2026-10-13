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
        dark: {
          950: '#07080c',
          900: '#0c0e14',
          850: '#11141c',
          800: '#171b26',
          700: '#23293a',
          600: '#333b52',
        },
        accent: {
          violet: '#7c3aed',
          electric: '#6366f1',
          cobalt: '#3b82f6',
          glow: 'rgba(99, 102, 241, 0.25)',
          amber: '#f59e0b',
        },
        surface: {
          card: 'rgba(17, 20, 28, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-violet': '0 0 50px -10px rgba(124, 58, 237, 0.35)',
        'glow-cobalt': '0 0 50px -10px rgba(59, 130, 246, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
