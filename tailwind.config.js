/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D4AF37', // Gold
          DEFAULT: '#B8860B', // Dark Gold
          dark: '#996515', // Golden Brown
        },
        secondary: {
          light: '#1A1A1A', // Light Black
          DEFAULT: '#0A0A0A', // Pure Black
          dark: '#000000', // Deep Black
        },
        accent: '#F5F5F5', // Off-White
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #B8860B 50%, #996515 100%)',
        'dark-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
      }
    },
  },
  plugins: [],
}
