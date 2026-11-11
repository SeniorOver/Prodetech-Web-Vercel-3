/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05080D',
        night: '#080D15',
        panel: '#0C131D',
        steel: '#121B27',
        flame: {
          DEFAULT: '#FF6B2C',
          300: '#FFA57C',
          400: '#FF8A57',
          500: '#FF6B2C',
          600: '#E8541A',
          700: '#C44212',
        },
        mist: '#F3F1EC',
        muted: '#97A3B5',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.24em',
      },
      // Permite modificadores de opacidad como /12, /15, /35, /98, etc.
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [i, String(i / 100)])),
      maxWidth: {
        shell: '1280px',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(255, 107, 44, 0.55)',
        card: '0 24px 60px -30px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'radial-flame': 'radial-gradient(circle at center, rgba(255,107,44,0.22), transparent 68%)',
      },
    },
  },
  plugins: [],
}
