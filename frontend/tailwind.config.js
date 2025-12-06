/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          'deep': '#4a2350',
          'main': '#5f2f66',
          'light': '#8b6c8e',
          'dark': '#2a1330',
          'muted': '#6b5870',
        },
        'gold': {
          'DEFAULT': '#d4a84a',
          'deep': '#b7842c',
          'light': '#e8c575',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4a84a 0%, #b7842c 100%)',
        'gradient-purple': 'linear-gradient(135deg, #4a2350 0%, #2a1330 100%)',
        'hero-gradient': 'radial-gradient(circle at 40% 20%, #e7d9e4 0%, rgba(255,255,255,0.02) 10%), linear-gradient(180deg, rgba(90,48,86,0.06) 0%, rgba(72,34,74,0.12) 100%), linear-gradient(180deg, #f3eaf1 0%, #d9c6d8 25%, #a884a5 100%)',
      },
    },
  },
  plugins: [],
}