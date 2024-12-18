import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'purpleX':'#27006e',
      },
      keyframes: {
        hover:{
          '0%':{transform:'translateY(0)'},
          '100%':{transform:'translateY(-5px)'}
        }
        ,
        breathing: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        breathing: 'breathing 2s ease-in-out infinite',
        hover: 'hover 0.5s ease forwards '
      }
    },
  },
  plugins: [],
}