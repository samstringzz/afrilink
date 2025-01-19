/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#22C55E',
          600: '#16A34A',
          800: '#166534',
        },
        amber: {
          500: '#F59E0B',
          600: '#D97706',
          800: '#92400E',
        }
      }
    },
  },
  plugins: [],
}