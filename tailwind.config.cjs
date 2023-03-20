/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'rose-secondary':'#E7A0AE',
      'orange':'#E5A579',
      'white':'#FFFFFF',
      'alba':'#D2A794',
      'red': '#FF0000',
      'green': '#008000',
    },
  },
  plugins: [
    '@tailwindcss/forms',
  ],
}