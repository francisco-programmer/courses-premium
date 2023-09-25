/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'rojo': '#D1000A',
      'moradovivo': '#7a15bc',
      'cian': '#0AF3C9'
    }},
  },
  plugins: [],
}

